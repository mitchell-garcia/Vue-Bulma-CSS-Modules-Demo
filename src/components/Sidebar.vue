<script lang="ts">
import Vue from 'vue';
import { Component, Inject, Prop, Model } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
	get items() {
		return [
			{
				name: 'Inbox',
				notifications: 3
			},
			{
				name: 'Sent'
			}
		]
	}
}
</script>

<template>
<div :class="$style.sidebar">
	<div :class="$style.sidebarComposeBtnContainer">
		<div @click="showModal()" :class="$style.composeBtn">
			Compose
		</div>
	</div>
	<div :class="$style.sidebarItem" v-for="item in items" :key="item.name">
		{{item.name}} <span v-if="item.notifications">({{item.notifications}})</span>
	</div>
</div>
</template>

<style module>
.sidebar {
	composes: column is-2 from '@/styles/bulma.css';
	height: 100%;
	background: rgb(37, 42, 58);
	max-width: 150px;
	padding: 20px;
}

.sidebarItem {
	display: block;
	color: #fff;
	padding: 8px 20px;
	font-size: 18px;
}

.sidebarItem:hover {
	background: rgba(255, 255, 255, .1);
	cursor: pointer;
}

.sidebarItem span {
	color: #ddd;
}

.sidebarComposeBtnContainer {
	padding: 60px 20px 20px 20px;
	text-align: center;
}

.composeBtn {
	composes: button is-small is-primary from '@/styles/bulma.css';
	border-radius: 99px !important;
	padding: 4px 12px !important;
	font-size: 16px !important;
	height: auto !important;
	margin: 0 auto !important;
	width: 100%;
}
</style>