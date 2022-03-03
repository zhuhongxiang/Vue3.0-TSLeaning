<template>
  <ul class="todo-main">
    <Item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :index="index"
      :todo="todo"
      :delTodo="delTodo"
      :updateTodo="updateTodo"
    />
  </ul>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Item from "./Item.vue";
export default defineComponent({
  name: "List",
  props: ["todos", "delTodo", "updateTodo"],
  components: { Item },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}
.todo-empty {
  height: 40px;
  line-height: 20px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>