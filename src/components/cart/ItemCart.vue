<template>
	<div
		class="body__app__cartContainer__detailCard__cartItems__item"
	>
		<!-- img -->
		<div
			class="body__app__cartContainer__detailCard__cartItems__item__leftContainer"
		>
			<img
				:src="
					require(`@/assets/img/itemImg/${this.itemData.frontImg}`)
				"
				alt=""
			/>

			<router-link
				class="body__app__cartContainer__detailCard__cartItems__item__leftContainer__nameLinke"
				:to="`/polozky/${this.item._id}`"
				>{{ itemData.name }}</router-link
			>
		</div>

		<div
			class="body__app__cartContainer__detailCard__cartItems__item__rightContainer"
		>
			<div
				class="body__app__cartContainer__detailCard__cartItems__item__rightContainer__container"
			>
				<div
					class="body__app__cartContainer__detailCard__cartItems__item__rightContainer__container__button"
					:class="{
						body__app__cartContainer__detailCard__cartItems__item__rightContainer__container__count___available:
							this.quantity - 1 > 0,
					}"
					@click="changeQuantity(-1)"
				>
					<font-awesome-icon
						icon="fa-solid fa-angle-left"
					/>
				</div>
				<div
					class="body__app__cartContainer__detailCard__cartItems__item__rightContainer__container__count"
				>
					{{ quantity }}
				</div>
				<div
					class="body__app__cartContainer__detailCard__cartItems__item__rightContainer__container__button"
					:class="{
						body__app__cartContainer__detailCard__cartItems__item__rightContainer__container__count___available:
							this.quantity + 1 <= 99,
					}"
					@click="changeQuantity(1)"
				>
					<font-awesome-icon
						icon="fa-solid fa-angle-right"
					/>
				</div>
			</div>
			<p
				class="body__app__cartContainer__detailCard__cartItems__item__rightContainer__price"
			>
				{{ itemPrice }} Kč
			</p>
			<div
				class="body__app__cartContainer__detailCard__cartItems__item__rightContainer__remove"
				@click="removeFromCart"
			>
				<font-awesome-icon
					icon="fa-solid fa-xmark"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ItemCart',
	props: {
		item: Object,
	},
	methods: {
		changeQuantity(change) {
			if (
				this.quantity + change > 0 &&
				this.quantity + change <= 100
			)
				this.quantity = change;
		},
		removeFromCart() {
			this.$store.commit(
				'removeFromCart',
				this.item._id
			);
		},
	},

	computed: {
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

		// price for each item times the quantity
		itemPrice() {
			return this.item.quantity * this.itemData.price;
		},

		// get the right data from the id
		itemData() {
			for (const property of this.$store.state
				.items) {
				if (property._id === this.item._id) {
					return property;
				}
			}
			this.$router.push({name: 'NotFound'});
		},
	},
};
</script>

<style></style>
