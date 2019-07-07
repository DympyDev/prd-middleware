import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';

import { PraSchema } from './graphql/schema';

import { MonsterModel } from './graphql/monsters/monsters.model';
import { SpellModel } from './graphql/spells/spells.model';
import { FeatModel } from './graphql/feats/feats.model';

import Utils from './shared/utils.js';
import ProcessMonsters from './parsers/monsters.js';
import ProcessSpells from './parsers/spells.js';
import ProcessFeats from './parsers/feats.js';

const pkgJson = require('../package.json');

const INPUT_FOLDER = `${__dirname}/../input`;

const MONSTERS_ODS_FILE = `${INPUT_FOLDER}/monsters.ods`;
const SPELLS_ODS_FILE = `${INPUT_FOLDER}/spells.ods`;
const FEATS_ODS_FILE = `${INPUT_FOLDER}/feats.ods`;

const app = express();

const whitelist = pkgJson.prd_options.cors_whitelist;
const corsOptions = {
  origin: (origin, callback) => {
    let callbackArgs = [new Error('Not allowed by CORS')]
    if (whitelist.indexOf(origin) !== -1) {
      callbackArgs = [null, true]
    }
    callback(...callbackArgs)
  }
}

app.use(cors(corsOptions));

function connectToMongoDb() {
  mongoose.connect('mongodb://mongo/pra', {
    useNewUrlParser: true,
  });
}

async function setupMonsters() {
  await MonsterModel.deleteMany({});
  const processedMonsters = ProcessMonsters.parse(Utils.readJsonFromFile(MONSTERS_ODS_FILE));
  try {
    await MonsterModel.insertMany(processedMonsters);
    console.log('Imported monsters!');
  } catch (e) {
    console.log(e);
  }
}

async function setupSpells() {
  await SpellModel.deleteMany({});
  const processedSpells = ProcessSpells.parse(Utils.readJsonFromFile(SPELLS_ODS_FILE));
  try {
    await SpellModel.insertMany(processedSpells);
    console.log('Imported spells!');
  } catch (e) {
    console.log(e);
  }
}

async function setupFeats() {
  await FeatModel.deleteMany({});
  const processedFeats = ProcessFeats.parse(Utils.readJsonFromFile(FEATS_ODS_FILE));
  try {
    await FeatModel.insertMany(processedFeats);
    console.log('Imported feats!');
  } catch (e) {
    console.log(e);
  }
}

function setupMongoDb() {
  console.log('Remove all, and add new stuff!');
  setupMonsters();
  setupSpells();
  setupFeats();
}

const db = mongoose.connection;
db.on('error', err => {
  console.error('connection error:', err);
  console.info('Retrying connection in 5 seconds...')
  setTimeout(() => {
    connectToMongoDb();
  }, 5000)
});
db.once('open', () => {
  console.log(`Connected through Mongoose!`);
  setupMongoDb();
});

app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'), () => {
  console.log("Node app is running at localhost:" + app.get('port'))
});

app.use('/graphql', graphqlHTTP({
  schema: PraSchema,
  rootValue: global,
  graphiql: true
}));

app.get('/', (req, res) => {
  res.send("hello world ! ")
});

connectToMongoDb();