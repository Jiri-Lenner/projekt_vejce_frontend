import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		itemSelection: {
			sortAndFilter: false,
			liked: false,
		},
		groups: {
			all: {status: true, name: 'VŠE'},
			eggs: {status: false, name: 'VAJÍČKA'},
			sets: {status: false, name: 'DÁRKOVÁ BALENÍ'},
		},
		page: 1,
		// will be in vue presist
		liked: [1, 2, 4],
		items: [
			{
				_id: 1,
				category: ['egg'],
				name: 'Set 5 Kraslic 2.0',
				description:
					'Krásný set 5 kraslic, obsahuje jednu křepelčí 1 pšotrosí a tři slepičí.',
				eggType: ['Slepičí', 'Pštrosí', 'Křepelčí'],
				packageQuantity: 5,
				price: 200,
				frontImg: 'kraslice.jpg',
				imgs: [
					'kraslice.jpg',
					'kraslice2.jpg',
					'kraslice3.jpg',
				],
			},
			{
				_id: 2,
				category: ['egg'],
				name: 'Kraslice zelená',
				description:
					'Krásná kraslice zelená gravírovaná a whaterver . . . ',
				eggType: ['Křepelčí'],
				packageQuantity: 1,
				price: 500,
				frontImg: 'kraslice2.jpg',
				imgs: ['kraslice2.jpg'],
			},
			{
				_id: 3,
				category: ['egg'],
				name: 'Kraslice oranžová',
				description:
					'Krásná kraslice oranžová gravírovaná a whaterver . . . ',
				eggType: ['Slepičí'],
				packageQuantity: 1,
				price: 200,
				frontImg: 'kraslice3.jpg',
				imgs: ['kraslice3.jpg', 'kraslice2.jpg'],
			},
			{
				_id: 4,
				category: ['egg'],
				name: 'Kraslice limitka',
				description:
					'Krásná kraslice limitka . . . super sexy hodí se všude',
				eggType: ['Křepelčí'],
				packageQuantity: 4,
				price: 250,
				frontImg: 'kraslice3.jpg',
				imgs: ['kraslice3.jpg', 'kraslice2.jpg'],
			},
			{
				_id: 5,
				category: ['egg'],
				name: 'Kraslice limitka',
				description:
					'Krásná kraslice limitka . . . super sexy hodí se všude',
				eggType: ['Křepelčí'],
				packageQuantity: 4,
				price: 250,
				frontImg: 'kraslice3.jpg',
				imgs: ['kraslice3.jpg', 'kraslice2.jpg'],
			},
			{
				_id: 6,
				category: ['egg'],
				name: 'Set 5 Kraslic 2.0',
				description:
					'Krásný set 5 kraslic, obsahuje jednu křepelčí 1 pšotrosí a tři slepičí.',
				eggType: ['Slepičí', 'Pštrosí', 'Křepelčí'],
				packageQuantity: 5,
				price: 200,
				frontImg: 'kraslice.jpg',
				imgs: [
					'kraslice.jpg',
					'kraslice2.jpg',
					'kraslice3.jpg',
				],
			},
			{
				_id: 7,
				category: ['egg'],
				name: 'Kraslice zelená',
				description:
					'Krásná kraslice zelená gravírovaná a whaterver . . . ',
				eggType: ['Křepelčí'],
				packageQuantity: 1,
				price: 500,
				frontImg: 'kraslice2.jpg',
				imgs: ['kraslice2.jpg'],
			},
			{
				_id: 8,
				category: ['egg'],
				name: 'Kraslice oranžová',
				description:
					'Krásná kraslice oranžová gravírovaná a whaterver . . . ',
				eggType: ['Slepičí'],
				packageQuantity: 1,
				price: 200,
				frontImg: 'kraslice3.jpg',
				imgs: ['kraslice3.jpg', 'kraslice2.jpg'],
			},
			{
				_id: 9,
				category: ['egg'],
				name: 'Kraslice limitka',
				description:
					'Krásná kraslice limitka . . . super sexy hodí se všude',
				eggType: ['Křepelčí'],
				packageQuantity: 4,
				price: 250,
				frontImg: 'kraslice3.jpg',
				imgs: ['kraslice3.jpg', 'kraslice2.jpg'],
			},
			{
				_id: 10,
				category: ['egg'],
				name: 'Set 5 Kraslic 2.0',
				description:
					'Krásný set 5 kraslic, obsahuje jednu křepelčí 1 pšotrosí a tři slepičí.',
				eggType: ['Slepičí', 'Pštrosí', 'Křepelčí'],
				packageQuantity: 5,
				price: 200,
				frontImg: 'kraslice.jpg',
				imgs: [
					'kraslice.jpg',
					'kraslice2.jpg',
					'kraslice3.jpg',
				],
			},
			{
				_id: 11,
				category: ['egg'],
				name: 'Kraslice zelená',
				description:
					'Krásná kraslice zelená gravírovaná a whaterver . . . ',
				eggType: ['Křepelčí'],
				packageQuantity: 1,
				price: 500,
				frontImg: 'kraslice2.jpg',
				imgs: ['kraslice2.jpg'],
			},
			{
				_id: 12,
				category: ['egg'],
				name: 'Kraslice limitka',
				description:
					'Krásná kraslice limitka . . . super sexy hodí se všude',
				eggType: ['Křepelčí'],
				packageQuantity: 4,
				price: 250,
				frontImg: 'kraslice3.jpg',
				imgs: ['kraslice3.jpg', 'kraslice2.jpg'],
			},
			{
				_id: 13,
				category: ['egg'],
				name: 'Kraslice limitka',
				description:
					'Krásná kraslice limitka . . . super sexy hodí se všude',
				eggType: ['Křepelčí'],
				packageQuantity: 4,
				price: 250,
				frontImg: 'kraslice3.jpg',
				imgs: ['kraslice3.jpg', 'kraslice2.jpg'],
			},
			{
				_id: 14,
				category: ['egg'],
				name: 'Set 5 Kraslic 2.0',
				description:
					'Krásný set 5 kraslic, obsahuje jednu křepelčí 1 pšotrosí a tři slepičí.',
				eggType: ['Slepičí', 'Pštrosí', 'Křepelčí'],
				packageQuantity: 5,
				price: 200,
				frontImg: 'kraslice.jpg',
				imgs: [
					'kraslice.jpg',
					'kraslice2.jpg',
					'kraslice3.jpg',
				],
			},
			{
				_id: 15,
				category: ['egg'],
				name: 'Kraslice limitka předposlední ve stacku',
				description:
					'Kraslice limitka předposlední ve stacku ',
				eggType: ['Křepelčí'],
				packageQuantity: 1,
				price: 500,
				frontImg: 'kraslice2.jpg',
				imgs: ['kraslice2.jpg'],
			},
			{
				_id: 16,
				category: ['egg'],
				name: 'Kraslice limitka poslední ve stacku',
				description:
					'Krásná kraslice limitka . . . super sexy hodí se všude',
				eggType: ['Křepelčí'],
				packageQuantity: 4,
				price: 250,
				frontImg: 'kraslice3.jpg',
				imgs: ['kraslice3.jpg', 'kraslice2.jpg'],
			},
			{
				_id: 17,
				category: ['egg'],
				name: 'Set 5 Kraslic 2.00',
				description:
					'Krásný set 5 kraslic, obsahuje jednu křepelčí 1 pšotrosí a tři slepičí.',
				eggType: ['Slepičí', 'Pštrosí', 'Křepelčí'],
				packageQuantity: 5,
				price: 200,
				frontImg: 'kraslice.jpg',
				imgs: [
					'kraslice.jpg',
					'kraslice2.jpg',
					'kraslice3.jpg',
				],
			},
			{
				_id: 18,
				category: ['egg'],
				name: 'Kraslice zelená 300',
				description:
					'Krásná kraslice zelená gravírovaná a whaterver . . . ',
				eggType: ['Křepelčí'],
				packageQuantity: 1,
				price: 500,
				frontImg: 'kraslice2.jpg',
				imgs: ['kraslice2.jpg'],
			},
		],
	},
	mutations: {
		changeItemSelection(state, property) {
			state.itemSelection[property.property] =
				property.propertyState;
		},
		changeStatus(state, property) {
			state.groups[property.name].status =
				property.status;
		},
		updatePageNumber(state, page) {
			state.page = page;
		},
	},
	actions: {},
	modules: {},
});
