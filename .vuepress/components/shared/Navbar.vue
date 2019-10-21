<template>
  <header class="navbar">
    <SidebarButton @toggle-mobile-navbar="$emit('toggle-mobile-navbar', $event)"/>

    <router-link
      :to="$localePath"
      class="home-link"
    >
      <OMGLogo long blue />
    </router-link>

    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >
      <AlgoliaSearchBox
        v-if="isAlgoliaSearch"
        :options="algolia"
      />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
      <NavLinks class="can-hide"/>
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from './SidebarButton.vue'
import NavLinks from './NavLinks.vue'
import OMGLogo from './OMGLogo.vue'

export default {
  components: {
    SidebarButton,
    NavLinks,
    SearchBox,
    AlgoliaSearchBox,
    OMGLogo
  },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted () {
    document.documentElement.classList.remove('is-clipped')
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
@require '../../styles/palette'
@require '../../styles/fonts'

$navbar-vertical-padding = 4rem
$navbar-horizontal-padding = 8rem

.docs
  .navbar
    border-bottom 1px solid #eef3fa !important 
    padding 0 !important
    height 4rem !important
    @media (min-width: ($MQMobile + 1px))
      height 7rem !important
      padding 2.5rem 8rem !important


.home,
.docs
  .navbar
    padding $navbar-vertical-padding $navbar-horizontal-padding
    display flex
    justify-content space-between
    line-height $navbarHeight - 1.4rem
    border-bottom none
    @media (max-width: $MQNarrow)
      padding $navbar-vertical-padding $navbar-vertical-padding
    @media (max-width: $MQMobile)
      padding 0
    .home-link
      display none 
      max-width fit-content
      @media (min-width: ($MQMobile + 1px))
        display block
    a, span, img
      display inline-block
      color $secondaryColor
      font-family DM Bold Sans
      font-size 1rem
      line-height 1.5rem
    .site-name
      font-size 1.3rem
      font-weight 600
      color $textColor
      position relative
    .links
      box-sizing border-box
      background-color white
      font-size 0.9rem
      display flex
      position initial
      top initial
      left initial
      .search-box
        flex: 0 0 auto
        vertical-align top

@media (max-width: $MQMobile)
  .navbar
    .can-hide
      display none
    .links
      padding-left 1.5rem
</style>
