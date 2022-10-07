import { computed } from "vue";
import { useStore } from "vuex";
export const useToast = () => {
  const store = useStore();
  //안내상자에 보여지는 목록 관리
  const toasts = computed(() => store.state.toast.toasts);

  // 안내상자 실행 메소드
  const triggerToast = (message = "", color = "success") => {
    store.dispatch("toast/triggerToast", { message, color });
  };
  // 컴포넌트 이동으로 인하여 화면에서 없어졌을때 실행
  // onUnmounted(() => {
  //   clearTimeout(toastTimer.value);
  // });
  return {
    triggerToast,
    toasts,
  };
};
