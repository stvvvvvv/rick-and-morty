<template>
    <div class="characters-list__wrapper">
      <div class="characters-list__container">
        <CharacterCart
          v-for="character in charactersData.results"
          :key="character.id"
          :characterData="character"
        />
      </div>
    </div>
</template>

<script>
import CharacterCart from '@/components/CharacterCart'

import axios from 'axios'

export default {
  name: 'CharactersList',
  data () {
    return {
      charactersData: {}
    }
  },
  components: { CharacterCart },
  props: {
  },
  methods: {
  },
  mounted () {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response => (this.charactersData = response.data))
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

<style lang="scss">
.characters-list{
  &__container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
