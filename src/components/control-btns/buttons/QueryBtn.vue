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
          >
            mdi-database-edit
          </VIcon>
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
          ></VTextarea>
          <FireBtn 
            :query-text="queryText" 
            :loading="loading"
            @fire-query="fireQuery"
          />
          <CopyBtn
            :query-text="queryText"
          />
          <ClearBtn
            :query-text="queryText"
            @clear-query="queryText = ''"
          />
        </VContainer>
      </VList>
    </VBottomSheet>
  </span>
</template>

<script>
import { mapActions } from 'vuex'

import FireBtn from './FireBtn.vue'
import CopyBtn from './CopyBtn.vue'
import ClearBtn from './ClearBtn.vue'

export default {
  name: 'QueryBtn',
  data: () => ({
    sheet: false,
    loading: false,
    queryText: ''
  }),
  components: {
    FireBtn,
    CopyBtn,
    ClearBtn
  },
  methods: {
    ...mapActions(['setRandomItems']),
    fireQuery () {
      this.loading = !this.loading

      setTimeout(() => {
        this.setRandomItems()
        this.loading = false
        this.sheet = false
      }, 2000)
    }
  }
}
</script>