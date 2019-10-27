<template>
  <div class="container">
    <div class="footer">
      <div class="left">
        <OMSLogo green long light />
      </div>
      <div class="center">
        
      </div>
      <div class="right">
        <NavLink
          class="button button-tertiary button-full"
          :item="{ text: 'Edit on Github', link: repoLink }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink.vue'
import OMSLogo from './OMSLogo.vue'

export default {
  name: 'Footer',
  components: { 
    NavLink,
    OMSLogo
  },
  computed: {
    repoLink: function () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/palette'
@require '../../styles/fonts'

.home
  .footer
    padding: 1.5rem 0
    border-top: 1px solid #566794
    @media (min-width: ($MQMobile + 1px))
      padding: 1.5rem 5.125rem 1.5rem 0
.footer 
  display: flex
  align-items: center
  justify-content: space-between
  flex-direction: column
  @media (min-width: ($MQMobile + 1px))
    flex-direction: row
  .left
    margin-bottom 1.5rem
    @media (min-width: ($MQMobile + 1px))
      margin-bottom 0
  .center
    display: flex
    align-items: center
    margin: 1rem 0
    @media (min-width: ($MQMobile + 1px))
      margin: 0
    .made
    .storyscript
    .storyscript a
      font-family: DM Sans
      font-size: .75rem
      color: white
      letter-spacing: 2px
      text-transform: uppercase
    .storyscript a:hover
      color: $accentGreen
    .heart
      margin: 0 .25rem
  .right
    display none
    @media (min-width: ($MQMobile + 1px))
      display block
</style>
