<!-- eslint-disable eqeqeq -->
<template>
    <div class="color-palette-container">
        <div class="color-palette-icon">
            <i class="icon-palette-regular" v-if="this.fill_color == true"></i>
            <div v-if="this.highlightcolor === true" class="highlight-container">
            <p class="highlight-icon" v-if="this.highlightcolor === true">A</p>
            <!-- <div class="higlight-icon-border" v-if="this.highlightcolor === true"></div> -->
            </div>
            <div class="color-icon-border" :style="{background:this.colorvalue}"></div>
        </div>
        <button aria-dis class="color-palette-open-icon" @click="colorpalette"><i class="icon-angle-down-regular"></i></button>
        <button class="color-container" v-if="this.colorcontainer === true">
          <p class="color-container-title">Theme Colors</p>
          <button class="color-container-specific-color">
              <button class="color-container-specific-color-checkbox-border" v-for="(i,index) in this.colordata" :key="index" @click="getcolor">
                <button class="color-container-specific-color-checkbox-border-fill-color" :style="{background:Object.keys(this.colordata[index])[0]}"></button>
              </button>
          </button>
          <button class="color-container-specific-color1">
            <button class="color-container-specific-color1-container" v-for="(i,index) in this.colordata" :key="index" @click="getcolor">
                <button class="color-container-specific-color-checkbox-border" v-for="(j,col_index) in Object.values(this.colordata[index])[0].length" :key="col_index">
                <button class="color-container-specific-color-checkbox-border-fill-color" :style="{background:(Object.values(this.colordata[index])[0])[col_index]}"></button>
              </button>
            </button>
          </button>
          <p class="color-container-title">Standard Colors</p>
          <button class="color-container-specific-color">
              <button class="color-container-specific-color-checkbox-border" v-for="(k,k_index) in this.standardcolor" :key="k_index" @click="getcolor">
                <button class="color-container-specific-color-checkbox-border-fill-color" :style="{background:this.standardcolor[k_index]}"></button>
              </button>
          </button>
          <button class="color-container2323">
          <input type="color" id="favcolor" name="favcolor" :value="this.recentvalue" class="favcolor" @change="getcolorvalue">
          <p class="color-container-title" @click="colorpicker">More Colors</p>
          </button>
          <p class="color-container-title" v-if="this.recent === true">Recent color</p>
          <button class="color-container-specific-color2">
            <button class="color-container-specific-color-checkbox-border" v-for="(k,j_index) in this.recentcolor" :key="j_index" @click="getcolor">
                <button class="color-container-specific-color-checkbox-border-fill-color" :style="{background:this.recentcolor[j_index]}"></button>
              </button>
          </button>
        </button>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default ({
  name: 'hlx-color-palette',
  props: ['highlightcolor'],
  data () {
    return {
      colorcontainer: false,
      fill_color: true,
      colorvalue: '#000000',
      recent: false,
      recentvalue: '',
      recentcolor: [],
      colordata: [{ '#ffffff': ['#f2f2f2', '#d9d9d9', '#bfbfbf', '#a6a6a6', '#808080'] },
        { '#000000': ['#808080', '#595959', '#404040', '#262626', '#0d0d0d'] },
        { '#e7e6e6': ['#d0cece', '#aeaaaa', '#757171', '#3a3838', '#161616'] },
        { '#44546a': ['#d6dce4', '#acb9ca', '#8497b0', '#333f4f', '#222b35'] },
        { '#4472c4': ['#d9e1f2', '#b4c6e7', '#8ea9db', '#305496', '#203764'] },
        { '#ed7d31': ['#fce4d6', '#f8cbad', '#f4b084', '#c65911', '#833c0c'] },
        { '#a5a5a5': ['#ededed', '#dbdbdb', '#c9c9c9', '#7b7b7b', '#525252'] },
        { '#ffc000': ['#fff2cc', '#ffe699', '#ffd966', '#bf8f00', '#806000'] },
        { '#5b9bd5': ['#ddebf7', '#bdd7ee', '#9bc2e6', '#2f75b5', '#1f4e78'] },
        { '#70ad47': ['#e2efda', '#c6e0b4', '#a9d08e', '#548235', '#375623'] }],
      //  parentcolor:['#ffffff','#000000','#e7e6e6','#44546a','#4472c4','#ed7d31','#a5a5a5','#ffc000','#5b9bd5','#70ad47'],
      standardcolor: ['#c00000', '#ff0000', '#ffc000', '#ffff00', '#92d050', '#00b050', '#00b0f0', '#0070c0', '#002060', '#7030a0'],
      colorpick: ''
    }
  },
  mounted () {
    if (this.highlightcolor === true) {
      this.fill_color = false
    } else {
      this.fill_color = true
    }
    // console.log(this.colordata);
    for (let i = 0; i < this.colordata.length; i++) {
      // console.log(Object.keys(this.colordata[i])[0],'birds');
      // console.log(Object.values(this.colordata[i])[0]);
      for (let j = 0; j < Object.values(this.colordata[i])[0].length; j++) {
        // console.log((Object.values(this.colordata[i])[0])[j],'dei');
      }
    }
    document.addEventListener('click', (e) => {
      if (e.target.className != 'color-container' && e.target.className != 'color-container-title' && e.target.className != 'color-container-specific-color-checkbox-border' && e.target.className != 'color-container-specific-color-checkbox-border-fill-color' && e.target.className != 'color-container-specific-color' && e.target.className != 'color-container-specific-color1' && e.target.className != 'color-container-specific-color2' && e.target.className != 'color-container-specific-color1-container' && e.target.className != 'color-container2323' && e.target.className != 'favcolor' && e.target.className != 'color-palette-container' && e.target.className != 'color-palette-icon' && e.target.className != 'icon-color-fill' && e.target.className != 'color-icon-border' && e.target.className != 'color-palette-open-icon' && e.target.className != 'icon-angle-down-regular') {
        this.colorcontainer = false
      }
    })
  },
  methods: {
    getcolorvalue (event) {
      this.recent = true
      this.colorvalue = event.target.value
      this.$emit('customChange', this.colorvalue)
      // console.log(this.recentcolor);
      if (this.recentcolor.includes(this.colorvalue) != true) {
        document.querySelectorAll('.color-container-specific-color-checkbox-border').forEach((e) => {
          e.classList.remove('add-border')
        })
        this.recentvalue = this.colorvalue
        this.recentcolor.push(this.colorvalue)
        // let a = document.createElement('div')
        //  a.classList.add('color-container-specific-color-checkbox-border')
        //  a.classList.add('add-border')
        //  let b = document.createElement('div')
        //  b.classList.add('color-container-specific-color-checkbox-border-fill-color')
        //  a.appendChild(b)
        //  b.style.background = this.colorvalue
        //  document.querySelector('.color-container-specific-color2').appendChild(a)
      }
    },
    getcolor (event) {
      document.querySelectorAll('.color-container-specific-color-checkbox-border').forEach((e) => {
        e.classList.remove('add-border')
      })
      if (event.target.className === 'color-container-specific-color-checkbox-border-fill-color') {
        this.colorvalue = event.target.style.background
        this.$emit('customChange', this.colorvalue)
        event.target.parentElement.classList.add('add-border')
        this.colorcontainer = false
      } else if (event.target.className === 'color-container-specific-color-checkbox-border') {
        this.colorvalue = event.target.children[0].style.background
        this.$emit('customChange', this.colorvalue)
        event.target.classList.add('add-border')
        this.colorcontainer = false
      }
      this.recent = true
      // this.colorvalue = event.target.value
      // this.$emit('customChange', this.colorvalue )
      // console.log(this.recentcolor);
      if (this.recentcolor.includes(this.colorvalue) != true) {
        document.querySelectorAll('.color-container-specific-color-checkbox-border').forEach((e) => {
          e.classList.remove('add-border')
        })

        this.recentvalue = this.colorvalue
        this.recentcolor.push(this.colorvalue)
      }
      //  console.log(this.colorvalue);
    },
    colorpalette () {
      if (this.colorcontainer === false) {
        this.colorcontainer = true
      } else if (this.colorcontainer === true) {
        this.colorcontainer = false
      }
    },
    colorpicker () {
      this.colorpick = true
    }
  }

})
</script>
