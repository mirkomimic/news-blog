<template>
  <v-tooltip text="Heading 3" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        type="button"
        color="accent"
        icon="mdi-format-header-3"
        @click="editor.chain().toggleHeading({ level: 3 }).run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive('heading', { level: 3 }) }"
      />
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])
</script>