<template>
  <div class="docs">
    <Navbar @toggle-mobile-navbar="$refs.mobileMenu.show($event)"/>
    <div class="content-container">
      <Sidebar
        class="sidebar-wrapper"
        :items="sidebarItems"
        @toggle-sidebar="toggleSidebar"
      >
        <slot
          name="sidebar-bottom"
          slot="bottom"
        />
      </Sidebar>
      <Content 
        class="content-wrapper"
      />
    </div>

    <mobile-menu ref="mobileMenu"/>
  </div>
</template>

<script>
import Sidebar from '@theme/components/Sidebar.vue'
import Navbar from './shared/Navbar.vue'
import Contact from './shared/Contact.vue'
import Footer from './shared/Footer.vue'
import MobileMenu from './shared/MobileMenu.vue'
import { resolveSidebarItems } from './util'

export default {
  name: 'Docs',
  components: {
    Sidebar,
    Navbar,
    Contact,
    Footer,
    MobileMenu
  },
  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    }
  },
  computed: {
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.content-container
  display flex
  justify-content flex-start
  .content-wrapper
    position relative 
    top 0
    left 0
    max-width 740px
    margin 0 auto
    padding 2rem 2.5rem
    @media (min-width: ($MQMobile + 1px))
      top 112px
      left 160px
  .sidebar-wrapper
    top 112px !important

.docs h1,
.docs h2,
.docs h3,
.docs h4,
.docs h5,
.docs h6
  margin-top -3.1rem
  padding-top 4.6rem
  margin-bottom 0

</style>