<template>
    <div class="options-container" v-show="this.show">
    <div v-for="(i, index) in this.options" :key="index" class="option" :id="'option'+index" @click="select(index,i.label)"><i :class="i.icon" style="margin-right:8px" v-if="i.icon != undefined && i.icon != ''"></i><span>{{ i.label }}</span></div>
  </div>
</template>

<script>
export default {
    name:'hlx-context-menu',
    props:{
        show:{
            type:Boolean,
            default: false           
        },
        options:{
            type: Array
        },
        data:{
           type: String,
        }
    },

  data() {
    return {

    };
  },
  mounted(){
    var indexx = this.options.findIndex(x => x.checked == true);
if(indexx != -1 && indexx != undefined){
    this.select(indexx, this.options[indexx]["label"])
}
  },

  methods:{
    select(index,name){
        
        document.querySelectorAll('.option').forEach((d)=>{
            if(d.classList.contains('selected-context-menu')){
                d.classList.remove('selected-context-menu')
            }
        })
        document.querySelector(`#option${index}`).classList.add('selected-context-menu')
        // console.log(document.querySelector(".options-container").style.display);
         if(this.data != null && this.data != '')
         {
             this.$emit('chosen',name,this.data)
         }
         else{
             this.$emit('chosen',name)
         }
    }
  }
};
</script>


