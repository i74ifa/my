<template>
  <TransitionRoot appear :show="modelValue" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-50">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div
        class="fixed overflow-y-auto left-0 bottom-0 w-full h-screen flex items-end"
      >
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0 translate-y-10"
          enter-to="opacity-100 translate-y-0"
          leave="duration-200 ease-in"
          leave-from="opacity-100 translate-y-0"
          leave-to="opacity-0 translate-y-10"
        >
          <DialogPanel
            class="w-full transform overflow-hidden h-5/6 rounded-t-2xl bg-main-800 border-t border-t-main-600 p-6 align-middle shadow-xl transition-all overflow-y-auto"
          >
            <DialogTitle
              as="h3"
              class="text-xl font-medium leading-6 text-gray-100 text-center"
            >
              {{ project.title }}
            </DialogTitle>
            <div class="mt-2 max-w-6xl mx-auto prose-invert mb-10">
              <div>
                <div v-for="image in project.images" :key="image.path">
                  <img :src="`/projects/${image.path}`" alt="" />
                  <p>{{ image.alt }}</p>
                </div>
              </div>
              <div v-html="content"></div>
            </div>
            <div class="flex justify-center mb-4">
              <button @click="closeModal">Close</button>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const props = defineProps({
  content: String,
  project: Object,
  modelValue: String,
});

const emit = defineEmits(["close", "open", "update:modelValue"]);

function closeModal() {
  // isOpen.value = false;
  emit("update:modelValue", false);
}
function openModal() {
  isOpen.value = true;
  emit("update:modelValue", true);
}
</script>

<style>
p {
  @apply text-gray-300 text-base;
}
</style>
