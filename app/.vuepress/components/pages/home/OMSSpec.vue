<template>
  <div class="oms-spec">
    <h2 class="title">Open Microservice Specification</h2>
    <div class="content">
      <h2 class="title">Open Microservice Specification</h2>
      <div class="text">An open standard for writing highly reusable self-documenting microservices.</div>
      <s-button
        secondary
        arrow
        darkShadow
        @click="go()"
      >
        View on GitHub
      </s-button>
    </div>
    <computer
      code
      class="microservice"
    >
      <slot />
    </computer>
  </div>
</template>

<script>
import SButton from '../../shared/Button.vue'
import Computer from '../../shared/Computer.vue'

export default {
  name: 'OMSSpec',
  components: {
    SButton,
    Computer
  },
  methods: {
    go() {
      window.location.assign('https://github.com/microservices/oms')
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'

.oms-spec
  background $lightBgColor
  border-radius 10px
  display flex
  flex-direction column
  padding-bottom 3.5rem
  @media (min-width: $MQMobile + 1px)
    padding-bottom 17rem
    margin: 0 2rem
  .title
    display block
    text-align center
    margin-bottom 2.25rem
    padding 0 2.625rem
  @media (min-width: $MQMobile + 1px)
    flex-direction row
    align-items center
    justify-content flex-end
    .title
      padding initial
      text-align left
      display none
  .title
    text-transform capitalize
    order 1
    margin-top 4rem
    margin-bottom 1.5rem
    @media (min-width: $MQMobile + 1px)
      order 0
  .microservice
    width 100%
    order 2
    @media (min-width: $MQMobile + 1px)
      order 0
      margin-top -2.75rem
      margin-right -7rem
      width 60%
  .content
    align-items center
    text-align: center;
    padding: 0 1rem;
    order 3
    @media (min-width: $MQMobile + 1px)
      order 0
    .title
      display none
    button 
      margin 0 auto
    @media (min-width: $MQMobile + 1px)
      align-items flex-start
      max-width 18.75rem
      margin-right 12.25rem
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