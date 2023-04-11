<template>
  <!-- <div> -->
        <div class="modal-backdrop" v-show="modalActive" @click="closemodal">
            <div :class="'hlx-modal-container'" :style="{ height:this.modal_height,width:this.modal_width}">
                <div class="modal" >
                    <header v-if="this.modal == true">
                        <div class="header-slot">
                        <slot name="header">
                        </slot>
                        </div>
                            <i class="icon-times-regular" @click="closemodal" v-if="this.closeicon === true"></i>
                    </header>
                    <main v-if="this.modal == true">
                        <slot name="content"></slot>
                    </main>
                    <footer v-if="this.modal == true">
                        <slot name="footer"></slot>
                    </footer>

                    <!-------------------------------------------------- Content only------------------------------------------------>
                    <main v-if="this.contentOnly === true">
                        <div class="content-only"><i class="icon-times-regular" @click="closemodal" v-if="this.closeicon === true"></i></div>
                        <div class="content-slot">
                        <slot name="content"></slot>
                        </div>
                        
                    </main>

                    <!---------------------------------------------------Header Content-------------------------------------------------------------------------------------------------->
                      <header v-if="this.headercontent == true">
                        <div class="header-slot">
                        <slot name="header">
                        </slot>
                        </div>
                            <i class="icon-times-regular" @click="closemodal" v-if="this.closeicon === true"></i>
                    </header>
                    <main v-if="this.headercontent == true">
                        <slot name="content"></slot>
                    </main>
                    <!------------------------------------------------------ Content footer----------------------------------------------------------------------------------->
                     <main v-if="this.contentfooter === true">
                        <div class="content-only"><i class="icon-times-regular" @click="closemodal" v-if="this.closeicon === true"></i></div>
                        <div class="content-slot">
                        <slot name="content"></slot>
                        </div>
                        
                    </main>
                    <footer v-if="this.contentfooter == true">
                        <slot name="footer"></slot>
                    </footer>
               
                </div>
            </div>
        </div>
        
    <!-- </div> -->

    <button class="modal-backdrop" v-if="texteditor" @click="closemodal">
            <button :class="'hlx-modal-container'" :style="{ height:this.modal_height,width:this.modal_width}">
                <button class="modal" v-if="texteditor==true" >
                    <header>
                        <button class="header-slot">
                        <slot name="header">
                        </slot>
                        </button>
                            <i class="icon-times-regular" @click="closemodal" v-if="this.closeicon === true"></i>
                    </header>
                    <main>
                        <slot name="content"></slot>
                    </main>
                    <footer>
                        <slot name="footer"></slot>
                    </footer>
               
                </button>
            </button>
        </button>
</template>

<script>

    export default {
        name:"hlx-modal",
        inheritAttrs:false,
        props:{
            modalActive:{
                type:Boolean
            },
            footerline:{
               type:Boolean,
               default:true
            },
            contentOnly:{
                type:Boolean
            },
            headercontent:{
                type:Boolean
            },
            contentfooter:{
                type:Boolean
            },
             modal:{
                type:Boolean
            },
            height:{
                type:String,
                // default:'600px'
            },
            width:{
                type:String,
                // default:'400px'
            },
            texteditor:{
                type:Boolean,
                default:false
            },
            closeicon:{
                type:Boolean,
                default:true
            }
        },
        emits:["close"],
        data(){
            return{
                unique: Math.floor(Math.random() * 100),
                modal_height:'',
                modal_width:''
            }
        },
        mounted(){
        //    console.log(this.contentOnly,'aaaaa');
        //    console.log(this.modal,'bbbb');
           document.querySelector('.hlx-modal-container').style.width = this.width
           document.querySelector('.hlx-modal-container').style.width = this.height
        },
        watch:{
            width:{
                handler(val){
                    // console.log(val);
                    this.modal_width = val
                },
                immediate:true
            },
            height:{
                handler(val){
                    // console.log(val);
                    this.modal_height = val
                },
                immediate:true
            }
        },
        methods: {
            closemodal(event){
                if(event.target.className === 'modal-backdrop' || event.target.className === 'icon-times-regular')
                {
                    this.$emit('close');
                }
            }
        },
    }

</script>

<!-- <style lang="scss" scoped>

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

    .hlx-modal-container{
        width: 600px;
        height: 400px;
        .modal{
            background: #ffff;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            // overflow-x: auto;
            display: flex;
            // align-items: center;
            flex-direction: column;
            width: 100%;
            height: 100%;
            border-radius: 6px;
            position: relative;
            header{
                height: 55px;
                border-bottom: 1px solid $grey-dark;
                padding: 20px;
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                // position: absolute;
                i{
                    font-size: 14px;
                }

            }
            content{
                // align-items: center;
                overflow-y:auto;
                height: auto;
                padding: 20px;
                width: 100%;
                display: flex;
            }
            footer{
                margin:auto 0 0 0;
                height: 55px;
                border-top: 1px solid $grey-dark;
                padding: 20px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                width: 100%;
                // position: absolute;
                
            }
            .hlx-button ,.default{
                    font-size: 0.5rem !important;
                    height: 20px !important;
                    width: 60px;
                }
                
        }

    }
}
// .close{
//     display: none;
// }

</style> -->