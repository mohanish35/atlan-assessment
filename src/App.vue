<template>
  <VApp>
    <HeaderContainer />
    <HeroBanner />
    <VMain>
      <VContainer >
        <ControlBtnsContainer />
        <DataTable />
      </VContainer>
    </VMain>
    <FooterContainer />
    <ScrollToTopBtn />
  </VApp>
</template>

<script>
import DataTable from '../src/components/DataTable.vue'
import ControlBtnsContainer from '../src/components/control-btns/ControlBtnsContainer.vue'
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
    ControlBtnsContainer, 
    FooterContainer, 
    HeaderContainer,
    ScrollToTopBtn,
    HeroBanner 
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 500
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
};
</script>

<style>
  .v-main {
    padding-top: 0 !important;
  }
</style>
