<template>
  <div v-if="editor" class="container">
    <editor-content :editor="editor"/>
  </div>
</template>

<script setup>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import vueComponent from '@/Components/Editor/Components/testComponent.vue'
import sourceNode from '@/Components/Editor/Nodes/sourceNode'
import galleryNode from '@/Components/Editor/Nodes/galleryNode'
import { GrayText } from '@/Components/Editor/Marks/grayTextMark'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'
import { onBeforeUnmount, onMounted, ref } from 'vue';
import tweetNode from '@/Components/Editor/Nodes/tweetNode'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const editor = ref(null)

onMounted(() => {
  editor.value = new Editor({
    editable: false,
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'd-block mx-auto w-100',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        defaultAlignment: 'justify',
      }),
      GrayText,
      vueComponent,
      sourceNode,
      galleryNode,
      tweetNode
    ],
    content: props.modelValue,
    editorProps: {
      attributes: {
        class: 'pa-3',
      },
    },
  })
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})

</script>
