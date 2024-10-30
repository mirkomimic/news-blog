<template>
  <v-toolbar
    color="transparent"
    density="compact"
  >
    <v-container>
      <div class="ml-auto d-flex align-center gap-4">

        <div class="d-flex">
          <Link href="/" class="text-decoration-none text-accent">
            <v-img width="50" color="accent" src="/images/news-icon.png" rounded="lg"/>
          </Link>
        </div>

        <v-spacer></v-spacer>

        <div class="d-flex align-center ga-4">
          <Link v-if="!$page.props.auth.user" :href="route('login')">
            <v-btn
              variant="outlined"
              color="accent"
              >Login
            </v-btn>
          </Link>

          <Link v-if="!$page.props.auth.user" :href="route('register')">
            <v-btn
              variant="outlined"
              color="accent"
              >Register
            </v-btn>
          </Link>

          <Link v-if="$page.props.auth.user?.is_admin" :href="route('dashboard.home')">
            <v-btn
              variant="outlined"
              color="accent"
              >Dashboard
            </v-btn>
          </Link>

          <v-switch
            @click="toggleTheme(theme)"
            density="compact"
            true-icon="mdi-white-balance-sunny"
            false-icon="mdi-weather-night"
            color="accent"
            value="secondary"
            hide-details
          ></v-switch>

          <NavBarUserMenu v-if="$page.props.auth.user"/>

        </div>
      </div>
    </v-container>
  </v-toolbar>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { toggleTheme } from '@/Composables/helpers'
import { useTheme } from 'vuetify'
import NavBarUserMenu from './Menus/NavBarUserMenu.vue';

const theme = useTheme()

</script>