<template>
  <VBtn
    color="error"
    @click="$emit('clear-query')"
    :disabled="!queryText.length || loading"
  >
    Clear
    <VIcon
      right
      dark
      v-text="'mdi-close'"
    />
  </VBtn>
</template>

<script>
export default {
  name: 'ClearQuery',
  props: {
    queryText: {
      default: ''
    },
    loading: {
      default: true
    }
  }
}
</script>