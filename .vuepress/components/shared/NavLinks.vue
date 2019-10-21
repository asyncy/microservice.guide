<template>
  <nav
    class="nav-links"
    v-if="userLinks.length || repoLink"
  >
    <!-- user links -->
    <div
      class="nav-item"
      v-for="item in userLinks"
      :key="item.link"
    >
      <DropdownLink
        v-if="item.type === 'links'"
        :item="item"
      />
      <NavLink
        v-else
        :item="item"
      />
    </div>

    <!-- repo link -->
    <s-button 
      v-if="repoLink"
      secondary 
      arrow 
      url="https://github.com/microservices/openmicroservices.org"
      class="repo-link"
    >
      Edit on Github
    </s-button>
  </nav>
</template>

<script>
import DropdownLink from '@theme/components/DropdownLink.vue'
import { resolveNavLinkItem } from '../util'
import NavLink from './NavLink.vue'
import SButton from './Button.vue'

export default {
  components: {
    NavLink,
    DropdownLink,
    SButton
  },

  computed: {
    userNav () {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },

    nav () {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },

    userLinks () {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
    },

    repoLink () {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo)
          ? repo
          : `https://github.com/${repo}`
      }
    },

    repoLabel () {
      if (!this.repoLink) return
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['GitHub', 'GitLab', 'Bitbucket']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }

      return 'Source'
    }
  }
}
</script>

<style lang="stylus">
.home
  .nav-links
    display inline-block

.home,
.docs
  .nav-links
    @media (max-width: $MQMobile)
      display flex
      flex-direction column
      align-items center
      margin-top 1rem
    a
      line-height 1.4rem
      color inherit
      &:hover, &.router-link-active
        color $accentColor
      @media (max-width: $MQMobile)
        font-size 1rem
    .nav-item
      margin-right 2.625rem
      margin-bottom 1.5rem
      position relative
      display inline-block
      line-height 2rem
      margin-left 0
      @media (max-width: $MQNarrow)
        margin-right 1rem  
      @media (max-width: $MQMobile)
        margin-right 0

@media (max-width: $MQMobile)
  .home,
  .docs
    .nav-links
      .nav-item, .repo-link
        margin-left 0
        width 100%
        text-align center
      .repo-link
        padding-top 1.5rem 
        margin-bottom .5rem
        border-top 1px solid #E9E9EE

@media (min-width: $MQMobile)
  .home,
  .docs
    .nav-links a
      &:hover, &.router-link-active
        color $textColor
    .nav-item > a:not(.external)
      &:hover, &.router-link-active
        margin-bottom -2px
        border-bottom 2px solid lighten($accentColor, 8%)
</style>
