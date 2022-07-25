<template>
  <VApp>
    <HeaderContainer />
    <HeroBanner />
    <VMain>
      <VContainer >
        <ControlBtns />
        <DataTable />
      </VContainer>
    </VMain>
    <FooterContainer />
  </VApp>
</template>

<script>
import DataTable from '../src/components/DataTable.vue'
import ControlBtns from '../src/components/control-btns/ControlBtns.vue'
import FooterContainer from './components/layout/FooterContainer.vue'
import HeaderContainer from './components/layout/HeaderContainer.vue'
import HeroBanner from './components/layout/HeroBanner.vue'

export default {
  name: 'App',
  components: { 
    DataTable, 
    ControlBtns, 
    FooterContainer, 
    HeaderContainer, 
    HeroBanner 
  }
};
</script>

<style>
  .v-main {
    padding-top: 0 !important;
  }
</style>
