<template>
  <Head title="Articles" />

  <DashboardLayout>

    <Breadcrumbs :breadcrumbs="breadcrumbs"/>

    <div class="px-5">
      <!-- <CreateArticleDialog 
        :categories="props.categories"
      /> -->
    </div>
  </DashboardLayout>
</template>

<script setup>
import CreateArticleDialog from '@/Components/Dialogs/CreateArticleDialog.vue';
import Breadcrumbs from '@/Components/Other/Breadcrumbs.vue';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

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

// const props = defineProps({
//   categories: { required: false, type: Object }
// })

</script>