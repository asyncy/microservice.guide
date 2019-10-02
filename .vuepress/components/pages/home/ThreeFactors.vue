<template>
  <div class="factors">
    <factor
      v-for="(factor, idx) in factors"
      :key="`three-factors-list${idx}`"
      :index="idx + 13"
      :title="factor.title"
      :desc="factor.desc"
      large
    />
  </div>
</template>

<script>
import Factor from '../../shared/Factor.vue'

export default {
  name: 'ThreeFactors',
  components: {
    Factor
  },
  data: () => ({
    factors: [
      {
        title: 'Reusable',
        desc: 'Write once, use forever. Share between your team or open it up to millions of developers.'
      }, {
        title: 'Self-documenting',
        desc: 'Use any of our libraries to autogenerate the interface for anyone to use your microservice.'
      }, {
        title: 'Discoverable',
        desc: `With OMG you don't have to spend hours on the whiteboard explaining how your service works.`
      }
    ]
  })
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'

.factors
  display flex
  margin 4rem 0 7.5rem
  padding 0
  flex-direction column
  flex-wrap nowrap
  @media (min-width: ($MQMobile + 1px))
    margin -7.5rem 0 7.5rem
    flex-wrap wrap
    flex-direction row
    flex 1 1 100%
    --columnGap: 2rem
</style>