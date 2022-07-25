<template>
  <VBtn
    color="error"
    @click="$emit('clear-query')"
    :disabled="queryText === '' || loading"
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
  name: 'ClearBtn',
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