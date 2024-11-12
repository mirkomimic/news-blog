<template>
  <v-tooltip text="Italic" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        type="button"
        color="accent"
        icon="mdi-format-italic"
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive('italic') }"
      />
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])
</script>