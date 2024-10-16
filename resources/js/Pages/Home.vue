<script setup>
import ArticleCard from '@/Components/Cards/ArticleCard.vue';
import MainLayout from '@/Layouts/MainLayout.vue';
import { Head, Link } from '@inertiajs/vue3';

const props = defineProps({
  canLogin: {
    type: Boolean,
  },
  canRegister: {
    type: Boolean,
  },
  articles: {
    type: Object
  }
});
</script>

<template>

  <Head title="Home" />

  <MainLayout>
    <v-container>
      <v-row>
        <v-col
          v-for="(article, index) in props.articles" :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <ArticleCard :article="article"/>
        </v-col>
      </v-row>
    </v-container>
  </MainLayout>

  <div class="">


  
  </div>
</template>