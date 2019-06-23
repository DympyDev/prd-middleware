import { GraphQLList, GraphQLInt, GraphQLString } from 'graphql';

import { FeatType } from './feats.types';
import { FeatModel } from './feats.model';

export const allFeats = {
  type: new GraphQLList(FeatType),
  resolve: async () => {
    const feats = await FeatModel.find({}, null, {
      sort: {
        name: 1,
      }
    });
    if (!feats) {
      throw new Error('error while fetching data');
    }
    return feats;
  }
};

export const findFeatById = {
  type: FeatType,
  args: { id: { type: GraphQLInt } },
  resolve: async (parent, req) => {
    const id = req.params === undefined ? req.id : req.params.id;
    const feat = await FeatModel.findOne({ id });
    if (!feat) {
      throw new Error('error while fetching data');
    }
    return feat;
  }
};

export const findFeatByName = {
  type: FeatType,
  args: { name: { type: GraphQLString } },
  resolve: async (parent, req) => {
    const name = req.params === undefined ? req.name : req.params.name;
    const feat = await FeatModel.findOne({ name });
    if (!feat) {
      throw new Error('error while fetching data');
    }
    return feat;
  }
};

export default {
  allFeats,
  findFeatById,
  findFeatByName,
}