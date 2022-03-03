<template>
  <h2>AsyncComponent子级组件</h2>
  <h3>msg:{{ msg }}</h3>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "AsyncComponent",
  props: {},
  components: {},
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          msg: "what are you doing",
        });
      }, 2000);
    });
    // return {};
  },
});
</script>

<style scoped>
</style>