<template>
    <div class="wrapper">
        <h1>Wrapper</h1>
        <CharactersList
          :charactersData="CHARACTERS"
        />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CharactersList from '@/components/CharactersList'

export default {
  name: 'Wrapper',
  components: { CharactersList },
  methods: {
    ...mapActions([
      'GET_CHARACTERS'
    ])
  },
  mounted () {
    this.GET_CHARACTERS()
  },
  computed: {
    ...mapGetters([
      'CHARACTERS'
    ])
  }
}
</script>

<style lang="scss">
</style>
