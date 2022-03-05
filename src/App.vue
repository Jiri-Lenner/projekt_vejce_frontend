<template>
	<div id="app">
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
						src="./assets/img/pageAssets/logo.png"
						alt=""
					/>
				</router-link>

				<!--Router links container + create a mixn for the items + create a one computed for all three filters-->
				<div
					class="body__app__homeContainer__header__headerContainer__linksContainer"
				>
					<!--About the shop-->
					<router-link
						to="/workshops"
						class="body__app__homeContainer__header__headerContainer__workshops"
					>
						Workshopy a Prodejna
					</router-link>
					<!--About me-->
					<router-link
						to="/about"
						class="body__app__homeContainer__header__headerContainer__about"
					>
						O Malířce
					</router-link>
					<!--Cart-->
					<router-link
						to="/cart"
						class="body__app__homeContainer__header__headerContainer__cart"
					>
						<font-awesome-icon
							icon="fa-solid fa-basket-shopping"
						/>
						<div
							class="body__app__homeContainer__header__headerContainer__cart__count"
						>
							<p>1</p>
						</div>
					</router-link>
				</div>
			</div>
		</header>
		<!--Router-->
		<router-view />
	</div>
</template>
<script>
export default {
	name: 'App',
	// checking the liked vuex data array
	// beforeMount() {},
};
</script>
