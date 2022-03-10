<template>
	<div class="body__app__cartContainer">
		<div class="body__app__cartContainer__goBackNav">
			<router-link
				to="/"
				class="body__app__cartContainer__goBackNav__back"
			>
				ZPĚT
			</router-link>
		</div>
		<div class="body__app__cartContainer__detailCard">
			<div
				class="body__app__cartContainer__detailCard__cartItems"
				:class="{
					body__app__cartContainer__detailCard__cartItems___off:
						overallQuantity == 0,
				}"
			>
				<h2>Košík</h2>
				<div
					class="body__app__cartContainer__detailCard__cartItems___empty"
					v-if="overallQuantity == 0"
				>
					<img
						src="@/assets/img/pageAssets/warning.png"
						alt=""
					/>

					<h2>Prázdný košík!</h2>
				</div>
				<!-- <div>
					<p
						v-if="overallQuantity == 0"
						class="body__app__cartContainer__detailCard__cartItems___empty"
					>
						Prázdný košík!
					</p>
				</div> -->
				<ItemCart
					v-for="(item, i) of this.$store.state
						.cart"
					:key="i"
					:item="item"
				/>
			</div>
			<aside
				class="body__app__cartContainer__detailCard__priceSummary"
				v-if="overallQuantity != 0"
			>
				<h2>Přehled</h2>
				<div
					class="body__app__cartContainer__detailCard__priceSummary__detailContainer"
				>
					<p>{{ quantityString }}</p>
					<p>
						{{
							price -
							$store.state.shippingPrice
						}}Kč
					</p>
				</div>
				<div
					class="body__app__cartContainer__detailCard__priceSummary__detailContainer"
				>
					<p>Cena za dopravu</p>
					<p>50Kč</p>
				</div>
				<div
					class="body__app__cartContainer__detailCard__priceSummary__separator"
				></div>
				<div
					class="body__app__cartContainer__detailCard__priceSummary__detailContainer"
				>
					<p>Celková cena</p>
					<p>{{ price }}Kč</p>
				</div>
				<router-link
					to="/kosik/formular"
					class="body__app__cartContainer__detailCard__priceSummary___orderButton"
				>
					Objednat
				</router-link>
			</aside>
		</div>
	</div>
</template>

<script>
// cart item
import ItemCart from '@/components/cart/ItemCart.vue';

export default {
	name: 'Cart',
	components: {
		ItemCart,
	},
	methods: {},
	computed: {
		// calculate the overall price
		price() {
			let fullPrice = this.$store.state.shippingPrice;
			for (const cartItem of this.$store.state.cart) {
				for (const item of this.$store.state
					.items) {
					if (item._id === cartItem._id) {
						fullPrice +=
							cartItem.quantity * item.price;
					}
				}
			}
			return fullPrice;
		},
		// calculate the the number of items
		overallQuantity() {
			let overallQuantity = 0;
			for (const cartItem of this.$store.state.cart) {
				overallQuantity += cartItem.quantity;
			}
			return overallQuantity;
		},
		// quantity string
		quantityString() {
			if (
				this.overallQuantity == 0 ||
				this.overallQuantity >= 5
			) {
				return `${this.overallQuantity} Položek`;
			} else if (this.overallQuantity == 1) {
				return `1 Položka`;
			} else {
				return `${this.overallQuantity} Položky`;
			}
		},

		quantity: {
			get: function () {
				for (const cartItem of this.$store.state
					.cart) {
					if (cartItem._id === this.item._id) {
						return cartItem.quantity;
					}
				}
			},
			set: function (change) {
				this.$store.dispatch('addToCart', {
					_id: this.item._id,
					quantity: change,
				});
			},
		},
	},
};
</script>

<style scoped lang="scss"></style>
