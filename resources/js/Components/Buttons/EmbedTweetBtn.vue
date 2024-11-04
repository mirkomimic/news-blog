<template>
  <v-tooltip text="Twitter" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        density="comfortable"
        type="button"
        color="accent"
        icon="mdi-twitter"
        @click="save"
      ></v-btn>
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])

const save = () => {
  const tweetID = prompt('Enter Tweet ID')

  if (!tweetID) return

  props.editor.commands.insertTweetNode({
    tweetID: tweetID,
  })
}
</script>