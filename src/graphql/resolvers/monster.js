import Utils from "../../shared/utils";

const SEARCHABLE_FIELDS = [
  'name',
  'descriptionVisual',
  'description',
];

export const MonsterResolver = (monsters) => ({
  monsters: () => monsters,
  monsterById: (_, {id}) => monsters.filter(monster => monster.id === id)[0],
  monstersByQuery: (_, {query}) => monsters.filter(monster => Utils.objectContainsQueryInProperties(monster, query, SEARCHABLE_FIELDS)),
});