<template>
  <v-stepper
      v-model="step"
    >
    <template v-slot:default="{ prev, next }">
      <v-stepper-header>
        <v-stepper-item
          title="Basic Info"
          value="1"
          :complete="step > 1"
        ></v-stepper-item>

        <v-divider></v-divider>
  
        <v-stepper-item
          title="Content"
          value="2"
          :complete="step > 2"
        ></v-stepper-item>

        <v-divider></v-divider>

        <v-stepper-item
          title="Confirm"
          value="3"
        ></v-stepper-item>

      </v-stepper-header>

      <v-stepper-window>

        <v-stepper-window-item value="1" class="flex">
          <v-card
            prepend-icon="mdi-newspaper-variant-outline"
            title="Create Article"
            class="w-75 mx-auto ma-1"
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

                      <ThumbnailInput 
                        v-model="form.thumbnail"
                        :server-error-msg="form.errors.thumbnail"
                      />

                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
        </v-stepper-window-item>

        <v-stepper-window-item value="2">
          <ArticleContentEditor 
            v-model="form.content"
            v-model:images="form.images"
            style="width: 700px;"
            class="mx-auto"
          />
        </v-stepper-window-item>

        <v-stepper-window-item value="3">
          <v-btn
            @click="save"
            :disabled="form.processing"
            :loading="form.processing"
            color="accent" 
            variant="tonal"
            >Confirm
          </v-btn>
        </v-stepper-window-item>

      </v-stepper-window>

      <v-stepper-actions>
        <template v-slot:next>
          <v-btn @click="next">Next</v-btn>
        </template>
        <template v-slot:prev>
          <v-btn @click="prev">Previous</v-btn>
        </template>
      </v-stepper-actions>
    </template>
  </v-stepper>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import ThumbnailInput from '../Inputs/ThumbnailInput.vue';
import ArticleContentEditor from '../Editor/ArticleContentEditor.vue';

const step = ref(0)
const valid = ref()
const props = defineProps(['categories'])

const form = useForm({
  title: null,
  thumbnail: null,
  category_id: null,
  content: null,
  images: []
})

const save = () => {
  form.post(route('dashboard.articles.store'), {
    onSuccess: () => {
      form.reset();
    }
  });
}

</script>