<template>
  <h2>reactive和ref的细节问题</h2>
  <h3>m1:{{ m1 }}</h3>
  <h3>m2:{{ m2 }}</h3>
  <h3>m3:{{ m3 }}</h3>
  <hr />
  <button @click="update">更新数据</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "App",
  props: {},
  components: {},
  setup() {
    // 通过ref的方式设置的数据
    const m1 = ref("abc");
    const m2 = reactive({});
    // ref也可以传入对象吗？
    const m3 = ref({});
    const update = () => {};
    return {
      m1,
      m2,
      m3,
      update,
    };
  },
});
</script>

<style scoped>
</style>