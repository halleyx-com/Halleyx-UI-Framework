<!-- eslint-disable no-unused-expressions -->
<template>
    <button
      :value="value"
      :type="type"
      :name="name"
      :class="primaryClass"
      class="hlx-button"
      id="hlx-button-0009"
      ref="hlx-button"
      @click="clicked"
      :aria-label="this.label"
    >
      <slot name="default"></slot>
      <a ref="link-ele" :aria-label="this.label" :href="href" v-if="href!=undefined" :target="target"></a>
    </button>
</template>

<script>
export default {
  name: 'hlx-button',
  emits: ['current-clik'],
  props: {
    value: {
      type: String,
      default: 'Hlx click :)'
    },
    type: {
      type: String,
      default: 'button'
    },
    name: {
      type: String,
      default: 'hlx-button'
    },
    target: {
      type: String,
      default: '_blank'
    },
    href: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label:{
      type: String,
      default:'Button'
    }

  },
  watch: {
    disabled: {
      handler (state) {
        if (state) {
          this.primaryClass
        }
      },
      immediate:true
    }
  },
  computed: {
    primaryClass () {
      if (this.disabled) {
        return 'disabled-button'
      }
      // if(this.de)
      return ''
    }
  },
  methods: {
    clicked () {
      if (this.href) {
        // this.$refs['link-ele'].click( )
        this.$refs['link-ele'].click()
      }
    }
  }
}
</script>

<!-- <style lang="scss">
$primary-color: #f9ac19;
$text-color: #565553;
.hlx-button {
  width: 144px;
  height: 44px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  &>i{
    position: relative;
    font-size: 16px;
  }
  &.pill {
    border-radius: 24px;
  }
  &.default {
    background: #f9ac19;
    color: #565553;
    &-lite {
      background: #fff1d3;
      color: #f9ac19;
      &.mini{
      color: #f9ac19 !important;

      }
    }
    &.border {
      background: #fcfcfc;
      border: 1px solid #f97a19;
      color: #f9ac19;
    }
    &.mini{
        width: 48px ;
        height: 48px;
        border-radius: 16px;
        color: #fcfcfc;
        &-invert{
             background: #fcfcfc;
             width: 48px;
        height: 48px;
    //  border: 1px solid #f97a19;
      color: #f9ac19;
        }
    }
  }
  &.bg-primary {
    background: #18bf71;
    color: #fcfcfc;
    &-lite {
      background: #dcfae9;
      color: #00bf78;
    }
    &.border {
      background: #fcfcfc;
      color: #2ecc71;
      border: 1px solid #2ecc71;
    }
  }
  &.bg-danger {
    background: #fe4141;
    color: #ffffff;
    &-lite {
      background: #ece9f1;
      color: #f9ac19;
    }
  }
  &.bg-disabled {
    background: #ece9f1;
    color: #d0c9d6;
    &-lite {
      background: #ece9f1;
      color: #d0c9d6;
    }
    &.border {
      background: #fcfcfc;
      color: #ecebed;
      border: 1px solid #ecebed;
    }
    &.mini{
        width: 48px;
        height: 48px;
        border-radius: 16px;
        color: #D0C9D6;
        &-invert{
             background: #fcfcfc;
    //  border: 1px solid #f97a19;
      color: #f9ac19;
        }
    }
  }
}
</style> -->
