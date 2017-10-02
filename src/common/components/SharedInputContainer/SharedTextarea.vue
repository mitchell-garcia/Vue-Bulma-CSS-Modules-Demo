<template>
	<textarea :value="value" @input="updateValue($event)" :class="$style.textarea" /> 
</template>

<style module>
.textarea {
	composes: textarea from '@/styles/bulma.css';
}
</style>

<script lang="ts">
import Vue from 'vue';
import CommonFormClass from './Common';
import { Component } from 'vue-property-decorator';

@Component
export default class SharedTextarea extends CommonFormClass {};

Vue.component('SharedTextarea', SharedTextarea);
</script>