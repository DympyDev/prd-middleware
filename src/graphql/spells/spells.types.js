import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLBoolean, GraphQLInt } from 'graphql';

export const SpellType = new GraphQLObjectType({
  name: 'spell',
  fields: () => {
    return {
      name: {
        type: new GraphQLNonNull(GraphQLString)
      },
      school: {
        type: GraphQLString
      },
      subschool: {
        type: GraphQLString
      },
      descriptor: {
        type: GraphQLString
      },
      components: {
        type: GraphQLString
      },
      range: {
        type: GraphQLString
      },
      effect: {
        type: GraphQLString
      },
      duration: {
        type: GraphQLString
      },
      dismissible: {
        type: GraphQLBoolean
      },
      shapeable: {
        type: GraphQLBoolean
      },
      description: {
        type: GraphQLString
      },
      source: {
        type: GraphQLString
      },
      verbal: {
        type: GraphQLBoolean
      },
      somatic: {
        type: GraphQLBoolean
      },
      material: {
        type: GraphQLBoolean
      },
      focus: {
        type: GraphQLBoolean
      },
      sor: {
        type: GraphQLInt
      },
      wiz: {
        type: GraphQLInt
      },
      cleric: {
        type: GraphQLInt
      },
      druid: {
        type: GraphQLInt
      },
      ranger: {
        type: GraphQLInt
      },
      bard: {
        type: GraphQLInt
      },
      paladin: {
        type: GraphQLInt
      },
      alchemist: {
        type: GraphQLInt
      },
      summoner: {
        type: GraphQLInt
      },
      witch: {
        type: GraphQLInt
      },
      inquisitor: {
        type: GraphQLInt
      },
      oracle: {
        type: GraphQLInt
      },
      antipaladin: {
        type: GraphQLInt
      },
      magus: {
        type: GraphQLInt
      },
      adept: {
        type: GraphQLInt
      },
      bloodrager: {
        type: GraphQLInt
      },
      shaman: {
        type: GraphQLInt
      },
      psychic: {
        type: GraphQLInt
      },
      medium: {
        type: GraphQLInt
      },
      mesmerist: {
        type: GraphQLInt
      },
      occultist: {
        type: GraphQLInt
      },
      spiritualist: {
        type: GraphQLInt
      },
      skald: {
        type: GraphQLInt
      },
      investigator: {
        type: GraphQLInt
      },
      hunter: {
        type: GraphQLInt
      },
      summonerUnchained: {
        type: GraphQLInt
      },
      acid: {
        type: GraphQLBoolean
      },
      air: {
        type: GraphQLBoolean
      },
      chaotic: {
        type: GraphQLBoolean
      },
      cold: {
        type: GraphQLBoolean
      },
      curse: {
        type: GraphQLBoolean
      },
      darkness: {
        type: GraphQLBoolean
      },
      death: {
        type: GraphQLBoolean
      },
      disease: {
        type: GraphQLBoolean
      },
      earth: {
        type: GraphQLBoolean
      },
      electricity: {
        type: GraphQLBoolean
      },
      emotion: {
        type: GraphQLBoolean
      },
      evil: {
        type: GraphQLBoolean
      },
      fear: {
        type: GraphQLBoolean
      },
      fire: {
        type: GraphQLBoolean
      },
      force: {
        type: GraphQLBoolean
      },
      good: {
        type: GraphQLBoolean
      },
      lawful: {
        type: GraphQLBoolean
      },
      light: {
        type: GraphQLBoolean
      },
      pain: {
        type: GraphQLBoolean
      },
      poison: {
        type: GraphQLBoolean
      },
      shadow: {
        type: GraphQLBoolean
      },
      sonic: {
        type: GraphQLBoolean
      },
      water: {
        type: GraphQLBoolean
      },
      mythic: {
        type: GraphQLBoolean
      },
      ruse: {
        type: GraphQLBoolean
      },
      draconic: {
        type: GraphQLBoolean
      },
      meditative: {
        type: GraphQLBoolean
      },
      spellLevel: {
        type: GraphQLString
      },
      castingTime: {
        type: GraphQLString
      },
      savingThrow: {
        type: GraphQLString
      },
      spellResistence: {
        type: GraphQLString
      },
      shortDescription: {
        type: GraphQLString
      },
      costlyComponents: {
        type: GraphQLBoolean
      },
      divineFocus: {
        type: GraphQLBoolean
      },
      spellLikeAbilityLevel: {
        type: GraphQLInt
      },
      languageDependent: {
        type: GraphQLBoolean
      },
      mindAffecting: {
        type: GraphQLBoolean
      },
      materialCosts: {
        type: GraphQLInt
      },
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
    }
  }
});