export default class ProcessFeats {
	static parse(jsonData) {
		return jsonData.map(feat => ({
			id: +feat.id,
			name: feat.name,
			type: feat.type,
			description: feat.description,
			benefit: feat.benefit,
			source: feat.source,
			teamwork: +feat.teamwork === 1,
			critical: +feat.critical === 1,
			grit: +feat.grit === 1,
			style: +feat.style === 1,
			performance: +feat.performance === 1,
			racial: +feat.racial === 1,
			multiples: +feat.multiples === 1,
			panache: +feat.panache === 1,
			betrayal: +feat.betrayal === 1,
			targeting: +feat.targeting === 1,
			esoteric: +feat.esoteric === 1,
			stare: +feat.stare === 1,
			trick: +feat.trick === 1,
			companionFamiliar: +feat.companion_familiar === 1,
			weaponMastery: +feat.weapon_mastery === 1,
			itemMastery: +feat.item_mastery === 1,
			armorMastery: +feat.armor_mastery === 1,
			shieldMastery: +feat.shield_mastery === 1,
			bloodHex: +feat.blood_hex === 1,
		}));
	}
}