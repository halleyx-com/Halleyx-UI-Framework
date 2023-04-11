<template>
  <h1 class="component-heading">Tree</h1>
  <p class="component-description">
    A tree is a nonlinear hierarchical component that consists of nodes connected by edges. 
  </p>
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    Set <b>:tree-direction</b> to view the tree in specified direction<br />
    Define tree input data in <b>:node</b> 
  </p>
  <div class="component-example">
    <!-- <button class="direction1" @click="myFunction()">Change view</button> -->
    <div class="example-body custom">
      <span class="custom"
        ><hlx-button class="primary large" @click="myFunction()"
          >Change view</hlx-button
        ></span
      >
      <div class="tree-container">
        <!-- <ul class="tree" :class="tree_direction" > -->
        <hlx-tree
          :node="treedata"
          :tree-direction="tree_direction"
        />
        <!-- </ul> -->
      </div>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-tree-icon" @click="showCode('basic-tree')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-tree" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_tree"
          :read_only="true"
          :theme="editor_theme"
          :languages="[
            ['Javascript', 'Vue'],
            ['javascript', 'JS'],
            ['python', 'Python'],
          ]"
        />
      </div>
    </section>
  </div>
  <h2 class="component-side-heading">Drag usage</h2>
  <p class="component-description">
   <b>isdraggable</b> to <b>true</b> make the tree draggable<br />
  </p>
  <div class="component-example">
    <!-- <button class="direction1" @click="myFunction()">Change view</button> -->
    <div class="example-body custom">
      <!-- <span class="custom"
        ><hlx-button class="primary large" @click="myFunction()"
          >Change view</hlx-button
        ></span
      > -->
      <div class="tree-container">
        <!-- <ul class="tree" :class="tree_direction" > -->
        <hlx-tree
          :node="treedata"
          :tree-direction="tree_direction"
          :isDraggable="true"
        />
        <!-- </ul> -->
      </div>
    </div>
    <div class="example-footer">
      <span class="icon" id="drag-tree-icon" @click="showCode('drag-tree')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="drag-tree" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="drag_tree"
          :read_only="true"
          :theme="editor_theme"
          :languages="[
            ['Javascript', 'Vue'],
            ['javascript', 'JS'],
            ['python', 'Python'],
          ]"
        />
      </div>
    </section>
  </div>
  <h2 class="component-side-heading">Zoom usage</h2>
  <p class="component-description">
    Set <b>:zoomable</b> zoom the tree<br />
    and specify the <b>:zoom</b> percentage of (10 - 200) to zoom <br />
  </p>
  <section class="switcher">
    <hlx-button class="primary large" @click="zoomin()">zoom in</hlx-button>
    <hlx-button class="primary large" @click="zoomout()">zoom out</hlx-button>
  </section>
  <div class="component-example">
    <div class="example-body custom">
      <span class="custom">
        <!-- <hlx-button class="primary large" @click="myFunction()"
          >Change view</hlx-button
        > -->
      </span>
      <div class="tree-container">
        <hlx-tree
          :node="treedata"
          :tree-direction="tree_direction"
          zoomable
          :zoom="this.zoom"
        />
      </div>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="zoomable-tree-icon"
        @click="showCode('zoomable-tree')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="zoomable-tree" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="zoomable_tree"
          :read_only="true"
          :theme="editor_theme"
          :languages="[
            ['Javascript', 'Vue'],
            ['javascript', 'JS'],
            ['python', 'Python'],
          ]"
        />
      </div>
    </section>
  </div>
  <h2 class="component-side-heading">Collapse usage</h2>
  <p class="component-description">
   pass <b>:collapseAll</b> and <b>:expandAll</b> as boolean to expand and collapse all the tree nodes
  </p>
  <section class="switcher">
    <hlx-button class="primary large" @click="expand()">{{isCollapsed?"Expand all":"Collapse all"}}</hlx-button>
  </section>
  <div class="component-example">
    <div class="example-body custom">
      <!-- <span class="custom">
        <hlx-button class="primary large" @click="myFunction()"
          >Change view</hlx-button
        >
      </span> -->
      <div class="tree-container">
        <hlx-tree
          :node="treedata"
          :tree-direction="tree_direction"
          :collapseAll="expandAll"
          :expandAll="collapseAll"
        />
      </div>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="expandable-icon"
        @click="showCode('expandable')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="expandable" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="expandable_tree"
          :read_only="true"
          :theme="editor_theme"
          :languages="[
            ['Javascript', 'Vue'],
            ['javascript', 'JS'],
            ['python', 'Python'],
          ]"
        />
      </div>
    </section>
  </div>
  <h2 class="component-side-heading">Attributes</h2>
  <hlx-table
    :columnCount="6"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head
        v-for="(i, index) in this.treeAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.treeAttributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
</template>
<script>
import hlxTree from "../components/TreeComponent.vue";
import CodeEditor from "simple-code-editor";
import hlxButton from "../components/ButtonComponent.vue";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
export default {
  name: "TreeView",
  components: {
    hlxTree,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    hlxButton,
    CodeEditor,
  },
  // mounted() {
  //   console.log("side");
  // },
  watch: {
    tree_direction: function () {
      this.tree_direction;
    },
  },
  methods: {
    zoomin() {
      this.zoom += 10;
    },
    zoomout() {
      this.zoom -= 10;
    },
    showCode(val) {
      document.getElementById(val + "-icon").classList.toggle("active-icon");
      if (document.getElementById(val).style.display === "none") {
        document.getElementById(val).style.display = "block";
      } else if (document.getElementById(val).style.display === "block") {
        document.getElementById(val).style.display = "none";
      }
    },
    myFunction() {
      if (this.tree_direction == "vertical") {
        this.tree_direction = "horizontal";
      } else {
        this.tree_direction = "vertical";
      }
    },
    expand() {
      if(this.isCollapsed) {
        this.collapseAll = this.isCollapsed
        this.expandAll = !this.isCollapsed
      } else {
        
        this.collapseAll = this.isCollapsed
        this.expandAll = !this.isCollapsed
      }
     this.isCollapsed = !this.isCollapsed
    },
  },
  data() {
    return {
      expandAll:false,
      collapse:false,
      isCollapsed:false,
      editor_theme: "light",
      tree_direction: "vertical",
      zoom: 100,
      table_data: [
        {
          attribute: "tree-direction",
          description: "To specify the direction of tree.",
          type: "String",
          accepted_values: "horizontal,vertical",
          default: "vertical",
          mandatory: false,
        },
        {
          attribute: "isDraggable",
          description: "To make tree draggable",
          type: "Boolean",
          accepted_values: "true,false",
          default: "false",
          mandatory: false,
        },
        {
          attribute: "expandAll",
          description: "To expand all nodes",
          type: "Boolean",
          accepted_values: "true,false",
          default: "false",
          mandatory: false,
        },
        {
          attribute: "collapseAll",
          description: "To collapse all nodes",
          type: "Boolean",
          accepted_values: "true,false",
          default: "false",
          mandatory: false,
        },
        {
          attribute: "zoomable",
          description: "To make tree zoomable",
          type: "Boolean",
          accepted_values: "true,false",
          default: "false",
          mandatory: false,
        },
        {
          attribute: "zoom",
          description: "percentage of zoom level to achieve",
          type: "Number",
          accepted_values: ">=10 and <= 200",
          default: "100",
          mandatory: false,
        },
        {
          attribute: "node",
          description: `
          To build a tree data and format should be like 
          {
            label: String,
            data: Object,
            child: [
                {
                label: "String",
                data: Object,
                child: [{...}]
                }
              ]`,
          type: "Object",
          accepted_values: "Object",
          default: "-",
          mandatory: true,
        },
      ],
      treeAttributes: [
        {
          prop: "attribute",
          label: "Name",
          width: 50,
          type: "string",
          format: "",
        },
        {
          prop: "description",
          label: "Description",
          width: 350,
          type: "string",
          format: "",
        },
        {
          prop: "type",
          label: "Type",
          width: 50,
          type: "string",
          format: "",
        },
        {
          prop: "accepted_values",
          label: "Accepted values",
          width: 150,
          type: "string",
          format: "",
        },
        {
          prop: "default",
          label: "Default",
          width: 50,
          type: "string",
          format: "",
        },
        {
          prop: "mandatory",
          label: "Mandatory",
          width: 50,
          type: "string",
          format: "",
        },
      ],

      basic_tree: `
<template>
   <ul class="tree" :class="tree_direction">
                  <hlx-tree :node="treedata" :tree-direction="tree_direction"/>
      </ul>
</template>
<script>

export default {
  name: "TreeView",
  components: {
    TreeChild,
  },

  watch:{
      tree_direction : function(){
        this.tree_direction
      }
  },
  methods: {

    myFunction(){
      if(this.tree_direction=="vertical"){
        this.tree_direction="horizontal"
      }
      else{
        this.tree_direction="vertical"
      }
    }
  },
  data() {
    return {
    
      tree_direction: "vertical",
      treedata: {
        label: "root",
        child: [
          {
            label: "child1",
            child: [
              {
                label: "child1.2",
                child: [
                  {
                    label: "child1.2.1",
                    child: [
                      {
                        label: "child1.2.11",
                        child: [],
                      },
                    ],
                  },
                  {
                    label: "child1.2.2",
                    child: [],
                  },
                ],
              },
            ],
          },
          {
            label: "child2",
            child: [
              {
                label: "child2.1",
                child: [],
              },
            ],
          },
        ],
      },
    };
  },
};
<\/script>
<style lang="scss" scoped>
.example-body {
  position: relative;
  .tree-container {
    position: relative;
    height: auto;
    width: 100%;
    margin-left: auto;
    padding: 0 599.9px;
    /* border: solid; */
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  &.custom {
    height: 800px;
    overflow: auto;
  }
  .custom {
    position: sticky;
    left: 0%;
  }
}
.switcher {
  display: flex;
  gap: 10px;
}
.change-btn {
  float: right;
  border: none;
  color: white;
  padding: 8px;
  width: 100px;
  text-align: center;
  font-size: 14px;
  margin: 10px 10px;
  margin-left: auto;
  cursor: pointer;
}
</style>

      `,
      drag_tree: `
<template>
   <ul class="tree" :class="tree_direction">
                  <hlx-tree :node="treedata" :tree-direction="tree_direction" :isDraggable="true"/>
      </ul>
</template>
<script>

export default {
  name: "TreeView",
  components: {
    TreeChild,
  },

  watch:{
      tree_direction : function(){
        this.tree_direction
      }
  },
  methods: {

    myFunction(){
      if(this.tree_direction=="vertical"){
        this.tree_direction="horizontal"
      }
      else{
        this.tree_direction="vertical"
      }
    }
  },
  data() {
    return {
    
      tree_direction: "vertical",
      treedata: {
        label: "root",
        child: [
          {
            label: "child1",
            child: [
              {
                label: "child1.2",
                child: [
                  {
                    label: "child1.2.1",
                    child: [
                      {
                        label: "child1.2.11",
                        child: [],
                      },
                    ],
                  },
                  {
                    label: "child1.2.2",
                    child: [],
                  },
                ],
              },
            ],
          },
          {
            label: "child2",
            child: [
              {
                label: "child2.1",
                child: [],
              },
            ],
          },
        ],
      },
    };
  },
};
<\/script>
<style lang="scss" scoped>
.example-body {
  position: relative;
  .tree-container {
    position: relative;
    height: auto;
    width: 100%;
    margin-left: auto;
    padding: 0 599.9px;
    /* border: solid; */
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  &.custom {
    height: 800px;
    overflow: auto;
  }
  .custom {
    position: sticky;
    left: 0%;
  }
}
.switcher {
  display: flex;
  gap: 10px;
}
.change-btn {
  float: right;
  border: none;
  color: white;
  padding: 8px;
  width: 100px;
  text-align: center;
  font-size: 14px;
  margin: 10px 10px;
  margin-left: auto;
  cursor: pointer;
}
</style>

      `,

      zoomable_tree: `
      <template>
   <ul class="tree" :class="tree_direction">
                  <hlx-tree :node="treedata" :tree-direction="tree_direction"  zoomable :zoom="this.zoom"/>
      </ul>
</template>
<script>

export default {
  name: "TreeView",
  components: {
    TreeChild,
  },

  watch:{
      tree_direction : function(){
        this.tree_direction
      }
  },
  methods: {

    myFunction(){
      if(this.tree_direction=="vertical"){
        this.tree_direction="horizontal"
      }
      else{
        this.tree_direction="vertical"
      }
    }
  },
  data() {
    return {
    
      tree_direction: "vertical",
      treedata: {
        label: "root",
        child: [
          {
            label: "child1",
            child: [
              {
                label: "child1.2",
                child: [
                  {
                    label: "child1.2.1",
                    child: [
                      {
                        label: "child1.2.11",
                        child: [],
                      },
                    ],
                  },
                  {
                    label: "child1.2.2",
                    child: [],
                  },
                ],
              },
            ],
          },
          {
            label: "child2",
            child: [
              {
                label: "child2.1",
                child: [],
              },
            ],
          },
        ],
      },
    };
  },
};
<\/script>
<style lang="scss" scoped>
.example-body {
  position: relative;
  .tree-container {
    position: relative;
    height: auto;
    width: 100%;
    margin-left: auto;
    padding: 0 599.9px;
    /* border: solid; */
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  &.custom {
    height: 800px;
    overflow: auto;
  }
  .custom {
    position: sticky;
    left: 0%;
  }
}
.switcher {
  display: flex;
  gap: 10px;
}
.change-btn {
  float: right;
  border: none;
  color: white;
  padding: 8px;
  width: 100px;
  text-align: center;
  font-size: 14px;
  margin: 10px 10px;
  margin-left: auto;
  cursor: pointer;
}
</style>

      `,
      expandable_tree: `
      <template>
   <ul class="tree" :class="tree_direction">
                  <hlx-tree :node="treedata" :tree-direction="tree_direction" :collapseAll="true" :expandAll="false" zoomable :zoom="this.zoom"/>
      </ul>
</template>
<script>

export default {
  name: "TreeView",
  components: {
    TreeChild,
  },

  watch:{
      tree_direction : function(){
        this.tree_direction
      }
  },
  methods: {

    myFunction(){
      if(this.tree_direction=="vertical"){
        this.tree_direction="horizontal"
      }
      else{
        this.tree_direction="vertical"
      }
    }
  },
  data() {
    return {
    
      tree_direction: "vertical",
      treedata: {
        label: "root",
        child: [
          {
            label: "child1",
            child: [
              {
                label: "child1.2",
                child: [
                  {
                    label: "child1.2.1",
                    child: [
                      {
                        label: "child1.2.11",
                        child: [],
                      },
                    ],
                  },
                  {
                    label: "child1.2.2",
                    child: [],
                  },
                ],
              },
            ],
          },
          {
            label: "child2",
            child: [
              {
                label: "child2.1",
                child: [],
              },
            ],
          },
        ],
      },
    };
  },
};
<\/script>
<style lang="scss" scoped>
.example-body {
  position: relative;
  .tree-container {
    position: relative;
    height: auto;
    width: 100%;
    margin-left: auto;
    padding: 0 599.9px;
    /* border: solid; */
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  &.custom {
    height: 800px;
    overflow: auto;
  }
  .custom {
    position: sticky;
    left: 0%;
  }
}
.switcher {
  display: flex;
  gap: 10px;
}
.change-btn {
  float: right;
  border: none;
  color: white;
  padding: 8px;
  width: 100px;
  text-align: center;
  font-size: 14px;
  margin: 10px 10px;
  margin-left: auto;
  cursor: pointer;
}
</style>

      `,

      treedata: {
        label: "All products",
        data: { },

        child: [
          {
            label: "Computers",
            // data: { name: "andree", age: 12 },
            child: [
              {
                label: "Apple",

              },
              {
                label: "AMD",

              },
              {
                label: "Intel",

              },
            ],
          },
          {
            label: "Books",
            // data: { name: "andree", age: 12 },
            child: [
              {
                label: "Fiction",

              },
              {
                label: "Non-fiction",

              },
              
            ],
          },
          {
            label: "ICs",
           
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.example-body {
  position: relative;
  .tree-container {
    position: relative;
    height: auto;
    width: 100%;
    margin-left: auto;
    padding: 0 599.9px;
    /* border: solid; */
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  &.custom {
    height: 800px;
    overflow: auto;
  }
  .custom {
    position: sticky;
    left: 0%;
  }
}
.switcher {
  display: flex;
  gap: 10px;
}
.change-btn {
  float: right;
  border: none;
  color: white;
  padding: 8px;
  width: 100px;
  text-align: center;
  font-size: 14px;
  margin: 10px 10px;
  margin-left: auto;
  cursor: pointer;
}
</style>
