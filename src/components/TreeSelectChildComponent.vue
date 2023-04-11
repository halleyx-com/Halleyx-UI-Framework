<template>
  <li
    v-if="Object.keys(child).length > 0"
    :ref="child.name + '-ref'"
    @click.capture="currentValue(child,$event)"
      :class="{'no-icon':child.icon == undefined?true:false}"
  >
    <nav
      class="label-wrapper"
      :class="{
        'only-child':
          (child.child == undefined || (child.child && child.child.length == 0))
            ? true
            : false,
        'shepherd':
          (headSelect==false && (child.child != undefined || (child.child && child.child.length > 0)))
            ? true
            : false,
            'expanded-tree':expanded,
            'selected-tree':(child.active  && ((headSelect==false &&(child.child == undefined || (child.child && child.child.length == 0)))||(headSelect==true &&(child.child != undefined || (child.child && child.child.length >= 0)))))
            ? true
            : false,
            'no-icon':child.icon == undefined?true:false
      }"
      :ref="child.name"
      @click.stop="handleSelect($event,child.name)"
    >
      <span
        class="arrow"
        v-if="child.child && child.child.length > 0"
        @click.stop="handleChildProcess($event,child.name)"
        >
        <i class="icon-angle-right-regular"></i>
        <!-- <i class="icon-arrow-regular-down"></i> -->
      </span>
        <!-- v-if="child.icon != undefined" -->
      <span
        class="label-icon-wrapper"
        >
        <i :class="child.icon" ></i>
        </span>
      
      <span class="child-label" :style="{'margin-left':child.icon != undefined?'':''}">
      {{ child.label }}

      </span>
      <span v-if="editable == true" class="edit-tool-bar">
      <i class="icon-clipboard-edit-regular"  @click="handleEdit(child)"></i>
      <i class="icon-plus-regular"  @click.stop="handleAdd(child)"></i>
      <i class="icon-trash-regular"  @click="handleDelete(child)"></i>
      </span>
    </nav>
    <ul v-if="child.child && child.child.length > 0" :child="child.child" :class="{
            'show-tree':expanded,
            guide:guide
      }">
      <hlx-tree-select-child
        :guide="guide"
        :child="childData"
        :headSelect="headSelect"
        v-for="childData in child.child"
        :key="childData.name"
        :editable="editable"
        :expanded="expanded"
        @currentValue="handleCurrentData"
        @edit="handleEdit"
        @add="handleAdd"
        @delete="handleDelete"
      />
    </ul>
  </li>
</template>

<script>
export default {
  name: "hlx-tree-select-child",
  emits:['currentValue','edit','delete','add'],
  props: {
    child: {
      type: Object,
      default: () => {},
    },
    arrow: {
      type: Boolean,
      default: () => true,
    },
    headSelect: {
      type: Boolean,
      default: () => true,
    },
    editable: {
      type: Boolean,
      default: () => false,
    },
    expanded: {
      type: Boolean,
      default: () => false,
    },
    guide: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleChildProcess($event,name) {
      // console.log($event.target);
      // console.log(parent);
      $event.target.parentElement.parentElement.parentElement.classList.toggle(
        "expanded"
      );
      this.$emit('currentValue',{name,ele:this.$refs[name]})

    },
    emitEdit(data){
      // console.log(data,'emit');
    },
    handleSelect($event,name) {
      // console.log($event.target.parentElement,'handle select',this.$refs[name]);
      this.$emit('currentValue',{name,ele:this.$refs[name]})
    },
    handleCurrentData(name) {
      this.$emit('currentValue',name)
    },
    currentValue(data,$event) {
      // console.log(this.$refs);
      // let selected_values = [...document.querySelectorAll('.hlx-tree-select>li .label-wrapper.selected-tree')]
      // // console.log(selected_values);
      // if(selected_values.length > 0){
      //     selected_values.forEach(el => {
            
      //       el.classList.remove('selected-tree')
      //       el.parentElement.classList.remove('current-selected-tree')
            
      //       })
      // }

      // this.$refs[data.name].classList.add('selected-tree')
      // this.$refs[data.name].parentElement.classList.add('current-selected-tree')
        // this.$emit('currentValue',data)
      // console.log(data, "data",$event.target);
    },
      handleAdd(data){this.$emit('add',data)},
    handleEdit(data){
      this.$emit('edit',data)
     },
    handleDelete(data){this.$emit('delete',data)},
  },
};
</script>
