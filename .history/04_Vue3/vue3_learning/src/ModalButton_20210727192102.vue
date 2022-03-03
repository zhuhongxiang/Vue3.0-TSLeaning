<template>
  <button @click="modalOpen = true">打开一个对话框</button>

  <!--对话框代码-->
  <teleport  to="body">
      <div v-if="modalOpen">
    <div>这是对话框</div>
    <button @click="modalOpen = false">关闭对话框</button>
  </div>
  <teleport />
  
</template>

<script lang='ts'>
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "ModalButton",
  props: {},
  components: {},
  setup() {
    // 控制对话框显示或隐藏
    const modalOpen = ref(false);

    return {
      modalOpen,
    };
  },
});
</script>

<style scoped>
</style>