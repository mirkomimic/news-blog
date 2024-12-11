<template>
  <SimpleArticleCard
    v-for="(article, index) in props.articles" :key="index"
    :article="article"
    :index="index"
    class="my-2"
  />
</template>

<script setup>
import SimpleArticleCard from '@/Components/Cards/SimpleArticleCard.vue';

const props = defineProps(['articles'])
</script>