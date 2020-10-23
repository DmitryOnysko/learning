import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import info from "@/store/info";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  getters: {
    error: s => s.error // s - state
  },
  modules: {
    auth,
    info
  }
  // actions: {},
});
