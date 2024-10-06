<template>
  <v-breadcrumbs :items="props.breadcrumbs">
    <template v-slot:item="{item}">
      <v-breadcrumbs-item :disabled="item.disabled">
        <Link :href="route(item.route)" class="text-decoration-none text-accent">{{ item.title }}</Link>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
  breadcrumbs: {required: true, type: Array}
})
</script>