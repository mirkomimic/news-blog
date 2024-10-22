<template>
  <node-view-wrapper>
    <node-view-content 
      id="sourceNode" 
      class="text-grey-lighten-1 bg-grey-darken-3 pa-2 rounded"
    />
  </node-view-wrapper>
</template>

<script>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'

export default {
  components: {
    NodeViewWrapper,
    NodeViewContent
  },

  props: {
    nodeViewProps,
  }
}

</script>