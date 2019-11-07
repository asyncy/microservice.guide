<template>
  <div class="contact container large">
    <h2 class="title">Join the discussion</h2>
    <p class="text">
      We are under development and open to contribution.<br>100% open source.
      <br>
      <!-- Hidden until joined
        A part of the Linux Foundation and under the CNCF.
      -->
    </p>
    <div class="buttons">
      <s-button
        primary
        lightShadow
        @click="go('contribute')"
        class="contribute"
      >
        Contribute on GitHub
      </s-button>
      <s-button
        primary
        lightShadow
        @click="go('spectrum')"
        class="spectrum"
      >
        Chat with us on Spectrum
      </s-button>
    </div>
    <!--
      Hidden until joined
      <img class="cloud-native" src="/assets/img/cncf_color@2x.png" />
    --> 
  </div>
</template>

<script>
import SButton from './Button.vue'

export default {
  name: 'Contact',
  components: {
    SButton
  },
  methods: {
    go(path) {
      switch (path) {
        case 'contribute':
          window.location.assign('https://github.com/microservices/oms')
          break
        case 'spectrum':
          window.location.assign('https://spectrum.chat/open-microservices')
          break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.contact {
  display: flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: flex-start;
  padding: 3.5rem 1.8rem 5rem 1.8rem !important;

  @media (min-width: ($MQMobile + 1px)) {
    padding: 10rem 1.8rem 10rem 1.8rem !important;
  }

  .title {
    text-align: center;
    color: white;
    font-size: 1.5rem;

    @media (min-width: ($MQMobile + 1px)) {
      font-size: 2.625rem;
    }
  }

  .text {
    text-align: center;
    margin: 1rem 0 2rem 0;
    font-size: 1.125rem;

    @media (min-width: ($MQMobile + 1px)) {
      font-size: initial;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    .spectrum, .contribute {
      min-width: 16rem;
    }

    .spectrum {
      background: #C5DCFC;
      box-shadow: 0px 5px 10px rgba(56, 87, 159, 0.3);
      color: $secondaryColor;
      &:hover {
        background: #B9D4F9;
      }
    }

    .contribute {
      margin-bottom: 1.5rem;
      margin-right: 0;

      @media (min-width: ($MQMobile + 1px)) {
        margin-bottom: 0;
        margin-right: 1.5rem;
      }
    }
  }

  .cloud-native {
    width: 130px;
    height: 42px;
  }
}
</style>
