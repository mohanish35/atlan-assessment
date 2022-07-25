<template>
  <VAppBar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <VImg
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
    </div>
    <VSpacer></VSpacer>
    <VBtn
      href="https://github.com/mohanish35/atlan-assessment"
      target="_blank"
      text
    >
      <span class="mr-2">GitHub</span>
    <VIcon v-text="'mdi-open-in-new'" />
    </VBtn>
  </VAppBar>
</template>

<script>
export default {
  name: 'HeaderContainer'
}
</script>
