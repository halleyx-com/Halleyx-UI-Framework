<template>
  <div class="range-slider" id="hlx-slide-control-0003">
    <input
      class="range-slider__range"
      id="hlx-range-slider"
      ref="hlx-slider"
      @input="handleChange"
      type="range"
      :min="min"
      :max="max"
      v-model="currentValue"
    />
  </div>
</template>

<script>
export default {
  name: "hlx-slider",
  emits: ["update:modelValue","change"],
  props: {
    max: {
      type: Number,
      default: 100,
    },
    min: {
      type: Number,
      default: 0,
    },
    config: {
      type: Object,
      default: {
        fill: "#F6991D",
        background: "#d4d4d4",
      },
    },
  },
  data() {
    return {
      currentValue: 0,
    };
  },
   mounted() {
      let slider = this.$refs["hlx-slider"];
      this.currentValue = this.min
      const percentage =
        100 * ((this.currentValue - this.min) / (this.max - this.min));
      // now we'll create a linear gradient that separates at the above point
      // Our background color will change here
      const bg = `linear-gradient(90deg, ${this.config.fill} ${percentage}%, ${
        this.config.background
      } ${percentage + 0.1}%)`;
      slider.style.background = bg;
    },
  methods: {
    handleChange($event) {
      this.$emit("update:modelValue", this.currentValue);
      this.$emit("change", this.currentValue);
      const percentage =
        100 * ((this.currentValue - this.min) / (this.max - this.min));
      // now we'll create a linear gradient that separates at the above point
      // Our background color will change here
      const bg = `linear-gradient(90deg, ${this.config.fill} ${percentage}%, ${
        this.config.background
      } ${percentage + 0.1}%)`;
      $event.target.style.background = bg;
    },
   
  },
  computed: {},
};
</script>
