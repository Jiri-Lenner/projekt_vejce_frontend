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
				></aside>
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

		FilteredItems() {
			const allItems = [...this.$store.state.items];

			// item category

			// get filtered itemss

			// get sorted items

			// liked

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
