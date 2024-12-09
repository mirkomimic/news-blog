<template>
  <v-select
    v-model="fontSize"
    :items="fontSizes"
    @update:model-value="save"
    density="compact"
    variant="outlined"
    hide-details
  ></v-select>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['editor'])

const fontSize = ref(24);

const fontSizes = ref([24, 28, 32, 36])

const save = () => {
  props.editor.chain().focus().setFontSize(fontSize.value).run()
}

const cursorFontSize = () => {
  for (const f of fontSizes.value) {
    if (props.editor.isActive('fontSize', { fontSize: f })) {
      return f;
    }
  }
}

props.editor.on('transaction', ({ editor }) => {
  fontSize.value = cursorFontSize()
})
</script>