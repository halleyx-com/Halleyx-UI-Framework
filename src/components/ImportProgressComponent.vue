<template>
  <div class="progress-bar-container" id="hlx-progress-bar-001hlx">
    <span
      class="bar"
      :progress-percentage="progress"
      :progress-data="progress + '%'"
      :class="{ 'tooltip-track': this.tooltip }"
    >
    </span>
  </div>
  <span class="perentage-default"></span>
</template>

<script>
export default {
  name: "hlx-import-progress",
  props: ["progress", "strokeWidth", "tooltip"],
  watch: {
    progress: {
      handler(progress_percentage) {
        let progress_bar = document.querySelector(
          "#hlx-progress-bar-001hlx > span.bar"
        );
        // console.log(progress_bar);
        progress_bar.style.width = this.progress + "%";
        if (progress_percentage && this.progress_bar) {
        }
        // this.progress = progress_percentage
      },
    },
  },
  mounted() {
    // console.log(this.progress, this.strokeWidth, this.importTitle);
    let progress_bar = document.querySelector(
      "#hlx-progress-bar-001hlx > span.bar"
    );
    progress_bar.style.width = this.progress + "%";
    if (this.progress && this.progress_bar) {
    }
  },
};
</script>
