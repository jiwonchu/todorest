export default {
  namespaced: true,
  state: {
    //toastBox 관련 배열로 저장
    toasts: [],
  },
  actions: {
    triggerToast({ commit }, { message, color }) {
      //메세지 및 색상 업데이트
      commit("ADD_TOAST", {
        message,
        color,
      });
      // 메세지 업데이트
      commit("UPDATE_TOAST_MESSAGE", message);
      // 색상 업데이트
      commit("UPDATE_TOAST_TYPE", color);

      //타이머 업데이트
      setTimeout(() => {
        //목록 toasts 제일 앞쪽, 즉 배열[0] 삭제
        commit("REMOVE_TOAST");
      }, 3000);
    },
  },
  mutations: {
    ADD_TOAST(state, payload) {
      //payload =>message,color
      state.toasts.push(payload);
    },
    REMOVE_TOAST(state) {
      state.toasts.shift();
    },
  },
};
