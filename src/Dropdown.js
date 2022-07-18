import { h } from 'vue'

export default {
  props: ['values', 'value'],
  model: {
    prop: 'value',
    event: 'input'
  },
  created () {
    this.$emit('input', this.values && this.values.length > 0 ? this.values[0] : null)
  },
  methods: {
    handleChange (e) {
      this.$emit('input', e.target.value)
    }
  },
  render () {
    return h('select', {
      staticClass: ['pvtDropdown'],
      domProps: {
        value: this.value
      },
      on: {
        change: this.handleChange
      }
    },
    [
     this.values ? this.values.map(r => {
        const text = r
        return h('option', {
          attrs: {
            value: r,
            selected: r === this.value ? 'selected' : undefined
          }
        }, text)
      }) : []
    ])
  }
}
