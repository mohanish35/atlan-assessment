<template>
  <VBtn
    color="error"
    :disabled="!queryApplied"
    @click="resetAppliedQuery"
  >
    Reset Query
    <VIcon
      right
      dark
      v-text="'mdi-close'"
    />
  </VBtn>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ResetQueryBtn',
  methods: {
    ...mapActions(['resetAppliedQuery'])
  },
  computed: {
    ...mapState(['queryApplied'])
  }
}
</script>