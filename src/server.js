import { ApolloServer } from 'apollo-server';

import Utils from './shared/utils.js';
import ProcessMonsters from './parsers/monsters.js';
import ProcessSpells from './parsers/spells.js';
import ProcessFeats from './parsers/feats.js';
import { generateSchemaForData } from './graphql/schema.js';

const {prd_options} = require('../package.json');

const INPUT_FOLDER = `${__dirname}/../input`;

const MONSTERS_ODS_FILE = `${INPUT_FOLDER}/monsters.ods`;
const SPELLS_ODS_FILE = `${INPUT_FOLDER}/spells.ods`;
const FEATS_ODS_FILE = `${INPUT_FOLDER}/feats.ods`;

let monsters, spells, feats;

function verboseLog() {
  if (prd_options.verbose) {
    console.log(...arguments)
  }
}

function setupServerData() {
  console.log('Preparing the data...');
  monsters = ProcessMonsters.parse(Utils.readJsonFromFile(MONSTERS_ODS_FILE));
  spells = ProcessSpells.parse(Utils.readJsonFromFile(SPELLS_ODS_FILE));
  feats = ProcessFeats.parse(Utils.readJsonFromFile(FEATS_ODS_FILE));
  console.log('Data prepared!\n');
  console.log(`There are:\n - 💀 ${monsters.length} monsters\n - ✨ ${spells.length} spells\n - 💪 ${feats.length} feats\n Available for queries!\n\n`);
}

function startServer() {
  const whitelist = prd_options.cors_whitelist;
  const corsOptions = {
    origin: (origin, callback) => {
      verboseLog(`Access attempt from "${origin}"`);
      verboseLog(`Checking against:`, whitelist);
      let callbackArgs = [new Error('Not allowed by CORS')]
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callbackArgs = [null, true]
      }
      callback(...callbackArgs)
    }
  }

  const server = new ApolloServer({
    schema: generateSchemaForData(monsters, spells, feats),
    cors: corsOptions,
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}, adding to cors whitelist`);
    whitelist.push(url.substr(0, url.length - 1));
  });
}

function startAndSetupServer() {
  setupServerData();
  startServer();
}

startAndSetupServer();