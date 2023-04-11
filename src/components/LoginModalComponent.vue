<template>
  <div>
        <div class="modal-backdrop" v-show="modalActive" @click="closing">
            <div class="modalContainer">
                <div class="modal" >
                    <!-- <button class="close-btn" @click="$emit('close')" >X</button> -->
                    <header>
                        <slot name="header"></slot>
                    </header>
                    <content >
                        <slot name="content"></slot>
                    </content>
                    <footer >
                        <slot name="footer"></slot>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name:"modal",
        props:["modalActive"],
        methods: {
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
// .close{
//     display: none;
// }

</style>