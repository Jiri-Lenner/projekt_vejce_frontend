<template>
	<div class="body__app__notFoundContainer">
		<div class="body__app__notFoundContainer__box">
			<h2>Chyba!</h2>
			<p>Stránka nebyla nalezena!</p>
			<!-- link domů -->
			<router-link
				to="/"
				class="body__app__notFoundContainer__box__chip"
			>
				ZPĚT DO OBCHODU
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NotFound',
};
</script>
