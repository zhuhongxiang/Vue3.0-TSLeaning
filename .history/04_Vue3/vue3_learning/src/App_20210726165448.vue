<template>
  <h2>toRefs的使用</h2>
  <h3>name:{{ state.name }}</h3>
  <h3>age:{{ state.age }}</h3>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  setup() {
    const state = reactive({
      name: "zilaiye",
      age: 47,
    });

    return {
      state,
    };
  },
});
</script>

<style scoped>
</style>