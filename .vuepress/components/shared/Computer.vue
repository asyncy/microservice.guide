<template>
  <div
    :class="[
      'computer',
    ]"
  >
    <div 
      :class="[
        'frame',
        `ratio-${aspectRatio.replace(':', '-')}`
      ]"
    >
      <div class="screen">
        <slot v-if="code" />
      </div>
    </div>
    <div class="deck">
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Computer',
  props: {
    code: {
      type: Boolean,
      default: false
    },
    aspectRatio: {
      type: String,
      default: '16:10',
      validator: v => ['1:1', '16:9', '16:10', '4:3'].includes(v)
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/palette'
@require '../../styles/fonts'

.computer
  .frame
    width 100%
    border-radius 10px
    .screen
      background #1C215B
      border-radius 8px
      color white
    @media (min-width: $MQMobile + 1px)
      background #242B7A
      position relative
      margin-left calc(7%)
      &.ratio-16-10
        padding-top 62.5%
      &.ratio-4-3
        padding-top 75%
      &.ratio-16-9
        padding-top 56.25%
      &.ratio-1-1
        padding-top 100%
      .screen
        position absolute
        overflow hidden
        top 1rem
        left 1rem
        width calc(100% - 2rem)
        height calc(100% - 2rem)
        .code
          font-size .85rem
          margin-left 3.5rem
  .deck
    display none
    @media (min-width: $MQMobile + 1px)
      display block
      background linear-gradient(180deg, #242B7A 0%, #11175C 100%)
      width calc(100% + 14%)
      height 18px
      border-radius 4px 4px 15px 15px

</style>