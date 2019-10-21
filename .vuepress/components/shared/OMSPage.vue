<template>
  <div class="home">
    <Navbar @toggle-mobile-navbar="$refs.mobileMenu.show($event)"/>

    <slot />

    <div class="dark-bg">
      <Contact />
      <Footer />
    </div>

    <mobile-menu ref="mobileMenu"/>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import MobileMenu from './MobileMenu.vue'

import Contact from './Contact.vue'
import Footer from './Footer.vue'

export default {
  name: 'OMSPage',
  components: {
    Navbar,
    Contact,
    Footer,
    MobileMenu
  }
}
</script>

<style lang="stylus" scoped>
.home
  overflow-x hidden
  .dark-bg
    background: $secondaryColor
    color: white
</style>