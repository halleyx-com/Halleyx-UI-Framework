<template>
  <div class="tabs" v-if="this.showArrows">
    <div class="tab-arrows">
      <i class="icon-angle-left-small-regular" @click="scrollLeft"></i>
      <ul :class="'tabs_header tabs_header' + this.unique">
        <li
          v-for="title in tabTitles"
          :key="title"
          :id="this.border"
          :class="{ selected: title == selectedTitle }"
          @click="selectedTitle = title"
        >
          {{ title }}
        </li>
      </ul>
      <i class="icon-angle-right-small-regular" @click="scrollRight"></i>
    </div>
    <slot />
  </div>
  <div class="tabs" v-else>
    <ul :class="'tabs_header tabs_header' + this.unique">
      <li
        v-for="title in tabTitles"
        :key="title"
        :id="this.border"
        :class="{ selected: title == selectedTitle }"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from 'vue'

export default {
  name: 'hlx-tabs',
  props: {
    border: {
      type: String,
      default: 'bottom'
    }
  },
  data () {
    return {
      unique: Math.floor(Math.random() * 1000 + 1),
      showArrows: false
    }
  },
  setup (props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title))
    const selectedTitle = ref(tabTitles.value[0])

    provide('selectedTitle', selectedTitle)
    return {
      selectedTitle,
      tabTitles
    }
  },
  methods: {
    scrollLeft () {
      const container = document.querySelector('.tabs_header' + this.unique)
      this.sideScroll(container, 'left', 25, 100, 50)
    },
    scrollRight () {
      const container = document.querySelector('.tabs_header' + this.unique)
      this.sideScroll(container, 'right', 25, 100, 50)
    },
    sideScroll (element, direction, speed, distance, step) {
      let scrollAmount = 0
      const slideTimer = setInterval(function () {
        if (direction === 'left') {
          element.scrollLeft -= step
        } else {
          element.scrollLeft += step
        }
        scrollAmount += step
        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer)
        }
      }, speed)
    }
  },
  mounted () {
    const div = document.querySelector('.tabs_header' + this.unique)
    this.showArrows = div.scrollWidth > div.clientWidth
  }
}
</script>

<style lang="scss" scoped></style>
