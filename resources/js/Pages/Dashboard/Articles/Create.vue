<template>
  <Head title="Articles" />

  <DashboardLayout>

    <Breadcrumbs :breadcrumbs="breadcrumbs"/>

    <div class="px-5">

    </div>

    <section class="px-5">
      <StepperCreateArticle 
        :categories="categories"
      />
    </section>
  </DashboardLayout>
</template>

<script setup>
import Breadcrumbs from '@/Components/Other/Breadcrumbs.vue';
import StepperCreateArticle from '@/Components/Other/StepperCreateArticle.vue';
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
    disabled: false,
    route: 'dashboard.articles.index'
  },
  {
    title: 'Create',
    disabled: true,
    route: 'dashboard.articles.create'
  },
])

const props = defineProps({
  categories: { required: false, type: Object }
})

</script>