<template>
  <VTooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <VBtn 
        v-on="on" 
        v-bind="attrs" 
        dark x-small color="pink"
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