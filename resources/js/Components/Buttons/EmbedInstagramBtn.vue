<template>
  <v-tooltip text="Instagram" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        density="comfortable"
        type="button"
        color="accent"
        icon="mdi-instagram"
        @click="save"
      ></v-btn>
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])

const save = () => {
  const code = prompt('Enter Instagram Code')

  if (!code) return

  let div = document.createElement('div')
  div.innerHTML = code

  let blockquote = div.querySelectorAll('blockquote')[0].outerHTML

  props.editor.commands.insertInstagramNode({
    blockquote: blockquote,
  })
}
</script>