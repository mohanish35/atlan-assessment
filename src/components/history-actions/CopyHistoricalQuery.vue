<template>
  <VTooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <VBtn 
        v-on="on" 
        v-bind="attrs" 
        dark x-small color="success"
        @click="copyQuery"
      >
        <VIcon dark v-text="'mdi-clipboard-multiple-outline'" />
      </VBtn>
    </template>
    <span>Copy</span>
  </VTooltip>
</template>

<script>
import copyToClipboard from 'copy-to-clipboard'

export default {
  name: 'CopyHistoricalQuery',
  methods: {
    copyQuery () {
      this.$emit('query-copied')
      copyToClipboard(this.queryText)
    }
  },
  props: {
    queryText: {
      default: ''
    }
  }
}
</script>