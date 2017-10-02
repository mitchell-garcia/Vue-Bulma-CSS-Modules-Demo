declare module "*.vue" {
	import Vue from "vue";
	import { ComponentOptions } from "vue";
	export default typeof Vue as ComponentOptions<Vue>;
}