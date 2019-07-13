import { makeExecutableSchema } from "graphql-tools";

import { MonsterType } from "./types/monster";
import { SpellType } from "./types/spell";
import { FeatType } from "./types/feat";

import { MonsterResolver } from "./resolvers/monster";
import { SpellResolver } from "./resolvers/spell";
import { FeatResolver } from "./resolvers/feat";

const Query = `
  type Query {
    monsters: [Monster]
    monsterById(id: Int): Monster
    monstersByQuery(query: String): [Monster]
    spells: [Spell]
    spellById(id: Int): Spell
    spellsByQuery(query: String): [Spell]
    feats: [Feat]
    featById(id: Int): Feat
    featsByQuery(query: String): [Feat]
  }
`;

export const generateSchemaForData = (monsters = [], spells = [], feats = []) => makeExecutableSchema({
  typeDefs: [Query, MonsterType, SpellType, FeatType],
  resolvers: {
    Query: {
      ...MonsterResolver(monsters),
      ...SpellResolver(spells),
      ...FeatResolver(feats),
    }
  },
});