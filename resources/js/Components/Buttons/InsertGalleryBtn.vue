<template>
  <v-tooltip text="Gallery" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        onclick="document.getElementById('galleryInput').click();"
        density="comfortable"
        type="button"
        color="accent"
        icon="mdi-view-gallery-outline"
        >
      </v-btn>
    </template>
  </v-tooltip>
  <input
    ref="galleryInput"
    type="file"
    id="galleryInput"
    class="d-none"
    multiple
    @change="insertGalleryImages"
  >
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['editor'])

const galleryInput = ref()

const insertGalleryImages = () => {
  const files = galleryInput.value.files;

  const fileUrls = [];

  for (const file of files) {
    const tempUrl = URL.createObjectURL(file);

    fileUrls.push(tempUrl); 

    props.images.push({
      file: file,
      url: tempUrl
    }); 
  }

  props.editor.chain().focus().insertGalleryNode({
    tempImages: fileUrls,
  }).run()
}

</script>