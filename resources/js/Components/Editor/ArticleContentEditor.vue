<template>
  <div v-if="editor" class="container">
    <div class="control-group mb-3">
      <div class="button-group d-flex ga-1">
        <EditorButtons :editor="editor" :images="props.images"/>
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
import { useTipTapHelpers } from '@/Composables/tiptapHelpers'
import vueComponent from './Extensions/testExtension'
import sourceNode from './Nodes/sourceNode'
import { GrayText } from './Marks/grayTextMark'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const { addRemoveImgsFromForm } = useTipTapHelpers()
const emit = defineEmits(['update:modelValue'])

const images = defineModel('images')
const editor = ref(null)
const previousImages = ref([]);

onMounted(() => {
  editor.value = new Editor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      GrayText,
      Image.configure({
        HTMLAttributes: {
          class: 'd-block mx-auto w-100',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        defaultAlignment: 'justify',
      }),
      vueComponent,
      sourceNode,
    ],
    content: props.modelValue,
    editorProps: {
      attributes: {
        class: 'border rounded tiptapHeight pa-3',
      },
    },
    onUpdate: ({ editor }) => {
      
      addRemoveImgsFromForm(images, previousImages, editor);

      emit('update:modelValue', editor.getHTML())
    },
  })
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>