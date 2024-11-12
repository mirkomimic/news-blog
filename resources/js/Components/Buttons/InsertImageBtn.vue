<template>
  <v-tooltip text="Image" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        onclick="document.getElementById('inputFile').click();"
        density="comfortable"
        type="button"
        color="accent"
        icon="mdi-image-area"
      ></v-btn>
    </template>
  </v-tooltip>
  <input
    ref="inputFile"
    type="file"
    id="inputFile"
    class="d-none"
    @change="insertImage"
  >
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['editor'])

const inputFile = ref()

const insertImage = () => {
  const file = inputFile.value.files[0];

  if (file) {
    const url = URL.createObjectURL(file);

    props.editor.chain().focus().setImage({
      src: url,
    }).run();

    props.images.push({
      file: file,
      url: url
    }); 
  }
};
</script>