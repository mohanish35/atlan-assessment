<template>
  <v-dialog :value="value" @input="$emit('input', $event)">
    <v-card>
      <v-card-title>My dialog</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @input="$emit('input', $event)" data-testid="dialog-close-button">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
};
</script>