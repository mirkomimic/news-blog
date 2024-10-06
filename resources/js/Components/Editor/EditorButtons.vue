<template>
  <div class="d-flex align-center">
    <!-- Nodes -->
    <div class="d-flex ga-1">
      <v-btn
        density="comfortable"
        variant="tonal"
        type="button"
        color="accent"
        icon=""
        rounded="sm"
        @click="editor.chain().toggleHeading({ level: 1 }).run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive('heading', { level: 1 }) }"
        >H1
      </v-btn>
      <v-btn
        density="comfortable"
        variant="tonal"
        type="button"
        color="accent"
        icon=""
        rounded="sm"
        @click="editor.chain().toggleHeading({ level: 1 }).run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive('heading', { level: 2 }) }"
        >H2
      </v-btn>
      <v-btn
        density="comfortable"
        variant="tonal"
        type="button"
        color="accent"
        icon=""
        rounded="sm"
        @click="editor.chain().toggleHeading({ level: 1 }).run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive('heading', { level: 3 }) }"
        >H3
      </v-btn>
      <v-btn
        density="comfortable"
        variant="tonal"
        type="button"
        color="accent"
        icon=""
        rounded="sm"
        @click="editor.commands.setParagraph()"
        :class="{ 'bg-indigo-darken-3': editor.isActive('paragraph') }"
        >P
      </v-btn>
    </div>
    <!-- Alignment -->
    <div class="mx-2">
      <v-btn
        density="comfortable"
        variant="tonal"
        type="button"
        color="accent"
        icon="mdi-format-align-left"
        rounded="sm"
        @click="editor.chain().focus().setTextAlign('left').run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive({ textAlign: 'left'}) }"
        >
      </v-btn>
      <v-btn
        density="comfortable"
        variant="tonal"
        type="button"
        color="accent"
        icon="mdi-format-align-center"
        rounded="sm"
        @click="editor.chain().focus().setTextAlign('center').run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive({ textAlign: 'center'}) }"
        >
      </v-btn>
      <v-btn
        density="comfortable"
        variant="tonal"
        type="button"
        color="accent"
        icon="mdi-format-align-justify"
        rounded="sm"
        @click="editor.chain().focus().setTextAlign('justify').run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive({ textAlign: 'justify'}) }"
        >
      </v-btn>
      <v-btn
        density="comfortable"
        variant="tonal"
        type="button"
        color="accent"
        icon="mdi-format-align-right"
        rounded="sm"
        @click="editor.chain().focus().setTextAlign('right').run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive({ textAlign: 'right'}) }"
        >
      </v-btn>
    </div>

    <div>
      <v-btn
        onclick="document.getElementById('inputFile').click();"
        density="comfortable"
        variant="tonal"
        type="button"
        color="accent"
        icon="mdi-image-area-close"
        rounded="sm"
      ></v-btn>
      <input ref="inputFile" type="file" id="inputFile" class="d-none" @change="insertImage">
    </div>

  </div>
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
      // class: 'd-block mx-auto'
    }).run();
    
    // props.form.images.push(file); 
  }
};
</script>