<template>
  <div class="wrap-content">
      <h1>The 12 Factor Microservice</h1>
      <h3>I. Language-Agnostic</h3>
      <p>Services can be written in any programming language.</p>

      <h3>II. Vendor-Neutral</h3>
      <p>Services must not be tied to one platform.</p>
      <p>Platforms the execute OMG Compliant services can interact with all services.</p>

      <h3>III. Any Interface</h3>
      <p>The service may interface with HTTP, RPC or Exec (`docker run` or `rkt run`)</p>

      <h3>IV. Containerized</h3>
      <p>Services must be containerized for portability; Docker, rkt, or OpenFaaS.</p>

      <h3>V. Domain Specific</h3>
      <p>Specialized and encapsulating the full API of the domain; include metrics, logs and lifecycle.</p>

      <h3>VI. Actionable Documentation</h3>
      <p>This is where the OMG shines. Documentation can be auto-generated and actionable through the <code>microservice.yml</code>.</p>

      <h3>VII. One service. Many actions.</h3>
      <p>Services must list all <code>actions</code> including all the <code>arguments</code> and <code>output</code> of the action.</p>

      <h3>VIII. Stateless</h3>
      <p>??</p>

      <h3>IX. Use CloudEvents</h3>
      <p><a href="https://cloudevents.io/">CloudEvents</a> provides a specification for describing event data in a common way.</p>
      
      <h3>X. ??</h3>
      
      <h3>XI. ??</h3>

      <h3>XII. ??</h3>
      
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
