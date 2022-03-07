<template>
	<div>
		<h1>Detail page</h1>
		<p>
			{{ itemData }}
		</p>
	</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'Home',
	props: {
		_id: String,
	},
	components: {
		//HelloWorld,
	},
	computed: {
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
