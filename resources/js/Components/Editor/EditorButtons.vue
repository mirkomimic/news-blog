<template>
  <div class="d-flex align-center ga-3">
    <!-- Nodes -->
    <v-btn-group
      variant="tonal"
      divided
      density="comfortable"
    >
      <v-btn
        type="button"
        color="accent"
        icon=""
        @click="editor.chain().toggleHeading({ level: 1 }).run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive('heading', { level: 1 }) }"
        >H1
      </v-btn>
      <v-btn
        type="button"
        color="accent"
        icon=""
        @click="editor.chain().toggleHeading({ level: 1 }).run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive('heading', { level: 2 }) }"
        >H2
      </v-btn>
      <v-btn
        type="button"
        color="accent"
        icon=""
        @click="editor.chain().toggleHeading({ level: 1 }).run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive('heading', { level: 3 }) }"
        >H3
      </v-btn>
      <v-btn
        type="button"
        color="accent"
        icon=""
        @click="editor.commands.setParagraph()"
        :class="{ 'bg-indigo-darken-3': editor.isActive('paragraph') }"
        >P
      </v-btn>
    </v-btn-group>

    <!-- Alignment -->
    <v-btn-group
      variant="tonal"
      divided
      density="comfortable"
    >
      <v-btn
        type="button"
        color="accent"
        icon="mdi-format-align-left"
        @click="editor.chain().focus().setTextAlign('left').run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive({ textAlign: 'left'}) }"
        >
      </v-btn>
      <v-btn
        type="button"
        color="accent"
        icon="mdi-format-align-center"
        @click="editor.chain().focus().setTextAlign('center').run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive({ textAlign: 'center'}) }"
        >
      </v-btn>
      <v-btn
        type="button"
        color="accent"
        icon="mdi-format-align-justify"
        @click="editor.chain().focus().setTextAlign('justify').run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive({ textAlign: 'justify'}) }"
        >
      </v-btn>
      <v-btn
        type="button"
        color="accent"
        icon="mdi-format-align-right"
        @click="editor.chain().focus().setTextAlign('right').run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive({ textAlign: 'right'}) }"
        >
      </v-btn>
    </v-btn-group>

    <!-- Media -->
    <v-btn-group
      variant="tonal"
      density="comfortable"
      divided
    >
      <v-tooltip text="Tooltip" location="top">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            onclick="document.getElementById('inputFile').click();"
            density="comfortable"
            type="button"
            color="accent"
            icon="mdi-image-area-close"
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

      <v-tooltip text="Gallery" location="top">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            onclick="document.getElementById('galleryInput').click();"
            density="comfortable"
            type="button"
            color="accent"
            icon="mdi-view-gallery-outline"
            @click=""
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

      <EmbedYouTubeBtn :editor="props.editor"/>

      <EmbedTweetBtn :editor="props.editor"/>

      <v-tooltip text="Source" location="top">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            density="comfortable"
            type="button"
            color="accent"
            icon
            @click="editor.chain().focus().insertSourceNode().run()"
            >S
          </v-btn>
        </template>
      </v-tooltip>
    </v-btn-group>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import EmbedYouTubeBtn from '../Buttons/EmbedYouTubeBtn.vue';
import EmbedTweetBtn from '../Buttons/EmbedTweetBtn.vue';

const props = defineProps(['editor', 'images'])
const inputFile = ref()
const galleryInput = ref()

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