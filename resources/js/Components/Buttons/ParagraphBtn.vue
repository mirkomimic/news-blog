<template>
  <v-btn
    type="button"
    color="accent"
    icon="mdi-format-paragraph"
    @click="editor.commands.setParagraph()"
    :class="{ 'bg-indigo-darken-3': editor.isActive('paragraph') }"
    >
  </v-btn>
</template>

<script setup>
const props = defineProps(['editor'])
</script>