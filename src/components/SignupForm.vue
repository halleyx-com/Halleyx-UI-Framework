<template>
    <div class="right-container-signup">

                    <form  class="login-form">
                          <div class="sign-in-text">
                                <h2>Sign up</h2>
                          </div>
                           <div style="margin-bottom:20px;"><InputComponent :label_animation="true" :label_value="'First name'" :type="'text'" :clearable="true" style="height:20px"/></div>
                           <div style="margin-bottom:20px;"> <InputComponent :label_animation="true" :label_value="'Middle name'" :type="'text'" :clearable="true"/></div>
                           <div style="margin-bottom:20px;"> <InputComponent :label_animation="true" :label_value="'Last name'" :type="'text'" :clearable="true"/></div>
                           <div style="margin-bottom:20px;"> <InputComponent :label_animation="true" :label_value="'Phone Number'" :type="'text'" :clearable="true"/></div>





                        <div style="margin-bottom:20px;"><InputComponent :label_animation="true" :label_value="'Email'" :type="'email'" :clearable="true"/></div>
                        <div class="create-password" style="margin-bottom:20px">
                            <InputComponent :label_animation="true" :label_value="'Create password'" :type="'password'" :clearable="true"/>
                        </div>
                        <div class="confirm-password" style="margin-bottom:20px">
                            <InputComponent :label_animation="true" :label_value="'Confirm password'" :type="'password'" :clearable="true"/>
                        </div>
                          <button type="submit">Create account</button>
                    </form>
    </div>
</template>

<script>
import InputComponent from './InputComponent.vue'

    export default {
        components:{
            InputComponent
        },  


    }
</script>

