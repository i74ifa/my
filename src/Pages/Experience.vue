<script>
import CardExperience from "../components/CardExperience.vue";
export default {
  components: { CardExperience },
  created() {
    this.currentLocale = this.$route.params.lang || "en";
  },
  data() {
    return {
      currentLocale: "en",
      data: {
        ar: [
          {
            title: "البرمجة (backend)",
            content: [
              {
                title: "php",
                year: "5+",
                description: "خبرة عميقة جدا",
                progress: 95,
              },
              {
                title: "Laravel",
                year: "3+",
                description: "خبرة عميقة",
                progress: 85,
              },
              {
                title: "Javascript",
                year: "2.5+",
                description: "خبرة جيدة جدا",
                progress: 68,
              },
              {
                title: "Nodejs",
                year: "2+",
                description: "قيد التطوير...",
                progress: 50,
              },
              {
                title: "Express.js",
                year: "1+",
                description: "اجيد التعامل معه",
                progress: 45,
              },
            ],
          },
          {
            title: "التصميم (Frontend)",
            content: [
              {
                title: "Vue.js",
                year: "3+",
                description: "خبير",
                progress: 90,
              },
              {
                title: "Html & Css",
                year: "1+",
                description: "خبير",
                progress: 45,
              },
              {
                title: "TailwindCSS",
                year: "1+",
                description: "خبير",
                progress: 45,
              },
              {
                title: "TailwindCSS",
                year: "1+",
                description: "خبير",
                progress: 45,
              },
            ],
          },
        ],
        en: [
          {
            title: "Programming (backend)",
            content: [
              {
                title: "php",
                year: "experience 5+",
                description: "Very deep experience",
                progress: 95,
              },
              {
                title: "Laravel",
                year: "experience 3+",
                description: "Deep experience",
                progress: 85,
              },
              {
                title: "Javascript",
                year: "2.experience 5+",
                description: "Very good experience",
                progress: 68,
              },
              {
                title: "Nodejs",
                year: "experience 2+",
                description: "Under development...",
                progress: 50,
              },
              {
                title: "Express.js",
                year: "experience 1+",
                description: "Proficient",
                progress: 45,
              },
            ],
          },
          {
            title: "Design (Frontend)",
            content: [
              {
                title: "Vue.js",
                year: "3+",
                description: "Expert",
                progress: 90,
              },
              {
                title: "Html & Css",
                year: "1+",
                description: "Expert",
                progress: 45,
              },
              {
                title: "TailwindCSS",
                year: "1+",
                description: "Expert",
                progress: 45,
              },
              {
                title: "TailwindCSS",
                year: "1+",
                description: "Expert",
                progress: 45,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
<template>
  <div class="px-5 md:px-0">
    <div v-for="(row, index) in data[currentLocale]" :key="index">
      <p class="text-main-200">{{ row.title }}</p>
      <div class="grid grid-cols-1 md:grid-cols-3 max-w-screen-lg gap-5 mb-4">
        <CardExperience
          :data="experience"
          v-for="experience in row.content"
          :key="experience.title"
        />
      </div>
    </div>
  </div>
</template>
