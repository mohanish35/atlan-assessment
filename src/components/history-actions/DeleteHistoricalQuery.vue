<template>
  <VTooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <VBtn @click="deleteQuery" v-on="on" v-bind="attrs" dark x-small color="pink">
        <VIcon dark v-text="'mdi-trash-can'" />
      </VBtn>
    </template>
    <span>Delete</span>
  </VTooltip>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'DeleteHistoricalQuery',
  methods: {
    ...mapActions(['deleteQueryFromHistory']),
    deleteQuery() {
      this.deleteQueryFromHistory({ id: this.query.id })
    }
  },
  props: {
    query: {
      default: {}
    }
  }
}
</script>