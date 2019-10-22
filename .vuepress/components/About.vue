<template>
  <OMSPage>
    <why-oms class="container"/>
    <twelve-factors class="container"/>
  </OMSPage>
</template>

<script>
import OMSPage from './shared/OMSPage.vue'

import WhyOms from './pages/about/WhyOMS.vue'
import TwelveFactors from './pages/about/TwelveFactors.vue'

export default {
  name: 'About',
  components: {
    OMSPage,
    WhyOms,
    TwelveFactors
  }
}
</script>