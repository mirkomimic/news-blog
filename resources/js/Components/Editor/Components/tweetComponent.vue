<template>
  <node-view-wrapper>
    <div ref="tweetEmbed"></div>
  </node-view-wrapper>
</template>

<script setup>
import { NodeViewWrapper } from '@tiptap/vue-3'
import { onMounted, ref, } from 'vue';

const props = defineProps(['nodeViewProps', 'node'])

const tweetEmbed = ref(null)

const embedTweet = () => {
  if (window.twttr && window.twttr.widgets) { 
    window.twttr.ready(() => { 
      window.twttr.widgets.createTweet(
        props.node.attrs.tweetID,
        tweetEmbed.value,
        {
          theme: 'dark',
          align: 'center',
        }
      ).catch(error => console.error('Error embedding tweet:', error));
     })
  }
}

onMounted(() => {
  embedTweet();
})
</script>