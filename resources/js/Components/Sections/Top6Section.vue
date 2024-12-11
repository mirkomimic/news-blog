<template>
  <section class="grid" style="height: 800px;">
    <ArticleCard
      v-for="(article, index) in props.articles" :key="index"
      :class="{'row-span-2 cols-span-2': article.main_news == true}"
      :article="article"
      :index="index"
    />
  </section>
</template>

<script setup>
import ArticleCard from '@/Components/Cards/ArticleCard.vue';

const props = defineProps(['articles'])
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
}

.row-span-2 {
  grid-row: span 2;
}

.cols-span-2 {
  grid-column: span 2;
}
</style>