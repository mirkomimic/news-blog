<template>
  <v-dialog width="500" persistent>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        color="red" 
        variant="text" 
        density="compact" 
        icon="mdi-delete"
      ></v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card 
        title="Delete Article"
      >
        <v-card-text>
          Delete article ID: {{ props.article.id }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            @click="isActive.value = false"
          ></v-btn>
          <v-btn 
            @click="save" 
            variant="tonal"
            color="accent"
            text="Save"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { router } from '@inertiajs/vue3';
const props = defineProps(['article'])

const save = () => {
  try {
    router.delete(route('dashboard.articles.destroy', props.article.id))
  } catch (error) {
    console.log(error);
  }
}
</script>