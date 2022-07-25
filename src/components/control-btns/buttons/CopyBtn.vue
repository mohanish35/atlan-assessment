<template>
  <VBtn
    class="mr-2"
    color="success"
    @click="copyQueryToClipboard"
    :disabled="disableCopyToClipboard || loading"
  >
    {{ currentQueryCopied ? 'Copied' : 'Copy' }}
    <VIcon
      right
      dark
      v-text="currentQueryCopied ? 'mdi-check-all' : 'mdi-clipboard-multiple-outline'"
    />
  </VBtn>
</template>

<script>
import copyToClipboard from 'copy-to-clipboard'

export default {
  name: 'CopyBtn',
  data: () => ({
    copiedText: ''
  }),
  methods: {
    copyQueryToClipboard () {
      this.copiedText = this.queryText
      copyToClipboard(this.copiedText)
    },
  },
  computed: {
    disableCopyToClipboard () {
      return this.queryText === "" || this.copiedText === this.queryText
    },
    currentQueryCopied () {
      return this.queryText !== "" && this.copiedText === this.queryText
    }
  },
  props: {
    queryText: {
      default: ''
    },
    loading: {
      default: false
    }
  }
}
</script>