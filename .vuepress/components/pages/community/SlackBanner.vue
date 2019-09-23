<template>
  <div class="slack-banner container-narrow">
    <div class="slack">
      <h3 class="title">Slack Channel</h3>
      <div class="text">Join other developers and users on the OMS Slack Channel!</div>
    </div>
    <s-button
      primary
      arrow
      lightShadow
      @click="go()"
    >
      Join OMS Slack
    </s-button>
  </div>
</template>

<script>
import SButton from '../../shared/Button.vue'

export default {
  name: 'SlackBanner',
  components: {
    SButton
  },
  methods: {
    go() {
      window.location.assign('https://asyncy.click/slack')
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'

.slack-banner
  display: flex
  align-items: center
  justify-content: space-between
  flex-direction: column
  padding-bottom: 1rem
  @media (min-width: $MQMobile + 1px)
    flex-direction: row
    padding-bottom: 0
  .slack
    display: flex
    flex-direction: column
    align-items: flex-start
    padding: 3.125rem 0 
    flex-basis: 40%
    h3
      padding: 0
      margin-bottom: 1rem
    .text
      line-height 1.5rem
</style>