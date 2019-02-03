<template>
  <div class="wrap-content">
      <h1>The 12 Factor Microservice</h1>
      <h3>I. Language-Agnostic</h3>
      <p>Services can be written in any programming language.</p>

      <h3>II. Vendor-Neutral</h3>
      <p>Services must not be tied to one platform.
         <br>Platforms the execute OMG Compliant services can interact with all services.</p>

      <h3>III. Any Interface</h3>
      <p>The service can freely choose their <a href="/schema/interface/">communication interface</a>.</p>

      <h3>IV. Containerized</h3>
      <p>Services must be containerized for portability.</p>

      <h3>V. Domain Specific</h3>
      <p>Specialized and encapsulating the full API of the domain; include metrics, logs and lifecycle.</p>

      <h3>VI. Actionable Documentation</h3>
      <p>Documentation is generated and actionable through the <a href="/overview/anatomy/"><code>microservice.yml</code></a>.</p>

      <h3>VII. Declarative.</h3>
      <p>Services must list all <a href="/schema/actions/"><code>actions</code></a> including the <code>arguments</code> and <code>output</code>.</p>

      <h3>VIII. Stateless</h3>
      <p>Services must be stateless.</p>

      <h3>IX. CloudEvents</h3>
      <p>A specification for describing <a href="/schema/events/">event data</a> in a common way.</p>
      
      <h3>X. Health, metrics, and logs.</h3>
      <p>Service must report <a href="/schema/health/">health</a>, <a href="/schema/metrics/">metrics</a>, and <a href="/schema/logs/">logs</a> to a common location.</p>
      
      <h3>XI. Independant.</h3>
      <p>Services may not couple with other services.</p>

      <h3>XII. Config.</h3>
      <p>Services may document <a href="/schema/environment/">configuration</a> needed to perform.</p>

  </div>
  <div class="wrap-content">
      <h1>Why OMG?</h1>
      <p>Microservices, by design, are intended to be highly reusable, operational-specific and language-agnostic. This guide defines the standard that defines how to interface with microservices to provide a blueprint for consistency and reusability. By following this documentation, developers     will be able to create a platform that is well-documented and portable while not compromising flexibility.</p>
      <p>The old way of communicating software architecture and design through whiteboards and diagrams is immediately out of date and often becomes difficult to read and understand. By mapping your microservice architecture using pre-defined yaml by OMG, developers are given a way to describe architecture and operational requirements as human-readable structured data.</p>
      <p>Having these models in plain text files gives developers a framework to effectively communicate architecture, service to service communication, and operational complexities to many different audiences.</p>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" scoped>
  @import "../config.styl"
  
  div.wrap-content
    padding 4rem 0 5rem 0
    font-size $lnSize
  p 
    margin-bottom 2rem
    line-height 2.4rem
  h1
    margin-bottom 2.5rem
</style>
