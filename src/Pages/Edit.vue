<template>
  <div style="height: 80vh">
    <PinturaEditor
      v-bind="editorProps"
      :src="image"
      @pintura:process="handleProcess($event)"
    />
  </div>
  <p v-if="inlineResult">
    <img :src="inlineResult" alt="" />
  </p>
</template>
<script>
import { PinturaEditor } from "@pqina/vue-pintura";
import { getEditorDefaults } from "@pqina/pintura";

export default {
  name: "App",
  components: {
    PinturaEditor,
  },
  methods: {
    handleProcess: function (event) {
      this.inlineResult = URL.createObjectURL(event.detail.dest);
    },
  },
  data() {
    return {
      image: "/projects/bassait/bassait-01.webp",
      editorProps: getEditorDefaults(),
    };
  },
};
</script>
