<template>
	<div
		class="body__app__homeContainer__main__contentContainer__itemContainer__item"
	>
		<div>
			<font-awesome-icon
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__likeButton"
				icon="fa-solid fa-heart"
			/>
		</div>
		<img
			class="body__app__homeContainer__main__contentContainer__itemContainer__item__itemBackgroundImg"
			src="../assets/img/kraslice.jpg"
			alt=""
		/>
		<div
			class="body__app__homeContainer__main__contentContainer__itemContainer__item__description"
		>
			<h1
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__description__heading"
			>
				Set 5 kraslic
			</h1>
			<p
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__description__description"
			>
				Krásný set 5 kraslic, obsahuje jednu
				křepelčí 1 pšotrosí a tři slepičí.
			</p>
		</div>
		<div
			class="body__app__homeContainer__main__contentContainer__itemContainer__item__details"
		>
			<div
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__details__detail"
			>
				<font-awesome-icon
					class="body__app__homeContainer__main__contentContainer__itemContainer__item__details__detail__icon"
					icon="fa-solid fa-egg"
				/>
				<p
					class="body__app__homeContainer__main__contentContainer__itemContainer__item__details__detail__text"
				>
					Křepelčí, Slepičí a Pštrosí
				</p>
			</div>
			<div
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__details__detail"
			>
				<font-awesome-icon
					class="body__app__homeContainer__main__contentContainer__itemContainer__item__details__detail__icon"
					icon="fa-solid fa-box-open"
				/>
				<p
					class="body__app__homeContainer__main__contentContainer__itemContainer__item__details__detail__text"
				>
					10 kusů v jednom balení
				</p>
			</div>
		</div>
		<div
			class="body__app__homeContainer__main__contentContainer__itemContainer__item__priceAndDetails"
		>
			<p
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__priceAndDetails__price"
			>
				200 Kč
			</p>

			<div
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__priceAndDetails__buttonsContainer"
			>
				<router-link
					to="/details"
					class="body__app__homeContainer__main__contentContainer__itemContainer__item__priceAndDetails__buttonsContainer_DetailButton"
				>
					VÍCE
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Item',
};
</script>

<style></style>
