<template>
  <div class="d-flex align-center ga-3">
    <v-file-input
      @change="setThumbnail"
      label="Add Thumbnail"
      multiple
      :error-messages="props.errorMsg"
      variant="outlined"
      accept="image/png, image/jpeg, image/jpg"
      prepend-icon="mdi-camera"
    ></v-file-input>
    <v-sheet>
      <v-img
        v-if="thumbnailPreview"
        :src="thumbnailPreview"
        width="200"
        height="100"
      ></v-img>
      <v-sheet v-else border="sm" rounded class="d-flex justify-center items-center pa-2" width="200" height="100">
        <v-icon icon="mdi-image-frame" size="50" class="mt-3" color="accent"></v-icon>
      </v-sheet>
    </v-sheet>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const thumbnail = defineModel()
const thumbnailPreview = ref(null)

const props = defineProps({
  serverErrorMsg: {required: false, type: String}
})

const setThumbnail = (e) => {
  thumbnail.value = e.target.files[0]
  thumbnailPreview.value = URL.createObjectURL(e.target.files[0])
}

</script>