<template>
  <th
    class="table-header"
    :class="'fixed-column-' + this.fixed"
    :style="{
      width: this.width + 'px',
      minWidth: this.width + 'px',
      maxWidth: this.width + 'px',
      textAlign: this.align,
    }"
    v-if="this.resizable == true"
    @mouseup="resizewidth"
  >
    <span class="table-head"
      ><slot></slot
      ><span class="table-sort" v-if="sortable === true"
        ><i class="icon-angle-up-small-filled" @click="sorting" style="position: relative; top: 1px"></i
        ><i class="icon-angle-down-small-filled" @click="sorting" style="position: relative; top: -3px"></i></span
    ></span>
  </th>
  <th
    :class="'fixed-column-' + this.fixed"
    :style="{
      width: this.width + 'px',
      minWidth: this.width + 'px',
      maxWidth: this.width + 'px',
      textAlign: this.align,
    }"
    v-else
  >
    <span class="table-head"
      ><slot></slot
      ><span class="table-sort" v-if="sortable === true"
        ><i class="icon-angle-up-small-filled" @click="sorting" style="position: relative; top: 1px"></i
        ><i class="icon-angle-down-small-filled" @click="sorting" style="position: relative; top: -3px"></i></span
    ></span>
  </th>
</template>

<script>
export default {
  name: 'hlx-table-head',
  emits: ['resizewidth', 'sorting_func'],
  props: {
    width: {
      type: Number
    },
    align: {
      type: String,
      default: 'center'
    },
    sortable: {
      type: Boolean,
      default: false
    },
    resizable: {
      type: Boolean,
      default: false
    },
    prop: {
      type: String
    },
    fixed: {
      type: String
    }
  },
  mounted () {
    (function () {
      let thElm = null
      let startOffset = null

      Array.prototype.forEach.call(
        document.querySelectorAll('.table-header'),
        function (th) {
          const grip = document.createElement('div')
          grip.innerHTML = '&nbsp;'
          grip.style.top = 0
          grip.style.right = 0
          grip.style.bottom = 0
          grip.style.width = '5px'
          grip.style.position = 'absolute'
          grip.style.cursor = 'col-resize'
          grip.style.zIndex = '3'
          grip.classList.add('grip')
          grip.addEventListener('mousedown', function (e) {
            thElm = th
            startOffset = th.offsetWidth - e.pageX
          })

          th.appendChild(grip)
        }
      )

      document.addEventListener('mousemove', function (e) {
        // console.log('abc');
        if (thElm) {
          thElm.style.minWidth = startOffset + e.pageX + 'px'
          this.widthsize = startOffset + e.pageX
          this.label = thElm.children[0].innerText
        }
      })

      document.addEventListener('mouseup', function () {
        thElm = undefined
      })
    })()
  },
  data () {
    return {
      widthsize: 0,
      label: ''
    }
  },
  methods: {
    resizewidth (event) {
      // console.log('hello',event.target.offsetWidth,event.target.parentElement);
      if (event.target.className === 'grip') {
        // event.target.parentElement.offsetWidth
        this.$emit(
          'resizewidth',
          event.target.parentElement.offsetWidth,
          this.prop
        )
      } else {
        this.$emit('resizewidth', event.target.offsetWidth, this.prop)
      }
    },
    sorting (event) {
      console.log(this.prop)
      // console.log(event.target.className,'check');
      if (event.target.className === 'icon-angle-up-small-filled') {
        document
          .querySelectorAll('.icon-angle-up-small-filled')
          .forEach((e) => {
            e.classList.remove('sorting-icon')
          })
        document
          .querySelectorAll('.icon-angle-down-small-filled')
          .forEach((e) => {
            e.classList.remove('sorting-icon')
          })
        event.target.classList.add('sorting-icon')
        // if( event.target.nextSibling.className === 'icon-angle-down-small-filled sorting-icon')
        // event.target.nextSibling.classList.remove('sorting-icon')
      } else if (event.target.className === 'icon-angle-down-small-filled') {
        document
          .querySelectorAll('.icon-angle-up-small-filled')
          .forEach((e) => {
            // console.log(e);
            e.classList.remove('sorting-icon')
            // console.log(e,'op');
          })
        document
          .querySelectorAll('.icon-angle-down-small-filled')
          .forEach((e) => {
            // console.log(e);
            e.classList.remove('sorting-icon')
          })
        event.target.classList.add('sorting-icon')
        // console.log(event.target.previousSibling.className,'okk');
        // if( event.target.previousSibling.className === 'icon-angle-up-small-filled sorting-icon')
        // event.target.previousSibling.classList.remove('sorting-icon')
      } else if (
        event.target.className === 'icon-angle-up-small-filled sorting-icon'
      ) {
        event.target.classList.remove('sorting-icon')
      } else if (
        event.target.className === 'icon-angle-down-small-filled sorting-icon'
      ) {
        event.target.classList.remove('sorting-icon')
      }
      this.$emit('sorting_func', event.target.className, this.prop)
    }
  }
}
</script>

<style></style>
