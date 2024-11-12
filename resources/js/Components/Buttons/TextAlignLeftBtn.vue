<template>
  <v-tooltip text="Left" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        type="button"
        color="accent"
        icon="mdi-format-align-left"
        @click="editor.chain().focus().setTextAlign('left').run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive({ textAlign: 'left'}) }"
      />
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])
</script>