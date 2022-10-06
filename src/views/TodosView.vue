<template>
  <div class="container">
    <h2>Todo 수정</h2>
    <TodoForm :editing="true" />
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";
export default {
  components: {
    TodoForm,
  },
  emits: [],
  setup() {
    return {};
  },
};
// 생명 주기 코드(LifeCycle Hooks)
//  화면에 보여지기전(등록) 단계
// : 화면을 보여주기 전에 데이터를 준비하는 Hook
// onBeforeMount(() => {
//   console.log("onBeforeMount");
//   console.log(document.querySelector("#test"));
// });
// 화면에 보여지는 단계
// onMounted(() => {
//   console.log("onMounted");
//   console.log(document.querySelector("#test"));
// });
// 화면 갱신이 되기 전 단계
// onBeforeUpdate(() => {
//   console.log("onBeforeUpdate");
// });
// 화면 갱신이 되고 난 후
// onUpdated(() => {
//   console.log("onUpdated");
// });
// 컴포넌트가 화면에서 제거되기 전 준비 단계
// : 메모리를 정리 하는곳
// onBeforeUnmount(() => {
//   console.log("onBeforemount");
// });
// 컴포넌트가 완전히 제거 되었을 때
// onUnmounted(() => {
//   clearTimeout(toastTimer.value);
//   // console.log("onUnmounted");
// });
</script>

<style></style>
