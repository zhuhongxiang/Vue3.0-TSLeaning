<template>
  <h2>customRef的使用</h2>
  <input type="text" v-model="keyword" />
  <p>{{ keyword }}</p>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  setup() {
    const keyword = ref("abc");
    return {
      keyword,
    };
  },
});
</script>

<style scoped>
</style>