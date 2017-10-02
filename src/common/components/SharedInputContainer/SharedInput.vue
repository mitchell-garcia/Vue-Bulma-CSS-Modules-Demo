<template>
	<input :type="type" :value="value" @input="updateValue($event)" :class="$style.input">
</template>

<style module>
.input {
	composes: input from '@/styles/bulma.css';
}
</style>

<script lang="ts">
import Vue from 'vue';
import CommonFormClass from './Common';
import { Component } from 'vue-property-decorator';

@Component
export default class SharedInput extends CommonFormClass {};

Vue.component('SharedInput', SharedInput);
</script>