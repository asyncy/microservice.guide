<template>
  <div class="omg-logo" @click="$emit('logo-clicked')">
    <div :class="[
      'logo',
      { small },
      { light }
    ]" />
    <div v-if="long" class="text">
      <div :class="[`${dark ? 'dark' : light ? 'light' : 'dark'}`]"><span :class="[`${blue ? 'blue' : green ? 'seafoam' : 'blue'}`]">O</span>pen</div>
      <div :class="[`${dark ? 'dark' : light ? 'light' : 'dark'}`]"><span :class="[`${blue ? 'blue' : green ? 'seafoam' : 'blue'}`]">M</span>icroservice</div>
      <div :class="[`${dark ? 'dark' : light ? 'light' : 'dark'}`]"><span :class="[`${blue ? 'blue' : green ? 'seafoam' : 'blue'}`]">S</span>pecification</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OMGLogo',
  props: {
    long: {
      type: Boolean,
      default: false
    },
    blue: {
      type: Boolean,
      default: false
    },
    green: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/palette'
@require '../../styles/fonts'

.omg-logo
  display: flex
  align-items: center
  .logo
    background-image url(/assets/img/logo-dark.svg)
    background-repeat no-repeat
    background-size contain
    width 2.75rem
    height 2.75rem
    &.small 
      width 1.5rem
      height 1.5rem
    &.light
      background-image url(/assets/img/logo.svg)
  .text 
    display: flex
    flex-direction: column
    align-items: flex-start
    margin-left: 1.5rem
    min-width: 105px
    font-family: Autoscape, sans-serif
    font-size: .625rem
    text-transform: uppercase
    line-height 1rem
    .dark
      color $secondaryColor
    .light
      color white
    span
      font-family: Autoscape, sans-serif
      font-size: .625rem
      text-transform: uppercase
      line-height 1rem
      &.seafoam
        color $accentGreen
      &.blue
        color $primaryColor
</style>