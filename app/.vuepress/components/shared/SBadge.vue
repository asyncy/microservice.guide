<script>
    export default {
        name: 'SBadge',
        render: function (h) {
            let type = 'tip';
            let vertical = 'top';
            let text = null;
            if (this.$attrs) {
                type = this.$attrs.type || type;
                vertical = this.$attrs.vertical || vertical;
                text = this.$attrs.text || this.$slots.default[0].text;
            }

            if (!text) {
                text = this.$slots.default[0].text;
            }

            return h('span', {
                class: ['badge', type],
                style: {
                    verticalAlign: vertical
                }
            }, text)
        }
    }
</script>

<style lang="stylus" scoped>
.badge
  display inline-block
  font-size 14px
  height 18px
  line-height 18px
  border-radius 3px
  padding 0 6px
  color white
  background-color #42b983
  &.tip, &.green
    background-color #42b983
  &.error
    background-color #DA5961 //#f66
  &.warning, &.warn, &.yellow
    background-color darken(#ffe564, 35%)
  & + &
    margin-left 5px
</style>