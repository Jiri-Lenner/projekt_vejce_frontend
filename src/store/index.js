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
				cat: 'eggs',
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

		// cart
		cart: [],
		shippingPrice: 50,
		orderedSuccess: false,
		orderedFailed: false,

		// Shop items
		items: [
			{
				_id: '1',
				cat: ['eggs'],
				name: 'Modrá slepičí kraslice',
				description:
					'Krásna slepičí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Slepičí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 200,
				frontImg: 'slepBlue.jpg',
				imgs: ['slepBlue.jpg'],
			},
			{
				_id: '2',
				cat: ['eggs'],
				name: 'Hnědá slepičí kraslice',
				description:
					'Krásna slepičí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Slepičí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 200,
				frontImg: 'slepBrown1.jpg',
				imgs: ['slepBrown1.jpg', 'slepBrown2.jpg'],
			},
			{
				_id: '3',
				cat: ['eggs'],
				name: 'Černá slepičí kraslice',
				description:
					'Krásna slepičí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Slepičí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 200,
				frontImg: 'slepDark.jpg',
				imgs: ['slepDark.jpg'],
			},
			{
				_id: '4',
				cat: ['eggs'],
				name: 'Zelená slepičí kraslice',
				description:
					'Krásna slepičí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Slepičí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 200,
				frontImg: 'slepGreen.jpg',
				imgs: ['slepGreen.jpg'],
			},
			{
				_id: '5',
				cat: ['eggs'],
				name: 'Bílá slepičí kraslice',
				description:
					'Krásna slepičí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Slepičí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 200,
				frontImg: 'slepLight.jpg',
				imgs: ['slepLight.jpg'],
			},
			{
				_id: '6',
				cat: ['eggs'],
				name: 'Červená slepičí kraslice',
				description:
					'Krásna slepičí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Slepičí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 200,
				frontImg: 'slepRed.jpg',
				imgs: ['slepRed.jpg'],
			},
			{
				_id: '7',
				cat: ['eggs'],
				name: 'Zelená husí kraslice',
				description:
					'Krásna husí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Husí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 250,
				frontImg: 'husGreen.jpg',
				imgs: ['husGreen.jpg'],
			},
			{
				_id: '8',
				cat: ['eggs'],
				name: 'Červená husí kraslice',
				description:
					'Krásna husí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Husí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 250,
				frontImg: 'husRed.jpg',
				imgs: ['husRed.jpg'],
			},
			{
				_id: '9',
				cat: ['eggs'],
				name: 'Černá husí kraslice',
				description:
					'Krásna husí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Husí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 250,
				frontImg: 'husBlack.jpg',
				imgs: ['husBlack.jpg'],
			},
			{
				_id: '10',
				cat: ['eggs'],
				name: 'Bílá husí kraslice',
				description:
					'Krásna husí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Husí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 250,
				frontImg: 'husWhite.jpg',
				imgs: ['husWhite.jpg'],
			},
			{
				_id: '11',
				cat: ['eggs'],
				name: 'Modrá husí kraslice',
				description:
					'Krásna husí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Husí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 250,
				frontImg: 'husBlue.jpg',
				imgs: ['husBlue.jpg'],
			},
			{
				_id: '12',
				cat: ['eggs'],
				name: 'Zelená kachní kraslice',
				description:
					'Krásna kachní kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Kachní',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 300,
				frontImg: 'kachGreen.jpg',
				imgs: ['kachGreen.jpg'],
			},
			{
				_id: '13',
				cat: ['eggs'],
				name: 'Duhová kachní kraslice',
				description:
					'Krásna kachní kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Kachní',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 300,
				frontImg: 'kachRainbow.jpg',
				imgs: ['kachRainbow.jpg'],
			},
			{
				_id: '14',
				cat: ['eggs'],
				name: 'Hnědá kachní kraslice',
				description:
					'Krásna kachní kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Kachní',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 300,
				frontImg: 'kachBrown.jpg',
				imgs: ['kachBrown.jpg'],
			},
			{
				_id: '15',
				cat: ['sets'],
				name: 'Bílá a červená pštrosí kraslice',
				description:
					'Krásna pštrosí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Pštrosí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 800,
				frontImg: 'pstroRedAndWhite.jpg',
				imgs: ['pstroRedAndWhite.jpg'],
			},
			{
				_id: '16',
				cat: ['eggs'],
				name: 'Červená pštrosí kraslice',
				description:
					'Krásna pštrosí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Pštrosí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 400,
				frontImg: 'pstroRed.jpg',
				imgs: ['pstroRed1.jpg', 'pstroRed2.jpg'],
			},
			{
				_id: '17',
				cat: ['eggs'],
				name: 'Zelená pštrosí kraslice',
				description:
					'Krásna pštrosí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Pštrosí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 400,
				frontImg: 'pstroGreen.jpg',
				imgs: ['pstroGreen.jpg'],
			},
			{
				_id: '18',
				cat: ['eggs'],
				name: 'Bílá pštrosí kraslice',
				description:
					'Krásna pštrosí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Pštrosí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 400,
				frontImg: 'pstroWhite.jpg',
				imgs: ['pstroWhite.jpg'],
			},
			{
				_id: '19',
				cat: ['eggs'],
				name: 'Černá pštrosí kraslice',
				description:
					'Krásna pštrosí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Pštrosí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 400,
				frontImg: 'pstroDarkGreen.jpg',
				imgs: [
					'pstroDarkGreen.jpg',
					'pstroDarkGreen2.jpg',
				],
			},
			{
				_id: '20',
				cat: ['eggs'],
				name: 'Kraslice na špejli',
				description:
					'Krásna kraslice na špejli! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Na špejli',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 250,
				frontImg: 'stick1.jpg',
				imgs: ['stick1.jpg', 'stick2.jpg'],
			},
			{
				_id: '21',
				cat: ['sets'],
				name: 'Kašík malý',
				description:
					'Krásný malý košík kraslic s kuřetem! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Slepičí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 2,
				price: 400,
				frontImg: 'setSmall1.jpg',
				imgs: ['setSmall1.jpg', 'setSmall2.jpg'],
			},
			{
				_id: '22',
				cat: ['sets'],
				name: 'Kašík střední',
				description:
					'Krásný střední košík kraslic s kuřetem! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Slepičí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 3,
				price: 600,
				frontImg: 'setMedium1.jpg',
				imgs: ['setMedium1.jpg', 'setMedium2.jpg'],
			},
			// ----------------------------------------- fake ---------------------------------------------------------
			{
				_id: '23',
				cat: ['eggs'],
				name: 'Bílá husí kraslice',
				description:
					'Krásna husí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Husí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 250,
				frontImg: 'husWhite.jpg',
				imgs: ['husWhite.jpg'],
			},
			{
				_id: '24',
				cat: ['eggs'],
				name: 'Modrá husí kraslice',
				description:
					'Krásna husí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Husí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 250,
				frontImg: 'husBlue.jpg',
				imgs: ['husBlue.jpg'],
			},
			{
				_id: '25',
				cat: ['eggs'],
				name: 'Zelená kachní kraslice',
				description:
					'Krásna kachní kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Kachní',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 300,
				frontImg: 'kachGreen.jpg',
				imgs: ['kachGreen.jpg'],
			},
			{
				_id: '26',
				cat: ['eggs'],
				name: 'Duhová kachní kraslice',
				description:
					'Krásna kachní kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Kachní',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 300,
				frontImg: 'kachRainbow.jpg',
				imgs: ['kachRainbow.jpg'],
			},
			{
				_id: '27',
				cat: ['eggs'],
				name: 'Hnědá kachní kraslice',
				description:
					'Krásna kachní kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Kachní',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 300,
				frontImg: 'kachBrown.jpg',
				imgs: ['kachBrown.jpg'],
			},
			{
				_id: '28',
				cat: ['sets'],
				name: 'Bílá a červená pštrosí kraslice',
				description:
					'Krásna pštrosí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Pštrosí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 800,
				frontImg: 'pstroRedAndWhite.jpg',
				imgs: ['pstroRedAndWhite.jpg'],
			},
			{
				_id: '29',
				cat: ['eggs'],
				name: 'Červená pštrosí kraslice',
				description:
					'Krásna pštrosí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Pštrosí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 400,
				frontImg: 'pstroRed.jpg',
				imgs: ['pstroRed1.jpg', 'pstroRed2.jpg'],
			},
			{
				_id: '30',
				cat: ['eggs'],
				name: 'Zelená pštrosí kraslice',
				description:
					'Krásna pštrosí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Pštrosí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 400,
				frontImg: 'pstroGreen.jpg',
				imgs: ['pstroGreen.jpg'],
			},
			{
				_id: '31',
				cat: ['eggs'],
				name: 'Bílá pštrosí kraslice',
				description:
					'Krásna pštrosí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Pštrosí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 400,
				frontImg: 'pstroWhite.jpg',
				imgs: ['pstroWhite.jpg'],
			},
			{
				_id: '32',
				cat: ['eggs'],
				name: 'Černá pštrosí kraslice',
				description:
					'Krásna pštrosí kraslice! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Pštrosí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 400,
				frontImg: 'pstroDarkGreen.jpg',
				imgs: [
					'pstroDarkGreen.jpg',
					'pstroDarkGreen2.jpg',
				],
			},
			{
				_id: '33',
				cat: ['eggs'],
				name: 'Kraslice na špejli',
				description:
					'Krásna kraslice na špejli! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Na špejli',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 1,
				price: 250,
				frontImg: 'stick1.jpg',
				imgs: ['stick1.jpg', 'stick2.jpg'],
			},
			{
				_id: '34',
				cat: ['sets'],
				name: 'Kašík malý',
				description:
					'Krásný malý košík kraslic s kuřetem! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Slepičí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 2,
				price: 400,
				frontImg: 'setSmall1.jpg',
				imgs: ['setSmall1.jpg', 'setSmall2.jpg'],
			},
			{
				_id: '35',
				cat: ['sets'],
				name: 'Kašík střední',
				description:
					'Krásný střední košík kraslic s kuřetem! Ručně malovaná ručně míchanými barvami na míru profesionální malířkou kraslic s léty zkušeností.',
				eggType: [
					'Slepičí',
					// 'Pštrosí',
					// 'Křepelčí',
					// 'Krocaní',
				],
				packageQuantity: 3,
				price: 600,
				frontImg: 'setMedium1.jpg',
				imgs: ['setMedium1.jpg', 'setMedium2.jpg'],
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
		// Like or dislike item
		updateLiked(state, _id) {
			if (state.liked.includes(_id)) {
				const index = state.liked.indexOf(_id);
				state.liked.splice(index, 1);
			} else {
				state.liked.push(_id);
			}
		},
		// remove from cart
		removeFromCart(state, _id) {
			for (const item of state.cart) {
				if (item._id === _id) {
					state.cart.splice(
						state.cart.indexOf(item),
						1
					);
				}
			}
		},
		// clear cart
		cleanCart(state) {
			state.cart = [];
		},
		// order -> enable access to successful order
		orderedSuccess(state) {
			state.orderedSuccess = true;
		},
		// order -> enable access to failed order
		orderedFailed(state) {
			state.orderedFailed = true;
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
		// add item to cart (with values / or without)
		addToCart(context, data) {
			// check if the item is already in cart 
			for (const [
				i,
				item,
			] of context.state.cart.entries()) {
				if (
					data._id === item._id &&
					context.state.cart[i].quantity +
						data.quantity <=
						100
				) {
					context.state.cart[i].quantity +=
						data.quantity;

					return;
				} else if (
					data._id === item._id &&
					context.state.cart[i].quantity +
						data.quantity >
						100
				) {
					context.state.cart[i].quantity = 100;
					return;
				}
			}
			// otherwise -> if the item is not yet in cart
			context.state.cart.push(data);
		},
	},
	modules: {},
});
