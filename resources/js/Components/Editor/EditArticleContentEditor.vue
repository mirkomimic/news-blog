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
import { inject, onMounted, ref } from 'vue'
import { defineEmits, defineProps } from 'vue'
import EditorButtons from './EditorButtons.vue'
import { useEditArticleContentEditor } from '@/Composables/editArticleContentEditor';
import { useTipTapHelpers } from '@/Composables/tiptapHelpers';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  article: {
    type: Object,
  },
})
const form = inject('editArticleForm')
const content = ref(null)
const emit = defineEmits(['update:modelValue'])
const { replaceBlobsWithUrls } = useTipTapHelpers()

onMounted(() => {
  content.value = replaceBlobsWithUrls('articles', props.article)
})

const { editor } = useEditArticleContentEditor(emit, form, content)


</script>