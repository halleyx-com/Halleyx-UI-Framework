<template>
  <div class="gallery-parent-container">
    <div class="image-container">
      <img :src="this.selected_img.url" :alt="this.selected_img.url" />
      <div class="slider-parent" v-if="this.image_view_type=='panel' && this.panel_position=='bottom'">
        <div class="icon"><i class="icon-angle-left-regular" ref="left-icon" @click="prevImg()"></i></div>
        <div class="slide-container">
          <img
            v-for="(i, index) in image_data"
            :key="index"
            :src="i.url"
            :alt="i.url"
            @click="chooseImg(i, index)"
            :class="'img' + index"
            class="slider-image"
          />
        </div>
        <div class="icon"><i class="icon-angle-right-regular" ref="right-icon" @click="nextImg()"></i></div>
      </div>
      <div class="slider-parent-left" v-if="this.image_view_type=='panel' && this.panel_position=='left'">
        <div class="icon"><i class="icon-angle-left-regular" ref="left-icon" @click="prevImg()"></i></div>
        <div class="slide-container">
          <img
            v-for="(i, index) in image_data"
            :key="index"
            :src="i.url"
            :alt="i.url"
            @click="chooseImg(i, index)"
            :class="'img' + index"
            class="slider-image"
          />
        </div>
        <div class="icon"><i class="icon-angle-right-regular" ref="right-icon" @click="nextImg()"></i></div>
      </div>
      <div class="slider-parent-right" v-if="this.image_view_type=='panel' && this.panel_position=='right'">
        <div class="icon"><i class="icon-angle-left-regular" ref="left-icon" @click="prevImg()"></i></div>
        <div class="slide-container">
          <img
            v-for="(i, index) in image_data"
            :key="index"
            :src="i.url"
            :alt="i.url"
            @click="chooseImg(i, index)"
            :class="'img' + index"
            class="slider-image"
          />
        </div>
        <div class="icon"><i class="icon-angle-right-regular" ref="right-icon" @click="nextImg()"></i></div>
      </div>

      <div class="description" v-if="this.image_view_type=='panel' && this.panel_position=='bottom'">
        <div
          class="title"
          :style="[
            this.selected_img.font_color == 'dark'
              ? { color: '#111' }
              : { color: '#ebebeb' },
          ]"
        >
          {{ this.selected_img.title }}
        </div>
        <div
          class="sub-title"
          :style="[
            this.selected_img.font_color == 'dark'
              ? { color: '#111' }
              : { color: '#ebebeb' },
          ]"
        >
          {{ this.selected_img.description }}
        </div>
      </div>
      <div class="description-right" v-if="this.image_view_type=='panel' && this.panel_position=='left'">
        <div
          class="title"
          :style="[
            this.selected_img.font_color == 'dark'
              ? { color: '#111' }
              : { color: '#ebebeb' },
          ]"
        >
          {{ this.selected_img.title }}
        </div>
        <div
          class="sub-title"
          :style="[
            this.selected_img.font_color == 'dark'
              ? { color: '#111' }
              : { color: '#ebebeb' },
          ]"
        >
          {{ this.selected_img.description }}
        </div>
      </div>
      <div class="description-left" v-if="this.image_view_type=='panel' && this.panel_position=='right'">
        <div
          class="title"
          :style="[
            this.selected_img.font_color == 'dark'
              ? { color: '#111' }
              : { color: '#ebebeb' },
          ]"
        >
          {{ this.selected_img.title }}
        </div>
        <div
          class="sub-title"
          :style="[
            this.selected_img.font_color == 'dark'
              ? { color: '#111' }
              : { color: '#ebebeb' },
          ]"
        >
          {{ this.selected_img.description }}
        </div>
      </div>
    </div>
          <div class="pagination-parent" v-if="this.image_view_type=='dotted pagination' && this.control_type=='hover'">
        <hlx-dotted-pagination :dots="this.image_data.length" @current-page-hover="currentImg"/>
      </div>
      <div class="pagination-parent" v-if="this.image_view_type=='dotted pagination' && this.control_type=='click'">
        <hlx-dotted-pagination :dots="this.image_data.length" @current-page="currentImg"/>
      </div>
  </div>
</template>

<script>
import hlxDottedPagination from "../components/DottedPagination.vue";

export default {
  name: 'hlx-image-gallery',
    props:['image_data','auto_play', 'image_view_type', 'control_type', 'panel_position'],
    components:{
        hlxDottedPagination
    },
  data() {
    return {
      selected_img: '',
      timeout:''
    };
  },
  mounted() {
    this.selected_img = this.image_data[0];
if(this.auto_play == true){
this.autoPlay()
setTimeout(()=>{
this.autoPlay
},3000*this.image_data.length-3000)
}
if(this.image_view_type == 'panel'){
          document.querySelectorAll(".slider-image").forEach((i) => {
        i.style.opacity = 0.3;
      });

    document.querySelector(`.img${this.image_data.indexOf(this.selected_img)}`).style.opacity = 1;
}
  },
  methods: {
    chooseImg(img, index) {
      this.selected_img = img;
      document.querySelectorAll(".slider-image").forEach((i) => {
        i.style.opacity = 0.3;
      });

      document.querySelector(`.img${index}`).style.opacity = 1;
    },
    nextImg(){
        if(this.image_data.indexOf(this.selected_img)+1< this.image_data.length){
        this.selected_img = this.image_data[this.image_data.indexOf(this.selected_img)+1]
        document.querySelectorAll(".slider-image").forEach((i) => {
        i.style.opacity = 0.3;
      });
                document.querySelector(`.img${this.image_data.indexOf(this.selected_img)}`).style.opacity = 1;

        if(this.image_data.indexOf(this.selected_img)+1> this.image_data.length-1){
                        this.$refs['right-icon'].style.cursor = "not-allowed"
                        this.$refs['left-icon'].style.cursor = "pointer"
        }
        }
    },
    prevImg(){
        if(this.image_data.indexOf(this.selected_img)> 0){
        this.selected_img = this.image_data[this.image_data.indexOf(this.selected_img)-1]
        document.querySelectorAll(".slider-image").forEach((i) => {
        i.style.opacity = 0.3;
      });
        document.querySelector(`.img${this.image_data.indexOf(this.selected_img)}`).style.opacity = 1;
        if(this.image_data.indexOf(this.selected_img)<= 0){
                        this.$refs['left-icon'].style.cursor = "not-allowed"
                        this.$refs['right-icon'].style.cursor = "pointer"
        }
        }
    },
    autoPlay(){
                // this.interval = setInterval(()=>{
            for(var i in this.image_data){
        ((i)=>{
            this.timeout = setTimeout(()=>{
            this.selected_img = this.image_data[i]
                this.currentImg
                if(this.image_view_type == 'panel'){
            document.querySelectorAll(".slider-image").forEach((i) => {
        i.style.opacity = 0.3;
      });
      if(document.querySelector(`.img${i}`) != undefined){
        document.querySelector(`.img${i}`).style.opacity = 1;
      }
                }
        },3000*i);
    })(i)
}
    // },3000*this.image_data.length)
    },
    currentImg(img){
        this.selected_img = this.image_data[img-1]
    }
  },
};
</script>

