<template>
  <v-tooltip text="Justify" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        type="button"
        color="accent"
        icon="mdi-format-align-justify"
        @click="editor.chain().focus().setTextAlign('justify').run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive({ textAlign: 'justify'}) }"
      />
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])
</script>