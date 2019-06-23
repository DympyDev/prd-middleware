import mongoose, { Schema } from 'mongoose';

const monsterSchema = new Schema({
  name: {
    type: String
  },
  cr: {
    type: Number
  },
  xp: {
    type: Number
  },
  race: {
    type: String
  },
  class: {
    type: String
  },
  alignment: {
    type: String
  },
  size: {
    type: String
  },
  type: {
    type: String
  },
  subType: {
    type: String
  },
  initiative: {
    type: String
  },
  senses: {
    type: String
  },
  ac: {
    type: String
  },
  hp: {
    type: Number
  },
  hd: {
    type: String
  },
  saves: {
    type: String
  },
  fort: {
    type: String
  },
  ref: {
    type: String
  },
  will: {
    type: String
  },
  resist: {
    type: String
  },
  speed: {
    type: String
  },
  melee: {
    type: String
  },
  ranged: {
    type: String
  },
  space: {
    type: String
  },
  reach: {
    type: String
  },
  specialAttacks: {
    type: String
  },
  spellLikeAbilities: {
    type: String
  },
  spellsPrepared: {
    type: String
  },
  spellDomains: {
    type: String
  },
  abilityScores: {
    type: String
  },
  baseAtk: {
    type: Number
  },
  cmb: {
    type: String
  },
  cmd: {
    type: String
  },
  feats: {
    type: String
  },
  skills: {
    type: String
  },
  racialMods: {
    type: String
  },
  languages: {
    type: String
  },
  environment: {
    type: String
  },
  treasure: {
    type: String
  },
  descriptionVisual: {
    type: String
  },
  source: {
    type: String
  },
  description: {
    type: String
  },
  fly: {
    type: Number
  },
  climb: {
    type: Number
  },
  burrow: {
    type: Number
  },
  swim: {
    type: Number
  },
  land: {
    type: Number
  },
  ageCategory: {
    type: String
  },
  acMods: {
    type: String
  },
  id: {
    type: Number,
    index: true,
  },
});

monsterSchema.index({ name: 'text' });

export const MonsterModel = mongoose.model('monster', monsterSchema);