<template>
  <v-tooltip text="Bullet List" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        density="comfortable"
        type="button"
        color="accent"
        icon="mdi-format-list-bulleted"
        :class="{ 'bg-indigo-darken-3': editor.isActive('bulletList') }"
        @click="editor.chain().focus().toggleBulletList().run()"
      />
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])
</script>