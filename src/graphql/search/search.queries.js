import { GraphQLString } from 'graphql';

import { SearchType } from './search.types';

import { MonsterModel } from '../monsters/monsters.model';
import { SpellModel } from '../spells/spells.model';
import { FeatModel } from '../feats/feats.model';

export const searchAll = {
  type: SearchType,
  args: { query: { type: GraphQLString } },
  resolve: async (parent, req) => {
    const query = req.params === undefined ? req.query : req.params.query;
    const searchResults = {
      monsters: await MonsterModel.find({ $text: { $search: query } }, null, {
        sort: {
          name: 1,
        }
      }),
      spells: await SpellModel.find({ $text: { $search: query } }, null, {
        sort: {
          name: 1,
        }
      }),
      feats: await FeatModel.find({ $text: { $search: query } }, null, {
        sort: {
          name: 1,
        }
      }),
    };
    if (!searchResults) {
      throw new Error('error while fetching data');
    }
    return searchResults;
  }
};

export default {
  searchAll,
}