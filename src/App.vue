<template>
	<div id="app">
		<!-- Nav -->
		<Navigation />
		<!--Router-->
		<router-view />
		<!-- Footer -->
		<Footer />
	</div>
</template>
<script>
// Top Nav
import Navigation from '@/components/app/Navigation.vue';
// Bottom Footer
import Footer from '@/components/app/Footer.vue';
export default {
	name: 'App',
	components: {
		Navigation,
		Footer,
	},
	// Initialize all egg tags and quantities from the api items
	methods: {
		initFilterEggs() {
			const eggTypes =
				this.$store.state.filterEggTypesAll;
			for (const item of this.$store.state.items) {
				for (const type of item.eggType) {
					if (!eggTypes.includes(type)) {
						this.$store.commit(
							'updatefilterEggTypesAll',
							type
						);
					}
				}
			}
		},
		initFilterQuantity() {
			for (const item of this.$store.state.items) {
				if (
					!this.$store.state.filterPackageQuantityOn.includes(
						item.packageQuantity
					)
				) {
					this.$store.dispatch(
						'updateFilterPackageQuantityOn',
						item.packageQuantity
					);
				}
			}
		},
	},

	// run both methods before the page gets rendered
	beforeMount() {
		this.initFilterEggs();
		this.initFilterQuantity();
	},
};
</script>
