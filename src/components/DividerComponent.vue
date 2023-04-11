<template>
  <div class="hlx-horizontal-divider" :style="'height:'+this.space + '; margin-bottom:'+ this.space" v-if="this.position == 'horizontal'">
  </div>
  <div class="hlx-vertical-divider" :style="'width:'+this.space + '; margin-right:'+ this.space" v-if="this.position == 'vertical'">
  </div>
</template>

<script>
export default {
  name: 'hlx-divider',
  props: ['position', 'space']

}
</script>

<style lang="scss" scoped>

</style>
