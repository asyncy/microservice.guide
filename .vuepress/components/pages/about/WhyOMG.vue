<template>
  <div class="why-omg">
    <div class="content">
      <h1 class="title">
        Why OMS?
      </h1>
      <div class="text">
        <p>Microservices, by design, are intended to be highly reusable, operational-specific and language-agnostic. This guide defines the standard that defines how to interface with microservices to provide a blueprint for consistency and reusability. By following this documentation, developers will be able to create a platform that is well-documented and portable while not compromising flexibility.</p>
        <p>The old way of communicating software architecture and design through whiteboards and diagrams is immediately out of date and often becomes difficult to read and understand. By mapping your microservice architecture using pre-defined yaml by OMS, developers are given a way to describe architecture and operational requirements as human-readable structured data.</p>
        <p>Having these models in plain text files gives developers a framework to effectively communicate architecture, service to service communication, and operational complexities to many different audiences.</p>
      </div>
    </div>
    <div class="illustration">
      <img src="/assets/img/illustrations/about.svg" alt="Illustration showing how OMS interacts with data" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyOmg'
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'

.why-oms
  display: flex
  flex-direction: column
  align-items center
  justify-content: flex-start
  @media screen and (min-width: ($MQMobile + 1px))
    align-items flex-start
    flex-direction row
    justify-content space-between
    margin-bottom 7.5rem
  .content
    flex-basis 60%
    margin-top 3rem
    .title
      margin-bottom 2rem
    .text
      padding-right: 0
      @media screen and (min-width: ($MQMobile + 1px))
        padding-right 7rem
  .illustration
    flex-basis 40%
    img 
      max-width 100%
</style>