export default {
  namespaced: true,
  state: {
    // toastBox 관련
    showToast: false,
    toastMessage: "",
    toastType: "",
  },
  actions: {
    triggerToast({ commit }, { message, color }) {
      // 메세지 업데이트
      commit("UPDATE_TOAST_MESSAGE", message);
      // 색상 업데이트
      commit("UPDATE_TOAST_TYPE", color);
      // 상태 업데이트
      commit("UPDATE_TOAST_STATE", true);
      //타이머 업데이트
      setTimeout(() => {
        commit("UPDATE_TOAST_MESSAGE", "");
        commit("UPDATE_TOAST_TYPE", "");
        commit("UPDATE_TOAST_STATE", false);
      }, 3000);
    },
  },
  mutations: {
    UPDATE_TOAST_MESSAGE(state, payload) {
      state.toastMessage = payload;
    },
    UPDATE_TOAST_TYPE(state, payload) {
      state.toastType = payload;
    },
    UPDATE_TOAST_STATE(state, payload) {
      state.showToast = payload;
    },
  },
};
