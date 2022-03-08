<template>
	<div class="body__app__detailContainer">
		<div class="body__app__detailContainer__goBackNav">
			<div
				class="body__app__detailContainer__goBackNav__back"
				@click="$router.go(-1)"
			>
				ZPĚT
			</div>
		</div>
		<div class="body__app__detailContainer__detailCard">
			<div
				class="body__app__detailContainer__detailCard__imgCarousel"
			>
				<img
					:src="
						require(`@/assets/img/itemImg/${
							this.itemData.imgs[
								this.imgIndex
							]
						}`)
					"
					alt=""
				/>

				<div
					class="body__app__detailContainer__detailCard__imgCarousel__button"
					@click="changeImg(-1)"
					v-if="this.imgArrIf"
				>
					<font-awesome-icon
						icon="fa-solid fa-angle-left"
					/>
				</div>

				<div
					class="body__app__detailContainer__detailCard__imgCarousel__button"
					@click="changeImg(1)"
					v-if="this.imgArrIf"
				>
					<font-awesome-icon
						icon="fa-solid fa-angle-right"
					/>
				</div>
			</div>
			<div
				class="body__app__detailContainer__detailCard__details"
			>
				<h2>{{ itemData.name }}</h2>
				<p>{{ itemData.description }}</p>
				<div
					class="body__app__detailContainer__detailCard__details__predefinedDescription"
				>
					<!-- Egg types -->
					<div
						class="body__app__detailContainer__detailCard__details__predefinedDescription__detailContainer"
					>
						<font-awesome-icon
							class="body__app__detailContainer__detailCard__details__predefinedDescription__detailContainer__icon"
							icon="fa-solid fa-egg"
						/>
						<p>{{ eggType }}</p>
					</div>
					<!-- Package quantity -->
					<div
						class="body__app__detailContainer__detailCard__details__predefinedDescription__detailContainer"
					>
						<font-awesome-icon
							class="body__app__detailContainer__detailCard__details__predefinedDescription__detailContainer__icon"
							icon="fa-solid fa-box-open"
						/>
						<p>{{ packageQuantity }}</p>
					</div>
				</div>
				<!-- quantity counter and cart-->
				<div
					class="body__app__detailContainer__detailCard__details__quantityAndBuy"
				>
					<div
						class="body__app__detailContainer__detailCard__details__quantityAndBuy__container"
					>
						<div
							class="body__app__detailContainer__detailCard__details__quantityAndBuy__container__button"
							@click="changeQuantity(-1)"
							:class="{
								body__app__detailContainer__detailCard__details__quantityAndBuy__container__count___available:
									this.quantity - 1 > 0,
							}"
						>
							<font-awesome-icon
								icon="fa-solid fa-angle-left"
							/>
						</div>
						<div
							class="body__app__detailContainer__detailCard__details__quantityAndBuy__container__count"
						>
							{{ quantity }}
						</div>
						<div
							class="body__app__detailContainer__detailCard__details__quantityAndBuy__container__button"
							@click="changeQuantity(1)"
							:class="{
								body__app__detailContainer__detailCard__details__quantityAndBuy__container__count___available:
									this.quantity + 1 <= 99,
							}"
						>
							<font-awesome-icon
								icon="fa-solid fa-angle-right"
							/>
						</div>
					</div>
					<!-- like and add to cart -->
					<div
						class="body__app__detailContainer__detailCard__details__quantityAndBuy__container"
					>
						<div
							class="body__app__detailContainer__detailCard__details__quantityAndBuy__container__like__button"
							id="heart"
							@click="like"
							:class="{
								body__app__detailContainer__detailCard__details__quantityAndBuy__container__like__button___selected:
									this.$store.state.liked.includes(
										this._id
									),
							}"
						>
							<font-awesome-icon
								icon="fa-regular fa-heart"
								v-if="
									!this.$store.state.liked.includes(
										this._id
									)
								"
							/>
							<font-awesome-icon
								icon="fa-solid fa-heart"
								v-if="
									this.$store.state.liked.includes(
										this._id
									)
								"
							/>
						</div>

						<div
							class="body__app__detailContainer__detailCard__details__quantityAndBuy__container__addToCart"
							@click="addToCart"
						>
							PŘIDAT DO KOŠÍKU
							<font-awesome-icon
								icon="fa-solid fa-basket-shopping"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	props: {
		_id: String,
	},

	data() {
		return {
			quantity: 1,
			imgIndex: 0,
		};
	},

	components: {
		//HelloWorld,
	},

	methods: {
		changeQuantity(change) {
			if (
				this.quantity + change > 0 &&
				this.quantity + change <= 100
			)
				this.quantity += change;
		},
		like() {
			this.$store.commit('updateLiked', this._id);
		},
		addToCart() {
			this.$store.dispatch('addToCart', {
				_id: this._id,
				quantity: this.quantity,
			});
		},

		changeImg(change) {
			if (
				this.imgIndex + change >
				this.itemData.imgs.length - 1
			) {
				this.imgIndex = 0;
			} else if (this.imgIndex + change < 0) {
				this.imgIndex =
					this.itemData.imgs.length - 1;
			} else {
				this.imgIndex += change;
			}
		},
	},

	computed: {
		imgArrIf() {
			return this.itemData.imgs.length > 1;
		},
		// get the right data from the id
		itemData() {
			for (const item of this.$store.state.items) {
				if (item._id === this._id) {
					return item;
				}
			}
			this.$router.push({name: 'NotFound'});
		},
		// computed properties for the the information deck
		// Compute egg text for the item egg list
		eggType() {
			const eggTypes = this.itemData.eggType;
			if (eggTypes.length > 1) {
				let eggTypesString = '';
				for (const [
					i,
					eggType,
				] of eggTypes.entries()) {
					if (i == eggTypes.length - 1) {
						eggTypesString += `${eggType}`;
						break;
					}
					eggTypesString += `${eggType}, `;
				}
				return eggTypesString;
			} else {
				return eggTypes[0];
			}
		},
		// Compute the text for the item quantity
		packageQuantity() {
			const eggCount = this.itemData.packageQuantity;
			if (eggCount < 5) {
				return `${eggCount} kraslice v jednom balení`;
			} else if (eggCount > 4) {
				return `${eggCount} kraslic v jednom balení`;
			}
		},
	},
};
</script>
<style scoped lang="scss"></style>
