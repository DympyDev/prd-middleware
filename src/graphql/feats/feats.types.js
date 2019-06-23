import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLBoolean } from 'graphql';

export const FeatType = new GraphQLObjectType({
  name: 'feat',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      name: {
        type: new GraphQLNonNull(GraphQLString),
      },
      type: {
        type: GraphQLString,
      },
      description: {
        type: GraphQLString,
      },
      benefit: {
        type: GraphQLString,
      },
      source: {
        type: GraphQLString,
      },
      teamwork: {
        type: GraphQLBoolean,
      },
      critical: {
        type: GraphQLBoolean,
      },
      grit: {
        type: GraphQLBoolean,
      },
      style: {
        type: GraphQLBoolean,
      },
      performance: {
        type: GraphQLBoolean,
      },
      racial: {
        type: GraphQLBoolean,
      },
      multiples: {
        type: GraphQLBoolean,
      },
      panache: {
        type: GraphQLBoolean,
      },
      betrayal: {
        type: GraphQLBoolean,
      },
      targeting: {
        type: GraphQLBoolean,
      },
      esoteric: {
        type: GraphQLBoolean,
      },
      stare: {
        type: GraphQLBoolean,
      },
      trick: {
        type: GraphQLBoolean,
      },
      companionFamiliar: {
        type: GraphQLBoolean,
      },
      weaponMastery: {
        type: GraphQLBoolean,
      },
      itemMastery: {
        type: GraphQLBoolean,
      },
      armorMastery: {
        type: GraphQLBoolean,
      },
      shieldMastery: {
        type: GraphQLBoolean,
      },
      bloodHex: {
        type: GraphQLBoolean,
      },
    }
  }
});