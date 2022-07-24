<template>
  <VBtn
    class="mr-2"
    :loading="loading"
    :disabled="loading || queryText === ''"
    color="primary"
    @click="this.$emit('fire-query')"
  >
    Fire
    <VIcon
      right
      dark
    >
      mdi-fire
    </VIcon>
  </VBtn>
</template>

<script>
export default {
  name: 'FireBtn',
  props: {
    loading: {
      default: false
    },
    queryText: {
      default: ''
    }
  }
}

</script>