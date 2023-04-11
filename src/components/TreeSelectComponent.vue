<template>
  <section class="wrapp-all"
      ref="hlx-tree-select-cmp"
  >
    <div
      class="hlx-tree-select-wrapper"
      id="hlx-tree-select-0133"
      :class="{ 'background-enabled': background }"
      :style="{ color: !background ? '#fbfbfb' : '#565553' }"
      v-for="treeD in treeData" :key="treeD"
    >
      <ul
        class="hlx-tree-select"
        :class="{
          'show-tree': expanded,
          guide: guide,
        }"
        :ref="'hlx-tree-select'"
      >
        <hlx-tree-select-child
          :child="treeD"
          :guide="guide"
          :headSelect="headSelect"
          :editable="editable"
          :expanded="expanded"
          @currentValue="transferToParent"
          @add="handleAdd"
          @edit="handleEdit"
          @delete="handleDelete"
        />
      </ul>
    </div>
  </section>
</template>

<script>
import hlxTreeSelectChild from "./TreeSelectChildComponent.vue";
export default {
  name: "hlx-tree-select",
  emits: ["currentValue", "edit", "delete", "add"],
  components: { hlxTreeSelectChild },
  props: {
    treeData: {
      type: Object,
      default: {},
    },
    editable: {
      type: Boolean,
      default: false,
    },
    headSelect: {
      type: Boolean,
      default: true,
    },
  
    expanded: {
      type: Boolean,
      default: false,
    },
    expandAll: {
      type: Boolean,
      default: false,
    },
    collapseAll: {
      type: Boolean,
      default: false,
    },
    background: {
      type: Boolean,
      default: true,
    },
    guide: {
      type: Boolean,
      default: false,
    },
  },
  watch:{
    expandAll:{
      handler(new_value){
        if(new_value==true){
          this.$nextTick(()=>{

            let li = this.$refs['hlx-tree-select'][0]
            if(li){
              
              li = [...li.querySelectorAll('li')]
            li.filter(li_item =>{
              if(!li_item.classList.contains('expanded'))
              li_item.classList.add('expanded')
            })
              }

          })
          // console.log(li,'liii');
        }
    },
    deep:true,
    immediate:true
    },
    collapseAll:{
      handler(new_value){
        if(new_value==true){
          this.$nextTick(()=>{

            let li = this.$refs['hlx-tree-select'][0]
            if(li){
              
              li = [...li.querySelectorAll('li')]
            li.filter(li_item =>{
              while(li_item.classList.contains('expanded')){
                li_item.classList.remove('expanded')
              }
              // if(li_item.classList.contains('expanded'))
            })
              }

          })
          // console.log(li,'liii');
        }
    },
    deep:true,
    immediate:true
    }
  },
  methods: {
    transferToParent(data) {
      let selected_values = [
        ...this.$refs["hlx-tree-select-cmp"].querySelectorAll(
          "li nav.selected-tree"
        ),
      ];
      if (selected_values.length > 0) {
        selected_values.forEach((el) => {
          el.classList.remove("selected-tree");
          el.parentElement.classList.remove("current-selected-tree");
        });
      }

      data.ele.classList.add("selected-tree");
      data.ele.parentElement.classList.add("current-selected-tree");
      this.$emit("currentValue", data.name);

      let expanded_lines = [...this.$refs['hlx-tree-select-cmp'].querySelectorAll('li.expanded')]
      // expanded_lines
      expanded_lines.forEach((ele,i) => {
let ul = 
        ele.querySelector('ul')
        ul.classList.remove('guide-current')
        if(expanded_lines.length - 1 ==i){
          ul.classList.add('guide-current')
        }
      })
    },
    handleEdit(data) {
      // console.log(data,'adasda')
      this.$emit("edit", data);
    },
    handleAdd(data) {
      this.$emit("add", data);
    },
    handleDelete(data) {
      this.$emit("delete", data);
    },
    handleChildProcess($event) {
      // console.log($event.target,'clicked');
      $event.target.parentElement.parentElement.classList.toggle("expanded");
    },
  },
};
</script>
