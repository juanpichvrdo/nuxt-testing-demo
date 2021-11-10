<template>
  <div>
    <h2 class="mb-4 text-xl mt-14">Format Money</h2>
    <div class="flex">
      <div class="flex flex-col mr-5">
        <label for="moneyInput">Enter Money Amount</label>
        <input
          class="px-2 py-1 border border-gray-400"
          v-model="userMoney"
          type="number"
          id="moneyInput"
        />
      </div>

      <div class="flex items-center mx-5">-></div>

      <div class="flex items-center px-3 border border-green-200">
        <span class="mr-2">Formatted Money:</span>
        {{ formattedMoney }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "@nuxtjs/composition-api";
import { formatMoney } from "~/utils/index";

export default defineComponent({
  setup() {
    const userMoney = ref<number>(0);

    const formattedMoney = computed(() => formatMoney(userMoney.value));

    return {
      userMoney,
      formattedMoney,
    };
  },
});
</script>
