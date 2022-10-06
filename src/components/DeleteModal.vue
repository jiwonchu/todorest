<template>
  <ModalWin>
    <template #title> Todo Delete </template>
    <!-- #title == v-slot:title -->
    <template #body> 내용을 삭제하시겠습니까? </template>
    <template #footer>
      <button type="button" class="btn btn-danger" @click="onDelete">
        Delete
      </button>
      <button type="button" class="btn btn-secondary" @click="onClose">
        Close
      </button>
    </template>
  </ModalWin>
</template>

<script>
import ModalWin from "@/components/ModalWin.vue";
export default {
  emits: ["close-modal", "delete"],
  components: {
    ModalWin,
  },
  setup(props, { emit }) {
    const onClose = () => {
      emit("close-modal", {});
    };
    const onDelete = () => {
      emit("delete", {});
    };
    return {
      onClose,
      onDelete,
    };
  },
};
</script>

<style></style>
