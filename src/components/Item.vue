<template>
	<div
		class="body__app__homeContainer__main__contentContainer__itemContainer__item"
	>
		<div v-if="this.content.like">
			<font-awesome-icon
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__likeButton"
				icon="fa-solid fa-heart"
			/>
		</div>
		<img
			class="body__app__homeContainer__main__contentContainer__itemContainer__item__itemBackgroundImg"
			:src="
				require(`@/assets/img/itemImg/${this.content.frontImg}`)
			"
			alt=""
		/>
		<div
			class="body__app__homeContainer__main__contentContainer__itemContainer__item__description"
		>
			<h1
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__description__heading"
			>
				{{ content.name }}
			</h1>
			<p
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__description__description"
			>
				{{ content.description }}
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
					{{ eggType }}
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
					{{ packageQuantity }}
				</p>
			</div>
		</div>
		<div
			class="body__app__homeContainer__main__contentContainer__itemContainer__item__priceAndDetails"
		>
			<p
				class="body__app__homeContainer__main__contentContainer__itemContainer__item__priceAndDetails__price"
			>
				{{ content.price }} Kč
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
	props: {
		content: Object,
	},
	computed: {
		packageQuantity() {
			const eggCount = this.content.packageQuantity;
			if (eggCount < 5) {
				return `${eggCount} kraslice v jednom balení`;
			} else if (eggCount > 4) {
				return `${eggCount} kraslic v jednom balení`;
			}
		},
		eggType() {
			const eggTypes = this.content.eggType;
			if (eggTypes.length > 1) {
				let eggTypesString = '';
				for (const [
					i,
					eggType,
				] of eggTypes.entries()) {
					eggTypesString += `${eggType}, `;
				}
				return eggTypesString;
			} else {
				return eggTypes[0];
			}
		},
	},
};
</script>

<style></style>
