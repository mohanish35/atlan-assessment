<template>
  <div justify="center">
    <VDialog v-model="dialog" scrollable max-width="900px">
      <template v-slot:activator="{ on, attrs }">
        <VBtn color="purple white--text" 
          :disabled="!queryHistory.length" 
          v-bind="attrs" 
          v-on="on"
          data-testid="show-history"
        >
          Show History
          <VIcon right dark v-text="'mdi-history'" />
        </VBtn>
      </template>
      <VCard data-testid="historical-query-table">
        <VCardTitle>History</VCardTitle>
        <VDivider></VDivider>
        <VCardText style="height: 300px;">
          <VSimpleTable v-if="queryHistory.length" dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th 
                    v-for="header in headers" 
                    :key="header" 
                    class="text-left"
                  >
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="query in queryHistory" 
                  :key="query.executedAt"
                >
                  <td>
                    {{ query.text }}
                  </td>
                  <td>{{ query.executedAt }}</td>
                  <td>
                    <HistoryActionsContainer 
                      :query="query" 
                      @query-copied="closeDialogBox" 
                      @fire-query="closeDialogBox" 
                    />
                  </td>
                </tr>
              </tbody>
            </template>
          </VSimpleTable>
          <div 
            v-else 
            class="text-h3 mt-12 text-center" 
            align-center
          >
            Why so empty? Fire some queries!
          </div>
        </VCardText>
        <VDivider></VDivider>
        <VCardActions>
          <VBtn 
            color="blue darken-1" 
            text 
            @click="closeDialogBox"
          >
            Close
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HistoryActionsContainer from '../HistoryActionsContainer.vue'

export default {
  name: 'ShowHistory',
  components: { HistoryActionsContainer },
  methods: {
    closeDialogBox() {
      this.dialog = false
    }
  },
  data: () => ({
    dialog: false,
    headers: ['Query', 'ExecutedAt', 'Actions'],
  }),
  computed: {
    ...mapState(['queryHistory'])
  }
}

</script>