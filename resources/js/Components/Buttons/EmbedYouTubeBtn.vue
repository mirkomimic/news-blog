<template>
  <v-tooltip text="YouTube" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        density="comfortable"
        type="button"
        color="accent"
        icon="mdi-youtube"
        @click="save"
      ></v-btn>
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])

const save = () => {
  const url = prompt('Enter YouTube URL')

  if (!url) return

  props.editor.commands.setYoutubeVideo({
    src: url,
  })
}
</script>