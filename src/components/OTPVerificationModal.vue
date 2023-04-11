<template>
  <div>
        <div class="modal-backdrop" v-show="modalActive" @click="closing">
            <div class="modalContainer">
                <div class="modal" >
                    <!-- <button class="close-btn" @click="$emit('close')" >X</button> -->
                    <h1>OTP Verification</h1>

                        <div
                                class="icon-x"
                                @click="
                                (this.resetpasswordotp = false),
                                    (this.otpdigit1 = ''),
                                    (this.otpdigit2 = ''),
                                    (this.otpdigit3 = ''),
                                    (this.otpdigit4 = ''),
                                    (this.resetpasswordemail = ''),
                                    (this.valid_password_otp = false),
                                    (this.invalid_password_otp = false),
                                    clearTimeout(this.myTimeout),
                                    (this.timer = '02:00')
                                "
                            ></div>
                            <p class="modal-title">
                                Enter the verification code we<br />just sent to
                            </p>

                            <span class="modal-activate-gmail"
                                >{{ this.resetpasswordemail }}<br />
                                <p class="modal-activate-verify"></p>
                                <p class="modal-activate-code" v-if="this.timer != '00:00'">
                                Your OTP will expire in {{ this.timer }}s
                                </p>
                                <p
                                class="modal-activate-code"
                                v-if="this.timer == '00:00'"
                                style="color: red"
                                >
                                Your OTP has expired
                                </p>
                            </span>
                            <div class="modal-activate-otp">
                                <div class="userInput">
                                <input
                                    type="text"
                                    id="ist"
                                    maxlength="1"
                                    @keypress="validateNumber"
                                    v-model="otpdigit1"
                                    autocomplete="off"
                                    @keyup="clickEvent(otpdigit1, 'ist', 'sec', 'ist')"
                                />
                                <input
                                    type="text"
                                    id="sec"
                                    maxlength="1"
                                    @keypress="validateNumber"
                                    v-model="otpdigit2"
                                    autocomplete="off"
                                    @keyup="clickEvent(otpdigit2, 'sec', 'third', 'ist')"
                                />
                                <input
                                    type="text"
                                    id="third"
                                    maxlength="1"
                                    @keypress="validateNumber"
                                    v-model="otpdigit3"
                                    autocomplete="off"
                                    @keyup="clickEvent(otpdigit3, 'third', 'fourth', 'sec')"
                                />
                                <input
                                    type="text"
                                    id="fourth"
                                    maxlength="1"
                                    @keypress="validateNumber"
                                    v-model="otpdigit4"
                                    autocomplete="off"
                                    @keyup="clickEvent(otpdigit4, 'fourth', 'fourth', 'third')"
                                />
                                </div>
                                <i class="icon-pill-check" v-if="this.valid_password_otp == true"></i>
                                <i
                                class="icon-pill-x"
                                v-else-if="this.invalid_password_otp == true"
                                style="color: red"
                                ></i>
                                <i class="" v-else></i>
                            </div>
                            <div class="modal-activate-resend">
                                Haven't received code yet? <a @click="recieveOtp()">Resend</a><br /><a
                                @click="useDifferentEmail()"
                                >Use different email address</a
                                >
                            </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props:["modalActive"],
        data() {
            return {
                minute: 1,
                seconds: 60,
                valid_password_otp: false,
                invalid_password_otp: false,
                timer: "02:00",
                otpdigit1: "",
                otpdigit2: "",
                otpdigit3: "",
                otpdigit4: "",
            }
        },  
        methods: {
                async recieveOtp() {
                    this.otpdigit1 = "";
                    this.otpdigit2 = "";
                    this.otpdigit3 = "";
                    this.otpdigit4 = "";
                    this.valid_password_otp = false;
                    this.invalid_password_otp = false;
                    clearTimeout(this.myTimeout), (this.timer = "02:00");
                    if (this.validemail == true) {
                        await this.sendVerification(this.resetpasswordemail, "reset password");
                        this.forgotpassword = false; // forgot passowrd email modal
                        this.resetpasswordotp = true; // reset password modal
                        setTimeout(() => {
                        document.getElementById("ist").focus();
                        }, 100 / 8);
                        this.startTimer();
                    }
                    },

                startTimer() {
                    var presentTime = this.timer;
                    var timeArray = presentTime.split(/[:]+/);
                    var m = timeArray[0];
                    var s = this.checkSecond(timeArray[1] - 1);
                    if (s == 59) {
                        m = m - 1;
                    }
                    if ((m + "").length == 1) {
                        m = "0" + m;
                    }
                    if (m < 0) {
                        m = "59";
                    }
                    this.timer = m + ":" + s;
                    this.myTimeout = setTimeout(this.startTimer, 1000);
                    //   console.log(this.myTimeout);
                    if (this.timer == "00:00") {
                        clearTimeout(this.myTimeout);
                    }
                },

                 async recieveOtp2() {
                    this.otpdigit1 = "";
                    this.otpdigit2 = "";
                    this.otpdigit3 = "";
                    this.otpdigit4 = "";
                    this.valid_password_otp = false;
                    this.invalid_password_otp = false;
                    clearTimeout(this.myTimeout), (this.timer = "02:00");
                    if (this.validsignupemail == true) {
                        const user_check = await axios.post(this.fet + "/auth/is_exist", {
                        email: this.signupemail,
                        });
                        console.log(user_check);
                        if (user_check.data.existing_user !== true) {
                        this.existing_user = false;
                        await this.sendVerification(
                            this.signupemail,
                            "Email verification for account"
                        );
                        } else {
                        this.existing_user = true;
                        console.log("user already exists");
                        this.userAlreadyExists();
                        }
                        setTimeout(() => {
                        if (document.getElementById("ist")) {
                            document.getElementById("ist").focus();
                            this.startTimer();
                        }
                        }, 100 / 8);
                    } else {
                        // this.invalidEmail()
                    }
                                    },
                    
                    clickEvent(num, current, last, prev) {
                    if (num) {
                        document.getElementById(last).focus();
                        this.cur = true;
                    } else if (num == "" && this.cur == false) {
                        document.getElementById(prev).focus();
                        this.cur = true;
                    } else if (num == "") {
                        this.cur = true;
                        document.getElementById(current).focus();
                        this.cur = false;
                    }
                    if (current == "fourth") {
                        setTimeout(() => {
                        this.changePassword();
                        }, 1000);
                    }
                    },
                    clickEvent1(num, current, last, prev) {
                    if (num) {
                        document.getElementById(last).focus();
                        this.cur = true;
                    } else if (num == "" && this.cur == false) {
                        document.getElementById(prev).focus();
                        this.cur = true;
                    } else if (num == "") {
                        this.cur = true;
                        document.getElementById(current).focus();
                        this.cur = false;
                    }
                    if (current == "fourth") {
                        setTimeout(() => {
                        this.signupForm();
                        }, 1000);
                    }
                    },
                    useDifferentEmail() {
                    this.resetpasswordemail = "";
                    this.otpdigit1 = "";
                    this.otpdigit2 = "";
                    this.otpdigit3 = "";
                    this.otpdigit4 = "";
                    this.forgotpassword = true;
                    this.resetpasswordotp = false;
                    clearTimeout(this.myTimeout);
                    this.timer = "02:00";
                    (this.valid_password_otp = false), (this.invalid_password_otp = false);
                    },
                    useDifferentEmail2() {
                    (this.validsignupemail = false),
                        (this.signupemail = ""),
                        (this.otpdigit1 = ""),
                        (this.otpdigit2 = ""),
                        (this.otpdigit3 = ""),
                        (this.otpdigit4 = ""),
                        clearTimeout(this.myTimeout);
                    this.timer = "02:00";
                    (this.valid_password_otp = false), (this.invalid_password_otp = false);
                    },
 
            closing(event){
                console.log(event.target.className);
                if(event.target.className == "modal-backdrop"){
                    this.$emit('close');
                    console.log(this.modalActive);
                }
            }
        },
    }

</script>

<style lang="scss" scoped>
@import '../assets/styles/common/var.scss';

@mixin flex($direction:row,$wrap:nowrap,$justify-content:flex-start) {
    display: flex;
    flex-flow: $direction $wrap;
    justify-content: $justify-content;
}

@mixin margin($margin-top:0,$margin-right:0,$margin-down:0,$margin-left:0){
    margin: $margin-top $margin-right $margin-down $margin-left;
}

@mixin font($font:'Open Sans',$size:14px,$color:#222831){
    font-family: $font;
    font-size: $size;
    color: $color;
    // font-weight: $weight;
}

.icon-x{
    float: right;
    @include flex(row,nowrap,flex-end);
    // width:100%;
    margin-left: 95%;
    font-size: 12px;
    font-weight: bold;
    cursor:pointer;
    font-family: 'Quicksand';
}
.modal-backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 25;

}
.modalContainer{
    width: 400px;
    height: 300px;

}
.modal{
    background: #ffff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    overflow-x: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 15px;
}

.modal{
    background: #ffff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    overflow-x: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    text-align: center;
    justify-content: center;
    h1{
        font-weight: lighter;
        color: $font-color;
        padding-bottom: 20px;
    }
        p,h4{
            // font-family: 'Open Sans';
            @include margin(8px,0,8px,0); 
          }
        .icon-x{
            float: right;
            @include flex(row,nowrap,flex-end);
            // width:100%;
            margin-left: 95%;
            font-size: 12px;
            font-weight: bold;
            cursor:pointer;
            font-family: 'Quicksand';
        }
        &-input{
            position: relative;
            @include flex(row,nowrap,center);
             width:100%;
             height:30px;
             border:1px solid $border-color;
             border-radius: 5px;
             @include margin(10px,0,10px,0);
            input{
                font-family: 'Open Sans';
                caret-color: $secondary-color;
               width:100%;
               border:none;
               padding:5px;
               @include margin(5px,0,5px,0);
               &:focus{
                outline: none;
            }
            }
            label{
                position: absolute;
                font-size: 12px;
                left: 9px;
                top:6px;
                color:darkgrey;
                transform-origin:0 0;
                transition: transform 0.2s ease-in-out;
            }
            input:focus + label, input:valid + label{
                transform: translateY(-1.1em) scale(0.8);
                background-color: white;
                padding: 0 4px;
                color:$primary-color;
            }
            input::placeholder{
                color: transparent;
            }
        }
        &-title{
            @include font('Quicksand',18px,#393E46);
            width:100%;
        }
        &-activate-verify{
            @include font('Open Sans',12px,#2B3A47);
        }
        &-activate-gmail{
            @include font('Open Sans',12px,$primary-color);
        }
        &-activate-code{
            @include font('Open Sans',12px,#ACACAC)
        }
        .userInput input{
            display:inline-block;
            width:30px;
            height:30px;
            text-align:center;
            margin-left: 10px;
            margin-right: 10px;
            border:none;
            border-bottom: 1px solid black;
            outline:none;   
            &:focus{
                border-bottom: 1px solid $primary-color;

            }
          }
        &-activate-otp{
            // margin-top: -30px;
            // height: 30px;
            // background-color: aqua;
            margin-left: 2px;
            @include flex(row,nowrap,space-around);
            align-items: center;
            &-number{
                width:20px;
                border-bottom: 1px solid black;
                 margin:0 0px 0 24px;
                 padding:5px;  
                 
                 &:hover{
                     border-bottom: 1px solid $primary-color;
                 }
                 &:focus{
                    border-bottom: 1px solid $primary-color;
                 }
                input{
                    width:100%;
                   border:none;
                   @include flex(row,nowrap,center);
                   &:focus{
                       border:none;
                       outline:none;
                   }
                }
 
            }
            i{
                color:rgb(13, 153, 13);
                // margin-top:10px;
            }
        }
        &-activate-resend {
            @include margin(30px,0,0,0);
            color:#ACACAC;
            font-size: 12px;
            line-height: 1.8;
            font-family: 'Open Sans';
            a{
                color:$primary-color;
                cursor: pointer;
            }
        }
    }
// .close{
//     display: none;
// }

</style>