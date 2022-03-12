<template>
	<div class="body__app__detailContainer__goBackNav">
		<div
			class="body__app__detailContainer__goBackNav__back"
			@click="$router.go(-1)"
		>
			ZPĚT
		</div>
	</div>
</template>

<script>
export default {
	name: 'InfoNav',
};
</script>
