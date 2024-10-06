<template>
  <div v-if="editor" class="container">
    <div class="control-group mb-3">
      <div class="button-group d-flex ga-1">
        <EditorButtons :editor="editor"/>
      </div>
    </div>
    <editor-content :editor="editor"/>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import StarterKit from '@tiptap/starter-kit'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { defineEmits, defineProps } from 'vue'
import TextAlign from '@tiptap/extension-text-align'
import EditorButtons from './EditorButtons.vue'
import Image from '@tiptap/extension-image'
import Paragraph from '@tiptap/extension-paragraph'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const editor = ref(null)

onMounted(() => {
  editor.value = new Editor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: 'd-block mx-auto w-100',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        defaultAlignment: 'justify',
      }),
    ],
    content: props.modelValue,
    onUpdate: () => {
      emit('update:modelValue', editor.value.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'border rounded tiptapHeight pa-3',
      },
    },
  })
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})

watch(() => props.modelValue, (newValue) => {
  const isSame = editor.value.getHTML() === newValue
  if (!isSame) {
    editor.value.commands.setContent(newValue, false)
  }
})
</script>