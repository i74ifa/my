<script>
import { defineComponent } from "vue";
import SideLink from "./SideLink.vue";
import router from "../router";

export default defineComponent({
  components: {
    SideLink,
  },
  name: "Sidenav",
  props: {
    isOpen: Boolean,
  },
  computed: {
    locale() {
      return this.$route.params.lang || "en";
    },
    links() {
      return [
        {
          title: this.locale == "en" ? "About" : "نبذة عني",
          icon: "pepicons-pencil:cv",
          url: "home",
        },
        {
          title: this.locale == "en" ? "experience" : "الخبرات",
          icon: "iconoir:user-star",
          url: "experience",
        },
        {
          title: this.locale == "en" ? "projects" : "المشاريع",
          icon: "icons8:idea",
          url: "projects",
        },
      ];
    },
  },
  mounted() {
    console.log(this.locale);
  },

  methods: {
    switchLocale() {
      const to = this.locale == "en" ? "ar" : "en";
      router.push("/" + to);
    },
  },
});
</script>

<template>
  <div
    class="fixed top-0 left-0 rtl:right-0 rtl:border-l h-screen w-56 border-r border-x-gray-800 pt-10 md:translate-x-0 bg-main-800 duration-300 z-40"
    :class="[
      isOpen
        ? 'translate-x-0'
        : 'rtl:translate-x-full ltr:-translate-x-full md:ltr:translate-x-0 md:rtl:translate-x-0',
    ]"
  >
    <h2 class="px-3 text-xl mb-5 text-main-100">
      {{ locale == "en" ? "Hothaifa Jaber" : "حذيفة جابر" }}
    </h2>
    <div>
      <div class="px-3 text-sm text-main-300">
        {{ locale == "en" ? "personal" : "شخصي" }}
      </div>
      <SideLink
        v-for="(link, key) in links"
        :title="link.title"
        :to="link.url"
        :icon="link.icon"
        :key="key"
        :lang="$route.params.lang"
      />
    </div>
    <div>
      <div class="absolute bottom-4 px-3">
        <button @click="switchLocale">
          {{ locale == "en" ? "العربية" : "English" }}
        </button>
      </div>
      <!-- <div class="px-3 text-sm text-main-300">محتوى</div> -->
    </div>
  </div>
</template>
