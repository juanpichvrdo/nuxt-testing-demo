<template>
  <div class="p-10">
    <money-formater />
    <uppercase />
    <todo-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import MoneyFormater from "~/components/money-formater.vue";
import Uppercase from "~/components/uppercase.vue";
import TodoList from "~/components/todo-list.vue";

export default defineComponent({
  components: {
    MoneyFormater,
    Uppercase,
    TodoList,
  },
  setup() {},
});
</script>
