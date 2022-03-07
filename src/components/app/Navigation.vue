<template>
	<header class="body__app__homeContainer__header">
		<div
			class="body__app__homeContainer__header__headerContainer"
		>
			<!--Company name => Lennerová kraslice ?-->
			<h1
				class="body__app__homeContainer__header__headerContainer__title"
			>
				Kraslice Lennerová
			</h1>
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
							{{ $store.state.cart.length }}
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
};
</script>

<style></style>
