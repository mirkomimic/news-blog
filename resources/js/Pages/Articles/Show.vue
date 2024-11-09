<template>
  <Head title="Article" />

  <MainLayout>

    <ShowArticleEditor 
      v-if="editorContent"
      v-model="editorContent"
      style="width: 700px;"
      class="mx-auto"
    />

  </MainLayout>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import { useTipTapHelpers } from '@/Composables/tiptapHelpers';
import MainLayout from '@/Layouts/MainLayout.vue';
import ShowArticleEditor from '@/Components/Editor/ShowArticleEditor.vue';

const props = defineProps(['article'])

const { replaceTempUrlsFromGallery, replaceTempUrls } = useTipTapHelpers()

const editorContent = ref()

onMounted(() => {
  editorContent.value = replaceTempUrlsFromGallery('articles', props.article)
  editorContent.value = replaceTempUrls('articles', props.article)
})
</script>