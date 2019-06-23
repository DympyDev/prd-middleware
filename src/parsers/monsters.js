export default class ProcessMonsters {
  static parse(jsonData) {
    return jsonData.map(monster => ({
      name: monster.Name,
      cr: parseFloat(monster.CR === '-' ? '0' : (monster.CR === '1/2' ? '0.5' : monster.CR)),
      xp: +monster.XP,
      race: monster.Race,
      class: monster.Class,
      alignment: monster.Alignment,
      size: monster.Size,
      type: monster.Type,
      subType: monster.SubType,
      initiative: monster.Init,
      senses: monster.Senses,
      ac: monster.AC,
      hp: +monster.HP,
      hd: monster.HD,
      saves: monster.Saves,
      fort: monster.Fort,
      ref: monster.Ref,
      will: monster.Will,
      resist: monster.Resist,
      speed: monster.Speed,
      melee: monster.Melee,
      ranged: monster.Range,
      space: monster.Space,
      reach: monster.Reach,
      specialAttacks: monster.SpecialAttacks,
      spellLikeAbilities: monster.SpellLikeAbilities,
      spellsPrepared: monster.SpellsPrepared,
      spellDomains: monster.SpellDomains,
      abilityScores: monster.AbilityScores,
      baseAtk: +monster.BaseAtk,
      cmb: monster.CMB,
      cmd: monster.CMD,
      feats: monster.Feats,
      skills: monster.Skills,
      racialMods: monster.RacialMods,
      languages: monster.Languages,
      environment: monster.Environment,
      treasure: monster.Treasure,
      descriptionVisual: monster.Description_Visual,
      source: monster.Source,
      description: monster.Description,
      fly: +monster.Fly === 1,
      climb: +monster.Climb === 1,
      burrow: +monster.Burrow === 1,
      swim: +monster.Swim === 1,
      land: +monster.Land === 1,
      ageCategory: monster.AgeCategory,
      acMods: monster.AC_Mods,
      id: +monster.id,
    }));
  }
}