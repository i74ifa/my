<script setup>
import { ref } from "vue";
import Sidenav from "./components/Sidenav.vue";

const isOpen = ref(false);
</script>
<template>
  <Sidenav :isOpen="isOpen" />
  <transition appear name="opacity">
    <div
      class="fixed top-0 left-0 z-20 w-full h-screen bg-black bg-opacity-70"
      v-if="isOpen"
      @click="isOpen = false"
    ></div>
  </transition>
  <button
    @click="isOpen = !isOpen"
    class="fixed ltr:right-2 top-2 rtl:left-2 p-3 w-[50px] h-[50px] bg-main-700 rounded-full border border-main-500 shadow-lg shadow-main-200/20 block md:hidden"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="w-full h-full text-main-50"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
  </button>
  <main class="rtl:md:mr-56 rtl:md:pr-10 ltr:md:ml-56 ltr:md:pl-10 pt-20">
    <router-view></router-view>
  </main>
  <footer class="px-10 py-14">
    <div class="flex justify-center items-center gap-5">
      <a
        href="https://github.com/i74ifa"
        class="w-10 h-10 inline-flex justify-center text-main-100 rounded-full border border-gray-500 bg-main-900"
        target="_blank"
      >
        <Icon icon="ri:github-line" class="w-full h-full p-1" />
      </a>
      <a
        href="https://twitter.com/i74ifa"
        class="w-10 h-10 inline-flex justify-center text-main-100 rounded-full border border-gray-500 bg-main-900"
        target="_blank"
      >
        <Icon icon="mdi:twitter" class="w-full h-full p-1" />
      </a>
    </div>
  </footer>
</template>
