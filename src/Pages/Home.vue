<script>
import { usePage } from "../helpers";
export default {
  data() {
    return {
      isLoading: false,
      content: "",
      data: {},
    };
  },
  computed: {
    lang() {
      return this.$route.params.lang;
    },
  },
  created() {
    this.getContent();
  },
  async mounted() {},
  methods: {
    async getContent() {
      this.isLoading = true;
      this.content = await usePage(this.lang + "/home");
      this.isLoading = false;
      // return data;
    },
  },
};
</script>

<template>
  <div class="px-5">
    <div class="p-4" v-if="isLoading">
      <h1
        class="text-4xl font-bold mb-4 mt-4 md:mt-6 lg:mt-8 animate-pulse bg-gray-800 h-8 w-1/2 rounded"
      ></h1>
      <h3
        class="text-xl font-semibold mb-2 mt-4 md:mt-6 lg:mt-8 animate-pulse bg-gray-800 h-6 w-1/4 rounded"
      ></h3>
      <p
        class="mb-2 mt-4 md:mt-6 lg:mt-8 animate-pulse bg-gray-800 h-4 w-1/2 rounded"
      ></p>
      <p
        class="mb-2 mt-4 md:mt-6 lg:mt-8 animate-pulse bg-gray-800 h-4 rounded"
      ></p>
      <p
        class="mb-2 mt-4 md:mt-6 lg:mt-8 animate-pulse bg-gray-800 h-4 w-3/4 rounded"
      ></p>
      <p
        class="mb-2 mt-4 md:mt-6 lg:mt-8 animate-pulse bg-gray-800 h-4 w-2/3 rounded"
      ></p>
      <br />
      <p
        class="mb-2 mt-4 md:mt-6 lg:mt-8 animate-pulse bg-gray-800 h-4 rounded"
      ></p>
      <br />
      <p
        class="mb-2 mt-4 md:mt-6 lg:mt-8 animate-pulse bg-gray-800 h-4 rounded"
      ></p>
    </div>
    <div v-else v-html="content" class="prose prose-invert"></div>
  </div>
</template>

<style>
h1 {
  @apply mb-2 text-main-50 text-2xl md:text-3xl;
}

h3 {
  @apply mb-2 text-3xl md:text-4xl;
}

.text-highlight {
  @apply text-green-300;
}
</style>
