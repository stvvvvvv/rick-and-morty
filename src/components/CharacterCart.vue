<template >
    <div class="character-cart__wrapper">
        <div class="character-cart__img-container">

        </div>
        <div class="character-cart__info-container">
          <div class="section">
            <a href="">
              <h2>{{characterData.name}}</h2>
            </a>
            <div class="section">
              <h3 class="character-cart__status">{{characterData.status}}</h3>
            </div>
            <div class="section">
              <h2>Last known location:</h2>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CharacterPage',
  props: {
    characterData: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="">
</style>
