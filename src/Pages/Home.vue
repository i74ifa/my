<script>
export default {
  data() {
    return {
      isLoading: false,
      lang: "en",
      content: "",
      direction: "ltr",
      data: {},
    };
  },
  async created() {
    let lang = this.$route.params.lang;
    if (lang) {
      this.lang = lang;
    }
    await this.getContent();
    this.setMeta();
  },
  mounted() {},
  methods: {
    async getContent() {
      this.isLoading = true;

      const response = await fetch(`/data/${this.lang}/home.json`);
      const data = await response.json();
      this.data = data;
      this.content = data.content;
      this.direction = data.direction;
      this.isLoading = false;
      // return data;
    },
    setMeta() {
      const html = document.querySelector("html");
      html.setAttribute("lang", this.lang);
      html.setAttribute("dir", this.direction);
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
    <div v-else v-html="content"></div>
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
