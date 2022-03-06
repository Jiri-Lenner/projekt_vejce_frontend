import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// controls
		itemSelection: {
			sortAndFilter: false,
			liked: false,
		},
		groups: {
			// udělat jako tags
			// první tam nebude
			all: {status: true, name: 'VŠE', cat: 'all'},
			eggs: {
				status: false,
				name: 'VAJÍČKA',
				cat: 'egg',
			},
			sets: {
				status: false,
				name: 'KOŠÍKY',
				cat: 'sets',
			},
		},
		// controlls - numbers
		page: 1,
		liked: [], // budou v presist
		quantityIndex: 0, // budou v presist
		// filters
		filterEggTypesOn: {}, // budou v presist ? BUG problém když už danej typ vajička nebude dostupnej v presist furt bude . . . fix this
		filterPackageQuantityOn: [],
		sortPriceOn: [],
		items: [
			{
				_id: 1,
				cat: ['sets'],
				name: 'Set 5 Kraslic 2.0',
				description:
					'Krásný set 5 kraslic, obsahuje jednu křepelčí 1 pšotrosí a tři slepičí.',
				eggType: [
					'Slepičí',
					'Pštrosí',
					'Křepelčí',
					'Krocaní',
				],
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
				cat: ['egg'],
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
				cat: ['egg'],
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
				cat: ['egg'],
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
				cat: ['egg'],
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
				cat: ['egg'],
				name: 'Set 5 Kraslic 2.0',
				description:
					'Krásný set 5 kraslic, obsahuje jednu křepelčí 1 pšotrosí a tři slepičí.',
				eggType: ['Slepičí', 'Pštrosí', 'Křepelčí'],
				packageQuantity: 69,
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
				cat: ['egg'],
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
				cat: ['egg'],
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
				cat: ['egg'],
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
				cat: ['egg'],
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
				cat: ['egg'],
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
				cat: ['egg'],
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
				cat: ['egg'],
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
				cat: ['egg'],
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
				cat: ['egg'],
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
				cat: ['egg'],
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
				cat: ['egg'],
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
				cat: ['egg'],
				name: 'Kraslice zelená 300',
				description:
					'Krásná kraslice zelená gravírovaná a whaterver . . . ',
				eggType: ['Křepelčí', 'Nosorožčí'],
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

		// filters
		updatefilterEggTypesOn(state, type) {
			if (typeof type == 'object') {
				state.filterEggTypesOn[type[0]] = type[1];
			} else {
				state.filterEggTypesOn[type] = false;
			}
		},

		updateQuantityIndex(state, value) {
			state.quantityIndex += value;
		},
	},
	actions: {
		updateFilterPackageQuantityOn(context, quantity) {
			context.state.filterPackageQuantityOn.push(
				quantity
			);

			context.state.filterPackageQuantityOn =
				context.state.filterPackageQuantityOn
					.sort()
					.filter(value => {
						if (value == 'vše') {
							return false;
						} else {
							return true;
						}
					});

			context.state.filterPackageQuantityOn.unshift(
				'vše'
			);
		},
	},
	modules: {},
});
