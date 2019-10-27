<template>
  <div class="factor">
    <factor-svg :idx="index" :large="large"/>
    <h4>{{ title }}</h4>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
import FactorSvg from './FactorSvg.vue'

export default {
  name: 'Factor',
  components: {
    FactorSvg
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    large: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/palette'
@require '../../styles/fonts'

.factor
  margin-bottom .75rem
  min-height 18rem
  margin-left 0
  margin-right 0
  @media (min-width: ($MQMobile + 1px))
    margin-left var(--columnGap)
    margin-right var(--columnGap)
  padding 1rem .5rem 0
  background $borderColor
  flex 1 1 calc(25% - 2 * var(--columnGap) - 2rem)
  width auto
  display flex
  flex-direction column
  align-items flex-start
  border-radius 10px
  svg
    padding 1rem
  h4
    margin-top 0.75rem
    padding-left 1rem
  p
    padding 0 1rem
</style>