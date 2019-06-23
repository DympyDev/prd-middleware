import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';

import { SpellType } from './spells.types';
import { SpellModel } from './spells.model';

export const allSpells = {
  type: new GraphQLList(SpellType),
  resolve: async () => {
    const spells = await SpellModel.find({}, null, {
      sort: {
        name: 1,
      }
    });
    if (!spells) {
      throw new Error('error while fetching data');
    }
    return spells;
  }
};

export const findSpellById = {
  type: SpellType,
  args: { id: { type: GraphQLInt } },
  resolve: async (parent, req) => {
    const id = req.params === undefined ? req.id : req.params.id;
    const spell = await SpellModel.findOne({ id });
    if (!spell) {
      throw new Error('error while fetching data');
    }
    return spell;
  }
};

export const findSpellByName = {
  type: SpellType,
  args: { name: { type: GraphQLString } },
  resolve: async (parent, req) => {
    const name = req.params === undefined ? req.name : req.params.name;
    const spell = await SpellModel.findOne({ name: { $regex : new RegExp(name, "i") } });
    if (!spell) {
      throw new Error('error while fetching data');
    }
    return spell;
  }
};

export default {
  allSpells,
  findSpellById,
  findSpellByName,
}