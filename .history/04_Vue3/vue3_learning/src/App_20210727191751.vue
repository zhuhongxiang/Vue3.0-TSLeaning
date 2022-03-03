<template>
  <h2>App父级组件</h2>
  <hr />
  <ModalButton />
</template>
<script lang='ts'>
import { defineComponent, reactive } from "vue";
import ModalButton from "./ModalButton.vue";
export default defineComponent({
  name: "App",
  props: {},
  components: { ModalButton },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>