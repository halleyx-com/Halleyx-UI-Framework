<template>
  <div v-if="this.type == 'checkbox'" class="whole-checkbox">
    <label v-if="this.showSelectAll == true" class="check-container" @mouseover="hoverSelectAll" @mouseleave="unHoverSelectAll"
      >{{ "Select all" }}
      <i
        class="icon-minus-regular partially-checked"
        v-if="partiallySelected == true"
      ></i>
      <input
        style="margin-right: 15px"
        type="checkbox"
        class="selcet"
        :class="'select-all' + this.unique"
        :checked="false"
        @click="selectAll"
      />
      <span class="checkmark" :id="'select-all-checkmark' + this.unique" @mouseover="hoverSelectAll" @mouseleave="unHoverSelectAll"></span>
    </label>
    <div v-for="element in this.options" class="checkbox-container" :key="element.id">
      <label class="check-container"
        >{{ element.name }}
        <input
          type="checkbox"
          :checked="element.checked"
          :disabled="element.disabled"
          class="check-correct"
          :class="'check-drag' + this.unique"
          :id="'check-drag' + this.unique"
          @click="checkItem(element, $event)"
        />
        <span class="checkmark"></span>
      </label>
    </div>
  </div>
  <div
    v-if="this.type == 'radio-buttons'"
    style="display: flex; flex-direction: column;"
  >
    <div v-for="element in this.options" :key="element.id">
      <label class="radio-container" :id="'radio' + element.id + this.unique"
        >{{ element.name }}
        <input
          type="radio"
          :name="'radio'  + this.unique"
          :for="'radio' + element.id + this.unique"
          :id="element.id + this.unique"
          :checked="element.checked"
          @click="checkRadio(element)"
        />
        <span class="radio-checkmark"></span>
      </label>
    </div>
  </div>
  <div v-if="this.type == 'switch'" style="margin: 0 10px 0 15px">
    <label :class="'switch'  + this.unique">
      <input type="checkbox" :checked="this.checked" @click="checkSwitch" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'hlx-input-elements',
  inheritAttrs:false,
  props: ['type', 'options', 'checked', 'showSelectAll', 'pre_val'],
  data () {
    return {
      select_all: false,
      all_checked: true,
      partially_checked: false,
      atleastOne: false,
      unique: Math.floor(Math.random() * 1000 + 1)
    }
  },
  watch: {
    options: {
      handler (val) {
        // console.log(val);
        if(val)
        {
          const r = document.querySelector(':root')
          const rs = getComputedStyle(r)
          if (this.type === 'checkbox') {
          document.querySelector('.select-all' + this.unique).checked = false
          // console.log(val,'rainbow');
          val.forEach((ele) => {
            if (ele.checked === false) {
              this.all_checked = false
            }
            if (ele.checked === true) {
              this.atleastOne = true
            }
          })
          if (this.all_checked === true) {
            if (this.showSelectAll === true) {
              document.querySelector('.select-all' + this.unique).checked = true
            }
          }
          if (this.atleastOne === true && this.all_checked === false) {
            this.partially_checked = true
          } else {
            this.partially_checked = false
          }
          if (this.partially_checked === true) {
            if (this.showSelectAll === true) {
              document.getElementById(
                'select-all-checkmark' + this.unique
              ).style.background = '#54bd95'
              document.getElementById(
                'select-all-checkmark' + this.unique
              ).style.border = '1px solid #54bd95'
            }
          }
          }

        }
      },
      // immediate:true,
      // deep:true
    }
  },
  mounted () {
    // this.partially_checked = false
    if (this.type === 'checkbox') {
      this.all_checked = true
      this.options.forEach((ele) => {
        if (ele.checked === false) {
          this.all_checked = false
        }
        if (ele.checked === true) {
          this.atleastOne = true
        }
      })
      if (this.all_checked === true) {
        if (this.showSelectAll === true) {
          document.querySelector('.select-all' + this.unique).checked = true
          document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.add('select-all-theme')
        }
      }
      if (this.atleastOne === true && this.all_checked === false) {
        this.partially_checked = true
      } else {
        this.partially_checked = false
      }
      if (this.partially_checked === true) {
        if (this.showSelectAll === true) {
          // document.getElementById(
          document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.add('select-all-theme')
          //   'select-all-checkmark' + this.unique
          // ).style.background = '#54bd95'
          // document.getElementById(
          //   'select-all-checkmark' + this.unique
          // ).style.border = '1px solid #54bd95'
        }
      }
    }
  },
  computed: {
    partiallySelected () {
      return this.partially_checked
    }
  },
  methods: {
    hoverSelectAll () {
      document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.add('select-all-theme-hover')
    },
    unHoverSelectAll () {
      if (this.select_all === false && this.partially_checked === false) {
        document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.remove('select-all-theme-hover')
      }
    },
    selectAll ($event) {
      const r = document.querySelector(':root')
      const rs = getComputedStyle(r)
      this.select_all = $event.target.checked
      if (this.select_all === true) {
        this.partially_checked = false
        document
          .querySelectorAll('[id^=check-drag' + this.unique + ']')
          .forEach((ele) => {
            if (ele.disabled === false) {
              ele.checked = true
            }
          })
        this.options.forEach((ele) => {
          if (ele.disabled === false) {
            ele.checked = true
          }
        })
        const r = document.querySelector(':root')
        const rs = getComputedStyle(r)
        document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.remove('select-all-grey')
        document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.add('select-all-theme')
      } else {
        this.partially_checked = false
        document
          .querySelectorAll('[id^=check-drag' + this.unique + ']')
          .forEach((ele) => {
            if (ele.disabled === false) {
              ele.checked = false
            }
            if (ele.checked === true) {
              document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.add('select-all-theme')
              this.partially_checked = true
            }
          })
        this.options.forEach((ele) => {
          if (ele.disabled === false) {
            ele.checked = false
          }
        })
        // console.log(this.partially_checked)
        if (this.partially_checked === false) {
          document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.add('select-all-grey')
        } else if (this.partially_checked === true) {
          document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.add('select-all-theme')
        }
      }
      this.$emit('update:value', this.options)
    },
    checkItem (val, $event) {
      const r = document.querySelector(':root')
      const rs = getComputedStyle(r)
      this.atleastOne = false
      this.all_checked = true
      val.checked = $event.target.checked
      if ($event.target.checked === false) {
        if (this.showSelectAll === true) {
          document.querySelector('.select-all' + this.unique).checked = false
        }
      }
      // if (this.all_checked === true) {
      //   document.querySelector('.select-all').checked = true
      // }
      this.$emit('update:value', this.options)
      this.options.forEach((ele) => {
        if (ele.checked === false) {
          this.all_checked = false
        }
        if (ele.checked === true) {
          this.atleastOne = true
        }
      })
      if (this.showSelectAll === true) {
        if (this.all_checked === true) {
          // console.log('all checked')
          document.querySelector('.select-all' + this.unique).checked = true
          document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.remove('select-all-grey')
          document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.add('select-all-theme')
        } else if (
          document.getElementById('select-all-checkmark' + this.unique)
        ) {
          this.partially_checked = false
          document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.remove('select-all-theme')
          document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.add('select-all-grey')
        }
        if (this.atleastOne === true && this.all_checked === false) {
          this.partially_checked = true
          document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.remove('select-all-grey')
          document.getElementById(
            'select-all-checkmark' + this.unique
          ).classList.add('select-all-theme')
        } else if (this.all_checked === true) {
          this.partially_checked = false
        }
      }
    },
    checkRadio (val) {
      this.options.forEach((ele) => {
        ele.checked = false
        if (ele === val) {
          ele.checked = true
        }
      })
      this.$emit('update:value', this.options)
      // console.log(val.name);
      this.$emit('selected', val.name)
    },
    checkSwitch ($event) {
      this.$emit('update:value', $event.target.checked)
    }
  }
}
</script>

<style lang="scss">
// :root {
//   --theme: $primary-color;
//   --border: $border-color;
//   --error: $primary-error;
//   --success: $primary-success;
//   --darkGrey: $grey-dark;
// }
</style>
