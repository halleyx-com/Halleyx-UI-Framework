<template>
  <section class="stepper-control-container" id="hlx-step-controler-005">
    <div class="stepper prev-stepper" @click="prevStep()" :class="{limited:this.currentCounter<=1}">
      <i class="icon-minus-filled"></i>
    </div>
    <div class="stepper counter">
      <span class="current-page">{{ this.currentCounter }}</span>
    </div>
    <div class="stepper next-stepper" @click="nextStep()" :class="{limited:this.currentCounter>=limit-1}">
      <i class="icon-plus-filled"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: "hlx-stepper",
  emits:['current-step'],
  props: {
    step: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      currentCounter: 1,
    };
  },
  methods: {
    nextStep() {
      if (this.currentCounter + this.step < this.limit) {
        this.currentCounter += this.step;
        this.$emit('current-step',this.currentCounter)
      }
    },
    prevStep() {
      if (this.currentCounter - this.step > 0) {
        this.currentCounter -= this.step;
        this.$emit('current-step',this.currentCounter)

      }
    },
  },
};
</script>


