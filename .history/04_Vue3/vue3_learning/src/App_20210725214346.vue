<template>
  <h2>App父级组件</h2>
  <h3>msg:{{ msg }}</h3>
  <hr />
  <Child />
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
import Child from "./components/Child.vue";

export default defineComponent({
  name: "App",
  props: {},
  components: { Child },
  setup() {
    const msg = ref("what are you doing?");
    return {
      msg,
    };
  },
});
</script>

<style scoped>
</style>