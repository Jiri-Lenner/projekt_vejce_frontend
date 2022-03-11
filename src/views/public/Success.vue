<template>
	<div class="body__app__successContainer">
		<div class="body__app__successContainer__box">
			<h2>Objednávka úspěšně odeslána!</h2>

			<p>
				Podrobnosti objednávky naleznete v emailu!
			</p>
			<!-- link domů -->
			<router-link
				to="/"
				class="body__app__successContainer__box__chip"
			>
				ZPĚT DO OBCHODU
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Success',
	mounted() {
		if (!this.$store.state.orderedSuccess) {
			this.$router.push({name: 'Home'});
		}
	},
};
</script>
