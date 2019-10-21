<template>
  <OMSPage>
    <Header class="container"/>
    <OMSSpec>
      <Content />
    </OMSSpec>
    <div class="container">
      <ThreeFactors />
      <Partners />
    </div>
    <OMSApp/>
    <!-- <CompareSpec /> -->
  </OMSPage>
</template>

<script>
import OMSPage from './shared/OMSPage.vue'

// import CompareSpec from './pages/home/Compare.vue'
import OMSApp from './pages/home/OMSApp.vue'
import Partners from './pages/home/Partners.vue'
import ThreeFactors from './pages/home/ThreeFactors.vue'
import OMSSpec from './pages/home/OMSSpec.vue'
import Header from './pages/home/Header.vue'

export default {
  components: {
    // CompareSpec,
    OMSPage,
    OMSApp,
    Partners,
    ThreeFactors,
    OMSSpec,
    Header
  }
}
</script>
