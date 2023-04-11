<template>
  <span :class="'hlx-label'" id="hlx-label-0013" :style="{height,width,background:options['background-color'],color:options['text-color'],'border-color':options['border-color']}">
      <slot>
      </slot>
  </span>
</template>

<script>
export default {
name:'hlx-label',
props:{
    label:{
        type:String,
        default:'Default'
    },
    label:{
        type:String,
        default:'Default'
    },
    height:{
        type:String,
        default:'Default'
    },
    width:{
        type:String,
        default:'Default'
    },
    options:{
        type:Object,
        default:{
            background:undefined,
            color:undefined
        }
    },
}
}
</script>
