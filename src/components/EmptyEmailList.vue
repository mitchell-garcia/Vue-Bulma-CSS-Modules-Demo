<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class EmptyEmailList extends Vue {
}
</script>

<template>
<div :class="$style.emptyList">
	<h1>Select an e-mail to the left to read it</h1>
</div>
</template>

<style module>
.emptyList {
	composes: column has-text-centered from '@/styles/bulma.css';
	background: #fff;
	display: flex;
	text-align: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center !important;
}

.emptyList h1 {
	text-align: center;
	width: 100%;
	color: #999;
}

</style>