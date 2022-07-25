<template>
  <VFooter
    dark
    padless
  >
    <VCard
      class="flex"
      flat
      tile
    >
      <VCardTitle class="primary">
        <strong class="subheading">Get connected with me on social networks!</strong>
        <VSpacer></VSpacer>

        <VBtn
          v-for="handle in socialMediaHandles"
          :key="handle.icon"
          target="_blank"
          class="mx-4"
          dark
          :href="handle.link"
          icon
        >
          <VIcon 
            size="24px" 
            v-text="handle.icon"
          />
        </VBtn>
      </VCardTitle>

      <VCardText class="py-2 white--text text-center">
        Made With ❤️ by <strong>Mohanish Mankar</strong>
      </VCardText>
    </VCard>
  </VFooter>
</template>

<script>
export default {
  name: 'FooterContainer',
  data: () => ({
    socialMediaHandles: [{
      icon: 'mdi-linkedin',
      link: 'https://www.linkedin.com/in/mohanish-mankar-695055140/'
    }, {
      icon: 'mdi-github',
      link: 'https://github.com/mohanish35'
    }, {
      icon: 'mdi-instagram',
      link: 'https://www.instagram.com/mohanish_96/'
    }, {
      icon: 'mdi-quora',
      link: 'https://www.quora.com/profile/%E0%A4%AE%E0%A5%8B%E0%A4%B9%E0%A5%8D%E0%A4%A8%E0%A5%80%E0%A4%B7-%E0%A4%AE%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%B0-Mohanish-Mankar'
    }]
  })
}

</script>