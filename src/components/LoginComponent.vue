<template>
    
 <section class="container">
    <div class="modal-container-el1">
    <modal :modalActive="modalstatus"  v-show="modalstatus" @close="closeModal" class="login-modal">
        <template v-slot:header>
            <div class="modal-header">
                <h1>Forgot Password?</h1>
            </div>
        </template>

        <template v-slot:content>
            <div class="modal-content">
                <p>Enter your email ID to get a link to reset your password.</p>
                <div class="modal-input-field">
                    <input type="email" placeholder="Enter email address" class="email">
                    <i class="icon-arrow-line-right" @click="showModalVerification"></i>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <div class="footer">
                <span class="footer-carousel-dot-1"></span>
                <span class="footer-carousel-dot-2"></span>
            </div>
        </template>
    </modal>

    </div>

    <div class="modal-container-el2">
            <modal :modalActive="modalstatus"  v-show="modalstatus" @close="closeModal" >
                <template v-slot:header>
                    <div class="modal-el2-header">
                        <h1>Forgot Password?</h1> 
                    </div>
                </template>
                <template v-slot:content>
                    <div class="modal-el2-content">
                        <img src="../assets/img/verification-mail-sent.png" class="modal-el2-content-img" alt="">
                        <p>Password reset email sent</p>
                    </div>
                </template>
                <template v-slot:footer>
                    <div class="modal-el2-footer">
                        <span class="modal-el2-footer-carousel-dot-1"  @click="hideModalVerification"></span>
                        <span class="modal-el2-footer-carousel-dot-2"></span>
                    </div>
                </template>
            </modal>
        
    </div>
    <div class="modal-container-otp">
        <OTPVerificationModal :modalActive="modalstatus"  v-show="modalstatus" @close="closeModal">

        </OTPVerificationModal>
    </div>

    <div class="modal-container-el3">
    <modal :modalActive="modalstatus"  v-show="modalstatus" @close="closeModal" class="login-modal">
        <template v-slot:header>
            <div class="modal-header">
                <h1>Reset password</h1>
            </div>
        </template>

        <template v-slot:content>
            <div class="el3-modal-content">
                <div class="create-password">
                    <InputComponent :label_animation="true" :label_value="'Create password'" :type="'password'" :clearable="true"/>
                </div>
                <div class="confirm-password">
                    <InputComponent :label_animation="true" :label_value="'Confirm password'" :type="'password'" :clearable="true"/>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <div class="el3-footer">
                <button class="clear">Clear</button>
                <button class="update">Update</button>
            </div>

        </template>
    </modal>

    </div>

    <div class="left-container" @click="this.modalToggle">
        <div class="left-sec">
            <div class="header-logo">
                <img src="../assets/img/Group_12640.png" alt="">
            </div>
            <div class="img-collage">
                <img src="../assets/img/Halleyx-collage-login.svg" alt="">
            </div>
        </div>

    </div>

    <section class="dividers">
      <section class="dashedline-start"></section>
      <span class="symbol-x">&times;</span>
      <span class="symbol2-x">&times;</span>
      <section class="dashedline-end"></section>
    </section>
    <loginForm @modalToggle="showModal"/>
  </section>
</template>

<script>
import loginForm from './LoginForm.vue';
import modal from './LoginModalComponent.vue';
import OTPVerificationModal from './OTPVerificationModal.vue';
import InputComponent from './InputComponent.vue';
export default {

    components:
    {
    loginForm,
    modal,
    OTPVerificationModal,
    InputComponent
},
    data() {
        return {
            modalstatus:false,
            timer: null
        }
    },
    mounted(){
        document.querySelector('.left-panel').style.display = 'none'
        document.querySelector('.right-panel').style.paddingLeft = '0'
        document.querySelector('.header').style.display = 'none'
        document.querySelector('.component-body').style.height = '100vh'
        document.querySelector('.component-body').style.padding = '0'
        document.querySelector('.component-body').style.margin = '0'

    },
    methods:{

        showModalVerification(){
            document.querySelector(".modal-container-el2").style.display="flex";
            
            document.querySelector(".modal-container-el1").style.display="none";

            document.querySelector(".modal-el2-content-img").classList.toggle("shown")
            if(document.querySelector(".modal-el2-content-img").classList.contains("shown")){
                setTimeout(() => {
                    document.querySelector(".modal-container-el2").style.display="none";

                    document.querySelector('.modal-container-otp').style.display="flex"   
                    
                    document.querySelectorAll('.modalContainer').forEach((e,i)=>{
                    
                        if(i==2){
                            e.style.width="350px"
                            e.style.height="385px"
                        }
                        i++
                    })

                }, 2000)
                console.log(document.querySelector(".shown"));
                setTimeout(() => {
                    document.querySelector('.modal-container-otp').style.display="none"   


                    document.querySelector('.modal-container-el3').style.display="flex"   
                    


                }, 7000)


            }
            console.log(document.querySelector(".shown"));

            document.querySelector(".modal-el2-content-img").classList.remove("shown")
            console.log(document.querySelector(".shown"));



        },
        hideModalVerification(){
            document.querySelector(".modal-container-el2").style.display="none";
            document.querySelector(".modal-el2-content-img").classList.toggle("shown")


        },

        showModal(val){
            this.modalstatus=val
            console.log(this.showModal)
            console.log("Trigger:",val)
            document.querySelector('.modal-container-otp').style.display="none"
            document.querySelector(".modal-container-el1").style.display="flex";
            this.isModalVisible = true;


        },
        closeModal(){
            this.modalstatus=false,
            this.isModalVisible = false;
            document.querySelector(".modal-container-el2").style.display="none"


        }
    }
    
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common/var.scss';

i{
    color: #565553;
}

@mixin margin($margin-top:0,$margin-right:0,$margin-down:0,$margin-left:0){
    margin: $margin-top $margin-right $margin-down $margin-left;
}
@mixin flex-prop {
    display: flex;
    justify-content: flex-end;
    
}
*{
    margin: 0;
    padding: 0;
    color: $font-color;
}

// .left-panel{
//     display: none !important;
// }

.modal-container-otp{
    display: none;
}
.container {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0;
    background-color: #fbfbfb;

    
}
.modal-el2-header{
    color: $font-color;
    display: flex;
    height: 95px;
    align-items: center;
    justify-content: center;
    h1{
        font-weight: 50;
    }
}
.modal-el2-content{
    display: flex;
    flex-direction: column;
    /* flex-direction: row-reverse; */
    justify-content: center;
    /* align-content: center; */
    /* align-items: center; */
    width: 100%;
    .modal-el2-content-img{
        width: 178px;
        height: 111px;
        margin-bottom: 15px;
        margin-left: 9px;
        margin-top: -12px;
    }

}
.modal-header{
    color: $font-color;
    display: flex;
    height: 100px;
    align-items: center;
    justify-content: center;
    h1{
        font-weight: 50;
    }
    
}

.el3-modal-content{
    width: 100%;
    .create-password{
        margin-bottom: 15px;
    }


}

.el3-footer{
    height: 100px;
    display: flex;
    width: 100%;
    align-items: center;
    .clear{
        padding: 6px 14px 6px 14px;
        border: none;
        background-color: #ECEEEF;
        color: #A9A9A9;
        height: 40px;
        margin-right: 15px;
    }
    .update{
        padding: 6px 14px 6px 14px;
        border: none;
        background-color: $primary-color;
        color: #565553;
        height: 40px;

    }

}





.footer{
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: center;
    .footer-carousel-dot-1{
        width: 13px;
        height: 13px;
        border-radius: 100%;
        background-color: #f9ac19;
        margin-right: 10px;
        cursor: pointer;
    }
    .footer-carousel-dot-2{
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: #D8D6D3;
        cursor: pointer;

    }
}
.modal-el2-footer{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: 5s;

    &-carousel-dot-1{
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: #D8D6D3;
        cursor: pointer;
    }
    &-carousel-dot-2{
        width: 13px;
        height: 13px;
        border-radius: 100%;
        background-color: #f9ac19;
        margin-left: 10px;
        cursor: pointer;

    }
}
.modal-container-el2{
    display: none;

}
.modal-content{
    width: 250px;
    height: 100px;
    text-align: center;
    color: #A0A0A0;
    // margin: auto;
}
.modal-input-field input[type=email]{
    margin-top: 20px;
    width: 250px;
    display: block;
    height: 40px;
    color: #565553;
    border: none;
    transition: all 0.3s ease;
    padding: 0 15px 0 15px;
    outline: none;
    border-bottom: 1px  solid #D8D6D3;


}
.icon-arrow-line-right{
    font-size: 14px;
    position: relative;
    top: -31px;
    float: right;
    cursor: pointer;

}



.email:focus{
    border: solid 1px $primary-color;
}
.left-container{
    display: flex;
    height: 100%;
    width: 50%;
    padding: 25px 50px;
    .left-sec{
        width: 85%;
        .header-logo{
            height: 20%;
            margin-bottom: 40px;
            img{
                min-width: 190px;
                padding: 15px;
                width: 65%;
            }
        }
        .img-collage{
            margin-top: 25px;
            max-height: 75%;
            width: 90%;
            margin-left: 45px;
            img{
                width: 100%;
            }

        }
    }
    
    }

.dividers{
    width: 7%;
    display:flex;
    flex-direction:column;
    
    background-color: #fbfbfb;
    .dashedline-start{
        height:40%;
        width:45%;
        margin:0 12px -40px ;
        border-right: 1.8px dashed $primary-color;
    }
    .symbol-x{
        color: $primary-color;
        margin-left: 0;
        font-family:'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:xx-large;
    }
    .symbol2-x{
        color:#969393;
        @include margin(10px,0,0,50%);
            font-family:'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:xx-large; 
    }
    .dashedline-end{
        height:58%;
        margin: -45px 8px;
        border-left :1.97px dashed $primary-color;
        width:45%;
    }
}

.modal-container-el3{
    display: none;
}

</style>