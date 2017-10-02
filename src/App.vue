<script lang="ts">
import Vue from 'vue';
import { Component, Inject, Prop, Model } from 'vue-property-decorator';

@Component
export default class App extends Vue {
	@Model('test')
	test: string;

	@Prop()
	anystring: string;
}
</script>

<template>
<div :class="$style.appContainer">
	<div :class="$style.container">
		<router-view name="sidebar"></router-view>
		<router-view name="main"></router-view>
	</div>
</div>
</template>

<style module>
.appContainer {
	composes: container is-fullhd from '@/styles/bulma.css';
	height: 100%;
}

.container {
	composes: columns is-gapless from '@/styles/bulma.css';
	height: 100%;
}
</style>

<style>
html, body {
	font-family: 'Asap';
	height: 100%;
	margin:0;
}

body *,
button,
input {
	font-family: 'Asap' !important;
}

.demo-app {
	height: 100%;
	background: #efefef;
}
</style>