<template>
  <div class="contact container large">
    <h2 class="title">Contribute With OMS!</h2>
    <p class="text">
      We are under development and open to contribution. 100% open source.
      <br>
      A part of the Linux Foundation and under the CNCF.
    </p>
    <s-button 
      primary 
      lightShadow 
      @click="go()"
      class="contribute"
    >
      Contribute to OMS
    </s-button>
    <img class="cloud-native" src="/assets/img/cncf_color@2x.png" />
  </div>
</template>

<script>
import SButton from './Button.vue'

export default {
  name: 'Contact',
  components: {
    SButton
  },
  methods: {
    go() {
      window.location.assign('https://github.com/microservices/omg')
    }
  }
}
</script>

<style lang="stylus" scoped>
.contact
  display flex
  flex-direction column !important
  align-items center
  justify-content flex-start
  padding 3.5rem 1.8rem 5rem 1.8rem !important
  @media (min-width: ($MQMobile + 1px))
    padding 10rem 1.8rem 10rem 1.8rem !important
  .title
    text-align center
    color white
    font-size 1.5rem
    @media (min-width: ($MQMobile + 1px))
      font-size 2.625rem
  .text
    text-align center
    margin 1rem 0 2rem 0
    font-size 1.125rem
    @media (min-width: ($MQMobile + 1px))
      font-size initial
  .contribute
    margin-bottom 1.5rem
  .cloud-native
    width 130px
    height 42px
</style>
