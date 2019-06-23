import mongoose, { Schema } from 'mongoose';

const featSchema = new Schema({
	id: {
    type: Number,
    index: true,
	},
	name: {
		type: String
	},
	type: {
		type: String
	},
	description: {
		type: String
	},
	benefit: {
		type: String
	},
	source: {
		type: String
	},
	teamwork: {
		type: Boolean
	},
	critical: {
		type: Boolean
	},
	grit: {
		type: Boolean
	},
	style: {
		type: Boolean
	},
	performance: {
		type: Boolean
	},
	racial: {
		type: Boolean
	},
	multiples: {
		type: Boolean
	},
	panache: {
		type: Boolean
	},
	betrayal: {
		type: Boolean
	},
	targeting: {
		type: Boolean
	},
	esoteric: {
		type: Boolean
	},
	stare: {
		type: Boolean
	},
	trick: {
		type: Boolean
	},
	companionFamiliar: {
		type: Boolean
	},
	weaponMastery: {
		type: Boolean
	},
	itemMastery: {
		type: Boolean
	},
	armorMastery: {
		type: Boolean
	},
	shieldMastery: {
		type: Boolean
	},
	bloodHex: {
		type: Boolean
	}
});

featSchema.index({ name: 'text' });

export const FeatModel = mongoose.model('feat', featSchema);