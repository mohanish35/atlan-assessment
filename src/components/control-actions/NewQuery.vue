<template>
  <span justify="center">
    <VBottomSheet v-model="sheet">
      <template v-slot:activator="{ on, attrs }">
        <VBtn
          color="primary"
          v-bind="attrs"
          v-on="on"
        >
          Query
          <VIcon
            right
            dark
            v-text="'mdi-database-edit'"
          />
        </VBtn>
      </template>
      <VList>
        <VContainer>
          <div class="text-h4 mb-6">
            Query Database
          </div>
          <VTextarea
            autocomplete="query"
            v-model="queryText"
            :disabled="loading"
            autofocus
            @keydown.enter="onEnterPress"
          ></VTextarea>
          <FireQuery 
            :query-text="queryText.trim()" 
            :loading="loading"
            @fire-query="this.fireQuery"
          />
          <CopyQuery
            :query-text="queryText.trim()"
            :loading="loading"
          />
          <ClearQuery
            :query-text="queryText"
            @clear-query="queryText = ''"
            :loading="loading"
          />
        </VContainer>
      </VList>
    </VBottomSheet>
  </span>
</template>

<script>
import { mapActions } from 'vuex'

import FireQuery from './FireQuery.vue'
import CopyQuery from './CopyQuery.vue'
import ClearQuery from './ClearQuery.vue'

export default {
  name: 'NewQuery',
  data: () => ({
    sheet: false,
    loading: false,
    queryText: ''
  }),
  components: {
    FireQuery,
    CopyQuery,
    ClearQuery
  },
  methods: {
    onEnterPress ({ shiftKey }) {
      if (this.queryText.trim().length && !shiftKey) {
        this.fireQuery()
      }
    },
    ...mapActions(['applyQuery']),
    fireQuery () {
      this.loading = !this.loading

      setTimeout(() => {
        this.applyQuery({ query: this.queryText })
        this.loading = false
        this.sheet = false
        this.queryText = ''
      }, 2000)
    }
  }
}
</script>