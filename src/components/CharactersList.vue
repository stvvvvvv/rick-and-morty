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

export default {
  name: 'CharactersList',
  components: { CharacterCart },
  props: {
    charactersData: {
      type: Object,
      default () {
        return {}
      }
    }
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
