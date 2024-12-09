<template>
  <v-data-table
    :headers="headers"
    :items="props.articles"
  >
    <template v-slot:item.created_at="{ item }">
      {{ new Date(item.created_at).toLocaleDateString('de-De') }}
    </template>
    <template v-slot:item.thumbnail="{ item }">
      <v-img
        :src="`/storage/images/articles/${item.id}/${item.thumbnail}`"
        cover
        width="40"
        height="30"
      ></v-img>
    </template>
    <template v-slot:item.top6="{ item }">
      <v-icon v-if="item.top6" icon="mdi-check"/>
      <v-icon v-else icon="mdi-minus"/>
    </template>
    <template v-slot:item.main_news="{ item }">
      <v-icon v-if="item.main_news" icon="mdi-check"/>
      <v-icon v-else icon="mdi-minus"/>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn 
        @click="edit(item)" 
        color="blue" 
        variant="text" 
        density="compact" 
        icon="mdi-pencil"
      />
      <DeleteArticleDialog :article="item"/>
    </template>
  </v-data-table>

  <EditArticleDialog 
    v-model="editDialog" 
    :article="editedArticle"
    @on-close="editedArticle = {}"
  />
</template>

<script setup>
import { ref } from 'vue';
import EditArticleDialog from '@/Components/Dialogs/EditArticleDialog.vue';
import DeleteArticleDialog from '../Dialogs/DeleteArticleDialog.vue';

const props = defineProps(['articles'])

const editedArticle = ref({})
const editDialog = ref(false)

const headers = [
  { title: 'ID', key: 'id' },
  { title: '', key: 'thumbnail' },
  { title: 'Title', key: 'title' },
  { title: 'Category', key: 'category.name' },
  { title: 'Top6', key: 'top6' },
  { title: 'Main News', key: 'main_news' },
  { title: 'Created', key: 'created_at' },
  { title: 'Actions', key: 'actions' },
]

const edit = (article) => {
  editedArticle.value = article
  editDialog.value = true
}
</script>