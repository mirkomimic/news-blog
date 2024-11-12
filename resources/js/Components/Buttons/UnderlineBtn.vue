<template>
  <v-tooltip text="Underline" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        type="button"
        color="accent"
        icon="mdi-format-underline"
        @click="editor.chain().focus().toggleUnderline().run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive('underline') }"
      />
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])
</script>