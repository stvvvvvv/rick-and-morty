<template>
    <div class="characters-list__wrapper">
      <div class="characters-list__container">
        <div class="characters-list__item">
          <h1>Characters</h1>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CharactersList',
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
</style>
