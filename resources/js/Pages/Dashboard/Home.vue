<template>
  <Head title="Dashboard" />

  <DashboardLayout>
    <Breadcrumbs :breadcrumbs="breadcrumbs"/>
  </DashboardLayout>
</template>

<script setup>
import Breadcrumbs from '@/Components/Other/Breadcrumbs.vue';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';

const breadcrumbs = ref([
  {
    title: 'Dashboard',
    disabled: true,
    route: 'dashboard.home'
  },
])

</script>