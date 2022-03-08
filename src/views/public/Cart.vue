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
			>
				<h2>Košík</h2>
				<!-- <div>Prazdno</div> -->
				<ItemCart
					v-for="(item, i) of this.$store.state
						.cart"
					:key="i"
					:item="item"
				/>
			</div>
			<aside
				class="body__app__cartContainer__detailCard__priceSummary"
			>
				<h2>Přehled</h2>
				<div
					class="body__app__cartContainer__detailCard__priceSummary__detailContainer"
				>
					<p>Položek</p>
					<p>
						{{ this.$store.state.cart.length }}
					</p>
				</div>
				<div
					class="body__app__cartContainer__detailCard__priceSummary__detailContainer"
				>
					<p>Cena za dopravu</p>
					<p>50Kč</p>
				</div>
				<div
					class="body__app__cartContainer__detailCard__priceSummary__detailContainer"
				>
					<p>Celková cena</p>
					<p>{{}}Kč</p>
				</div>
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
    price(){
      let fullPrice = 0;
      for (const cartItem of this.$store.state
					.cart) {

            // get the items price

            /// get the item

          fullPrice += cartItem.quantity *
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
