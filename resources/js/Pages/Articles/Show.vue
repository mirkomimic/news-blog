<template>
  <Head title="Article" />

  <MainLayout>

    <v-container fluid>
      <v-row justify="center" class="mt-3">
        <v-col 
          cols="8" 
          class="pa-0 mr-2"
        >
          <section 
            class="mx-auto"
          >
            <v-img
              class="align-end text-white mx-auto"
              :src="`/storage/images/articles/${props.article.id}/${props.article.thumbnail}`"
              cover
            >
              <!-- <v-card-title></v-card-title> -->
            </v-img>

            <h1 class="text-center">{{ props.article.title }}</h1>
            {{ props.article.category.name }}
      
            <ShowArticleEditor 
              v-if="editorContent"
              v-model="editorContent"
              class="mx-auto"
            />

          </section>
        </v-col>

        <v-col 
          cols="3" 
          class="pa-0"
        >
          <section>
            Latest
            <SideArticlesSection :articles="props.latestArticles"/>
          </section>
          <section>
            More From {{ props.article.category.name }}
            <SideArticlesSection :articles="props.moreFromCategory"/>
          </section>
        </v-col>
      </v-row>
    </v-container>

  </MainLayout>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import { useTipTapHelpers } from '@/Composables/tiptapHelpers';
import MainLayout from '@/Layouts/MainLayout.vue';
import ShowArticleEditor from '@/Components/Editor/ShowArticleEditor.vue';
import SideArticlesSection from '@/Components/Sections/SideArticlesSection.vue';

const props = defineProps(['article', 'latestArticles', 'moreFromCategory'])

const { replaceBlobsWithUrls } = useTipTapHelpers()

const editorContent = ref()

onMounted(() => {
  editorContent.value = replaceBlobsWithUrls('articles', props.article)
})
</script>