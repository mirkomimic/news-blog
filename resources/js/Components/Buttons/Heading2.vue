<template>
  <v-tooltip text="Heading 2" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        type="button"
        color="accent"
        icon="mdi-format-header-2"
        @click="editor.chain().toggleHeading({ level: 2 }).run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive('heading', { level: 2 }) }"
      />
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])
</script>