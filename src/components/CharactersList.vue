<template>
    <div class="characters-list__wrapper">
      <div class="characters-list__container">
        <CharacterCart
          v-for="character in charactersData.results"
          :key="character.id"
          :characterData="character"
        />
      </div>
      <div
        class="scroll-trigger"
        id="scrollTrigger"
        ref="infinitescrolltrigger"
      >
        <i class="fas fa-spinner fa-spin scroll-trigger__icon"></i>
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
      apiUrl: 'https://rickandmortyapi.com/api/character',
      currentUrl: '',
      nextUrl: '',
      charactersData: {}
    }
  },
  components: { CharacterCart },
  props: {
  },
  methods: {
    getCharacters () {
      axios
        .get(this.currentUrl)
        .then(response => (this.charactersData = response.data))
        .then((data) => {
          this.nextUrl = data.info.next
        })
        .catch(e => {
          console.log(e)
        })
    },
    scrollTrigger () {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0 && this.nextUrl) {
            this.next()
          }
        })
      })
      observer.observe(this.$refs.infinitescrolltrigger)
    },
    next () {
      this.currentUrl = this.nextUrl
      this.getPokemons()
    }
  },
  mounted () {
  },
  created () {
    this.currentUrl = this.apiUrl
    this.getCharacters()
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
.scroll-trigger{
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;
  &__icon{
    font-size: 50px;
  }
}
</style>
