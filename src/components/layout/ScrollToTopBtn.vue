<template>
  <v-btn v-scroll="onScroll" v-show="fab" fab dark fixed bottom right color="pink" @click="toTop">
    <v-icon v-text="'mdi-arrow-up'" />
  </v-btn>
</template>

<script>
export default {
  name: 'ScrollToTopBtn',
  data: () => ({
    fab: false
  }),
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 200
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
  
</script>