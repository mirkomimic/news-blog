<template>
  <Head title="Articles" />

  <DashboardLayout>

    <Breadcrumbs :breadcrumbs="breadcrumbs"/>

    <div class="px-5">
      <ArticlesDataTable :articles="props.articles"/>
      
    </div>
  </DashboardLayout>
</template>

<script setup>
import ArticlesDataTable from '@/Components/DataTables/ArticlesDataTable.vue';
import Breadcrumbs from '@/Components/Other/Breadcrumbs.vue';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
import { provide, ref } from 'vue';

const breadcrumbs = ref([
  {
    title: 'Dashboard',
    disabled: false,
    route: 'dashboard.home'
  },
  {
    title: 'Articles',
    disabled: true,
    route: 'dashboard.articles.create'
  },
])

const props = defineProps(['articles', 'categories'])

provide('categories', props.categories)
</script>