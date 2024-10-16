<template>
  <Head title="Article" />

  <MainLayout>
    {{ article.title }}
    <div v-if="htmlContent" v-html="htmlContent" class="w-50 mx-auto"></div>

  </MainLayout>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useTipTapHelpers } from '@/Composables/tiptapHelpers';
import MainLayout from '@/Layouts/MainLayout.vue';
import { Head } from '@inertiajs/vue3';

const props = defineProps(['article'])

const { replaceTempUrls } = useTipTapHelpers()

const htmlContent = ref()

onMounted(() => {
  htmlContent.value = replaceTempUrls('storage/images/articles', props.article)
})
</script>