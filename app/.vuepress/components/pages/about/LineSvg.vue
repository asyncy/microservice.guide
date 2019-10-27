<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="value.width"
    :height="value.height"
    :viewBox="`0 0 ${value.width} ${value.height}`"
  >
    <g>
      <path
        v-for="(f, idx) in fill"
        :key="`line-svg-${_uid}-path-${idx}`"
        :d="`M${value.d[idx]}z`"
        :fill="`#${f}`"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'LineSvg',
  props: {
    long: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    fill: ['46C0C0', 'B8D9D9', '5052AB', 'F2F2F2', 'E4E4E4'],
    values: [{
      width: '114',
      height: '4',
      d: ['0 0h34v4H0', '97 0h17v4H97', '34 0h15v4H34', '49 0h6v4h-6', '55 0h42v4H55']
    }, {
      width: '225',
      height: '5',
      d: ['0 0h67v5H0', '191 0h34v5h-34', '67 0h29v5H67', '96 0h12v5H96', '108 0h83v5h-83']
    }]
  }),
  computed: {
    value: function () {
      return this.values[this.long ? 1 : 0]
    }
  }
}
</script>
