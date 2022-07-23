<template>
  <VDataTable
    :headers="headers"
    :items="itemsToDisplay"
    :items-per-page="10"
    class="elevation-1"
  />
</template>

<script>
import { mapState } from 'vuex'
import { extractHeadersFromJson } from '../../util/parsers'
import { mapMutations } from 'vuex'
import pokemonJsonData from '../assets/data-source/pokemon.json'

export default {
  name: 'DataTable',
  data: () => ({
    pokemonJsonData,
    headers: extractHeadersFromJson(pokemonJsonData)
  }),
  mounted () {
    this.SET_ITEMS_TO_DISPLAY(pokemonJsonData)
  },
  methods: {
    ...mapMutations(['SET_ITEMS_TO_DISPLAY'])
  },
  computed:{
    ...mapState(['itemsToDisplay']),
  }
}
</script>