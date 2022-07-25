<template>
  <div justify="center">
    <VDialog v-model="dialog" scrollable max-width="900px">
      <template v-slot:activator="{ on, attrs }">
        <VBtn color="purple white--text" v-bind="attrs" v-on="on">
          Show History
          <VIcon right dark v-text="'mdi-history'" />
        </VBtn>
      </template>
      <VCard>
        <VCardTitle>History</VCardTitle>
        <VDivider></VDivider>
        <VCardText style="height: 300px;">
          <VSimpleTable dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th v-for="header in headers" :key="header" class="text-left">
                    {{ header }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="query in queryHistory" :key="query.executedAt">
                  <td>{{ query.text }}</td>
                  <td>{{ query.executedAt }}</td>
                  <td>
                    <HistoryActionsContainer :query="query" @fire-query="dialog = false" />
                  </td>
                </tr>
              </tbody>
            </template>
          </VSimpleTable>
        </VCardText>
        <VDivider></VDivider>
        <VCardActions>
          <VBtn color="blue darken-1" text @click="dialog = false">
            Close
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HistoryActionsContainer from '../../HistoryActionsContainer.vue'

export default {
  name: 'ShowHistory',
  components: { HistoryActionsContainer },
  data: () => ({
    dialog: false,
    headers: ['Query', 'ExecutedAt', 'Actions'],
  }),
  computed: {
    ...mapState(['queryHistory'])
  }
}

</script>