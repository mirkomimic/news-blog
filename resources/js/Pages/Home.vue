<script setup>
import Top6Section from '@/Components/Sections/Top6Section.vue';
import Top6SectionSmall from '@/Components/Sections/Top6SectionSmall.vue';
import MainLayout from '@/Layouts/MainLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

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


const display = ref(useDisplay()) 
</script>

<template>

  <Head title="Home" />

  <MainLayout>
    <v-container>

      <Top6Section 
        v-if="display.mdAndUp"
        :articles="props.articles"
      />

      <Top6SectionSmall
        v-if="display.smAndDown"
        :articles="props.articles"
      />

    </v-container>
  </MainLayout>
</template>

<style scoped>


</style>