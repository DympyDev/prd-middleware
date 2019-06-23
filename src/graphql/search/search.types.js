import { GraphQLObjectType, GraphQLList } from 'graphql';

import { MonsterType } from '../monsters/monsters.types';
import { SpellType } from '../spells/spells.types';
import { FeatType } from '../feats/feats.types';

export const SearchType = new GraphQLObjectType({
  name: 'search',
  fields: () => {
    return {
      monsters: {
        type: new GraphQLList(MonsterType),
      },
      spells: {
        type: new GraphQLList(SpellType),
      },
      feats: {
        type: new GraphQLList(FeatType),
      },
    }
  }
});