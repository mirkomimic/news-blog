<template>
  <v-tooltip text="Bold" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        type="button"
        color="accent"
        icon="mdi-format-bold"
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive('bold') }"
      />
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])
</script>