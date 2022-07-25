<template>
  <VBtn
    class="mr-2"
    :loading="loading"
    :disabled="loading || !queryText.length"
    color="primary"
    @click="$emit('fire-query')"
  >
    Fire
    <VIcon
      right
      dark
      v-text="'mdi-fire'"
    />
  </VBtn>
</template>

<script>
export default {
  name: 'FireQuery',
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