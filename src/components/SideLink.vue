<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SideLink",
  props: {
    title: String,
    lang: {
      type: String,
      default: "en",
    },
    to: {
      type: String,
      default: "",
    },
    icon: String,
  },
});
</script>

<template>
  <router-link
    :to="{ name: to, params: { lang: this.lang } }"
    class="py-2 px-3 hover:bg-main-700 flex items-center gap-x-3 duration-300 text-gray-200"
  >
    <Icon :icon="icon" class="w-5 h-5" />
    {{ title }}
  </router-link>
</template>
