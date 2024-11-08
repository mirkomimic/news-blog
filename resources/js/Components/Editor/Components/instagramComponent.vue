<template>
  <node-view-wrapper>
    <div ref="instagramEmbed"></div>
  </node-view-wrapper>
</template>

<script setup>
import { NodeViewWrapper } from '@tiptap/vue-3'
import { nextTick, onMounted, ref, } from 'vue';

const props = defineProps(['nodeViewProps', 'node'])

const instagramEmbed = ref(null)

const embed = async () => {
  if (window.instgrm.Embeds) {
    await nextTick();
    instagramEmbed.value.innerHTML = props.node.attrs.blockquote;
    window.instgrm.Embeds.process()
  }
}

onMounted(() => {
  embed();
})

</script>