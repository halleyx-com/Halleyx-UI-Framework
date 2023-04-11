<template>
<div class="body">
<h1 style="margin-bottom:40px">Introduction</h1>

<p style="margin-bottom:10px"><b>Hey there! We are excited to introduce our latest adventure - Halleyx UI Framework.</b> </p><br>
<ul>
<li style="margin-left:20px;font-size:14px">Halleyx is a UI component framework completely designed by and for developers using Vuejs.</li><br>
  <li style="margin-left:20px;font-size:14px">We made this framework from scratch, so it's suitable for all types of developers - whether you're a frontend lover or a backend developer. </li><br>

<li style="margin-left:20px;font-size:14px">We believe that a programmer can save some time if they find a library that works as desired and does not have to change its structure in accordance with the project.</li> <br>

<li style="margin-left:20px;font-size:14px">Our main goal is to make programming less tedious by providing fully-built and customizable components that are simple to integrate.</li><br> 
<li style="margin-left:20px;font-size:14px">Big things comes in small packages. We have created 100+ flexible, modular components that accelerate development time and simplify the process of  creating<span style="margin-top:20px"> visually stunning projects, without compromising the developer's independence and personalization

So start designing with ease!</span></li></ul>
</div>

</template>
<style lang="scss" scoped>
@import '../assets/styles/common/var.scss';

// .body{
//     /* margin-top: 50px; */
//     display: flex;
//     height: 100%;
//     width: 100%;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     img{
//       // margin-left: -90px;
//     }
//     h1{
//       // margin-left: -90px;
//       margin-bottom: 30px;
//       font-family: QuickSand;
//     }
//     p{
//       text-align: center;
//     }
// }
</style>

<script>
import { ref } from 'vue'

export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      value: ref(''),
      options: [
        {
          value: 'HTML',
          label: 'HTML'
        },
        {
          value: 'CSS',
          label: 'CSS'
        },
        {
          value: 'JavaScript',
          label: 'JavaScript'
        }
      ]
    }
  }
}
</script>
