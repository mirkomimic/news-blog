<template>
  <v-dialog
    v-model="dialog"
    width="auto"
    persistent
  >
    <v-card
      title="Edit Article"
    >
      <v-card-text>
        <v-text-field
          v-model="editArticleForm.title"
          color="accent"
          label="Title"
          variant="underlined"
        ></v-text-field>

        <v-select
          v-if="categories"
          v-model="editArticleForm.category_id"
          :items="categories"
          item-title="name"
          item-value="id"
          label="Select Category"
          variant="underlined"
          density="compact"
          color="accent"
        ></v-select>

        <v-divider class="my-5"></v-divider>

        <EditThumbnailInput
          v-model="editArticleForm.thumbnail" 
          :article="props.article"
          :server-error-msg="editArticleForm.errors.thumbnail"
        />

        <v-divider class="my-5"></v-divider>
        Edit Content:
        <EditArticleContentEditor 
          v-model="editArticleForm.content"
          :article="props.article"
          style="width: 700px;"
          class="mx-auto"
        />

      </v-card-text>
      <template v-slot:actions>
        <v-btn
          class="ms-auto"
          text="Cancel"
          @click="close"
        ></v-btn>
        <v-btn
          variant="tonal"
          color="accent"
          text="Ok"
          @click="save"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { router, useForm } from '@inertiajs/vue3';
import { inject, provide, watch } from 'vue';
import EditArticleContentEditor from '@/Components/Editor/EditArticleContentEditor.vue';
import EditThumbnailInput from '../Inputs/EditThumbnailInput.vue';

const dialog = defineModel()
const props = defineProps(['article'])
const categories = inject('categories')

const emit = defineEmits(['onClose'])

const editArticleForm = useForm({
  title: '',
  thumbnail: '',
  category_id: null,
  content: '',
  images: []
})

watch(
  () => props.article,
  (newArticle) => {
    if (newArticle) {
      editArticleForm.title = newArticle.title;
      // editArticleForm.thumbnail = newArticle.thumbnail;
      editArticleForm.category_id = newArticle.category_id;
      editArticleForm.content = newArticle.content;
      // editArticleForm.images = newArticle.images;
    }
  },
  { immediate: true }
);

provide('editArticleForm', editArticleForm)

const close = () => {
  emit('onClose')
  dialog.value = false
}

const save = () => {
  try {
    router.post(route('dashboard.articles.update', props.article.id), {
      _method: 'put',
      ...editArticleForm,
    })

    emit('onClose')
    dialog.value = false

  } catch (error) {
    console.log(error);
  }
}
</script>