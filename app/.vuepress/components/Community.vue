<template>
  <OMSPage>
    <community-header class="container"/>
    <section class="bg-gray">
      <community-repositories class="container-narrow"/>
    </section>
    <community-libraries class="container-narrow"/>
    <section class="bg-spectrum">
      <spectrum-banner class="container-narrow"/>
    </section>
  </OMSPage>
</template>

<script>
import OMSPage from './shared/OMSPage.vue'

import CommunityHeader from './pages/community/Header.vue'
import CommunityRepositories from './pages/community/Repositories.vue'
import CommunityLibraries from './pages/community/Libraries.vue'
import SpectrumBanner from './pages/community/SpectrumBanner.vue'

export default {
  name: 'Community',
  components: {
    OMSPage,
    CommunityHeader,
    CommunityRepositories,
    CommunityLibraries,
    SpectrumBanner
  }
}
</script>

<style lang="stylus" scoped>
.bg-gray
  background #F9FBFD
.bg-spectrum
  background #EEF3FA
  border-radius 10px
  margin 5rem auto 0 auto !important
  padding 3.5rem 
</style>