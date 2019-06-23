import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import MonsterQueries from './monsters/monsters.queries';
import FeatQueries from './feats/feats.queries';
import SpellQueries from './spells/spells.queries';
import SearchQueries from './search/search.queries';

export const PraSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      ...MonsterQueries,
      ...FeatQueries,
      ...SpellQueries,
      ...SearchQueries,
    }
  })
});
