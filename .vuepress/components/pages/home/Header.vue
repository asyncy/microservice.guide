<template>
  <div class="home-header">
    <h1 class="main-title">Turn containers into libraries.</h1>
    <s-button 
      class="get-started" 
      primary 
      lightShadow
      @click="$router.push({ path: '/introduction/overview' })"
    >
      Get Started
    </s-button>
    <div class="cols">
      <div class="col">
        <div class="illustration">
          <img src="/assets/img/illustrations/containers.svg" alt="two containers on top of each other illustration">
        </div>
        <div class="content">
          <h4 class="title">Containers are blackboxes</h4>
          <div class="text">Data exchange and communication with microservices deployed in containers is a blackbox.</div>
        </div>
      </div>

      <div class="col bigoudi">
        <div class="illustration">
          <img src="/assets/img/illustrations/pigtail-arrow-1.svg" alt="pigtail like arrow illustration">
        </div>
      </div>

      <div class="col">
        <div class="illustration">
          <img src="/assets/img/illustrations/services.svg" alt="services inside a container illustration">
        </div>
        <div class="content">
          <h4 class="title">OMG Specification</h4>
          <div class="text">The OMG specification is a standard for communicating & documenting these services that turn your microservice into a cloud-native library!</div>
        </div>
      </div>

      <div class="col bigoudi">
        <div class="illustration">
          <img src="/assets/img/illustrations/pigtail-arrow-2.svg" alt="pigtail like arrow illustration">
        </div>
      </div>

      <div class="col">
        <div class="illustration">
          <img src="/assets/img/illustrations/app.svg" alt="OMG Application illustration">
        </div>
        <div class="content">
          <h4 class="title">Run anywhere</h4>
          <div class="text">Run anywhere - from your terminal to Slack. Tools for documentation and testing come free &#128521;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SButton from '../../shared/Button.vue'

export default {
  name: 'Header',
  components: {
    SButton
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'

.home-header
  display flex
  flex-direction column
  align-items center
  justify-content flex-start
  margin-top 3rem !important
  margin-bottom 3rem !important
  @media (min-width: $MQMobile + 1px)
    margin-top 7.5rem !important
    margin-bottom 11.75rem !important
  .main-title
    width 100%
    font-size 1.5rem
    line-height 2rem
    text-align center
    margin-bottom 2.25rem
    @media (min-width: $MQMobile + 1px)
      font-size 3.125rem
      line-height 4rem
      width 50%
      margin-bottom 3.5rem
  .cols
    display flex
    align-items flex-start
    justify-content flex-start
    flex-direction column
    padding-top 2.25rem
    @media (min-width: $MQMobile + 1px)
      justify-content space-between
      flex-direction row
      padding-top 5.25rem
    .col
      display flex
      flex-direction column
      justify-content flex-start
      flex-basis 100%
      align-items center
      margin-top 3.5rem
      @media (min-width: $MQMobile + 1px)
        flex-basis 24%
        align-items flex-start
      .content
        .title
          text-align center
          margin-top 3rem
          @media (min-width: $MQMobile + 1px)
            text-align left
        .text
          text-align center
          margin-top 1rem
          line-height 1.5rem
          @media (min-width: $MQMobile + 1px)
            text-align left
      &.bigoudi
        flex-basis 24%
        align-items center
        .illustration
          display none
      @media (min-width: $MQMobile + 1px)
        &:first-child
          .illustration
            margin-top calc(266px - 196px)
        &:last-child
          .illustration
            margin-top calc(266px - 220px)
        &.bigoudi
          .illustration
            display block
            margin-top calc(266px / 2)
            flex-basis 5%
</style>
