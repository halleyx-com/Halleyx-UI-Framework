<template>
    <div class="switch-containerr-regular" :id="'switch-containerr-regular'+this.unique" v-if="this.type == 'regular'">
    <div class="switch-item-regular" :id="'switch-regular' + index + this.unique" v-for="(i, index) in this.switch_items" :key="index" :style="[index != 0 ? 'border-top-left-radius: 0px;border-bottom-left-radius: 0px':'']" :class="{noborder:index === this.switch_items.length-1, border:index !== this.switch_items.length-1}" @click="select(index, i.name)">
      <label class="content-regular" :for="'radio-regular' + index + this.unique" :data="i.name">
        <input type="radio" :id="'radio-regular' + index + this.unique" :name="'radio-regular' + this.unique" v-model="i.name" :value="i.name" />
        <i v-if="i.icon != undefined && i.icon != ''" :class="i.icon"></i>{{ i.name }}
      </label>
    </div>
  </div>
  <div class="switch-containerr-tab-top" :id="'switch-containerr-tab-top'+this.unique" v-if="this.type == 'tab' && this.position == 'top'">
    <div class="switch-item-tab-top"  :id="'switch-tab-top'+index+this.unique" v-for="(i,index) in this.switch_items" :key="index"   @click="select(index,i.name)">
      <label class="content-tab-top" :for="'radio-tab-top' + index + this.unique" :data="i.name">
        <input type="radio" :id="'radio-tab-top' + index + this.unique" :name="'radio-tab-top' + this.unique" v-model="i.name" :value="i.name" />
        <i v-if="i.icon!=undefined && i.icon!=''" :class="i.icon"></i>{{ i.name }}
      </label>
      </div>
  </div>
  <div class="switch-containerr-tab-bottom" :id="'switch-containerr-tab-bottom'+this.unique" v-if="this.type == 'tab' && this.position == 'bottom'">
    <!-- <div class="switch-item" v-for="(i,index) in this.switch_items" :key="index" :style="'width:' + this.width/this.switch_items.length + 'px'" :class="[index == this.switch_items.length-1 ? 'noborder': 'border']" :id="'switch'+index" @click="select(index,i.name)"><div class="content"><i v-if="i.icon!=undefined && i.icon!=''" :class="i.icon"></i>{{ i.name }}</div></div> -->
    <div class="switch-item-tab-bottom"  :id="'switch-tab-bottom'+index+this.unique" v-for="(i,index) in this.switch_items" :key="index"   @click="select(index,i.name)">
      <label class="content-tab-bottom" :for="'radio-tab-bottom' + index + this.unique" :data="i.name">
        <input type="radio" :id="'radio-tab-bottom' + index + this.unique" :name="'radio-tab-bottom' + this.unique" v-model="i.name" :value="i.name" />

        <i v-if="i.icon!=undefined && i.icon!=''" :class="i.icon"></i>{{ i.name }}
      </label>
      </div>
  </div>
</template>

<script>
export default {
    name:'hlx-switch',
    emits:["chosen",'update:value'],
    props: {
    type: {
      type: String,
      default: () => "regular",
    },
    position: {
      type: String,
      default: () => "bottom",
    },
    switch_items: {
      type: Array,
      default: () =>[],
    },
  },
  data() {
    return {
      selected:"",
      width: 0,
      unique: Math.floor(Math.random()*1000+1)

    };
  },
  mounted() {
    if(this.type == 'regular'){
    var indexx = this.switch_items.findIndex(x => x.checked == true);
if(indexx != -1 && indexx != undefined){
  document.querySelector('#switch-regular'+indexx+this.unique).classList.add('selected-switch-regular')
  document.querySelector('#switch-regular'+indexx+this.unique).classList.add('selected-item-regular'+this.unique)
  this.$emit('chosen',this.switch_items[indexx].name)
  this.$emit("update:value",this.switch_items[indexx].name );
}else{
  document.querySelector('#switch-regular0'+this.unique).classList.add('selected-switch-regular')
  document.querySelector('#switch-regular0'+this.unique).classList.add('selected-item-regular'+this.unique)
  this.$emit('chosen',this.switch_items[0].name)
  this.$emit("update:value",this.switch_items[0].name );

}
    }else if(this.type == 'tab' && this.position == 'top'){
      var indexx = this.switch_items.findIndex(x => x.checked == true);
if(indexx != -1 && indexx != undefined){
  document.querySelector('#switch-tab-top'+indexx+this.unique).classList.add('selected-switch-tab-top')
  document.querySelector('#switch-tab-top'+indexx+this.unique).classList.add('selected-item-tab-top'+this.unique)
  this.$emit('chosen',this.switch_items[indexx].name)
  this.$emit("update:value",this.switch_items[indexx].name );

}else{
  document.querySelector('#switch-tab-top0'+this.unique).classList.add('selected-switch-tab-top')
  document.querySelector('#switch-tab-top0'+this.unique).classList.add('selected-item-tab-top'+this.unique)
  this.$emit('chosen',this.switch_items[0].name)
  this.$emit("update:value",this.switch_items[indexx].name );

}
    }
    else if(this.type == 'tab' && this.position == 'bottom'){
      var indexx = this.switch_items.findIndex(x => x.checked == true);
if(indexx != -1 && indexx != undefined){
  document.querySelector('#switch-tab-bottom'+indexx+this.unique).classList.add('selected-switch-tab-bottom')
  document.querySelector('#switch-tab-bottom'+indexx+this.unique).classList.add('selected-item-tab-bottom'+this.unique)
}else{
  document.querySelector('#switch-tab-bottom0'+this.unique).classList.add('selected-switch-tab-bottom')
  document.querySelector('#switch-tab-bottom0'+this.unique).classList.add('selected-item-tab-bottom'+this.unique)
  this.$emit('chosen',this.switch_items[0].name)
  this.$emit("update:value",this.switch_items[indexx].name );

}
    }
  },
  methods:{
    select(index,name){
      if(this.type == 'regular'){
      this.selected = name;
      this.$emit("chosen", name);
      this.$emit("update:value", name);
      document.querySelectorAll('.selected-item-regular'+this.unique).forEach((d)=>{
        d.classList.remove('selected-switch-regular')
      })
      document.querySelector('.selected-item-regular'+this.unique).classList.remove('.selected-item-regular'+this.unique)
      document.querySelector('#switch-regular'+index+this.unique).classList.add('selected-switch-regular')
  document.querySelector('#switch-regular'+index+this.unique).classList.add('selected-item-regular'+this.unique)
  
    }
    else if(this.type == 'tab' && this.position == 'top'){
      document.querySelectorAll('.selected-item-tab-top'+this.unique).forEach((d)=>{
        d.classList.remove('selected-switch-tab-top')
      })
      document.querySelector('.selected-item-tab-top'+this.unique).classList.remove('.selected-item-tab-top'+this.unique)
      document.querySelector('#switch-tab-top'+index+this.unique).classList.add('selected-switch-tab-top')
  document.querySelector('#switch-tab-top'+index+this.unique).classList.add('selected-item-tab-top'+this.unique)
        this.$emit('chosen',name)
    }
    else if(this.type == 'tab' && this.position == 'bottom'){
      document.querySelectorAll('.selected-item-tab-bottom'+this.unique).forEach((d)=>{
        // console.log("hii");
        d.classList.remove('selected-switch-tab-bottom')
      })
      // document.querySelector('.selected-item-tab-bottom'+this.unique).classList.remove('.selected-item-tab-bottom'+this.unique)
      document.querySelector('#switch-tab-bottom'+index+this.unique).classList.add('selected-switch-tab-bottom')
  document.querySelector('#switch-tab-bottom'+index+this.unique).classList.add('selected-item-tab-bottom'+this.unique)
        this.$emit('chosen',name)
    }
  }
  }
};
</script>

<style lang="scss" scoped>

</style>
