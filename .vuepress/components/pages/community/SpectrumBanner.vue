<template>
  <div class="spectrum-banner container-narrow">
    <div class="spectrum">
      <h3 class="title">Spectrum Chat</h3>
      <div class="text">Join us &amp; other developers on Spectrum!</div>
    </div>
    <s-button
      primary
      arrow
      lightShadow
      @click="go()"
    >
      Join us on Spectrum
    </s-button>
  </div>
</template>

<script>
import SButton from '../../shared/Button.vue'

export default {
  name: 'SpectrumBanner',
  components: {
    SButton
  },
  methods: {
    go() {
      window.location.assign('https://spectrum.chat/open-microservices')
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'

.spectrum-banner
  display: flex
  align-items: center
  justify-content: space-between
  flex-direction: column
  padding-bottom: 1rem
  @media (min-width: $MQMobile + 1px)
    flex-direction: row
    padding-bottom: 0
  .spectrum
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