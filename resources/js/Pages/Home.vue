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
      <div class="grid">
        <div
          v-for="(article, index) in props.articles" :key="index"
          :class="{'row-span-2 cols-span-2 w-100 h-100': index == 0}"
        >
          <ArticleCard
            :article="article"
            :index="index"
          />
        </div>
      </div>
    </v-container>
  </MainLayout>

  <div class="">


  
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  /* grid-auto-rows: 300px; */
  gap: 5px;
}

.row-span-2 {
  grid-row: span 2;
}

.cols-span-2 {
  grid-column: span 2;
}


</style>