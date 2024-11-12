<template>
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
</template>

<script setup>
const props = defineProps(['editor'])
</script>