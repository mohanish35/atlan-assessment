<template>
  <VApp>
    <HeaderContainer />
    <HeroBanner />
    <VMain>
      <VContainer >
        <ControlActionsContainer />
        <DataTable />
      </VContainer>
    </VMain>
    <FooterContainer />
    <ScrollToTopBtn />
  </VApp>
</template>

<script>
import DataTable from '../src/components/DataTable.vue'
import ControlActionsContainer from './components/ControlActionsContainer.vue'
import FooterContainer from './components/layout/FooterContainer.vue'
import HeaderContainer from './components/layout/HeaderContainer.vue'
import ScrollToTopBtn from './components/layout/ScrollToTopBtn.vue'
import HeroBanner from './components/layout/HeroBanner.vue'

export default {
  name: 'App',
  data: () => ({
    fab: false
  }),
  components: { 
    DataTable, 
    ControlActionsContainer, 
    FooterContainer, 
    HeaderContainer,
    ScrollToTopBtn,
    HeroBanner 
  }
};
</script>

<style>
  .v-main {
    padding-top: 0 !important;
  }
</style>
