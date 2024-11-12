<template>
  <v-tooltip text="Right" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        type="button"
        color="accent"
        icon="mdi-format-align-right"
        @click="editor.chain().focus().setTextAlign('right').run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive({ textAlign: 'right'}) }"
      />
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])
</script>