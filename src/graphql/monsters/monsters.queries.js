import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';

import { MonsterType } from './monsters.types';
import { MonsterModel } from './monsters.model';

export const allMonsters = {
  type: new GraphQLList(MonsterType),
  resolve: async () => {
    const monsters = await MonsterModel.find({}, null, {
      sort: {
        name: 1,
      }
    });
    if (!monsters) {
      throw new Error('error while fetching data');
    }
    return monsters;
  }
};

export const findMonsterById = {
  type: MonsterType,
  args: { id: { type: GraphQLInt } },
  resolve: async (parent, req) => {
    const id = req.params === undefined ? req.id : req.params.id;
    const monster = await MonsterModel.findOne({ id });
    if (!monster) {
      throw new Error('error while fetching data');
    }
    return monster;
  }
};

export const findMonsterByName = {
  type: MonsterType,
  args: { name: { type: GraphQLString } },
  resolve: async (parent, req) => {
    const name = req.params === undefined ? req.name : req.params.name;
    const monster = await MonsterModel.findOne({ name });
    if (!monster) {
      throw new Error('error while fetching data');
    }
    return monster;
  }
};

export default {
  allMonsters,
  findMonsterById,
  findMonsterByName,
}