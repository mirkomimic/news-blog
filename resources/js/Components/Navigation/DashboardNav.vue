<template>
  <v-navigation-drawer
    :disable-resize-watcher="true"
    expand-on-hover
    permanent
    rail
  >
    <v-list>
      <v-list-item
        :prepend-avatar="$page.props.auth.user.image || '/images/user-placeholder.png'"
        :title="$page.props.auth.user.name"
        :subtitle="$page.props.auth.user.email"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>

      <v-list-item
        @click="router.get(route('dashboard.home'))"
        :active="$page.url == '/dashboard'"
        prepend-icon="mdi-home-variant"
        title="Dashboard"
        value="Dashboard"
      />

      <v-list-item
        @click="router.get(route('dashboard.articles.index'))"
        :active="$page.url == '/dashboard/articles'"
        prepend-icon="mdi-newspaper-variant-outline"
        title="Articles" 
        value="Articles"
      />

    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { router } from '@inertiajs/vue3';
</script>