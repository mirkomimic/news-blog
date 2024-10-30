<template>
  <node-view-wrapper>
    <v-carousel
      color="accent"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(image, index) in images" :key="index"
        :src="image"
        cover
      ></v-carousel-item>
    </v-carousel>
  </node-view-wrapper>
</template>

<script setup>
import { NodeViewWrapper } from '@tiptap/vue-3'
import { computed } from 'vue';

const props = defineProps(['nodeViewProps', 'node'])

const images = computed(() => {
  return props.node.attrs.src instanceof Array ?
    props.node.attrs.src :
    props.node.attrs.src.split(',')
})

</script>