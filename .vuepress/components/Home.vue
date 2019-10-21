<template>
  <OMGPage>
    <Header class="container"/>
    <OMGSpec>
      <Content />
    </OMGSpec>
    <div class="container">
      <ThreeFactors />
      <Partners />
    </div>
    <OMGApp/>
    <CompareSpec />
  </OMGPage>
</template>

<script>
import OMGPage from './shared/OMGPage.vue'

import CompareSpec from './pages/home/Compare.vue'
import OMGApp from './pages/home/OMGApp.vue'
import Partners from './pages/home/Partners.vue'
import ThreeFactors from './pages/home/ThreeFactors.vue'
import OMGSpec from './pages/home/OMGSpec.vue'
import Header from './pages/home/Header.vue'

export default {
  components: {
    CompareSpec,
    OMGPage,
    OMGApp,
    Partners,
    ThreeFactors,
    OMGSpec,
    Header
  }
}
</script>
