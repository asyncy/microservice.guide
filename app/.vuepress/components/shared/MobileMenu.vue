<template>
  <div :class="['mobile-menu-modal', { open }]">
    <NavLinks />
  </div>
</template>

<script>
import SButton from './Button.vue'
import NavLinks from './NavLinks.vue'

export default {
  name: 'MobileMenu',
  components: {
    SButton,
    NavLinks
  },
  data: () => ({ open: false, user: {} }),
  watch: {
    open: function () {
      console.log(this.open)
      if (this.open) {
        document.documentElement.classList.add('is-clipped')
      } else {
        document.documentElement.classList.remove('is-clipped')
      }
    }
  },
  methods: {
    show (evt) {
      if (!evt) {
        this.hide()
      } else {
        setTimeout(() => (this.open = true), 50)
      }
    },
    hide () { if (this.open) this.open = false },
  }
}
</script>

<style lang="stylus" scoped>
@require '../../styles/palette'
@require '../../styles/fonts'

.mobile-menu-modal
  display none
  &.open
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    z-index: 20;
    position: absolute;
    top: 4.5rem;
    left: .75rem;
    box-shadow: 0px 5px 10px rgba(56, 87, 159, 0.3);
    padding: 1rem;
    width: calc(100% - 3.75rem);
</style>