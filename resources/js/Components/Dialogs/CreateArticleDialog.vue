<template>
  <v-dialog
    v-model="dialog"
    max-width="600"
    persistent
  >
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        prepend-icon="mdi-plus" 
        color="accent" 
        variant="tonal"
        >Create Article
      </v-btn>
    </template>

    <v-card
      prepend-icon="mdi-newspaper-variant-outline"
      title="Create Article"
    >
      <v-card-text>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                class="d-flex flex-column ga-3"
              >
                <v-text-field
                  v-model="form.title"
                  :error-messages="form.errors.title"
                  variant="outlined"
                  density="compact"
                  label="Enter Title"
                  required
                ></v-text-field>

                <ThumbnailInput 
                  v-model="form.thumbnail"
                  :server-error-msg="form.errors.thumbnail"
                />

                <v-select
                  v-if="props.categories"
                  v-model="form.category_id"
                  :items="props.categories"
                  item-title="name"
                  item-value="id"
                  label="Select Category"
                  variant="outlined"
                  density="compact"
                ></v-select>

                <v-divider></v-divider>

                <ArticleContentEditor 
                  v-model="form.content"
                />

              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          @click="close"
          color="accent"
          text="Close"
          variant="plain"
        ></v-btn>

        <v-btn
          @click="save"
          color="accent"
          text="Save"
          variant="tonal"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import ThumbnailInput from '../Inputs/ThumbnailInput.vue';
import ArticleContentEditor from '../Editor/ArticleContentEditor.vue';

const dialog = ref(false)
const valid = ref(false)

const props = defineProps({
  categories: {required: false, type: Object}
})

const form = useForm({
  title: null,
  thumbnail: null,
  category_id: null,
  content: null,
})

const save = () => {
  console.log('send');
}

const close = () => {
  form.reset();
  dialog.value = false
}

</script>