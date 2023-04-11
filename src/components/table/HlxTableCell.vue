<template>
<td :style="{textAlign: this.align, whiteSpace: 'break-spaces' }" :class="'fixed-column-' + this.fixed">
    <slot></slot>
</td>
</template>
<script>

export default {
  name: 'hlx-table-cell',
  props: {
    align: {
      type: String,
      default: 'center'
    },
    fixed: {
      type: String
    }
  }
}
</script>
