<template>
  <VApp>
    <VAppBar
      app
      color="primary"
      dark
    />
    <VMain>
    <VContainer >
      <ControlBtns />
      <DataTable />
    </VContainer>
    </VMain>
  </VApp>
</template>

<script>
import DataTable from '../src/components/DataTable.vue'
import ControlBtns from '../src/components/control-btns/ControlBtns'

export default {
  name: 'App',
  components: { DataTable, ControlBtns }
};
</script>
