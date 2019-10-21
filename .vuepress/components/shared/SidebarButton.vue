<template>
  <div class="sidebar-button">
    <OMSLogo class="logo" small @logo-clicked="$router.push('/')"/>
    <div :class="['burger', { open }]" @click="toggle()">
      <div class="long"></div>
      <div class="short"></div>
      <div class="long"></div>
    </div>
  </div>
</template>

<script>
import OMSLogo from './OMSLogo.vue'

export default {
  name: 'SidebarButton',
  components: {
    OMSLogo
  },
  data: () => ({
    open: false
  }),
  methods: {
    toggle() {
      this.open = !this.open
      this.$emit('toggle-mobile-navbar', this.open)
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/palette'
@require '../../styles/fonts'

.sidebar-button
  display none
  padding 2rem 1.5rem
  width: calc(100% - 4rem);
  position: initial;
  height: initial;
  top: initial;
  left: initial;
  @media (max-width: $MQMobile)
    display flex
    justify-content space-between
    align-items center
  .logo
    cursor pointer
  .burger
    cursor pointer
    width 1.125rem
    height 1rem
    display flex
    flex-direction column
    justify-content space-between
    align-items flex-end
    .long,
    .short
      -webkit-transition all 250ms ease-in-out
      -moz-transition all 250ms ease-in-out
      -ms-transition all 250ms ease-in-out
      -o-transition all 250ms ease-in-out
      transition all 250ms ease-in-out
      height 2px
      background #29328B
    .long
      width 1.125rem
    .short
      width 1rem
    &.open
      .short
        display none
      .long
        background $primaryColor
        &:first-child
          transform rotate(45deg) translateY(9.5px)
        &:last-child
          transform rotate(-45deg) translateY(-9.5px)
</style>
