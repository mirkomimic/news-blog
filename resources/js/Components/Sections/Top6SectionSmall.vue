<template>
  <v-row dense>
    <v-col
      v-for="(article, index) in props.articles" :key="index"
      :article="article"
      cols="12"
    >
      <ArticleCard 
        :article="article"
        :index="index"  
      />
    </v-col>
  </v-row>
</template>

<script setup>
import ArticleCard from '@/Components/Cards/ArticleCard.vue';

const props = defineProps(['articles'])
</script>

<style scoped>

</style>