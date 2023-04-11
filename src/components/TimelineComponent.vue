<template>
  <div v-if="this.view == 'horizontal' && this.type == 'regular'" class="t-parent">
    <div class=" t-sub-parent" v-for="(e,index) in this.timeline_data" :key="index" >
    <div class="t-cont" >
      <div :class="{'active-circle':e.visited == true,'circle': e.visted == false, 'pri-bg': e.active == true }" id="circle"><i :class="e.visited == true  ? 'icon-check-filled' : 'icon-more-horizontal-filled'"></i></div>
    <!-- <div class="t-title">{{ e.title }} <span class="bg-default border"  v-if= "e.description!=undefined && e.description!=''" :data-tooltip="e.description" data-tooltip-location="right"><i class="icon-info-circle-regulart"></i></span>
</div>
    <div class="t-sub-title">{{ e.subtitle }}</div> -->
  </div>
  <div class="t-line" v-show = "index < this.timeline_data.length-1"><hr :class="e.active == true ? 't-active' : 't-inactive'"></div>
</div>
  </div>
  <div v-if="this.view == 'horizontal' && this.type == 'regular'" class="t-parent">
    <div class=" t-sub-parent" v-for="(e,index) in this.timeline_data" :key="index" >
    <div class="t-cont" >
      <!-- <div :class="{'active-circle':e.visited == true,'circle': e.visted == false, 'pri-bg': e.active == true }" id="circle"><i :class="e.visited == true  ? 'icon-check-filled' : 'icon-more-horizontal-filled'"></i></div> -->
    <div class="t-title" style="margin-top: -8px; margin-left: -70px">{{ e.title }} <span class="bg-default border"  v-if= "e.description!=undefined && e.description!=''" :data-tooltip="e.description" data-tooltip-location="right"><i class="icon-info-circle-regulart"></i></span>
</div>
    <div class="t-sub-title" style="margin-left: -70px">{{ e.subtitle }}</div>
  </div>
  <!-- <div class="t-line" v-show = "index < this.timeline_data.length-1"><hr :class="e.active == true ? 't-active' : 't-inactive'"></div> -->
</div>
  </div>











  <div v-if="this.view == 'horizontal' && this.type == 'numbered'" class="t-parent">
    <div class=" t-sub-parent" v-for="(e,index) in this.timeline_data" :key="index" >
    <div class="t-cont" >
      <div :class="{'active-circle':e.visited == true,'circle': e.visted == false, 'pri-bg': e.active == true }" class="t-circle" id="circle">{{ index+1 }}</div>
    <!-- <div class="t-title">{{ e.title }}  <span class="bg-default border"  v-if= "e.description!=undefined && e.description!=''" :data-tooltip="e.description" data-tooltip-location="right"><i class="icon-info-circle-regulart"></i></span></div>
    <div class="t-sub-title">{{ e.subtitle }}</div> -->
  </div>
  <div class="t-line" v-show = "index < this.timeline_data.length-1"><hr></div>
</div>
  </div>
  <div v-if="this.view == 'horizontal' && this.type == 'numbered'" class="t-parent">
    <div class=" t-sub-parent" v-for="(e,index) in this.timeline_data" :key="index" >
    <div class="t-cont" >
    <!-- <div :class="{'active-circle':e.visited == true,'circle': e.visted == false, 'pri-bg': e.active == true }" class="t-circle" id="circle">{{ index+1 }}</div> -->
    <div class="t-title"  style="margin-top: -8px; margin-left: -70px">{{ e.title }}  <span class="bg-default border"  v-if= "e.description!=undefined && e.description!=''" :data-tooltip="e.description" data-tooltip-location="right"><i class="icon-info-circle-regulart"></i></span></div>
    <div class="t-sub-title" style="margin-left: -70px">{{ e.subtitle }}</div>
  </div>
  <!-- <div class="t-line" v-show = "index < this.timeline_data.length-1"><hr></div> -->
</div>
  </div>

<div v-if="this.view == 'vertical' && this.type == 'regular'" class="t-parent-v">
  <div class=" t-sub-parent-v" v-for="(e,index) in this.timeline_data" :key="index" >
    <div class="t-cont-v" >
      <div :class="{'active-circle':e.visited == true,'circle': e.visted == false, 'pri-bg': e.active == true }" id="circle"><i :class="e.visited == true  ? 'icon-check-filled' : 'icon-more-horizontal-filled'"></i></div>
      <div class="t-content-v">
    <div class="t-title-v">{{ e.title }} <span class="bg-default border"  v-if= "e.description!=undefined && e.description!=''" :data-tooltip="e.description" data-tooltip-location="right"><i class="icon-info-circle-regulart"></i></span></div>
    <div class="t-sub-title-v">{{ e.subtitle }}</div>
  </div>
  </div>
  <div class="t-line-v" v-show = "index < this.timeline_data.length-1"><hr :class="e.visited == true ? 't-active' : 't-inactive'"></div>
  </div>

</div>
<div v-if="this.view == 'vertical' && this.type == 'numbered'" class="t-parent-v">
  <div class=" t-sub-parent-v" v-for="(e,index) in this.timeline_data" :key="index" >
    <div class="t-cont-v" >
      <div :class="{'active-circle':e.visited == true,'circle': e.visted == false, 'pri-bg': e.active == true }" id="circle">{{ index+1 }}</div>
      <div class="t-content-v">
    <div class="t-title-v">{{ e.title }} <span class="bg-default border"  v-if= "e.description!=undefined && e.description!=''" :data-tooltip="e.description" data-tooltip-location="right"><i class="icon-info-circle-regulart"></i></span></div>
    <div class="t-sub-title-v">{{ e.subtitle }}</div>
  </div>
  </div>
  <div class="t-line-v" v-show = "index < this.timeline_data.length-1"><hr :class="e.visited == true ? 't-active' : 't-inactive'"></div>
  </div>

</div>

  
</template>

<script>
export default {
  name: 'hlx-timeline',
    props:['timeline_data', 'view', 'type'],
    data(){
        return{
          // width: 0
        }
    },
    mounted(){
      // this.width = document.querySelector(".t-parent").offsetWidth;
      // let a = document.querySelectorAll('.t-line')

      // a[a.length-1].style.display = 'none'

    }


}
</script>


<style lang="scss">


// .t-active{
  
// }
</style>