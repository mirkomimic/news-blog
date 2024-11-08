<template>
  <v-tooltip text="Horizontal Rule" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        density="comfortable"
        type="button"
        color="accent"
        icon
        :class="{ 'bg-indigo-darken-3': editor.isActive('bulletList') }"
        @click="editor.chain().focus().setHorizontalRule().run()"
      >H</v-btn>
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])
</script>