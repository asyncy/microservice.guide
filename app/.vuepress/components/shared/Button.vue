<template>
  <component :is="to ? 'router-link' : url ? 'a' : 'button'"
    :to="to"
    :href="url"
    :target="url ? '_blank': ''"
    :class="[
      'btn',
      { primary },
      { secondary },
      { 'dark-shadow': darkShadow },
      { 'light-shadow': lightShadow },
      { 'arrow-icon': arrow }
    ]"
    @click="$emit('click')"
  >
    <span><slot /></span>
    <svg 
      v-if="arrow"
      width="19"
      height="11"
      viewBox="0 0 19 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 5.36621C5 4.81393 5.44772 4.36621 6 4.36621H15.5C16.0523 4.36621 16.5 4.81393 16.5 5.36621C16.5 5.9185 16.0523 6.36621 15.5 6.36621H6C5.44772 6.36621 5 5.9185 5 5.36621Z"
        :fill="primary ? 'white' : '#213056'"
      />
      <path 
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 5.36621C0 4.81393 0.447715 4.36621 1 4.36621H3C3.55228 4.36621 4 4.81393 4 5.36621C4 5.9185 3.55228 6.36621 3 6.36621H1C0.447715 6.36621 0 5.9185 0 5.36621Z"
        :fill="primary ? 'white' : '#213056'"
      />
      <path 
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.9408 0.275565C13.3967 -0.124709 14.0948 -0.0841481 14.5 0.366159L19 5.36636L14.5 10.3662C14.0947 10.8165 13.3966 10.8571 12.9407 10.4568C12.4848 10.0565 12.4438 9.367 12.849 8.91669L16.0446 5.36636L12.8491 1.81568C12.4438 1.36537 12.4849 0.675838 12.9408 0.275565Z"
        :fill="primary ? 'white' : '#213056'"
      />
    </svg>
  </component>
</template>

<script>
export default {
  name: 'SButton',
  props: {
    primary: {type: Boolean, default: false},
    secondary: {type: Boolean, default: false},
    darkShadow: {type: Boolean, default: false},
    lightShadow: {type: Boolean, default: false},
    arrow: {type: Boolean, default: false},
    to: {
      type: Object, 
      default: undefined, 
      validator: x => Object.keys(x).includes('name') || Object.keys(x).includes('path')
    },
    url: {
      type: String,
      default: undefined
    }
  },
  mounted () {
    // console.log(this.to, this.url)
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/palette'
@require '../../styles/fonts'

button
  display flex
  align-items center
  font-family DM Bold Sans
  line-height 1.5rem
  border none
  border-radius 5px
  cursor pointer
  min-width fit-content
  min-height fit-content
  max-width fit-content
  &.arrow-icon
    justify-content space-between
  &:not(.arrow-icon)
    justify-content center
  &.primary
    background $primaryColor
    color white
    font-size 1.375rem
    padding 1.25rem 2rem
    svg
      fill white
  &.secondary
    background white
    color $secondaryColor
    border 1px solid #CDD5D6
    font-size 1.125rem
    padding .75rem 1.5rem
    svg 
      fill $secondaryColor
  &.primary:hover
  &.primary:focus
    box-shadow none
    outline none
    background rgba($primaryColor, 0.8)
  &.secondary:hover
  &.secondary:focus
    box-shadow none
    outline none  
    background rgba(white, 0.9)
  &.light-shadow
    box-shadow 0px 5px 10px rgba(56, 87, 159, 0.3)
  &.dark-shadow
    box-shadow 0px 5px 10px #DDE7EA
svg
  margin-left 1.5rem
a
  font-family DM Bold Sans
  font-size 1rem
  line-height 1.5rem
</style>