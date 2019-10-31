<template>
  <div class="libraries">
    <h3 class="title">OMS Libraries</h3>
    <p class="text">
      It can be tedious to write your own `oms.yml` so we want to write libraries for all the popular languages so that it all happens automatically.
      <br />We already have written one for
      <span class="indigo">Python</span>, and would love your contributions for other languages.
    </p>
    <s-button 
      class="repo"
      secondary
      arrow
      darkShadow
      @click="go()"
    >
      OMS Repo
    </s-button>
  </div>
</template>

<script>
import SButton from '../../shared/Button.vue'
export default {
  name: 'CommunityLibraries',
  components: {
    SButton
  },
  methods: {
    go() {
      window.location.assign('https://github.com/microservices/oms')
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'
.libraries
  display flex
  flex-direction column
  align-items center
  margin-top 5rem !important
  margin-bottom 5rem !important
  @media (min-width $MQMobile + 1px)
    align-items flex-start
    justify-content flex-start
  .text
    text-align center
    margin-bottom 2rem
    @media (min-width $MQMobile + 1px)
      text-align left
    .indigo
      color rgb(119, 122, 255)
</style>
