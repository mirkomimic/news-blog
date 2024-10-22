<template>
  <node-view-wrapper class="vue-component">
    <label contenteditable="false">Vue Component</label>
    <node-view-content class="content is-editable" />
  </node-view-wrapper>
</template>

<script>
import { nodeViewProps, NodeViewWrapper, NodeViewContent } from '@tiptap/vue-3'

export default {
  components: {
    NodeViewWrapper,
    NodeViewContent
  },

  props: nodeViewProps,


}
</script>

<style lang="scss">
.tiptap {
  /* Vue component */
  .vue-component {
    background-color: rgba(88, 5, 255, .05);
    border: 2px solid purple;
    border-radius: 0.5rem;
    margin: 2rem 0;
    position: relative;

    label {
      background-color: purple;
      border-radius: 0 0 0.5rem 0;
      color: white;
      font-size: 0.75rem;
      font-weight: bold;
      padding: 0.25rem 0.5rem;
      position: absolute;
      top: 0;
    }

    .content {
      margin-top: 1.5rem;
      padding: 1rem;

      &.is-editable {
        border: 2px dashed gray;
        border-radius: 0.5rem;
        margin: 2.5rem 1rem 1rem;
        padding: 0.5rem;
      }
    }
  }
}
</style>