import Utils from "../../shared/utils";

const SEARCHABLE_FIELDS = [
  'name',
  'benefit',
  'description',
];

export const FeatResolver = (feats) => ({
  feats: () => feats,
  featById: (_, {id}) => feats.filter(feat => feat.id === id)[0],
  featsByQuery: (_, {query}) => feats.filter(feat => Utils.objectContainsQueryInProperties(feat, query, SEARCHABLE_FIELDS)),
});