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
import { defineComponent, reactive } from "vue";
import Header from "./components/Header.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";
export default defineComponent({
  name: "App",
  props: {},
  components: { Header, List, Footer },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>