<template>
  <div class="flex m-10" v-if="this.selectable == true">
        <div class="draggable">
          <label class="check-container">{{ 'Select all' }}
            <i class="icon-minus-regular" v-if="partiallySelected == true" style="    color: white;
    font-size: 14px !important;
    position: relative;
    font-weight: bold;
    top: 1px;
    left: -76px;
    z-index: 100;"></i>
          <input style="margin-right: 15px" type="checkbox" :class="'select-all' + this.unique" :checked="false" @click="selectAll">
          <span class="checkmark" :id="'select-all-checkmark'  + this.unique"></span>
          </label>
    </div>
    <draggable class="dragArea list-group w-full"
    :list="this.list"
    @change="log"
    handle='.handle'
    tag="transition-group"
        :component-data="{
          tag: 'ul',
          type: 'transition-group',
          name: !drag ? 'flip-list' : null
        }"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false">
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center draggable"
        v-for="element in list"
        :key="element.id"
      >
        <i class="icon-drag-vertical-filled handle" style="margin-right: 15px"></i>
        <label class="check-container">{{ element.name }}
          <input type="checkbox" :checked="element.checked" :disabled="element.disabled" :class="'check-drag'  + this.unique" :id="'check-drag'  + this.unique +element.id" @click="checkItem(element, $event)">
          <span class="checkmark"></span>
        </label>
      </div>
    </draggable>
  </div>
  <div class="flex m-10" v-else>
    <draggable class="dragArea list-group w-full"
    :list="this.list"
    @change="log"
    handle='.handle'
    tag="transition-group"
        :component-data="{
          tag: 'ul',
          type: 'transition-group',
          name: !drag ? 'flip-list' : null
        }"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false">
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center draggable"
        v-for="element in list"
        :key="element.name"
      >
        <i class="icon-drag-vertical-filled handle" style="margin-right: 15px"></i>{{ element.name }}
      </div>
    </draggable>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
export default defineComponent({
  name: 'hlx-draggables',
  components: {
    draggable: VueDraggableNext
  },
  props: ['list', 'selectable'],
  emits: ['change'],
  data () {
    return {
      display: 'Handle',
      enabled: true,
      dragging: false,
      drag: false,
      select_all: false,
      all_checked: true,
      partially_checked: false,
      atleastOne: false,
      unique: Math.floor((Math.random() * 1000) + 1)
    }
  },
  mounted () {
    // this.partially_checked = false
    if (this.selectable === true) {
      this.all_checked = true
      this.list.forEach((ele) => {
        if (ele.checked === false) {
          this.all_checked = false
        }
        if (ele.checked === true) {
          this.atleastOne = true
        }
      })
      if (this.all_checked === true) {
        document.querySelector('.select-all' + this.unique).checked = true
      }
      if (this.atleastOne === true && this.all_checked === false) {
        this.partially_checked = true
      } else {
        this.partially_checked = false
      }
      if (this.partially_checked === true) {
        document.getElementById('select-all-checkmark' + this.unique).classList.add('theme')
      }
    }
  },
  methods: {
    log (event) {
      // console.log(event)
      this.$emit('change', this.list)
    },
    selectAll ($event) {
      this.select_all = $event.target.checked
      if (this.select_all === true) {
        this.partially_checked = false
        document.querySelectorAll('[id^=check-drag' + this.unique + ']').forEach((ele) => {
          if (ele.disabled === false) {
            ele.checked = true
          }
        })
        this.list.forEach((ele) => {
          if (ele.disabled === false) {
            ele.checked = true
          }
        })

        document.getElementById('select-all-checkmark' + this.unique).classList.remove('grey')
        document.getElementById('select-all-checkmark' + this.unique).classList.add('theme')
      } else {
        this.partially_checked = false
        document.querySelectorAll('[id^=check-drag' + this.unique + ']').forEach((ele) => {
          if (ele.disabled === false) {
            ele.checked = false
          }
          if (ele.checked === true) {
            this.partially_checked = true
            document.getElementById('select-all-checkmark' + this.unique).classList.add('theme')
          }
        })
        this.list.forEach((ele) => {
          if (ele.disabled === false) {
            ele.checked = false
          }
        })
        if (this.partially_checked === false) {
          document.getElementById('select-all-checkmark' + this.unique).classList.remove('theme')
          document.getElementById('select-all-checkmark' + this.unique).classList.add('grey')
        } else if (this.partially_checked === true) {
          document.getElementById('select-all-checkmark' + this.unique).classList.remove('grey')
          document.getElementById('select-all-checkmark' + this.unique).classList.add('theme')
        }
      }
      this.$emit('change', this.list)
    },
    checkItem (val, $event) {
      this.atleastOne = false
      this.all_checked = true
      val.checked = $event.target.checked
      if ($event.target.checked === false) {
        document.querySelector('.select-all' + this.unique).checked = false
      }
      // if (this.all_checked === true) {
      //   document.querySelector('.select-all').checked = true
      // }
      this.$emit('change', this.list)
      this.list.forEach((ele) => {
        if (ele.checked === false) {
          this.all_checked = false
        }
        if (ele.checked === true) {
          this.atleastOne = true
        }
      })
      if (this.all_checked === true) {
        document.querySelector('.select-all' + this.unique).checked = true
        document.getElementById('select-all-checkmark' + this.unique).classList.add('theme')
      } else if (document.getElementById('select-all-checkmark' + this.unique)) {
        this.partially_checked = false
        document.getElementById('select-all-checkmark' + this.unique).classList.add('grey')
      }
      if (this.atleastOne === true && this.all_checked === false) {
        this.partially_checked = true
        document.getElementById('select-all-checkmark' + this.unique).classList.remove('grey')
        document.getElementById('select-all-checkmark' + this.unique).classList.add('theme')
      } else if (this.all_checked === true) {
        this.partially_checked = false
      }
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    },
    partiallySelected () {
      return this.partially_checked
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
