<template>
<div class="table-v2-container">
  <table
    :style="{height: this.height + 'px'}"
    :class="{
      hlxTableV2: true,
      headerBorder: this.border.includes('header') ? true : false,
      tableBorder: this.border.includes('table') ? true : false,
      horizontalBorder: this.border.includes('horizontal') ? true : false,
      verticalBorder: this.border.includes('vertical') ? true : false,
      lightTheme: this.theme === 'light' ? true : false,
      greyTheme: this.theme === 'grey' ? true : false,
      primaryTheme: this.theme === 'primary' ? true : false,
      boldHeaders: this.boldHeaders,
      rowHover: this.rowHover,
      stripedRow: this.stripedRows,
    }"
    :id="'table-v2-' + this.unique"
  >
    <colgroup style="width: 100% !important">
      <col v-for="heads in this.columnCount" :key="heads"/>
    </colgroup>
    <thead>
      <tr class="table-v2-merge-head" :id="'merge-head-' + this.unique">
        <slot name="mergehead"></slot>
      </tr>
      <tr class="table-v2-head" :id="'head-' + this.unique">
        <slot name="thead"></slot>
      </tr>
    </thead>
    <tbody class="table-v2-body">
      <slot name="tbody"></slot>
    </tbody>
  </table>
</div>

<modal
    :modalActive="this.modalActive"
    @close="this.closeRearrangeModal"
    :height="'450px'"
    :width="'400px'"
    :modal="true"
  >
    <template v-slot:header>
      <div class="modal-header">
        <p>Re-arrange columns</p>
      </div>
    </template>
    <template v-slot:content>
      <div class="modal-content">
        <draggables
          :list="this.duplicateTheads"
          @change="emitFromDraggables"
          :selectable="true"
          :key="this.componentKey"
        />
      </div>
    </template>
    <template v-slot:footer>
      <div class="modal-footer">
        <hlx-button
          class="secondary sm"
          style="margin-right: 10px"
          @click="closeRearrangeModal"
        >
          Cancel
        </hlx-button>
        <hlx-button class="primary sm" @click="applyCustomisedColumns"
          >Apply</hlx-button
        >
      </div>
    </template>
  </modal>
</template>

<script>
import modal from '../ModalwindowComponent.vue'
import draggables from '../DraggableComponent.vue'
import HlxButton from '../ButtonComponent.vue'

export default {
  name: 'hlx-table',
  components: {
    modal,
    draggables,
    HlxButton
  },
  emits: ['closeRearrange', 'applyRearrangedColumns'],
  props: {
    columnCount: {
      type: [Number, Array]
    },
    reArrangeHeads: {
      type: Array
    },
    border: {
      type: Array,
      default: () => { return [] }
    },
    boldHeaders: {
      type: Boolean,
      default: false
    },
    rowHover: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'light'
    },
    stripedRows: {
      type: Boolean,
      default: false
    },
    reArrangeColumns: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number
    }
  },
  data () {
    return {
      unique: Math.floor(Math.random() * 1000 + 1),
      modalActive: false,
      duplicateTheads: [],
      componentKey: 0
    }
  },
  watch: {
    reArrangeColumns: {
      handler (val) {
        if (val === true) {
          this.modalActive = true
        }
      }
    },
    reArrangeHeads: {
      handler (newValue) {
        if (newValue !== undefined) {
          this.duplicateTheads = JSON.parse(JSON.stringify(newValue))
        }
      },
      immediate: true
    }
  },
  computed: {},
  mounted () {
    if (document.querySelector('#merge-head-' + this.unique).children.length !== 0) {
      const elems = document.querySelector('#merge-head-' + this.unique).children
      elems[0].style.borderTopLeftRadius = '5px'
      elems[elems.length - 1].style.borderTopRightRadius = '5px'
      for (let index = 0; index < elems.length; index++) {
        elems[index].style.position = 'sticky'
        elems[index].style.top = '0px'
      }
      const elems2 = document.querySelector('#head-' + this.unique).children
      for (let index = 0; index < elems2.length; index++) {
        elems2[index].style.position = 'sticky'
        elems2[index].style.top = '40px'
      }
    } else {
      const elems = document.querySelector('#head-' + this.unique).children
      elems[0].style.borderTopLeftRadius = '5px'
      elems[elems.length - 1].style.borderTopRightRadius = '5px'
      for (let index = 0; index < elems.length; index++) {
        elems[index].style.position = 'sticky'
        elems[index].style.top = '0px'
      }
    }
  },
  methods: {
    closeRearrangeModal () {
      this.componentKey += 1
      this.$forceUpdate()
      this.duplicateTheads = [...this.reArrangeHeads]
      this.modalActive = false
      this.$emit('closeRearrange', false)
    },
    emitFromDraggables (val) {
    },
    applyCustomisedColumns () {
      this.modalActive = false
      this.$emit('closeRearrange', false)
      this.$emit('applyRearrangedColumns', this.duplicateTheads)
    }
  }
}
</script>
<style>

</style>
