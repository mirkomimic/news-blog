<script setup>
import NavBar from '@/Components/NavBar.vue';
import MainLayout from '@/Layouts/MainLayout.vue';
import { Head, Link } from '@inertiajs/vue3';

defineProps({
  canLogin: {
    type: Boolean,
  },
  canRegister: {
    type: Boolean,
  },
});
</script>

<template>

  <Head title="Home" />

  <MainLayout>
    test
  </MainLayout>

  <div class="">


  
  </div>
</template>