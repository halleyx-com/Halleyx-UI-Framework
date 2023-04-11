<template>
  <div class="speed-dial" v-if="this.direction == 'vertical'">
  <div class="toggle circle" @click="func()"><i :class="this.speed_dial_data.parent_icon" class="ic"></i></div>
  <ul class="dials">
    <li v-for="(i,index) in this.speed_dial_data.children_icon" :key="index"> <div class="circle ico" @click="this.$emit('iconChosen',i)"><i :class="i"></i></div></li>
  </ul>
</div>
  <div class="speed-dial-horizontal" v-if="this.direction == 'horizontal'">
  <div class="toggle circle" @click="func()"><i :class="this.speed_dial_data.parent_icon" class="ic"></i></div>
  <ul class="dials">
    <li v-for="(i,index) in this.speed_dial_data.children_icon" :key="index"> <div class="circle ico" @click="this.$emit('iconChosen',i)"><i :class="i"></i></div></li>
  </ul>
</div>
</template>

<script>
export default {
  name:'hlx-speed-dial',
    props:['speed_dial_data', 'direction'],
    data(){
        return{

        }
    },
    methods:{
        // func(){
             
        //     document.querySelectorAll('.circle').forEach((c)=>{
        //         if(c.parentElement.parentElement.className == 'dials'){
        //             c.style.animation = 'animation: pop-in .3s ease both;'
        //         }
        //     })
        //             console.log(document.querySelector('.toggle').style.background);
        // }
    }

}
</script>

