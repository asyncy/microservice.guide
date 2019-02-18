<template>
  <div class="wrap-content">
      <h1>The Twelve-Factor Microservice</h1>

      <blockquote>
          <small>❤️Inspired by <a href="https://12factor.net/">The Twelve-Factor App</a></small>
          <br><Badge text="Beta" type="warn" verticle="bottom"/> This guide is under active development. We welcome your input and contributions on <a href="https://github.com/microservices/microservice.guide">GitHub</a> ️
      </blockquote>

      <ol type="I">

        <li>
          <h3>Domain Specific</h3>
          <p>Specialized to the domain and encapsulating the full API of the domain.</p>
        </li>

        <li>
          <h3>Containerized</h3>
          <p>For portability and re-usability (ex. Docker, rkt or FaaS).</p>
        </li>

        <li>
          <h3>Language-Agnostic</h3>
          <p>Written in any programming language.</p>
        </li>

        <li>
          <h3>Vendor-Neutral</h3>
          <p>
            Not be tied to one platform.
            <br>Platforms designed to interface with OMG Compliant services can interact with all services.
          </p>
        </li>

        <li>
          <h3>Any Interface</h3>
          <p>Free to choose any <a href="/schema/interface/">communication interface</a>.</p>
        </li>

        <li>
          <h3>Documentation</h3>
          <p>Automatically generated and actionable through the <a href="/overview/anatomy/"><code>microservice.yml</code></a>.</p>
        </li>

        <li>
          <h3>Declarative</h3>
          <p>List all <a href="/schema/actions/"><code>actions</code></a> the service can perform, including the <code>arguments</code> and the <code>output</code>.</p>
        </li>

        <li>
          <h3>Stateless</h3>
          <p>Services must be stateless.</p>
        </li>

        <li>
          <h3>CloudEvents</h3>
          <p>Use a common specification for describing <a href="/schema/events/">event data</a>.</p>
        </li>

        <li>
          <h3>Meta</h3>
          <p>Include <a href="/schema/health/">health</a>, <a href="/schema/metrics/">metrics</a>, <a href="/schema/requirements/">resources</a>, and <a href="/schema/logs/">logs</a>.</p>
        </li>

        <li>
          <h3>Isolated</h3>
          <p>Not depend on any other service (aka container coupling).</p>
        </li>

        <li>
          <h3>Config</h3>
          <p>All service <a href="/schema/environment/">configuration</a> must be documented.</p>
        </li>

      </ol>

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
