<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CardExperience",
  props: {
    data: Object,
  },
});
</script>

<template>
  <div
    class="border rounded-lg pt-5 pb-2 border-main-500 bg-main-700 shadow-2xl p-5"
  >
    <h1 class="text-4xl text-center mb-3 text-lime-300">{{ data.title }}</h1>
    <div class="flex justify-between items-center mb-3">
      <p class="text-main-50 text-base">{{ data.year }}</p>
      <h3 class="text-xl">{{ data.progress }}%</h3>
    </div>
    <p class="text-sm">{{ data.description }}</p>
  </div>
</template>
