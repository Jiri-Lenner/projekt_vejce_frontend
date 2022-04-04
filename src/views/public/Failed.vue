<template>
	<div class="body__app__failedContainer">
		<div class="body__app__failedContainer__box">
			<h2>Chyba!</h2>

			<p>
				Došlo k chybě při odesílání obejdnávky,
				zkuste to prosím znovu!
			</p>
			<!-- link domů -->
			<router-link
				to="/"
				class="body__app__failedContainer__box__chip"
			>
				ZPĚT DO OBCHODU
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Failed',
};
</script>
