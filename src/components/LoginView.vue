<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class LoginView extends Vue {
	$style: {
		submitBtnLoading: string;
		submitBtn: string;
	};

	email = '';
	test = '';
	dob = '';
	isLoading = false;
	isSuccess = false;

	validate() {
		this.isLoading = true;
		setTimeout(() => {
			this.$validator.validateAll().then((result) => {
				this.isLoading = false;
				if (result) {
					localStorage.setItem('IS_AUTHENTICATED', 'true');
					this.$router.push('/');
				}
			});
		}, 1000);
	}

	get btnClass() {
		if (this.isLoading) {
			return this.$style.submitBtnLoading;
		} else {
			return this.$style.submitBtn;
		}
	}
}
</script>

<template>
	<div :class="$style.modal">
		<div :class="$style.background"></div>
		<div :class="$style.content">
			<h1 :class="$style.title">Please Log In</h1>
			<form>
				<SharedInputContainer :error="errors.first('email')">
					<label for="email">E-Mail</label>
					<SharedInput name="email" type="email" v-model="email" v-validate="'required|email'" />
				</SharedInputContainer>

				<SharedInputContainer :error="errors.first('test')">
					<label for="test">Textarea</label>
					<SharedTextarea name="test" v-model="test" v-validate="'required'" />
				</SharedInputContainer>
				<button @click="validate" :class="btnClass" type="button">Login</button>
			</form>
		</div>
	</div>
</template>

<style module>
@value colors: "@/styles/common/colors.css";
@value blue, red, green from colors;

.modal {
	composes: modal from '@/styles/bulma.css';
	composes: is-active from '@/styles/bulma.css';
}

.background {
	composes: modal-background from '@/styles/bulma.css';
	background: #efefef;
}

.content {
	composes: animated fadeInUp from '@/styles/animate.css';
	background: #fff;
	border-radius: 3px;
	padding: 30px;
	box-shadow: 0 0 15px #ddd;
	width: 540px;
}

.title {
	font-size: 34px;
	margin-bottom: 15px;
}

.submitBtn {
	composes: button is-primary is-large from '@/styles/bulma.css';
	margin-top: 30px;
}

.submitBtnLoading {
	composes: submitBtn;
	composes: is-loading from '@/styles/bulma.css';
}
</style>