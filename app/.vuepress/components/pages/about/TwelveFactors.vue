<template>
  <div class="twelve">
    <div class="heading">
      <h2 class="title">The Twelve-Factor Microservice</h2>
      <p class="hint">Inspired by <a href="//12factor.net" title="Twelve-Factor App">The Twelve-Factor App</a></p>
    </div>
    <div class="factors">
      <factor
        v-for="(factor, idx) in factors"
        :key="`twelve-factors-list${idx}`"
        :index="idx + 1"
        :title="factor.title"
        :desc="factor.desc"
      />
    </div>
  </div>
</template>

<script>
import Factor from '../../shared/Factor.vue'

export default {
  name: 'TwelveFactors',
  components: { 
    Factor
  },
  data: () => ({
    factors: [
      {
        title: 'Domain Specific',
        desc: 'Specialized to the domain and encapsulating the full API of the domain.'
      }, {
        title: 'Containerized',
        desc: 'For portability and re-usability (ex. Docker, rkt or FaaS).'
      }, {
        title: 'Language-Agnostic',
        desc: 'Written in any programming language.'
      }, {
        title: 'Vendor-neutral',
        desc: 'Not be tied to one platform. Platforms designed to interface with OMS compliant services can interact with all services.'
      }, {
        title: 'Any Interface',
        desc: 'Free to choose any communication interface.'
      }, {
        title: 'Documentation',
        desc: 'Automatically generated and actionable through the `oms.yml`.'
      }, {
        title: 'Declarative',
        desc: 'List all actions the service can perform, including the arguments and the output.'
      }, {
        title: 'Stateless',
        desc: 'Services must be stateless.'
      }, {
        title: 'Cloud Events',
        desc: 'Use a common specification for describing event data.'
      }, {
        title: 'Meta',
        desc: 'Include health, metrics, resources, and logs.'
      }, {
        title: 'Isolated',
        desc: 'Not depend on any other service (aka container coupling).'
      }, {
        title: 'Config',
        desc: 'All service configuration must be documented.'
      }
    ]
  })
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'

.twelve
  display flex
  flex-direction column
  align-items center
  @media (min-width: ($MQMobile + 1px))
    margin-top 7.5rem !important
  .heading
    text-align center
    @media (min-width: ($MQMobile + 1px))
      width 34rem
    .hint
      font-size 1rem
      font-family DM Sans
      a
        color #477BF3
        font-size 1rem 
        font-family DM Sans
  .factors
    display flex
    margin 4rem 0 7.5rem
    padding 0
    flex-direction column
    flex-wrap nowrap
    @media (min-width: ($MQMobile + 1px))
      flex-wrap wrap
      flex-direction row
      flex 1 1 100%
      --columnGap: .375rem
</style>