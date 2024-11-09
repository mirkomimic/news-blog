<template>
  <div v-if="editor" class="container">
    <div class="control-group mb-3">
      <div class="button-group d-flex ga-1">
        <EditorButtons :editor="editor" :images="form.images"/>
      </div>
    </div>
    <editor-content :editor="editor"/>
  </div>
</template>

<script setup>
import { EditorContent } from '@tiptap/vue-3'
import { inject } from 'vue'
import { defineEmits, defineProps } from 'vue'
import EditorButtons from './EditorButtons.vue'
import { useArticleContentEditor } from '@/Composables/articleContentEditor';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
const form = inject('form')
const emit = defineEmits(['update:modelValue'])

const { editor } = useArticleContentEditor(emit, form)
</script>