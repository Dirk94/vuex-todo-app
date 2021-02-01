import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	// This is the state of the application.
	state: {
		todos: [
			{
				completed: false,
				message: "Get some milk 🐄",
			},
			{
				completed: false,
				message: "Become better at singing 🎶"
			}
		],
	},

	mutations: {},
	actions: {},
});