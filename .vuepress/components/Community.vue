<template>
  <OMGPage>
    <community-header class="container"/>
    <section class="bg-gray">
      <community-repositories class="container-narrow"/>
    </section>
    <community-libraries class="container-narrow"/>
  </OMGPage>
</template>

<script>
import OMGPage from './shared/OMGPage.vue'

import CommunityHeader from './pages/community/Header.vue'
import CommunityRepositories from './pages/community/Repositories.vue'
import CommunityLibraries from './pages/community/Libraries.vue'
import SpectrumBanner from './pages/community/SpectrumBanner.vue'

export default {
  name: 'Community',
  components: {
    OMGPage,
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
.spectrum-bg
  background url('/assets/img/spectrum-bg.png') bottom right no-repeat #EEF3FA
  border-radius 10px
  margin 5rem auto 6.25rem auto !important
</style>