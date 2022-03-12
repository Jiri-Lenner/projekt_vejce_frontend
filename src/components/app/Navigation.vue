<template>
	<header class="body__app__homeContainer__header">
		<div
			class="body__app__homeContainer__header__headerContainer"
		>
			<!--Company name => Lennerová kraslice ?-->
			<router-link
				to="/"
				class="body__app__homeContainer__header__headerContainer__title"
			>
				Kraslice Lennerová
			</router-link>
			<!--Logo (in center)-->
			<router-link
				to="/"
				class="body__app__homeContainer__header__headerContainer__logoContainer"
			>
				<img
					class="body__app__homeContainer__header__headerContainer__logoContainer__logo"
					src="@/assets/img/pageAssets/logo.png"
					alt=""
				/>
			</router-link>

			<!--Router links container + create a mixn for the items + create a one computed for all three filters-->
			<div
				class="body__app__homeContainer__header__headerContainer__linksContainer"
			>
				<!--About the shop-->
				<router-link
					to="/workshopy_a_prodejna"
					class="body__app__homeContainer__header__headerContainer__workshops"
				>
					Workshopy a Prodejna
				</router-link>
				<!--About me-->
				<router-link
					to="/o_malirce"
					class="body__app__homeContainer__header__headerContainer__about"
				>
					O Malířce
				</router-link>
				<!--Cart-->
				<router-link
					to="/kosik"
					class="body__app__homeContainer__header__headerContainer__cart"
				>
					<font-awesome-icon
						icon="fa-solid fa-basket-shopping"
					/>
					<div
						class="body__app__homeContainer__header__headerContainer__cart__count"
						v-if="
							!$store.state.cart.length == 0
						"
					>
						<p>
							{{ overallQuantity }}
						</p>
					</div>
				</router-link>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: 'Navigation',
	computed: {
		// calculate the the number of items
		overallQuantity() {
			let overallQuantity = 0;
			for (const cartItem of this.$store.state.cart) {
				overallQuantity += cartItem.quantity;
			}
			return overallQuantity;
		},
	},
};
</script>

<style></style>
