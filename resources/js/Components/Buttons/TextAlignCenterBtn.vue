<template>
  <v-tooltip text="Center" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        type="button"
        color="accent"
        icon="mdi-format-align-center"
        @click="editor.chain().focus().setTextAlign('center').run()"
        :class="{ 'bg-indigo-darken-3': editor.isActive({ textAlign: 'center'}) }"
      />
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])
</script>