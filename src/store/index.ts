import Vue from 'vue';
import Vuex from 'vuex';
import { Store } from 'vuex';
import { getStoreAccessors } from 'vuex-typescript';
import apiClient from '@/common/apiClient';

Vue.use(Vuex);

const actions = {
	fetchEmails: (store) => {
		store.commit('FETCH_EMAILS_PENDING');
		return apiClient.getEmails().then((data) => {
			store.commit('FETCH_EMAILS_SUCCESS', data);
		});
	}
};

const getters = {
	emails(store) {
		return store.emails;
	},
	isLoading(store) {
		return store.isEmailsLoading;
	},
	isInitialLoad(store) {
		return !store.isEmailsLoading && (store.emails.length === 0);
	}
};

const state = {
	isEmailsLoading: false,
	emails: []
};

const mutations = {
	FETCH_EMAILS_PENDING: (store) => {
		store.isEmailsLoading = true;
	},
	FETCH_EMAILS_SUCCESS: (store, emails: any) => {
		store.emails = emails;
		store.isEmailsLoading = false;
	},
	FETCH_EMAILS_FAIL: (store) => {
		store.isEmailsLoading = false;
	}
};

export default new Store({
	actions,
	mutations,
	state,
	getters
});

const { commit, read, dispatch } = getStoreAccessors<any, any>(''); // We pass namespace here, if we make the module namespaced: true.

export const getEmails = read(getters.emails);
export const getIsLoading = read(getters.isLoading);
export const getIsInitialLoad = read(getters.isInitialLoad);

export const dispatchFetchEmails = dispatch(actions.fetchEmails);