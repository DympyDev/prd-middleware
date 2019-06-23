import mongoose, { Schema } from 'mongoose';

const spellSchema = new Schema({
  name: {
    type: String
  },
  school: {
    type: String
  },
  subschool: {
    type: String
  },
  descriptor: {
    type: String
  },
  components: {
    type: String
  },
  range: {
    type: String
  },
  effect: {
    type: String
  },
  duration: {
    type: String
  },
  dismissible: {
    type: Boolean
  },
  shapeable: {
    type: Boolean
  },
  description: {
    type: String
  },
  source: {
    type: String
  },
  verbal: {
    type: Boolean
  },
  somatic: {
    type: Boolean
  },
  material: {
    type: Boolean
  },
  focus: {
    type: Boolean
  },
  sor: {
    type: Schema.Types.Mixed
  },
  wiz: {
    type: Schema.Types.Mixed
  },
  cleric: {
    type: Schema.Types.Mixed
  },
  druid: {
    type: Schema.Types.Mixed
  },
  ranger: {
    type: Schema.Types.Mixed
  },
  bard: {
    type: Schema.Types.Mixed
  },
  paladin: {
    type: Schema.Types.Mixed
  },
  alchemist: {
    type: Schema.Types.Mixed
  },
  summoner: {
    type: Schema.Types.Mixed
  },
  witch: {
    type: Schema.Types.Mixed
  },
  inquisitor: {
    type: Schema.Types.Mixed
  },
  oracle: {
    type: Schema.Types.Mixed
  },
  antipaladin: {
    type: Schema.Types.Mixed
  },
  magus: {
    type: Schema.Types.Mixed
  },
  adept: {
    type: Schema.Types.Mixed
  },
  bloodrager: {
    type: Schema.Types.Mixed
  },
  shaman: {
    type: Schema.Types.Mixed
  },
  psychic: {
    type: Schema.Types.Mixed
  },
  medium: {
    type: Schema.Types.Mixed
  },
  mesmerist: {
    type: Schema.Types.Mixed
  },
  occultist: {
    type: Schema.Types.Mixed
  },
  spiritualist: {
    type: Schema.Types.Mixed
  },
  skald: {
    type: Schema.Types.Mixed
  },
  investigator: {
    type: Schema.Types.Mixed
  },
  hunter: {
    type: Schema.Types.Mixed
  },
  summonerUnchained: {
    type: Schema.Types.Mixed
  },
  acid: {
    type: Boolean
  },
  air: {
    type: Boolean
  },
  chaotic: {
    type: Boolean
  },
  cold: {
    type: Boolean
  },
  curse: {
    type: Boolean
  },
  darkness: {
    type: Boolean
  },
  death: {
    type: Boolean
  },
  disease: {
    type: Boolean
  },
  earth: {
    type: Boolean
  },
  electricity: {
    type: Boolean
  },
  emotion: {
    type: Boolean
  },
  evil: {
    type: Boolean
  },
  fear: {
    type: Boolean
  },
  fire: {
    type: Boolean
  },
  force: {
    type: Boolean
  },
  good: {
    type: Boolean
  },
  lawful: {
    type: Boolean
  },
  light: {
    type: Boolean
  },
  pain: {
    type: Boolean
  },
  poison: {
    type: Boolean
  },
  shadow: {
    type: Boolean
  },
  sonic: {
    type: Boolean
  },
  water: {
    type: Boolean
  },
  mythic: {
    type: Boolean
  },
  ruse: {
    type: Boolean
  },
  draconic: {
    type: Boolean
  },
  meditative: {
    type: Boolean
  },
  spellLevel: {
    type: String
  },
  castingTime: {
    type: String
  },
  savingThrow: {
    type: String
  },
  spellResistence: {
    type: String
  },
  shortDescription: {
    type: String
  },
  costlyComponents: {
    type: Boolean
  },
  divineFocus: {
    type: Boolean
  },
  spellLikeAbilityLevel: {
    type: Schema.Types.Mixed
  },
  languageDependent: {
    type: Boolean
  },
  mindAffecting: {
    type: Boolean
  },
  materialCosts: {
    type: Schema.Types.Mixed
  },
  id: {
    type: Number,
    index: true,
  },
});

spellSchema.index({ name: 'text' });

export const SpellModel = mongoose.model('spell', spellSchema);