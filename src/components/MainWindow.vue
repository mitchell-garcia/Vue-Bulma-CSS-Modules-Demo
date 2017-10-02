<script lang="ts">
import Vue from 'vue';
import { Component, Inject, Prop, Model } from 'vue-property-decorator';

@Component
export default class MainWindow extends Vue {
	
}
</script>

<template>
<div :class="$style.container">
	<router-view name="emailList"></router-view>
	<router-view name="emailContent"></router-view>
</div>
</template>

<style module>
.container {
	composes: column columns from '@/styles/bulma.css';
}
</style>