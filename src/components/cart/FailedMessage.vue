<template>
	<div
		class="body__app__cartContainer__detailCard__cartItems___empty"
		v-if="overallQuantity == 0"
	>
		<img
			src="@/assets/img/pageAssets/warning.png"
			alt=""
		/>

		<h2>Prázdný košík!</h2>
	</div>
</template>

<script>
export default {
	name: 'FailedMessage',
	props: {
		overallQuantity: Number,
	},
};
</script>
