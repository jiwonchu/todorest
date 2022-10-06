<template>
  <div>
    <NavBar />
    <RouterView />
    <Transition name="fade">
      <ToastBox v-if="showToast" :message="toastMessage" :color="toastType" />
    </Transition>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import ToastBox from "@/components/ToastBox.vue";
import { useToast } from "@/composables/toast.js";
// import { useStore } from "vuex";
export default {
  components: {
    ToastBox,
    NavBar,
  },
  setup() {
    const { showToast, toastMessage, toastType } = useToast();
    return { showToast, toastMessage, toastType };
  },
};
</script>
<style scoped>
#app {
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
