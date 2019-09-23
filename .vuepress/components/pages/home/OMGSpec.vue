<template>
  <div class="omg-spec">
    <h2 class="title">OMS Spec</h2>
    <div class="content">
      <h2 class="title">OMS Spec</h2>
      <div class="text">A Spec to write highly reusable self documenting microservices.</div>
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
    omg: 1
    
    info:
      version: 1.0.1
      title: Calculator
      description: This is a sample calculator
      license:
        name: MIT
        url: https://opensource.org/licenses/MIT
    
    actions:
      add:
        help: Add two integers
        http:
          method: post
          path: /add
          port: 5000
        arguments:
          x:
            type: int
            required: true
            in: requestBody
          y:
            type: int
            required: true
            in: requestBody
          output:
            type: int

    lifecycle:
      startup:
        command: ['flask', 'run', '--host=0.0.0.0']
    </computer>
  </div>
</template>

<script>
import SButton from '../../shared/Button.vue'
import Computer from '../../shared/Computer.vue'

export default {
  name: 'OMGSpec',
  components: {
    SButton,
    Computer
  },
  methods: {
    go() {
      window.location.assign('https://github.com/microservices/omg')
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'

.omg-spec
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