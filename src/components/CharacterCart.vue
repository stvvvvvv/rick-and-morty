<template >
    <div class="character-cart__wrapper">
        <div class="character-cart__img-container">
          <img class="character-cart__img" :src="characterData.image" alt="">
        </div>
        <div class="character-cart__info-container">
          <div class="character-cart__container">
            <div class="character-cart__section">
              <a href="">
                <h2 class="character-cart__name">{{characterData.name}}</h2>
              </a>
            </div>
            <div class="character-cart__section">
              <h4 class="character-cart__status">{{characterData.status}}</h4>
            </div>
            <div class="character-cart__section">
              <h3 class="character-cart__last-locaction">Last known location:</h3>
              <h4 class="character-cart__last-locaction_data">{{characterData.location.name}}</h4>
            </div>
            <div class="character-cart__section">
              <h3 class="character-cart__first">First seen in:</h3>
              <h4 class="character-cart__first_data">{{characterData.origin.name}}</h4>
            </div>
          </div>
        </div>
        <div class="character-cart__btn">
          <p>View more</p>
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

<style lang="scss">
.character-cart{
  &__wrapper{
    display: flex;
    width: 600px;
    height: 230px;
    background-color: #3c3e44;
    margin: 10px;
    border-radius: 1rem;
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  }
  &__img{
    width: auto;
    max-height: 230px;
    border-radius: 1rem 0 0 1rem;
  }
  &__section{
    margin: 20px 10px;
  }
  &__name{
    font-size: 27px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  &__status{
    font-weight: bold;
  }
  &__last-locaction{
    font-weight: bold;
    &_data{
      margin-top: 5px;
      color: #949494;
    }
  }
  &__first{
    font-weight: bold;
   &_data{
     margin-top: 5px;
      color: #949494;
   }
  }
  &__btn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: auto;
    margin-left: auto;
    background-color: #ff9800;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    border-radius: 1rem 0 0 1rem;
    &:hover{
      cursor: pointer;
    }
  }
}
</style>
