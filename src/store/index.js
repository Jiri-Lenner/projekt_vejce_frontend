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
		items: [
			{
				_id: 1111,
				name: 'Modrá kraslice',
				price: 160,
				imgs: ['./what', './is', './this'],
				frontImg: './what',
				eggType: ['Slepičí'],
			},
			{
				_id: 2222,
				name: 'Modrá kraslice',
				price: 160,
				imgs: ['./what', './is', './this'],
				frontImg: './what',
				eggType: ['Slepičí'],
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
	},
	actions: {},
	modules: {},
});
