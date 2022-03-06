<template>
	<div class="body__app__homeContainer">
		<main class="body__app__homeContainer__main">
			<!--Top part for filters-->
			<section
				class="body__app__homeContainer__main__filterNav"
			>
				<div
					class="body__app__homeContainer__main__filterNav__buttonContainer"
				>
					<div
						class="body__app__homeContainer__main__filterNav__buttonContainer__groups"
					>
						<div
							class="body__app__homeContainer__main__filterNav__buttonContainer__button"
							v-for="(
								properties, group
							) in ItemGroups"
							:key="group"
							:class="{
								body__app__homeContainer__main__filterNav__buttonContainer__button___selected:
									properties.status,
							}"
							@click="ItemGroups = group"
						>
							{{ properties.name }}
						</div>
					</div>

					<div
						class="body__app__homeContainer__main__filterNav__buttonContainer__selection"
					>
						<div
							class="body__app__homeContainer__main__filterNav__buttonContainer__button"
							:class="{
								body__app__homeContainer__main__filterNav__buttonContainer__button___selected:
									changeItemSelection.sortAndFilter,
							}"
							@click="
								changeItemSelection =
									'sortAndFilter'
							"
						>
							SEŘAZENÍ A FILTR
						</div>

						<div
							class="body__app__homeContainer__main__filterNav__buttonContainer__button"
							id="heart"
							:class="{
								body__app__homeContainer__main__filterNav__buttonContainer__button___selected:
									changeItemSelection.liked,
							}"
							@click="
								changeItemSelection =
									'liked'
							"
						>
							<font-awesome-icon
								icon="fa-regular fa-heart"
								v-if="
									!changeItemSelection.liked
								"
							/>
							<font-awesome-icon
								icon="fa-solid fa-heart"
								v-if="
									changeItemSelection.liked
								"
							/>
						</div>
					</div>
				</div>
			</section>
			<!--Main Section-->
			<!--Items and filter and sort-->
			<section
				class="body__app__homeContainer__main__contentContainer"
			>
				<aside
					class="body__app__homeContainer__main__contentContainer__itemFilter"
				>
					<h2>Seřazení a Filtr</h2>
					<div
						class="body__app__homeContainer__main__contentContainer__itemFilter__catContainer"
					>
						<p>Druhy Vajíček</p>
						<div
							v-for="(item, i) of FilterEggs"
							:key="i"
						>
							<input
								type="checkBox"
								:checked="
									$store.state.filterEggTypesOn.includes(
										item
									)
										? 'checked'
										: ''
								"
								@click="selectFilter(item)"
							/>
							<p>{{ item }}</p>
						</div>
					</div>
					<div
						class="body__app__homeContainer__main__contentContainer__itemFilter__catContainer"
					>
						<p>Počet Vajíček v Balení</p>
						<div
							class="body__app__homeContainer__main__contentContainer__itemFilter__quantityCountContainer"
						>
							<div
								class="body__app__homeContainer__main__contentContainer__itemFilter__quantityCountContainer__button"
								@click="changeQuantity(-1)"
								:class="{
									body__app__homeContainer__main__contentContainer__itemFilter__quantityCountContainer__count__available:
										this.$store.state
											.quantityIndex -
											1 >=
										0,
								}"
							>
								<font-awesome-icon
									icon="fa-solid fa-angle-left"
								/>
							</div>
							<div
								class="body__app__homeContainer__main__contentContainer__itemFilter__quantityCountContainer__count"
							>
								{{
									this.$store.state
										.filterPackageQuantityOn[
										this.$store.state
											.quantityIndex
									]
								}}
							</div>
							<div
								class="body__app__homeContainer__main__contentContainer__itemFilter__quantityCountContainer__button"
								@click="changeQuantity(1)"
								:class="{
									body__app__homeContainer__main__contentContainer__itemFilter__quantityCountContainer__count__available:
										this.$store.state
											.quantityIndex +
											1 <=
										this.$store.state
											.filterPackageQuantityOn
											.length -
											1,
								}"
							>
								<font-awesome-icon
									icon="fa-solid fa-angle-right"
								/>
							</div>
						</div>
					</div>
					<div
						class="body__app__homeContainer__main__contentContainer__itemFilter__catContainer"
					>
						<p>Cena</p>
						<div>
							<input
								type="checkBox"
								:checked="
									SortItems === 'descend'
										? 'checked'
										: ''
								"
								@click="
									selectSortItems(
										'descend'
									)
								"
							/>
							<p>Sestupně</p>
						</div>
						<div>
							<input
								type="checkBox"
								:checked="
									SortItems === 'ascend'
										? 'checked'
										: ''
								"
								@click="
									selectSortItems(
										'ascend'
									)
								"
							/>

							<p>Vzestupně</p>
						</div>
					</div>
				</aside>
				<div
					class="body__app__homeContainer__main__contentContainer__itemContainer"
				>
					<Item
						v-for="item of PagedItems"
						:key="item._id"
						:content="item"
					/>
				</div>
			</section>
			<section
				class="body__app__homeContainer__main__pageNav"
			>
				<div
					class="body__app__homeContainer__main__pageNav__buttonContainer"
					v-if="this.FilteredItems.length !== 0"
				>
					<div
						class="body__app__homeContainer__main__pageNav__buttonContainer__button"
						@click="changePage(-1)"
						:class="{
							body__app__homeContainer__main__pageNav__buttonContainer__button___available:
								this.$store.state.page - 1 >
								0,
						}"
					>
						<font-awesome-icon
							icon="fa-solid fa-angle-left"
						/>
					</div>
					<div
						class="body__app__homeContainer__main__pageNav__buttonContainer__button__pageNumber"
					>
						{{ this.Page }}
					</div>
					<div
						class="body__app__homeContainer__main__pageNav__buttonContainer__button"
						@click="changePage(1)"
						:class="{
							body__app__homeContainer__main__pageNav__buttonContainer__button___available:
								this.$store.state.page +
									1 <=
								this.MaxPage,
						}"
					>
						<font-awesome-icon
							icon="fa-solid fa-angle-right"
						/>
					</div>
				</div>
			</section>
		</main>

		<footer class="body__app__homeContainer__footer">
			<!--Info na malířku-->
			<!-- Login do administrace -> button na formulář -->
		</footer>
	</div>
</template>

<script>
import Item from '@/components/Item.vue';
//import func from 'vue-editor-bridge';
export default {
	name: 'Home',
	components: {
		Item,
	},
	methods: {
		changePage(change) {
			this.Page = change;
		},
		changeQuantity(change) {
			this.Quantity = change;
		},
		selectFilter(item) {
			this.FilterEggs = item;
		},
		selectSortItems(sortType) {
			this.SortItems = sortType;
		},
	},
	computed: {
		// items selectors
		changeItemSelection: {
			get: function () {
				return this.$store.state.itemSelection;
			},
			set: function (property) {
				if (
					this.$store.state.itemSelection[
						property
					]
				) {
					this.$store.commit(
						'changeItemSelection',
						{
							property: property,
							propertyState: false,
						}
					);
				} else {
					this.$store.commit(
						'changeItemSelection',
						{
							property: property,
							propertyState: true,
						}
					);
				}
			},
		},
		ItemGroups: {
			get: function () {
				return this.$store.state.groups;
			},
			set: function (property) {
				for (const key of Object.keys(
					this.$store.state.groups
				)) {
					this.$store.commit('changeStatus', {
						name: key,
						status: false,
					});
				}

				this.$store.commit('changeStatus', {
					name: property,
					status: true,
				});
			},
		},
		// pages
		Page: {
			get: function () {
				return this.$store.state.page;
			},
			set: function (page) {
				if (
					this.$store.state.page + page >
						this.MaxPage ||
					this.$store.state.page + page == 0
				) {
					return;
				}

				this.$store.commit(
					'updatePageNumber',
					this.$store.state.page + page
				);
			},
		},
		// filters
		SortItems: {
			get: function () {
				return this.$store.state.sortPriceOn;
			},
			set: function (sortType) {
				if (
					this.$store.state.sortPriceOn ==
						'ascend' &&
					sortType == 'ascend'
				) {
					this.$store.commit('updateSorting', '');
				} else if (
					this.$store.state.sortPriceOn ==
						'descend' &&
					sortType == 'descend'
				) {
					this.$store.commit('updateSorting', '');
				} else {
					this.$store.commit(
						'updateSorting',
						sortType
					);
				}
			},
		},
		Quantity: {
			get: function () {
				return this.$store.state.quantityIndex;
			},
			set: function (i) {
				if (
					this.$store.state.quantityIndex + i <=
						this.$store.state
							.filterPackageQuantityOn
							.length -
							1 &&
					this.$store.state.quantityIndex + i !=
						-1
				) {
					this.$store.commit(
						'updateQuantityIndex',
						i
					);
				}
			},
		},
		FilterEggs: {
			get: function () {
				return this.$store.state.filterEggTypesAll;
			},
			set: function (egg) {
				this.$store.dispatch(
					'updatefilterEggTypesOn',
					egg
				);
			},
		},

		// filtered pages
		FilteredItems() {
			let allItems = [...this.$store.state.items];

			// item category
			for (const key of Object.keys(
				this.$store.state.groups
			)) {
				if (
					this.$store.state.groups[key].status ==
					true
				) {
					const selectedCat =
						this.$store.state.groups[key];

					allItems = allItems.filter(function (
						item
					) {
						if (
							item.cat.includes(
								selectedCat.cat
							)
						) {
							return true;
						} else if (
							selectedCat.cat == 'all'
						) {
							return true;
						} else {
							return false;
						}
					});

					break;
				}
			}
			// liked
			if (this.$store.state.itemSelection.liked) {
				const liked = this.$store.state.liked;

				allItems = allItems.filter(function (item) {
					if (liked.includes(item._id)) {
						return true;
					} else {
						return false;
					}
				});
			}

			// get filtered items
			if (
				this.$store.state.itemSelection
					.sortAndFilter
			) {
				/// eggs
				//// get all true eggs

				const selectedEggs =
					this.$store.state.filterEggTypesOn;
				if (selectedEggs.length > 0) {
					allItems = allItems.filter(function (
						item
					) {
						for (const egg of selectedEggs) {
							if (
								item.eggType.includes(egg)
							) {
								return true;
							} else {
								continue;
							}
						}
						return false;
					});
				}

				/// packaging - bude se zapínat kliknutím!!
				if (this.$store.state.quantityIndex !== 0) {
					const listOfValues =
						this.$store.state
							.filterPackageQuantityOn;
					const currentIndex =
						this.$store.state.quantityIndex;

					allItems = allItems.filter(function (
						item
					) {
						if (
							item.packageQuantity ==
							listOfValues[currentIndex]
						) {
							return true;
						} else {
							return false;
						}
					});
				}
				// get sorted items
				if (
					this.$store.state.sortPriceOn ==
					'ascend'
				) {
					allItems.sort((itemA, itemB) => {
						return itemA.price - itemB.price;
					});
				} else if (
					this.$store.state.sortPriceOn ==
					'descend'
				) {
					allItems
						.sort((itemA, itemB) => {
							return (
								itemA.price - itemB.price
							);
						})
						.reverse();
				}

				/// price
			}

			return allItems;
		},

		MaxPage() {
			return Math.ceil(
				this.FilteredItems.length / 16
			);
		},

		// get items -> complex filter
		PagedItems() {
			const allItems = [...this.FilteredItems];

			// get items by the current page (1-x)
			const pagedItems = allItems.slice(
				(this.Page - 1) * 16,
				(this.Page - 1) * 16 + 16
			);

			return pagedItems;
		},
	},
};
</script>
