<template>
  <!-- class="tree" :class="tree_direction" -->
  <ul
    class="hlx-tree-area"
    id="hlx-tree-011"
    :class="treeDirection ? treeDirection : 'vertical'"
    ref="hlx-tree-structure"
    :isDraggable="isDraggable"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
    @mousemove="mouseMove"
  >
    <!-- :parentInst="this" -->
    <!-- @mousedown="mouseDown" -->
    <hlx-tree-child :node="node" />
  </ul>
</template>

<script>
import hlxTreeChild from "./TreeChildComponent.vue";

export default {
  name: "hlx-tree",
  props: {
    node: Object,
    treeDirection: {
      type: String,
      default: () => "vertical",
    },
    isDraggable: {
      type: Boolean,
      default: false,
    },
    zoomable: {
      type: Boolean,
      default: false,
    },
    zoom: {
      type: Number,
      default: NaN,
    },
    expandAll: {
      type: Boolean,
      default: false,
    },
    collapseAll: {
      type: Boolean,
      default: false,
    },
  },
   data() {
    return {
      ele: null,
      isMouseDown: false,
      initX: 0,
      initY: 0,
      height: 0,
      scale: 1,
      start: { x: 0, y: 0 },
      widht: 0,
    };
  },
  mounted() {
    this.ele = this.$refs["hlx-tree-structure"];
  },
  watch: {
    zoom: {
      handler(n, o) {
        if(isNaN(n)) return
        if (n > 100 ) {
          this.zoomIn(n);
        } else {
          this.zoomOut(n);
        }
      },
      immediate:true,
    },
    expandAll: {
      handler(expand) {
         if(expand) {
          let ele = this.$refs['hlx-tree-structure']
          //check if element is not null
          if(ele) {
            let allChild = ele.querySelector('li')?.querySelectorAll('ul.hide')
            allChild = [...allChild] 
            allChild.filter(childEl => {
              if(childEl && childEl.classList.contains('hide')){
                childEl.classList.remove("hide")
              }
              })
          }
        }
      },
      immediate:true,
    },
    collapseAll: {
      handler(collapse) {
        if(collapse) {
          let ele = this.$refs['hlx-tree-structure']
          console.log("🚀 ~ file: TreeComponent.vue:91 ~ handler ~ ele:", ele)
          //check if element is not null
          if(ele) {
            let allChild = ele.querySelector('li')?.querySelectorAll('ul')
            allChild = [...allChild] 
            allChild.filter(childEl => {
              if(childEl && !childEl.classList.contains('hide')){
                childEl.classList.add("hide")
              }
              })
          }
        }
      },
      immediate:true,
    },
  },
 
  components: {
    hlxTreeChild,
  },
  methods: {
    mouseDown($event) {
      if (this.isDraggable) {
        this.isMouseDown = true;

        //  this.initX = $event.offsetX;
        //  this.initY = $event.offsetY;
        // console.log($event.target,this.$refs['hlx-tree-structure'],this.initX,this.initY)
        // this.ele = document.querySelector('.tree')
        this.ele.style.cursor = "grabbing !important";
        this.ele.style.userSelect = "none";
        this.start = {
          x: $event.clientX - this.initX,
          y: $event.clientY - this.initY,
        };
        // this.panning = true
        // this.initX = (e.clientX - this.start.x)
        // this.initY = (e.clientY - this.start.y)
      }
    },
    mouseUp($event) {
      if(this.isDraggable) {

        this.isMouseDown = false;
      this.ele.style.cursor = "grab";
      this.ele.removeAttribute("user-select");
      this.ele.classList.remove("drag-border");
      }

      // this.ele.style.border="none"

      // this.panning = false
      // console.log($event.target,this.$refs['hlx-tree-structure'])
    },
    mouseMove($event) {
      if (this.isMouseDown && this.isDraggable) {
        this.initX = $event.clientX - this.start.x;
        this.initY = $event.clientY - this.start.y;
        this.ele.style.cursor = "grabbing";
        this.ele.style.userSelect = "none";
        this.ele.style.transform =
          "translate(" +
          this.initX +
          "px, " +
          this.initY +
          "px) scale(" +
          this.scale +
          ")";
        if (!this.ele.classList.contains("drag-over")) {
          this.ele.classList.add("drag-border");
        }
        // var cx = $event.clientX - this.initX,
        //     cy = $event.clientY - this.initY;
        // if (cx < 0) {
        //   cx = 0;
        // }
        // if (cy < 0) {
        //   cy = 0;
        // }
        // if (this.ele.parentElement.innerWidth - $event.clientX + this.initX < this.width) {
        //   cx = this.ele.parentElement.innerWidth - this.width;
        // }
        // if ($event.clientY > this.ele.parentElement.innerHeight - this.height+ this.initY) {
        //   cy = this.ele.parentElement.innerHeight - this.height;
        // }
        // this.ele.style.left = $event.clientX + 'px';
        // this.ele.style.top = $event.clientY + 'px';
      }
      // console.log($event.target,this.$refs['hlx-tree-structure'])
    },
    setTransform() {
      this.zoomElement = this.ele;
      if(this.zoomElement) {

        this.zoomElement.style.cursor = "grabbing";
      this.zoomElement.style.userSelect = "none";
      this.zoomElement.style.transform =
        "translate(" +
        this.initX +
        "px, " +
        this.initY +
        "px) scale(" +
        this.scale +
        ")";
      }
    },
    zoomIn(perc) {
      if (perc == 100) {
        this.scale = 1;
        this.setTransform();
        return;
      }
      this.scale = (perc * 2) / 200;
      // console.log(this.scale,(perc*2)/200);
      if (this.scale <= 2) {
        this.setTransform();
      }
    },
    zoomOut(perc) {
      if (perc == 100) {
        this.scale = 1;
        this.setTransform();
        return;
      }
      this.scale = (perc * 2) / 200;
      // console.log(this.scale,(perc*2)/200);
      // if(this.scale<2){

      //   this.setTransform()
      // }
      if (this.scale > 0.2) {
        this.setTransform();
      }
    },
    resetDefault() {
      this.initX = -60;
      this.initY = 206;
      this.scale = 0.75;
      const group_div = [...document.querySelectorAll(".content-node.group")];
      group_div.filter((group) => {
        const group_child = group.parentNode.querySelector("ul");
        group_child.classList.add("hide");
        group.querySelector("i").setAttribute("class", "i-circle-add");
      });
      this.setTransform();
    },
  },
};
</script>
