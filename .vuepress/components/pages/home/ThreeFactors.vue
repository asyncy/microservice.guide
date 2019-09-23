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
        desc: 'Write one use forever. Can share between your team or open it to millions of developers.'
      }, {
        title: 'Self documenting',
        desc: 'Use any of our libraries that will autogenerate the documentation required for anyone to use your microservice.'
      }, {
        title: 'Discoverable',
        desc: `Its like Java docs but for your microservice. With OMS you don't have to spend hours on the white board explaining how your service works.`
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