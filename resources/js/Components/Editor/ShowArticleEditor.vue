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
import instagramNode from '@/Components/Editor/Nodes/instagramNode'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { all, createLowlight } from 'lowlight'
import js from 'highlight.js/lib/languages/javascript'
import html from 'highlight.js/lib/languages/xml';

const lowlight = createLowlight(all)
lowlight.register('js', js)
lowlight.register('html', html)

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
        codeBlock: false,
        history: false,
        bulletList: {
          HTMLAttributes: {
            class: 'ms-3'
          }
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: 'js',
        HTMLAttributes: {
          class: 'bg-white rounded pa-2',
        },
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
      tweetNode,
      instagramNode
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
