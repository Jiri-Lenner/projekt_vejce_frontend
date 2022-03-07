import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		// cat filter right selectore
		itemSelection: {
			sortAndFilter: false,
			liked: false,
		},
		// cat filter left selectors
		groups: {
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
		// page controllers =
		page: 1,
		liked: [], // presist
		quantityIndex: 0,

		// filters
		/// eggs
		filterEggTypesOn: [],
		filterEggTypesAll: [],
		/// package quantity
		filterPackageQuantityOn: [],
		/// price
		sortPriceOn: '',

		// Shop items
		items: [
			{
				_id: '1',
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
				_id: '2',
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
				_id: '3',
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
				_id: '4',
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
				_id: '5',
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
				_id: '6',
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
				_id: '7',
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
				_id: '8',
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
				_id: '9',
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
				_id: '10',
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
				_id: '11',
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
				_id: '12',
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
				_id: '13',
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
				_id: '14',
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
				_id: '15',
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
				_id: '16',
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
				_id: '17',
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
				_id: '18',
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
			{
				_id: '19',
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
		],
	},
	mutations: {
		// cat filter right selection
		changeItemSelection(state, property) {
			state.itemSelection[property.property] =
				property.propertyState;
		},
		// cat filter left selection
		changeCategory(state, property) {
			state.groups[property.name].status =
				property.status;
		},
		// update current page
		updatePageNumber(state, page) {
			state.page = page;
		},

		// filters
		/// Eggs
		updatefilterEggTypesAll(state, type) {
			state.filterEggTypesAll.push(type);
		},
		// Quantity
		updateQuantityIndex(state, value) {
			state.quantityIndex += value;
		},
		// Sorting
		updateSorting(state, sortOrder) {
			state.sortPriceOn = sortOrder;
		},
	},
	actions: {
		// Filters
		/// Quantity
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
		/// Eggs (list with the selected eggs)
		updatefilterEggTypesOn(context, egg) {
			if (
				context.state.filterEggTypesOn.includes(egg)
			) {
				const eggIndex =
					context.state.filterEggTypesOn.indexOf(
						egg
					);
				context.state.filterEggTypesOn.splice(
					eggIndex,
					1
				);
			} else {
				context.state.filterEggTypesOn.push(egg);
			}
		},
	},
	modules: {},
});
