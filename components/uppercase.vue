<template>
  <div>
    <h2 class="mb-4 text-xl mt-14">To Uppercase</h2>

    <div class="flex">
      <textarea
        class="px-2 py-1 border border-gray-400"
        name="user-text"
        id="userText"
        cols="30"
        rows="5"
        v-model="regularText"
      ></textarea>

      <div class="flex items-center mx-5">-></div>

      <div class="flex flex-col">
        <span class="mr-2">Uppercase Text:</span>

        <div
          data-test="uppercased-text"
          class="flex h-full px-3 border border-green-200 w-80"
        >
          {{ upppercaseText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Uppercase",
  setup() {
    const regularText = ref<string>("");

    const upppercaseText = computed(() => regularText.value.toUpperCase());

    return {
      regularText,
      upppercaseText,
    };
  },
});
</script>
