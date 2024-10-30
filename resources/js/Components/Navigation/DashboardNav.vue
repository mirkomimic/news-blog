<template>
  <v-navigation-drawer
    color="transparent"
    permanent
  >
    <v-list>
      <v-list-item
        :prepend-avatar="$page.props.auth.user?.image || '/images/user-placeholder.png'"
        :title="$page.props.auth.user?.name"
        :subtitle="$page.props.auth.user?.email"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list v-model:opened="open" density="compact" nav>
      <v-list-item
        @click="router.get(route('dashboard.home'))"
        :active="$page.url == '/dashboard'"
        prepend-icon="mdi-home-variant"
        title="Dashboard"
        value="Dashboard"
      />

      <v-list-group value="Articles">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-newspaper-variant-outline"
            title="Articles"
            value="Articles"
          ></v-list-item>
        </template>
        <v-list-item
          @click="router.get(route('dashboard.articles.index'))"
          :active="$page.url == '/dashboard/articles'"
          title="Index" 
          value="Index"
        />
        <v-list-item
          @click="router.get(route('dashboard.articles.create'))"
          :active="$page.url == '/dashboard/articles/create'"
          title="Create" 
          value="Create"
        />
      </v-list-group>
    </v-list>
      


  </v-navigation-drawer>
</template>

<script setup>
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';

const open = ref(['Articles'])
</script>