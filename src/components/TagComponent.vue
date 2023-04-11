<template>
  <span class="hlx-tag"
    ><span class="content"
    :id="data.id+''+data.value"
      ><slot>{{ data.value }}</slot></span
    ><i class="icon-times-regular" @click="removeTag"></i
  ></span>
</template>

<script>
export default {
  name: "hlx-tag",
  emits:['tag-close'],
  props: ["content", "data"],
  methods:{
    removeTag($event){
let tag = $event.target.parentElement
if(tag){
tag.remove()
this.$emit('tag-close',this.data)
}    
},
  }
};
</script>
