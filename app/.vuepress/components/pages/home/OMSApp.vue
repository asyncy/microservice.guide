<template>
  <div class="oms-app">
    <h2 class="title">Test with the OMS App</h2>
    <div class="illustration">
      <img src="/assets/img/oms-app.png" alt="OMS App design" >
    </div>
    <div class="content">
      <h2 class="title">Build &amp; Test with OMS App</h2>
      <div class="text">Bundled with the official CLI, the OMS App is your handy tool for building, testing, and validating Open Microservices.</div>
      <s-button
        secondary
        arrow
        darkShadow
        @click="go()"
      >
        Get started on GitHub
      </s-button>
    </div>
  </div>
</template>

<script>
import SButton from '../../shared/Button.vue'

export default {
  name: 'OMSApp',
  components: {
    SButton
  },
  methods: {
    go() {
      window.location.assign('https://github.com/microservices/oms/tree/master/packages/ui')
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'

.oms-app
  background $lightBgColor
  display flex
  flex-direction column
  padding: 3.5rem 0
  .title
    display block
    text-align center
    margin-bottom 2.25rem
    padding 0 2.625rem
  @media (min-width: $MQMobile + 1px)
    padding: 7.5rem 0
    flex-direction row
    align-items center
    justify-content flex-start
    .title
      padding initial
      text-align left
      display none
  .illustration
    padding: 0
    background none
    border-radius 0
    box-shadow none
    @media (min-width: $MQMobile + 1px)
      padding: 1.125rem
      background white
      flex-basis 60%
      border-radius 10px
      box-shadow 0px 24.1047px 57.8512px rgba(39, 69, 104, 0.1)
    img 
      width 100%
      max-width 100%
  .content
    align-items center
    text-align: center;
    padding: 0 1rem;
    .title
      display none
    button 
      margin 0 auto
    @media (min-width: $MQMobile + 1px)
      align-items flex-start
      margin-left 5.625rem
      max-width 18.75rem
      text-align left
      padding 0
      .title
        display block
      button 
        margin initial
    .text
      margin 1.5rem 0
      line-height 1.7rem
</style>
