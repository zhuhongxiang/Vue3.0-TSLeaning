<template>
  <h2>AsyncAddress组件</h2>
  <h3>{{ data }}</h3>
</template>

<script lang='ts'>
import axios from "axios";
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "AsyncAddress",
  props: {},
  components: {},
  //
  async setup() {
    const result = await axios.get("data/address.json");
    return {
      data: result.data,
    };
  },
});
</script>

<style scoped>
</style>