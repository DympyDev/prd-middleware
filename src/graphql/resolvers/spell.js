import Utils from "../../shared/utils";

const SEARCHABLE_FIELDS = [
  'name',
  'shortDescription',
  'description',
];

export const SpellResolver = (spells) => ({
  spells: () => spells,
  spellById: (_, {id}) => spells.filter(spell => spell.id === id)[0],
  spellsByQuery: (_, {query}) => spells.filter(spell => Utils.objectContainsQueryInProperties(spell, query, SEARCHABLE_FIELDS)),
});