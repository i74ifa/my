<script>
import { defineComponent } from "vue";
import SideLink from "./SideLink.vue";

export default defineComponent({
  components: {
    SideLink,
  },
  name: "Sidenav",
  props: {
    isOpen: Boolean,
  },
  data() {
    const lang = this.$route.params.lang || "en";
    console.log(lang);
    return {
      lang,
      links: [
        {
          title: lang == "en" ? "About" : "نبذة عني",
          icon: "pepicons-pencil:cv",
          url: "home",
        },
        {
          title: lang == "en" ? "experience" : "الخبرات",
          icon: "iconoir:user-star",
          url: "experience",
        },
        {
          title: lang == "en" ? "projects" : "المشاريع",
          icon: "icons8:idea",
          url: "projects",
        },
      ],
    };
  },
});
</script>

<template>
  <div
    class="fixed top-0 left-0 rtl:right-0 rtl:border-l h-screen w-56 border-r border-x-gray-800 pt-10 md:translate-x-0 bg-main-800 duration-300 z-50"
    :class="[isOpen ? 'translate-x-0' : 'translate-x-full']"
  >
    <h2 class="px-3 text-xl mb-5 text-main-100">حذيفة جابر</h2>
    <div>
      <div class="px-3 text-sm text-main-300">شخصي</div>
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
      <!-- <div class="px-3 text-sm text-main-300">محتوى</div> -->
    </div>
  </div>
</template>
