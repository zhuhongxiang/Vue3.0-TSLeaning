<template>
  <li
    @mouseenter="mouseHandler(true)"
    @mouseleave="mouseHandler(false)"
    :style="{ backgroundColor: bgColor, color: myColor }"
  >
    <label>
      <input type="checkbox" v-model="todo.isCompleted" />
      <span>&nbsp;{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-if="isShow" @click="del">删除</button>
  </li>
</template>

<script lang='ts'>
import { computed, defineComponent, ref } from "vue";
import { Todo } from "../types/todo";
export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as () => Todo,
      required: true,
    },
  },
  components: {},
  setup(props) {
    // 背景色
    const bgColor = ref("white");
    // 前景色
    const myColor = ref("black");
    // 设置按钮默认不显示
    const isShow = ref(false);
    // 鼠标进入和离开事件的回调函数
    const mouseHandler = (flag: boolean) => {
      if (flag) {
        bgColor.value = "pink";
        myColor.value = "green";
        isShow.value = true;
      } else {
        bgColor.value = "white";
        myColor.value = "black";
        isShow.value = false;
      }
    };
    const del = () => {
      console.log("删除");
    };
    // const isComplete = computed({
    //   get() {
    //     return props.todo.isCompleted
    //   },
    //   set(val: boolean) {
    //     props.updateTodo?.(props.todo, val)
    //   }
    // }) // 利用计算属性的方式 来让当前的复选框选中/不选中
    return {
      mouseHandler,
      bgColor,
      myColor,
      isShow,
      del,
      // isComplete
    };
  },
});
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  margin-top: 3px;
}
li::before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
</style>