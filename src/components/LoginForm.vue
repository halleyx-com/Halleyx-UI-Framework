<template>
    <div class="right-container">

                    <form  class="login-form">
                          <div class="sign-in-text">
                                <h2>Sign in</h2>
                          </div>
                          <InputComponent :label_animation="true" :label_value="'Email'" :type="'email'" :clearable="true"/>
                          <InputComponent :label_animation="true" :label_value="'Password'" :type="'password'" :clearable="true"/>
                          <div class="forgot-pssword" @click="toggleModal" >Forgot password?</div>
                          <button type="submit">Sign in</button>
                          <button>Sign in using SSO</button>
                          <div class="quotes-container"><span class="black-frame">Not a member yet?<a href="/signup" class="signup-text"> Sign up</a> now</span></div>
                    </form>
    </div>
</template>

<script>
import InputComponent from './InputComponent.vue'
    export default {
        components:{
            InputComponent
        },  
        data() {
            return {
                modalActive:false
            }
        },
        methods:{
            toggleModal(){
                this.$emit('modalToggle',!this.modalActive)
                console.log(this.modalActive,"form")
            }
        },
        mounted () {
            
        }

    }
</script>

<style lang="scss" scoped>
@import '../assets/styles/common/var.scss';



.right-container{
    background-color: #FFFFFF;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
            .login-form{

                width: 400px;
                .sign-in-text{
                    display: flex;
                    width: 100%;
                    justify-content: flex-start;
                h2{
                    color: $font-color;
                    font-weight: lighter;
                    margin-bottom: 15px;
                    font-size: 18px;
                }
                }
                .forgot-pssword{
                    color: $font-color;
                    font-size: 14px;
                    margin-bottom: 15px;
                    float: right;
                    cursor: pointer;
                    &:hover{
                        color: $primary-color;
                    }

                }
                .quotes-container{
                    font-size: 14px;
                    .black-frame{
                        color: $font-color;
                        .signup-text{
                            text-decoration: none;
                            cursor: pointer;
                            color: $primary-color;

                        }

                    }

                }
    
                button{
                    width:100% ;
                    border-radius: 4px;
                    border: none;
                    margin-bottom: 15px;
                    padding: 10px 24px 10px 24px;
                    color: #565553;
                    background-color: #F9AC19;
                }
                button:hover{
                    background-color: #FFF1D3;
                    color: #F9AC19;
                }
 
            }
        

    
}
*,
*:focus {
  outline: none
}



</style>