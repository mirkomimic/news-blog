<template>
  <v-tooltip text="Code Block" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        density="comfortable"
        type="button"
        color="accent"
        icon="mdi-xml"
        :class="{ 'bg-indigo-darken-3': editor.isActive('codeBlock') }"
        @click="editor.chain().focus().toggleCodeBlock().run()"
      />
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])
</script>