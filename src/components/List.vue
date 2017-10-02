<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { Component, Prop } from 'vue-property-decorator';
import { dispatchFetchEmails, getEmails, getIsLoading, getIsInitialLoad } from '@/store';

@Component
export default class List extends Vue {
	mounted() {
		const isInitial = getIsInitialLoad(this.$store);
		if (isInitial) {
			dispatchFetchEmails(this.$store);
		}
	}

	get items() {
		return getEmails(this.$store);
	}

	get isLoading() {
		return getIsLoading(this.$store);
	}

	stringTrimmer(string) {
	}
}
</script>

<template>
	<div :class="$style.listContainer">
		<div :class="$style.loadingContainer" v-if="isLoading">
			<div>
				<div :class="$style.loadingIcon"></div>
				Loading
			</div>
		</div>
		<div :class="$style.email" v-for="item in items" :key="item.id">
			<div :class="$style.emailContainer">
				<div :class="$style.imgContainer">
					<img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" class="email-avatar" src="././img/common/tilo-avatar.png">
				</div>

				<div :class="$style.contentContainer">
					<h5 class="email-name">{{item.name}}</h5>
					<h4 class="email-subject">{{item.email}}</h4>
				</div>
			</div>

			<p :class="$style.emailDesc">
				{{item.contents.trim('100')}}
			</p>
		</div>
	</div>
</template>

<style module>
.listContainer {
	composes: column is-4 from '@/styles/bulma.css';
	border-right: 1px solid #ddd;
	height: 100%;
	overflow: auto;
}

.loadingContainer {
	height: 100%;
	display: flex;
	align-items: center !important;
}

.loadingContainer > div {
	width: 100%;
	text-align: center;
	color: #999;
}

.loadingIcon {
	text-align: center;
	font-size: 40px;
	margin: 0 auto;
	margin-bottom: 15px;
	composes: loader from '@/styles/bulma.css';
}

.email + .email {
	margin-bottom: 30px;
}

.emailContainer {
	composes: columns is-gapless from '@/styles/bulma.css';
}

.emailContainer h5 {
	font-weight: bold;
}

.emailDesc {
	margin-top: -10px;
}

.imgContainer {
	composes: column is-3 from '@/styles/bulma.css';
	border-radius: 3px;
	overflow: hidden;
}

.contentContainer {
	composes: column from '@/styles/bulma.css';
}
</style>