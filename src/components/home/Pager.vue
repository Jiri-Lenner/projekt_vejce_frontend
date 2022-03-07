<template>
	<section
		class="body__app__homeContainer__main__pageNav"
	>
		<div
			class="body__app__homeContainer__main__pageNav__buttonContainer"
			v-if="filteredItemsLength !== 0"
		>
			<div
				class="body__app__homeContainer__main__pageNav__buttonContainer__button"
				@click="changePage(-1)"
				:class="{
					body__app__homeContainer__main__pageNav__buttonContainer__button___available:
						this.Page - 1 > 0,
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
						this.Page + 1 <= this.MaxPage,
				}"
			>
				<font-awesome-icon
					icon="fa-solid fa-angle-right"
				/>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Pager',
	methods: {
		changePage(change) {
			this.Page = change;
		},
	},
	// get essential data from home view which is responsibel for data filtration
	props: {
		filteredItemsLength: Number,
		MaxPage: Number,
	},
	computed: {
		// get and update the current page (swich) if the change is available
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
	},
};
</script>
