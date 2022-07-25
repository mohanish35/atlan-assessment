<template>
  <VTooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <VBtn 
        v-on="on" 
        v-bind="attrs" 
        dark 
        x-small 
        color="pink"
        @click="fireQuery"
      >
        <VIcon dark v-text="'mdi-fire'" />
      </VBtn>
    </template>
    <span>Fire Query</span>
  </VTooltip>
</template>

<script>
import { mapActions } from 'vuex';
  export default {
    name: 'FireHistoricalQuery',
    methods: {
      ...mapActions(['applyQuery']),
      fireQuery () {
        this.applyQuery({ query: this.queryText})
        this.$emit('fire-query')
      }
    },
    props: {
      queryText: {
        default: ''
      }
    },
  }
</script>