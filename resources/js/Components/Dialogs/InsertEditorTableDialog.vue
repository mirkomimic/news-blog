<template>
  <v-tooltip text="Table" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        @click="dialog = true"
        icon="mdi-table"
        color="accent"
      ></v-btn>
    </template>
  </v-tooltip>

  <v-dialog v-model="dialog" width="auto">
    <v-card
      min-width="400"
      title="Insert Table"
    >
      <v-card-text>
        <v-number-input
          v-model="rows"
          :reverse="false"
          controlVariant="stacked"
          label="Rows"
          :hideInput="false"
          :inset="false"
          :min="0"
          variant="outlined"
          density="comfortable"
        ></v-number-input>

        <v-number-input
          v-model="columns"
          :reverse="false"
          controlVariant="stacked"
          label="Columns"
          :hideInput="false"
          :inset="false"
          :min="0"
          variant="outlined"
          density="comfortable"
        ></v-number-input>
      </v-card-text>
      <template v-slot:actions>
        <v-btn
          color="accent"
          text="Cancel"
          @click="dialog = false"
        ></v-btn>
        <v-btn
          color="accent"
          text="Insert"
          @click="save"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['editor'])

const dialog = ref(false)
const rows = ref(0)
const columns = ref(0)

const save = () => {
  props.editor.commands.insertTable({ rows: rows.value, cols: columns.value, withHeaderRow: false })

  dialog.value = false
}
</script>