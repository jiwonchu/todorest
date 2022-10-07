export default {
  namespaced: true,
  state: {
    email: "",
    profile: {},
    loginState: false,
  },
  actions: {
    loginKKO({ commit }, { email, profile }) {
      commit("LOGIN_KKO", { email, profile });
    },
    logOutKKO({ commit }) {
      commit("LOGOUT_KKO");
    },
  },
  mutations: {
    LOGIN_KKO(state, payload) {
      state.email = payload.email;
      state.profile = payload.profile;
      state.loginState = true;
    },
    LOGOUT_KKO(state) {
      state.email = "";
      state.profile = {};
      state.loginState = false;
    },
  },
  getters: {
    getEmail(state) {
      return state.email;
    },
    getProfile(state) {
      return state.profile;
    },
    getLoginState(state) {
      return state.loginState;
    },
  },
};
