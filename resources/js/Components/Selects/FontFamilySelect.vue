<template>
  <v-select
    v-model="font"
    :items="fonts"
    @update:model-value="save"
    density="compact"
    variant="outlined"

    hide-details
  ></v-select>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['editor'])

const font = ref('serif');

const fonts = ref([
  {
    title: 'Inter',
    value: 'Inter'
  },
  {
    title: 'Comic Sans',
    value: 'Comic Sans MS, Comic Sans'
  },
  {
    title: 'Serif',
    value: 'serif'
  },
  {
    title: 'Monospace',
    value: 'monospace'
  },
  {
    title: 'Cursive',
    value: 'cursive'
  },
])

const save = () => {
  props.editor.chain().focus().setFontFamily(font.value).run()
  // props.editor.chain().focus().setFontSize(50)
}

const cursorFont = () => {
  for (const f of fonts.value) {
    if (props.editor.isActive('textStyle', { fontFamily: f.value })) {
      return f.value;
    }
  }
}

props.editor.on('transaction', ({ editor }) => {
  font.value = cursorFont()
})
</script>