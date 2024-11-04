<template>
  <Head title="Articles" />

  <DashboardLayout>

    <Breadcrumbs :breadcrumbs="breadcrumbs"/>

    <div class="px-5">

      <div ref="tweetEmbed"  id="tweetEmbed"></div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import Breadcrumbs from '@/Components/Other/Breadcrumbs.vue';
import DashboardLayout from '@/Layouts/DashboardLayout.vue';
import { Head } from '@inertiajs/vue3';
import { nextTick, onMounted, ref } from 'vue';

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

const tweetEmbed = ref(null)

const embedTweet = async () => {
  await nextTick();
  window.twttr.widgets.createTweet(
    '1852056192140591301',
    tweetEmbed.value,
    {
      theme: 'dark'
    }
  );
}

onMounted(async () => {
  await embedTweet();
})
</script>