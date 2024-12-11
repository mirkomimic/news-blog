<template>
  <v-card
    @click="router.get(route('articles.show', article.id))"
    link
    class="w-100 h-100"
  >
    <v-img
      class="align-end text-white mx-auto"
      :src="`storage/images/articles/${article.id}/${article.thumbnail}`"
      cover
      :class="{'ImgSize': article.main_news, 'smallImg': !article.main_news}"
      :cover="true"
    >
      <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
    </v-img>

    <v-card-subtitle class="pt-4">
      {{ article.category.name }}
    </v-card-subtitle>

    <v-card-text>
      <div>{{ article.title }}</div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { router } from '@inertiajs/vue3';

const props = defineProps(['article', 'index'])
</script>

<style scoped>
.ImgSize {
  width: auto;
  height: 400px;
}

.smallImg {
  width: 286px;
  height: 176px;

}
</style>