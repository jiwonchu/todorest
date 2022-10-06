<template>
  <div v-for="(item, index) in items" v-bind:key="index" class="card mt-2">
    <slot :item="item" :index="index"></slot>
  </div>
</template>

<script>
export default {
  props: ["items"],
  setup() {
    return {};
  },
};
</script>

<style></style>
