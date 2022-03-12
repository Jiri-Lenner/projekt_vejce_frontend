<template>
	<div class="body__app__orderContainer__goBackNav">
		<div
			class="body__app__cartContainer__goBackNav__back"
			@click="$router.go(-1)"
		>
			ZPĚT
		</div>
	</div>
</template>

<script>
export default {
	name: 'FormNav',
};
</script>

<style></style>
