<template>
  <section class="dotted-pagination-container">
    <i
      class="icon-angle-left-regular"
      @click="backward"
      :disabled="this.left_disable"
    ></i>
    <div
      class="pagination-dot-circle"
      v-for="dot in dots"
      :key="dot"
      :class="{ active: dot == currentPage }"
      @mouseover="currentPositionbyHover(dot)"
      @click="currentPosition(dot)"
    ></div>
    <i
      class="icon-angle-right-regular"
      @click="forward"
      :disabled="this.right_disable"
    ></i>
  </section>
</template>

<script>
export default {
  name: "hlx-dotted-pagination",
  emits: ["current-page", "current-page-hover"],
  props: {
    dots: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentPage: 1,
      right_disable: false,
      left_disable: false,
    };
  },
  watch: {
    currentPage: {
      handler(page) {
        this.right_disable = false;
        this.left_disable = false;
          this.$emit("current-page", page);
        if (page >= this.dots) {
          this.right_disable = true;
          // console.log('watch right disa')
          return;
        }
        if (page <= 1) {
          this.left_disable = true;
          // console.log('watch')
          return;
        }

      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    forward() {
      if (this.currentPage >= this.dots) {
        this.right_disable = true;
        // console.log('right disa')
        return;
      }
      this.right_disable = false;
      ++this.currentPage;
      // console.log(this.currentPage,'in for');
      return;
    },
    backward() {
      if (this.currentPage <= 1) {
        this.left_disable = true;
        return;
      }
      this.left_disable = false;
      --this.currentPage;
      // console.log(this.currentPage,'in back');
      return;
    },
    currentPosition(pos) {
      this.currentPage = pos;
      this.$emit("current-page", pos);
    },
    currentPositionbyHover(pos) {
      this.currentPage = pos;
      this.$emit("current-page-hover", pos);
    },
  },
};
</script>
<!-- 
<style lang="scss" scoped>

</style> -->
