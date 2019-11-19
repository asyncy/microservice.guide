<template>
  <div class="community-header">
    <div class="wrapper">
      <div class="community">
        <h1 class="title">
          Community
        </h1>
        <p class="text">
          OMS has an active community of developers who are using the spec to build their reusable applications within their organizations and for developers around the world. We'd love your help to improve and extend the project.
        </p>
        <h4 class="contribute">
          Contribute on GitHub
        </h4>
        <p class="text-contribute">
          We are always looking for active contributors in the OMS spec, and the tools that support the ecosystem. Here are a few areas where we would love community contribution in the OMS project. Be sure to follow our community addition guidelines.
        </p>
      </div>
      <div class="illustration">
        <img src="/assets/img/illustrations/community.svg" loading="eager" alt="man in front of his computer illustration" />
      </div>
    </div>
    <s-button 
      class="github"
      primary
      arrow
      lightShadow
      @click="go()"
    >
      OMS GitHub
    </s-button>
  </div>
</template>

<script>
import SButton from '../../shared/Button.vue'
export default {
  name: 'CommunityHeader',
  components: {
    SButton
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

.community-header
  margin-bottom 9.75rem !important
  align-items center
  display flex
  flex-direction column
  @media (min-width $MQMobile + 1px)
    align-items flex-start
  .wrapper
    display flex
    align-items flex-start
    justify-content space-between
    flex-direction column-reverse
    @media (min-width $MQMobile + 1px)
      flex-direction row
    .community
      flex-basis 50%
      margin-top 5.875rem
      .title
        margin-bottom 2rem
        text-align center
        @media (min-width $MQMobile + 1px)
          text-align left
      .text
        text-align center
        @media (min-width $MQMobile + 1px)
          text-align left
      .contribute
        color #333333
        margin 1rem 0
        text-align center
        @media (min-width $MQMobile + 1px)
          text-align left
      .text-contribute
        margin-bottom 2rem
        text-align center
        @media (min-width $MQMobile + 1px)
          text-align left
    .illustration
      flex-basis 40%
      img
       max-width 100%
</style>