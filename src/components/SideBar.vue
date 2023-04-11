<template>
  <div
    class="hlx-sidebar-container"
    :id="'navbar-' + Math.floor(Math.random() * 1000)"
    :class="{
      'collapse-shrink': this.collapseState,
      collapsible: this.collapsible,
    }"
  >
    <div class="nav_brand">
      <div class="toggler" @click="toggleCollapse('navbar')">
        <i
          name="menu-outline"
          :class="
            this.collapseState
              ? 'icon-angle-right-regular'
              : 'icon-angle-left-regular'
          "
          id="nav-toggle"
        ></i>
      </div>
      <div
        class="logo-container"
        @click="goToHome"
        :class="this.collapseState ? 'collapsed' : 'extended'"
      >
        <!-- <i class="nav_logo" :class="iLogo"></i> -->
        <slot name="expand" v-if="this.collapseState == false"></slot>
        <slot name="collapse" v-else-if="this.collapseState == true"></slot>
        <!-- <i name="logo-only" class="icon-hamburger-menu" v-else-if="this.collapseState == true"></i> -->
        <!-- <span class="shrink">{{ title }}</span> -->
      </div>
    </div>
    <nav class="nav">
      <ul class="nav-items">
        <li
          v-for="item in navList"
          :key="item.name"
          @click="navTo(item, $event)"
          :class="
            item.separator == true
              ? 'separator'
              : item.separator == undefined
              ? ''
              : ''
          "
        >
          <a
            href="#"
            :aria-label="bylingualName(item)"
            class="nav_link"
            :class="{ active: item.active }"
            ref="nav-link"
          >
            <i name="home-outline" :class="item.icon"></i>
            <span class="nav_name shrink">{{ bylingualName(item) }}</span>
          </a>
        </li>
      </ul>
      <!-- <ul class="config-nav">
        <li
          v-for="item in configNavs"
          :key="item.name"
          @click="navTo(item, $event)"
        >
          <a href="#" class="nav_link">
            <i name="home-outline" :class="item.icon"></i>
            <span class="nav_name shrink">{{ bylingualName(item) }}</span>
          </a>
        </li>
      </ul> -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "hlx-sidebar",
  props: {
    navItems: {
      type: Array,
      default: [],
    },
    lang: {
      type: String,
      default: "en-US",
    },
    title: {
      type: String,
      default: "Title",
    },
    iLogo: {
      type: String,
      default: "logo",
    },
    collapsible: {
      type: Boolean,
      default: false,
    },
    collapse: {
      type: Boolean,
      default: false,
    },
    collapseOnly: {
      type: Boolean,
      default: false,
    },
    expandOnly: {
      type: Boolean,
      default: false,
    },
    configNavs: {
      type: Array,
      default: ["default"],
    },
  },
  mounted() {
    let count = 0;
    this.navList = this.navItems.map((item) => {
      if (item.active && count == 0) {
        count = 1;
      } else if (item.active && count == 1) {
        item.active = false;
      }
      return item;
    });
  },
  emits: ["navTo", "goToHome"],
  created() {
    this.$watch("collapse", (collapse) => {});
    // this.collapseState = this.collapse ? true : false;
  },
  data() {
    return {
      is_extended: true,
      navList: [],
      // collapsible: false,
      collapseState: false,
    };
  },
  watch: {
    collapse: {
      handler(type) {
        // if (this.collapseOnly == false && this.expandOnly == false) {

        this.collapseState = type == true ? true : false;
        // }
      },
      immediate: true,
    },
    collapsible: {
      handler(type) {
        if (this.collapseOnly == false && this.expandOnly == false) {
          // this.collapseState = type ? true : false;
        }
      },
      immediate: true,
    },
  },
  methods: {
    bylingualName(item) {
      switch (this.lang.toLowerCase()) {
        case "en-us":
          return item.label;
        case "en-fr":
          return item.label_fr || item.label;
      }
    },
    toggleCollapse(id) {
      const navbar = document.getElementById(id);
      // navbar.classList.toggle('collpase-shrink')
      this.collapseState = !this.collapseState;
    },

    navTo(item, $event) {
      this.$emit("navTo", item);
      let ele = $event.target;
      this.$refs["nav-link"];
      // const links = [...document.querySelectorAll(".nav .nav_link")];
      const links = this.$refs["nav-link"];
      links.filter((link) => {
        link.classList.remove("active");
      });
      ele =
        ele.tagName == "I"
          ? ele.parentElement.classList.add("active")
          : ele.tagName == "SPAN"
          ? ele.parentElement.classList.add("active")
          : ele.tagName == "LI"
          ? ele.classList.children[0].add("active")
          : ele.classList.add("active");
    },
    goToHome() {
      this.$emit("goToHome");
    },
  },
  computed: {
    comuptedCollapse() {
      return this.collapse;
    },
    computedCollapsible() {
      return this.collapsible;
    },
  },
};
</script>
