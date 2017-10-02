<template>
	<div :class="[$style.container, classes]">
		<slot>
		</slot>
		<small :class="$style.errorTextContainer">
			<span v-if="error" :class="$style.errorText">
				{{error}}
			</span>
		</small>
	</div>
</template>

<style module>
.container { 
	composes: control from '@/styles/bulma.css';
}

.text {
	composes: help from '@/styles/bulma.css';
}

.errorTextContainer {
	height: 31px;
	overflow: hidden;
	display: block;
}

.errorText {
	composes: text;
	composes: is-danger from '@/styles/bulma.css';
	composes: animated fadeInDown from '@/styles/animate.css';
}
</style>

<script lang="ts">
import * as _ from 'lodash';
import { Component, Prop  } from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class SharedInputContainer extends Vue {
	/**
	 * Defaults
	 */
	value = '';
	input: Element;
	inputInstance = null;
	hasSelect = null;
	hasPlaceholder = false;
	hasFile = false;
	isDisabled = false;
	isRequired = false;
	isFocused = false;

	@Prop()
	error: string;

	mounted() {
		this.input = this.$el.querySelectorAll('input, textarea, select')[0];

		if (!this.input) {
			this.$destroy();
			throw new Error('Missing input/select/textarea element inside SharedInputContainer');
		}
	}

	hasValue() {
		if (_.isArray(this.value)) {
			return this.value.length > 0;
		}

		return Boolean(this.value);
	}

	classes() {
		return {
			// 'md-input-inline': this.mdInline,
			// 'md-has-password': this.mdHasPassword,
			// 'md-clearable': this.mdClearable,
			'md-has-select': this.hasSelect,
			'md-has-file': this.hasFile,
			'md-has-value': this.hasValue,
			'md-input-placeholder': this.hasPlaceholder,
			'md-input-disabled': this.isDisabled,
			'md-input-required': this.isRequired,
			'md-input-focused': this.isFocused
		}
	}

	isInput() {
		if (this.input && this.input.tagName) {
			return this.input && this.input.tagName.toLowerCase() === 'input';
		}
	}

	clearInput() {
		this.inputInstance.$el.value = '';
		this.inputInstance.$emit('input', '');
		this.setValue('');
	}

	setValue(value: string) {
		this.value = value;
	}
}

Vue.component('SharedInputContainer', SharedInputContainer);
</script>