import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLInt, GraphQLFloat } from 'graphql';

export const MonsterType = new GraphQLObjectType({
  name: 'monster',
  fields: () => {
    return {
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      cr: {
        type: GraphQLFloat
      },
      xp: {
        type: GraphQLInt
      },
      race: {
        type: GraphQLString
      },
      class: {
        type: GraphQLString
      },
      alignment: {
        type: GraphQLString
      },
      size: {
        type: GraphQLString
      },
      type: {
        type: GraphQLString
      },
      subType: {
        type: GraphQLString
      },
      initiative: {
        type: GraphQLInt
      },
      senses: {
        type: GraphQLString
      },
      ac: {
        type: GraphQLString
      },
      hp: {
        type: GraphQLInt
      },
      hd: {
        type: GraphQLString
      },
      saves: {
        type: GraphQLString
      },
      fort: {
        type: GraphQLString
      },
      ref: {
        type: GraphQLString
      },
      will: {
        type: GraphQLString
      },
      resist: {
        type: GraphQLString
      },
      speed: {
        type: GraphQLString
      },
      melee: {
        type: GraphQLString
      },
      ranged: {
        type: GraphQLString
      },
      space: {
        type: GraphQLString
      },
      reach: {
        type: GraphQLString
      },
      specialAttacks: {
        type: GraphQLString
      },
      spellLikeAbilities: {
        type: GraphQLString
      },
      spellsPrepared: {
        type: GraphQLString
      },
      spellDomains: {
        type: GraphQLString
      },
      abilityScores: {
        type: GraphQLString
      },
      baseAtk: {
        type: GraphQLInt
      },
      cmb: {
        type: GraphQLString
      },
      cmd: {
        type: GraphQLString
      },
      feats: {
        type: GraphQLString
      },
      skills: {
        type: GraphQLString
      },
      racialMods: {
        type: GraphQLString
      },
      languages: {
        type: GraphQLString
      },
      environment: {
        type: GraphQLString
      },
      treasure: {
        type: GraphQLString
      },
      descriptionVisual: {
        type: GraphQLString
      },
      source: {
        type: GraphQLString
      },
      description: {
        type: GraphQLString
      },
      fly: {
        type: GraphQLInt
      },
      climb: {
        type: GraphQLInt
      },
      burrow: {
        type: GraphQLInt
      },
      swim: {
        type: GraphQLInt
      },
      land: {
        type: GraphQLInt
      },
      ageCategory: {
        type: GraphQLString
      },
      acMods: {
        type: GraphQLString
      },
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
    }
  }
});