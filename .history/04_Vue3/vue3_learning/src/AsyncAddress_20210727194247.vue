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
  setup() {
    return axios.get("data/address.json").then((response) => {
      return {
        data: response.data,
      };
    });
  },
});
</script>

<style scoped>
</style>