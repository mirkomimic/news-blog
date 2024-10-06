<template>
  <div class="pa-2">
    <v-menu
      open-on-hover
      location="bottom"
      open-delay="50"
      close-delay="50"
      transition="fade-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          icon
          width="35"
          height="35"
        >
          <img src="/images/user-placeholder.png" alt="" class="rounded-circle" style="width: 35px;"/>
        </v-btn>
        <v-icon v-bind="props" icon="mdi-chevron-down"></v-icon>
      </template>
      <v-list density="compact" rounded="lg" class="mt-2">

        <v-list-item @click="router.get(route('profile.edit'))" title="Profile" append-icon="mdi-account" :title="user.name" :subtitle="user.email"/>

        <v-list-item @click="router.post(route('logout'))" title="Logout" append-icon="mdi-logout"/>

      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { Link, router, usePage } from '@inertiajs/vue3';

const user = usePage().props.auth.user

const items = [
  {
    icon: 'mdi-account',
    title: user.name,
    subtitle: user.email,
    value: 'profile.edit'
  },
  {
    icon: 'mdi-logout',
    title: 'Logout',
    // action: () => router.post(route('logout'))
    value: 'logout'
  },
]
</script>