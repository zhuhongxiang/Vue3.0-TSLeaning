<template>
  <h2>App父级组件</h2>
  <h3>msg:{{ msg }}</h3>
  <button @click="msg += '==='">更新数据</button>
  <hr />
  <Child :msg="msg" msg2="真想" @xxx="xxx" />
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
    function xxx(txt: string) {
      msg.value += txt;
    }
    return {
      msg,
      xxx,
    };
  },
});
</script>

<style scoped>
</style>