<template>
  <div :class="'sidenav-margin-' + this.position" :id="'sidenav-margin' + this.unique" @click="closeDrawer"></div>
  <div :class="'sidenav-' + this.position" :id="'mySidenav' + this.unique">
    <div :class="'header-panel-' + this.position">
        <span :class="'title-' + this.position" v-if="this.title !== undefined">
            {{this.title}}
        </span>
        <span :class="'title-' + this.position" v-else>
        <header >
            <slot name="header">Drawer title</slot>
        </header>
        </span>
        <span :class="'drawer-close-' + this.position" @click="closeDrawer">
            <i class="icon-cross"></i>
        </span>
    </div>
    <main  :class="'body-panel-' + this.position">
        <slot name="body">Drawer body</slot>
    </main>
    <footer  :class="'footer-panel-' + this.position" v-if="this.footer === true">
        <slot name="footer">Drawer footer</slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'hlx-drawer',
  data () {
    return {
      unique: Math.floor(Math.random() * 100)
    }
  },
  emits: ['close'],
  props: {
    title: {
      type: String
    },
    show: {
      type: Boolean,
      default: false
    },
    footer: {
      type: Boolean,
      default: false
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    position: {
      type: String
    }
  },
  mounted () {
    // console.log(this.title)
    if (this.position === 'left' || this.position === 'right') {
      document.getElementById('mySidenav' + this.unique).style[this.position] = '-' + this.width + 'px'
      document.getElementById('mySidenav' + this.unique).style.width = this.width + 'px'
    } else if (this.position === 'top' || this.position === 'bottom') {
      document.getElementById('mySidenav' + this.unique).style[this.position] = '-' + this.height + 'px'
      document.getElementById('mySidenav' + this.unique).style.height = this.height + 'px'
    }
  },
  watch: {
    show: {
      handler (val) {
        if (val === true) {
          if (this.position === 'left' || this.position === 'right') {
            document.getElementById('mySidenav' + this.unique).style.display = 'block'
            document.getElementById('mySidenav' + this.unique).style[this.position] = '0px'
            document.getElementById('sidenav-margin' + this.unique).style[this.position] = this.width + 'px'
            document.getElementById('sidenav-margin' + this.unique).style.width = '100%'
          } else if (this.position === 'top' || this.position === 'bottom') {
            document.getElementById('mySidenav' + this.unique).style[this.position] = '0px'
            document.getElementById('sidenav-margin' + this.unique).style[this.position] = this.height + 'px'
            document.getElementById('sidenav-margin' + this.unique).style.height = '100%'
            document.getElementById('sidenav-margin' + this.unique).style.width = '100%'
          }
        }
      }
    }
  },
  methods: {
    closeDrawer () {
      this.closeNav()
      this.$emit('close')
    },
    closeNav () {
      if (this.position === 'left' || this.position === 'right') {
        document.getElementById('mySidenav' + this.unique).style[this.position] = '-' + this.width + 'px'
        document.getElementById('sidenav-margin' + this.unique).style.width = '0'
      } else if (this.position === 'top' || this.position === 'bottom') {
        document.getElementById('mySidenav' + this.unique).style[this.position] = '-' + this.height + 'px'
        document.getElementById('sidenav-margin' + this.unique).style.height = '0'
        document.getElementById('sidenav-margin' + this.unique).style.width = '0'
      }
    }
  }
}
</script>

<style lang="scss">
.drawer-close-left, .drawer-close-right, .drawer-close-top, .drawer-close-bottom {
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
