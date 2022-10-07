<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="d-flex justify-content-start">
        <RouterLink class="navbar-brand" :to="{ name: 'Home' }"
          >My Todo</RouterLink
        >
        <!-- <RouterLink class="nav-link" :to="{ name: 'Todos' }">Todos</RouterLink> -->
        <!-- <RouterLink class="nav-link" :to="{ name: 'TodoCreate' }"
          >Todo Create</RouterLink
        > -->
        <a class="nav-link" @click="gotoTodos" style="cursor: pointer">Todos</a>
        <a class="nav-link" @click="gotoTodoCreate" style="cursor: pointer"
          >Todo Create</a
        >
        <RouterLink class="nav-link" :to="{ name: 'About' }">About</RouterLink>
        <RouterLink class="nav-link" :to="{ name: 'Profile' }"
          >Profile</RouterLink
        >
        <a
          class="nav-link"
          href="https://github.com/tarolong2/todorest"
          target="_blank"
          >Github</a
        >
      </div>
      <div><Kakao /></div>
    </div>
  </nav>
</template>

<script>
import Kakao from "@/views/KakaoLogin.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: {
    Kakao,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const loginState = computed(() => store.getters["kakao/getLoginState"]);
    const gotoTodos = () => {
      if (!loginState.value) {
        alert("로그인을 하세요.");
      } else {
        router.push({
          name: "Todos",
        });
      }
    };
    const gotoTodoCreate = () => {
      if (!loginState.value) {
        alert("로그인을 하세요.");
      } else {
        router.push({
          name: "TodoCreate",
        });
      }
    };
    return {
      loginState,
      gotoTodos,
      gotoTodoCreate,
    };
  },
};
</script>

<style></style>
