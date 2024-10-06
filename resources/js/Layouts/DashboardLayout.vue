<template>
  <v-layout>
    <v-app-bar 
      scroll-behavior="hide"
      scroll-threshold="50"
      elevation="2"
    >
      <NavBar></NavBar>
    </v-app-bar>

    <DashboardNav/>

    <v-main class="h-100">
      <v-fade-transition>
        <div v-if="animatePage">
          <slot/>
        </div>
      </v-fade-transition>
    </v-main>

    <v-bottom-navigation :elevation="0" v-if="display.smAndDown">

    </v-bottom-navigation>

  </v-layout>
</template>

<script setup>
import NavBar from '@/Components/NavBar.vue';
import DashboardNav from '@/Components/Navigation/DashboardNav.vue';
import { onMounted, ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const display = ref(useDisplay()) 
let animatePage = ref(false)

onMounted(() => {
  animatePage = true
})

</script>