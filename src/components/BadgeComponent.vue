<template>
  <button type="button" id="badge" class="icon-button" :aria-label="icon">
    <span :class="icon"></span>
    <span class="icon-button__badge" style="font-size: 10px">{{
      this.count
    }}</span>
  </button>
</template>

<script>
export default {
  name: "hlx-badge",
  props: ["icon", "count"],
};
</script>
