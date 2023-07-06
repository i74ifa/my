<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardProject",
  components: {},

  props: {
    data: Object,
    cardKey: Number,
  },
});
</script>

<template>
  <div
    class="border rounded-xl border-main-600 bg-main-700 shadow-2xl p-4 lg:p-2"
  >
    <div class="mb-2">
      <img :src="`/projects/${data.img}`" alt="" class="rounded-xl" />
    </div>
    <div class="flex justify-center">
      <button
        class="text-3xl md:text-2xl text-center mb-1 text-lime-300"
        @click="() => $emit('openModal', cardKey)"
      >
        {{ data.title }}
      </button>
    </div>
    <div class="flex justify-between items-center mb-1"></div>
    <p class="text-sm text-center text-gray-200">
      {{ data.description }}
    </p>
    <div class="flex items-center gap-3 flex-wrap">
      <div
        v-for="(x, key) in data.technologies"
        :key="x + key"
        class="whitespace-nowrap rounded-full bg-main-500 px-2.5 py-0.5 text-sm text-white border-t border-b border-t-main-400 border-b-main-500"
      >
        {{ x }}
      </div>
    </div>
  </div>
</template>
