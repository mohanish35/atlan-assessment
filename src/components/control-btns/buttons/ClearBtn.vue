<template>
  <VBtn
    color="error"
    @click="$emit('clear-query')"
    :disabled="queryText === ''"
  >
    Clear
    <VIcon
      right
      dark
    >
      mdi-close
    </VIcon>
  </VBtn>
</template>

<script>
export default {
  name: 'ClearBtn',
  props: {
    queryText: {
      default: ''
    }
  }
}
</script>