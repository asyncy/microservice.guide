<!--
<template>
  <div class="wrap-content">
      <h1>OMG Supporters</h1>
      <p>Here are some of the top companies that uphold the OMG standard:</p>
      <div class="supporters">
        <div class="supporter" v-for="s of supporters">
          <img :src="`/supporters/${s.name}.png`" :alt="s.name" />
          <h2 v-text="s.name" />
          <p v-text="s.description" />
          <a :href="`//${s.url}`" target="_blank" :title="s.name">Visit Site →</a>
        </div>
        <div class="supporter">
          <img src="/supporters/generic.png" alt="Contact" />
          <h2>Your company</h2>
          <p>Open a PR or contact us if you'd like to be featured here.</p>
          <a href="#feedback" title="Contact">Contact</a>
        </div>
      </div>
  </div>
</template>
-->

<script>
  export default {
    name: 'Supporters',
    data: () => ({
      supporters: [{
        name: 'Asyncy',
        description: 'Build smarter applications',
        url: 'asyncy.com'
      }, {
        name: 'Storyscript',
        description: 'A Goal-oriented Cloud Native Programming Language that choreographs microservices.',
        url: 'storyscript.org'
      }]
    })
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
  .supporters
    display flex
    flex-direction row
    justify-content space-around
    flex-wrap wrap
    .supporter
      display inline-flex
      flex-direction column
      width 270px
      h2
        margin-bottom 0
        border none
      a
        color #0fc065
        padding-bottom .25rem
        margin-bottom .25rem
        &:hover
          text-decoration underline
          text-underline-position under
</style>
