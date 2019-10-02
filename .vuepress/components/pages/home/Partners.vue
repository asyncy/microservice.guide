<template>
  <div class="partners">
    <h2 class="title">Seamlessly integrates with all the tools you already use...</h2>
    <div class="list">
      <div
        v-for="(partner, idx) in partners"
        :key="`partner-list-${idx}`"
        :class="[
          'partner',
          `${partner}`
        ]"
      >
        <img :src="`/assets/img/partners/${partner}.png`" :alt="`${partner} logo`">
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Partners',
  data: () => ({
    partners: [
      'gcp',
      'gh',
      'containerd',
      'k8s',
      'crio'
    ]
  })
}
</script>

<style lang="stylus" scoped>
@require '../../../styles/palette'
@require '../../../styles/fonts'

.partners
  display flex
  flex-direction column
  align-items center
  margin 6rem 0 5rem 0
  @media (min-width: $MQMobile + 1px)
    margin 7.5rem 0
  .title
    font-size 2rem
    font-weight normal
    color $secondaryColor
    margin-bottom 2rem
    text-align center 
    width 50%
  .list
    display flex
    flex-wrap wrap
    align-items center
    justify-content space-between
    @media (min-width: $MQMobile + 1px)
      justify-content space-evenly
      width 100%
    .partner
      flex-basis initial
      width 50%
      display flex
      justify-content center
      margin-bottom 2.75rem
      &.gh
        order 1
      &.docker
        order 2
      &.rkt
        order 3
      &.gcp
        order 4
      &.k8s
        order 5
        width 100%
      @media (min-width: $MQMobile + 1px)
        flex-basis 13%
        margin-bottom 0
        &.gh,
        &.docker,
        &.rkt,
        &.gcp,
        &.k8s
          order 0
      img 
        width auto
        height 1.5rem
        @media (min-width: $MQMobile + 1px)
          height 2rem
</style>
