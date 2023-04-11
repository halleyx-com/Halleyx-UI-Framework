<template>
  <div
    class="load-container" id="hlx-loaders-006"
    :class="this.loadType ? this.loadType : 'spinner'"
  >
    <!-- spin loader -->
    <div
      class="spin-loader"
      id="spin-loader"
      v-if="this.loadType == 'spinner' || this.loadType == undefined"
    ></div>
    <!-- dotted jumper -->
    <div class="dotted-jump-loader" v-if="this.loadType == 'dotted-jumper'">
      <div class="ball"></div>
      <div class="ball"></div>
      <div class="ball"></div>
    </div>
    <!-- load bar -->
    <div
      class="loading-horz-bar"
      v-if="this.loadType == 'horizontal-loop'"
    ></div>
  </div>
</template>

<script>
export default {
  name: "hlx-loader",
  props: ["loadType", "size"],
  data() {
    return {};
  },
  created() {},
  mounted() {
    let loader = document.querySelector("#spin-loader");
    if (Number(this.size)) {
      switch (this.loadType) {
        case "dotted":
          break;

        default:
          let loader = document.querySelector("#spin-loader");
          if (loader) {
            loader.style.width = this.size + "px";
            loader.style.height = this.size + "px";
          }
          break;
      }
    }
  },
  watch: {
    size: {
      handler(size) {
        if (size) {
          switch (this.loadType) {
            case "dotted":
              break;

            default:
              let loader = document.querySelector("#spin-loader");
              if (loader) {
                loader.style.size = this.size + "px";
                loader.style.height = this.size + "px";
              }
              break;
          }
        }
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

