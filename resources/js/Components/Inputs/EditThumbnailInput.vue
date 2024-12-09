<template>
  <div class="d-flex align-center ga-3">
    Edit Thumbnail:
    <v-file-input
      ref="fileInput"
      @change="setThumbnail"
      label="Add Thumbnail"
      :error-messages="props.errorMsg"
      variant="outlined"
      accept="image/png, image/jpeg, image/jpg"
      prepend-icon="mdi-camera"
      class="d-none"
    ></v-file-input>
    <v-sheet 
      @click="fileInput?.click"
      class="cursor-pointer mx-auto"
    >
      <v-img
        v-if="thumbnailPreview"
        :src="thumbnailPreview"
        width="200"
        height="100"
      ></v-img>

      <div v-else>
        <v-img
          v-if="props.article.thumbnail"
          :src="`/storage/images/articles/${props.article.id}/${props.article.thumbnail}`"
          width="200"
          height="100"
        ></v-img>
        <v-sheet v-else border="sm" rounded class="d-flex flex-column justify-center align-center pa-2" width="200" height="100">
          <v-icon icon="mdi-image-frame" size="50" class="mt-3" color="accent"></v-icon>
          <div>Add Thumbnail</div>
        </v-sheet>
      </div>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const thumbnail = defineModel()
const thumbnailPreview = ref(null)
const fileInput = ref()

const props = defineProps({
  serverErrorMsg: { required: false, type: String },
  article: {required: true, type: Object}
})

const setThumbnail = (e) => {
  thumbnail.value = e.target.files[0]
  thumbnailPreview.value = URL.createObjectURL(e.target.files[0])
}

</script>