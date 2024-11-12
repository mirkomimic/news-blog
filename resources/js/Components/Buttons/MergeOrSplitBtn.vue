<template>
  <v-tooltip text="Merge/Split" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        type="button"
        color="accent"
        icon="mdi-table-merge-cells"
        @click="editor.chain().focus().mergeOrSplit().run()"
      />
    </template>
  </v-tooltip>
</template>

<script setup>
const props = defineProps(['editor'])
</script>