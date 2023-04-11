<template>
    
 <section class="hlx-signup-container">


    <div class="hlx-signup-left-container">
        <div class="left-sec">
            <div class="header-logo">
                <img src="../assets/img/Group_12640.png" alt="">
            </div>
            <div class="img-collage">
                <img src="../assets/img/login_collage.svg" alt="">
            </div>
        </div>

    </div>

    <section class="dividers">
      <section class="dashedline-start"></section>
      <span class="symbol-x">&times;</span>
      <span class="symbol2-x">&times;</span>
      <section class="dashedline-end"></section>
    </section>
    <signupForm />
  </section>
</template>

<script>
import signupForm from './SignupForm.vue';
export default {
name:'hlx-signup',
    components:{
        signupForm,
    },

    
}
</script>

// <style lang="scss" scoped>
// @import '../assets/styles/variables.scss';

// @mixin margin($margin-top:0,$margin-right:0,$margin-down:0,$margin-left:0){
//     margin: $margin-top $margin-right $margin-down $margin-left;
// }
// @mixin flex-prop {
//     display: flex;
//     justify-content: flex-end;
    
// }

// .hlx-signup-container {
//     width: 100%;
//     height: 98%;
//     display: flex;
//     padding: 0;
//     background-color: #fbfbfb;


// &>.hlx-signup-left-container{
//     display: flex;
//     height: 100%;
//     width: 50%;
//     .left-sec{
//         width: 85%;
//         .header-logo{
//             height: 20%;
//             img{
//                 min-width: 190px;
//                 padding: 15px;
//                 width: 65%;
//             }
//         }
//         .img-collage{
//             margin-top: 25px;
//             max-height: 75%;
//             width: 90%;
//             margin-left: 45px;
//             img{
//                 width: 100%;
//             }

//         }
//     }
    
//     }

// &>.dividers{
//     width: 7%;
//     display:flex;
//     flex-direction:column;
    
//     background-color: #fbfbfb;
//     .dashedline-start{
//         height:40%;
//         width:45%;
//         margin:0 12px -40px ;
//         border-right: 1.8px dashed $primary-color;
//     }
//     .symbol-x{
//         color: $primary-color;
//         margin-left: 0;
//         font-family:'Open Sans', 'Helvetica Neue', sans-serif;
//         font-size:xx-large;
//     }
//     .symbol2-x{
//         color:#969393;
//         @include margin(10px,0,0,50%);
//             font-family:'Open Sans', 'Helvetica Neue', sans-serif;
//         font-size:xx-large; 
//     }
//     .dashedline-end{
//         height:58%;
//         margin: -45px 8px;
//         border-left :1.97px dashed $primary-color;
//         width:45%;
//     }
// }

// }

// </style>