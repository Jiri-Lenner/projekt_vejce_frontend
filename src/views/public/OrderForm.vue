<template>
	<div class="body__app__orderContainer">
		<div class="body__app__orderContainer__goBackNav">
			<div
				class="body__app__cartContainer__goBackNav__back"
				@click="$router.go(-1)"
			>
				ZPĚT
			</div>
		</div>
		<div
			class="body__app__orderContainer__formContainer"
		>
			<!-- Form - Shipping -->
			<div
				class="body__app__orderContainer__formContainer__formCover"
			>
				<h2>Doručovací údaje</h2>
				<form
					class="body__app__orderContainer__formContainer__formCover__form"
					action=""
				>
					<h3>Osobní Údaje</h3>
					<input
						placeholder="Jméno a Příjmení"
						type="text"
					/>

					<input
						type="email"
						placeholder="Email"
						v-model="email"
					/>

					<input
						type="tel"
						placeholder="Telefon"
					/>
					<h3>Adresa</h3>
					<input
						placeholder="Ulice a č. p."
						type="text"
					/>
					<input placeholder="Obec" type="text" />
					<input placeholder="PSČ" type="text" />
					<h3>Platba</h3>
					<div
						class="body__app__orderContainer__formContainer__formCover__form__buttons"
					>
						<div
							class="body__app__orderContainer__formContainer__formCover__form__previousButtonContainer"
						>
							<router-link
								class="body__app__orderContainer__formContainer__formCover__form__previousButton body__app__orderContainer__formContainer__formCover__form__previousButton___off"
								to="/kosik/formular"
							>
								ZPĚT
							</router-link>
						</div>
						<div
							class="body__app__orderContainer__formContainer__formCover__form__continueButtonContainer"
						>
							<router-link
								class="body__app__orderContainer__formContainer__formCover__form__continueButton body__app__orderContainer__formContainer__formCover__form__continueButton___off"
								to="/kosik/formular"
							>
								OBJEDNAT
							</router-link>
						</div>
					</div>
				</form>
			</div>
			<!-- img -->
			<div
				class="body__app__orderContainer__formContainer__img"
			>
				<img
					src="@/assets/img/pageAssets/kraslice.jpg"
					alt=""
				/>
				<div
					class="body__app__orderContainer__formContainer__img__cover"
				></div>
			</div>
		</div>
		<div
			class="body__app__orderContainer__bottomSpace"
		></div>
	</div>
</template>

<script>
export default {
	name: 'OrderForm',
	data() {
		return {
			email: '',
			tel: '',
		};
	},
};
</script>

<style></style>
