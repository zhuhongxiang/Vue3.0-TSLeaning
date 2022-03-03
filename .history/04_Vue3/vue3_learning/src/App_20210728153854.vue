<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :delTodo="delTodo" :updateTodo="updateTodo" />
      <Footer
        :todos="todos"
        :checkAll="checkAll"
        :clear="clearAllCompletedTodos"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
import { Todo } from "./types/todo";
export default defineComponent({
  name: "App",
  props: {},
  components: { Header, List, Footer },
  // 数据应该用数组来存储，数组中的每个数据都是一个对象，对象中有三个属性(id,title,isCompleted)
  // 把数组暂且定义在App.vue父级组件
  setup() {
    // 定义一个数组数据
    const state = reactive<{ todos: Todo[] }>({
      todos: [
        { id: 1, title: "奔驰", isCompleted: true },
        { id: 2, title: "宝马", isCompleted: false },
        { id: 3, title: "奥迪", isCompleted: false },
      ],
    });
    // 添加数据的方法
    const addTodo = (todo: Todo) => {
      state.todos.unshift(todo);
    };
    const delTodo = (index: number) => {
      state.todos.splice(index, 1);
    };
    const updateTodo = (todo: Todo, isCompleted: boolean) => {
      todo.isCompleted = isCompleted;
      console.log(todo);
    };
    const checkAll = (isCompleted: boolean) => {
      state.todos.forEach((todo) => {
        todo.isCompleted = isCompleted;
      });
    };
    const clearAllCompletedTodos = () => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    };
    return {
      ...toRefs(state),
      addTodo,
      delTodo,
      updateTodo,
      checkAll,
      clearAllCompletedTodos,
    };
  },
});
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>