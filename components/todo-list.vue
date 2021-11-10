<template>
  <div>
    <h2 class="mb-4 text-xl mt-14">Todo List</h2>
    <div class="">
      <label for="addTodo">Add Todo:</label>
      <input
        v-model.trim="todoInput"
        type="text"
        id="addTodo"
        class="px-2 py-1 border border-gray-400 w-60"
      />
      <button @click="addTodo" class="px-4 py-2 ml-2 text-white bg-indigo-400">
        Click to add todo
      </button>

      <ul>
        <li v-for="(todo, i) in todos" :key="todo + i">- {{ todo }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const todoInput = ref<string>("");
    const todos = ref<string[]>([]);

    const addTodo = () => {
      if (todoInput.value) {
        todos.value.push(todoInput.value);
        todoInput.value = "";
      }
    };

    return {
      todos,
      todoInput,
      addTodo,
    };
  },
});
</script>
