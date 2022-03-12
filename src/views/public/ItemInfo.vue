<template>
	<div class="body__app__detailContainer">
		<InfoNav />
		<div class="body__app__detailContainer__detailCard">
			<Carousel :itemData="itemData" />
			<ItemDetailCard
				:itemData="itemData"
				:_id="_id"
			/>
		</div>
	</div>
</template>

<script>
import InfoNav from '@/components/infoPage/InfoNav.vue';
import Carousel from '@/components/infoPage/Carousel.vue';
import ItemDetailCard from '@/components/infoPage/ItemDetailCard.vue';
export default {
	name: 'Home',
	props: {
		_id: String,
	},

	components: {
		InfoNav,
		Carousel,
		ItemDetailCard,
	},

	computed: {
		// get the right data from the id
		itemData() {
			for (const item of this.$store.state.items) {
				if (item._id === this._id) {
					return item;
				}
			}
			this.$router.push({name: 'NotFound'});
		},
	},
};
</script>
<style scoped lang="scss"></style>
