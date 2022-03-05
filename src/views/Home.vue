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
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
					<Item />
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
	computed: {
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
	},
};
</script>
