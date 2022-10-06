<template>
  <div class="container">
    <h1>Todo Create</h1>
    <TodoForm />
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm.vue";
export default {
  components: {
    TodoForm,
  },
  emits: ["new-todo-toast", "new-todo-fail-toast", "err-subject-toast"],
  setup() {
    return {};
  },
};
</script>

<style></style>
