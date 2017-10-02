<script lang="ts">
import Vue from 'vue';
import { Component, Inject, Prop, Model } from 'vue-property-decorator';

@Component
export default class Welcome extends Vue {
	@Prop()
	anystring: string;
}
</script>

<template>
<div class="pure-u-1-3">
	<h1>This is a routed compnoent</h1>
</div>
</template>

<style scoped>
h1 { 
	color: #b30838;
}
</style>