<template>
  <h1 class="component-heading">Tree select</h1>
  <p class="component-description">
     TreeSelect Component is used for the Tree selection control. It is similar to the Select component but here the values are provided in a tree-like structure.
  </p>
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    To provide inputs to tree select use the attribute<b> :tree_data</b> <br />
    To make tree select expandable use the attribute <b>expanded</b> to
    <b>true</b>
  </p>

  <div class="component-example">
    <div class="example-body">
      <div class="tree-select-container">
        <hlx-tree-select
          :treeData="tree_data"
          :editable="false"
          :headSelect="false"
          :expanded="true"
          :background="true"
          @currentValue="handleCurrentData"
        />
      </div>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="expanded-tree-icon"
        @click="showCode('expanded-tree')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="expanded-tree" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="expanded_tree"
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
  <h2 class="component-side-heading">Tree-select with guided lines</h2>
  <p class="component-description">
    Display a set of data with hierarchies followed by guided lines.<br />
    When <b>:guide</b> set <b>true</b> guided lines will be displayed along with
    the tree selection
  </p>
  <div class="component-example">
    <div class="example-body">
      <div class="tree-select-container">
        <hlx-tree-select
          :treeData="tree_data"
          :editable="false"
          :expanded="false"
          :background="true"
          :guide="true"
          @currentValue="handleCurrentData"
        />
      </div>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="background-tree-icon"
        @click="showCode('background-tree')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="background-tree" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="background_tree"
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
  <h2 class="component-side-heading">Tree-select expand all feature</h2>
  <hlx-button class="primary" @click="calculateExpand">{{
    this.expand_status
  }}</hlx-button>
  <p class="component-description">
    To expand overall tree using <b>:expandAll</b> and <b>:collapseAll</b>
    the tree selection
  </p>
  <div class="component-example">
    <div class="example-body">
      <div class="tree-select-container">
        <hlx-tree-select
          :treeData="tree_data"
          :editable="false"
          :expandAll="expand"
          :collapseAll="collapse"
          :background="true"
          @currentValue="handleCurrentData"
        />
      </div>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="expand-change-tree-icon"
        @click="showCode('expand-change-tree')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="expand-change-tree" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="expand_change"
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
  <h2 class="component-side-heading">Tree select with parent background</h2>
  <p class="component-description">
    Display a set of data using parent element color with hierarchies.<br />
    To have parent background set <b>:background</b> to <b>false</b> by default
    it was <b>true</b>
  </p>
  <div class="component-example">
    <div class="example-body">
      <div class="tree-select-container" style="background: #001723">
        <hlx-tree-select
          :treeData="tree_data"
          :editable="false"
          :expanded="false"
          :background="false"
          @currentValue="handleCurrentData"
        />
      </div>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="parent-background-icon"
        @click="showCode('parent-background')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="parent-background" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="parent_background_tree"
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
  <h2 class="component-side-heading">Tree-select with edit</h2>
  <p class="component-description">
    The content of tree nodes can be customized, so you can add,edit or delete
    using icons.<br />
    Set attribute <b>:editable </b> to <b>true</b> to make it editable
    fields.<br />
    <!-- Write your description here -->
  </p>
  <div class="component-example">
    <div class="example-body">
      <div class="tree-select-container">
        <hlx-tree-select
          :treeData="tree_data"
          :editable="true"
          :expanded="false"
          :background="true"
          @currentValue="handleCurrentData"
          @edit="handleEdit"
        />
      </div>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="with-edit-tree-icon"
        @click="showCode('with-edit-tree')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="with-edit-tree" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="with_edit_tree"
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
        v-for="(i, index) in this.treeSelectAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.treeSelectAttributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  <h2 class="component-side-heading">Events</h2>
  <!-- Events -->
  <hlx-table
    :columnCount="3"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head
        v-for="(i, index) in this.treeSelectEvents"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.event_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.treeSelectEvents"
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
import HlxButton from "../components/ButtonComponent.vue";
import CodeEditor from "simple-code-editor";
import hlxTreeSelect from "@/components/TreeSelectComponent.vue";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
export default {
  name: "tree-select-view",
  components: {
    CodeEditor,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    HlxButton,
    hlxTreeSelect,
  },
  data() {
    return {
      expand: false,
      collapse: true,
      editor_theme: "light",
      expand_status: "Expand all",
      expanded_tree: `
<template>
   <div class="tree-select-container">
    <hlx-tree-select :treeData="tree_data" :editable="false" :expanded="true" :background="true" @currentValue="handleCurrentData""/>
  </div>
</template>


<script>

export default {
  name: "tree-select",
  data() {
    return {
      tree_data: 
      [{
        name: "devices",
        label: "Devices",
        active:true,
        child: [
          {
            name: "mobiles",
            label: "Mobiles",
            icon: "icon-add-bg",
            child: [
              {
                name: "iphone",
                label: "IPhone",
                icon: "icon-add-file",
                child: [
                  {
                    name: "iphone_11",
                    label: "IPhone 11",
                    icon: "icon-add",
                  },
                  {
                    name: "samsung_s20",
                    label: "Samsung S20",
                    icon: "icon-human",
                  },
                ],
              },
              {
                name: "samsung",
                label: "Samsung",
              },
            ],
          },
          {
            name: "mobiles",
            label: "Mobiles",
            // icon: "icon-phone",
            child: [
              {
                name: "iphone",
                label: "IPhone",
                // icon: "icon-www",
                child: [
                  {
                    name: "iphone_11",
                    label: "IPhone 11",
                    // icon: "icon-human",
                  },
                  {
                    name: "samsung_s20",
                    label: "Samsung S20",
                    // icon: "icon-human",
                  },
                ],
              },
              {
                name: "samsung",
                label: "Samsung",
              },
            ],
          },
          {
            name: "laptops",
            label: "Laptops",
          },
        ],
      }],
     
      
    };
  },
  methods: {
    handleCurrentData(data){
      console.log(data,'dataaa')
    },
    handleEdit(data){
      console.log(data,'edit');
    },
   
  },
};
<\/script>

<style lang="scss" scoped>
.tree-select-container {
  width: 100%;
}
</style>
      `,
      background_tree: `
<template>
    <div class="tree-select-container">
    <hlx-tree-select :treeData="tree_data" :editable="false" :expanded="false" :background="true" :guide="true" @currentValue="handleCurrentData"/>
  </div>
</template>


<script>

export default {
  name: "tree-select",
  data() {
    return {
      tree_data: 
      [{
        name: "devices",
        label: "Devices",
        active:true,
        child: [
          {
            name: "mobiles",
            label: "Mobiles",
            icon: "icon-add-bg",
            child: [
              {
                name: "iphone",
                label: "IPhone",
                icon: "icon-add-file",
                child: [
                  {
                    name: "iphone_11",
                    label: "IPhone 11",
                    icon: "icon-add",
                  },
                  {
                    name: "samsung_s20",
                    label: "Samsung S20",
                    icon: "icon-human",
                  },
                ],
              },
              {
                name: "samsung",
                label: "Samsung",
              },
            ],
          },
          {
            name: "mobiles",
            label: "Mobiles",
            // icon: "icon-phone",
            child: [
              {
                name: "iphone",
                label: "IPhone",
                // icon: "icon-www",
                child: [
                  {
                    name: "iphone_11",
                    label: "IPhone 11",
                    // icon: "icon-human",
                  },
                  {
                    name: "samsung_s20",
                    label: "Samsung S20",
                    // icon: "icon-human",
                  },
                ],
              },
              {
                name: "samsung",
                label: "Samsung",
              },
            ],
          },
          {
            name: "laptops",
            label: "Laptops",
          },
        ],
      }],
     
      
    };
  },
  methods: {
    handleCurrentData(data){
      console.log(data,'dataaa')
    },
    handleEdit(data){
      console.log(data,'edit');
    },
   
  },
};
<\/script>

<style lang="scss" scoped>
.tree-select-container {
  width: 100%;
}
</style>
      `,
      expand_change: `
<template>
    <div class="tree-select-container">
   <hlx-tree-select
          :treeData="tree_data"
          :editable="false"
          :expandAll="expand"
          :collapseAll="collapse"
          :background="true"
          @currentValue="handleCurrentData"
        />
  </div>
</template>


<script>

export default {
  name: "tree-select",
  data() {
    return {
      tree_data: 
      [{
        name: "devices",
        label: "Devices",
        active:true,
        child: [
          {
            name: "mobiles",
            label: "Mobiles",
            icon: "icon-add-bg",
            child: [
              {
                name: "iphone",
                label: "IPhone",
                icon: "icon-add-file",
                child: [
                  {
                    name: "iphone_11",
                    label: "IPhone 11",
                    icon: "icon-add",
                  },
                  {
                    name: "samsung_s20",
                    label: "Samsung S20",
                    icon: "icon-human",
                  },
                ],
              },
              {
                name: "samsung",
                label: "Samsung",
              },
            ],
          },
          {
            name: "mobiles",
            label: "Mobiles",
            // icon: "icon-phone",
            child: [
              {
                name: "iphone",
                label: "IPhone",
                // icon: "icon-www",
                child: [
                  {
                    name: "iphone_11",
                    label: "IPhone 11",
                    // icon: "icon-human",
                  },
                  {
                    name: "samsung_s20",
                    label: "Samsung S20",
                    // icon: "icon-human",
                  },
                ],
              },
              {
                name: "samsung",
                label: "Samsung",
              },
            ],
          },
          {
            name: "laptops",
            label: "Laptops",
          },
        ],
      }],
     
      
    };
  },
    methods: {
    calculateExpand(){
      if(this.expand){
        this.expand = false;
        this.collapse = true;
        this.expand_status="Expand all"
      } else{
        
        this.expand = true;
        this.collapse = false;
        this.expand_status="Collapse all"
      }
    },
    handleCurrentData(data) {
      console.log(data, "dataaa");
    },
    handleEdit(data) {
      console.log(data, "edit");
    },
  },
};
<\/script>

<style lang="scss" scoped>
.tree-select-container {
  width: 100%;
}
</style>
      `,

      parent_background_tree: `
<template>
    <div class="tree-select-container" style="background:#0b273d;">
    <hlx-tree-select :treeData="tree_data" :editable="false" :expanded="false" :background="false" @currentValue="handleCurrentData"/>
  </div>
</template>


<script>

export default {
  name: "tree-select",
  data() {
    return {
      tree_data: 
      [{
        name: "devices",
        label: "Devices",
        active:true,
        child: [
          {
            name: "mobiles",
            label: "Mobiles",
            icon: "icon-add-bg",
            child: [
              {
                name: "iphone",
                label: "IPhone",
                icon: "icon-add-file",
                child: [
                  {
                    name: "iphone_11",
                    label: "IPhone 11",
                    icon: "icon-add",
                  },
                  {
                    name: "samsung_s20",
                    label: "Samsung S20",
                    icon: "icon-human",
                  },
                ],
              },
              {
                name: "samsung",
                label: "Samsung",
              },
            ],
          },
          {
            name: "mobiles",
            label: "Mobiles",
            // icon: "icon-phone",
            child: [
              {
                name: "iphone",
                label: "IPhone",
                // icon: "icon-www",
                child: [
                  {
                    name: "iphone_11",
                    label: "IPhone 11",
                    // icon: "icon-human",
                  },
                  {
                    name: "samsung_s20",
                    label: "Samsung S20",
                    // icon: "icon-human",
                  },
                ],
              },
              {
                name: "samsung",
                label: "Samsung",
              },
            ],
          },
          {
            name: "laptops",
            label: "Laptops",
          },
        ],
      }],
     
      
    };
  },
  methods: {
    handleCurrentData(data){
      console.log(data,'dataaa')
    },
    handleEdit(data){
      console.log(data,'edit');
    },
   
  },
};
<\/script>

<style lang="scss" scoped>
.tree-select-container {
  width: 100%;
}
</style>
      `,

      with_edit_tree: `
<template>
   <div class="tree-select-container">
    <hlx-tree-select :treeData="tree_data" :editable="true" :expanded="false" :background="true"  @currentValue="handleCurrentData" @edit="handleEdit"/>
  </div>
</template>


<script>

export default {
  name: "tree-select",
  data() {
    return {
      tree_data: 
      [{
        name: "devices",
        label: "Devices",
        active:true,
        child: [
          {
            name: "mobiles",
            label: "Mobiles",
            icon: "icon-add-bg",
            child: [
              {
                name: "iphone",
                label: "IPhone",
                icon: "icon-add-file",
                child: [
                  {
                    name: "iphone_11",
                    label: "IPhone 11",
                    icon: "icon-add",
                  },
                  {
                    name: "samsung_s20",
                    label: "Samsung S20",
                    icon: "icon-human",
                  },
                ],
              },
              {
                name: "samsung",
                label: "Samsung",
              },
            ],
          },
          {
            name: "mobiles",
            label: "Mobiles",
            // icon: "icon-phone",
            child: [
              {
                name: "iphone",
                label: "IPhone",
                // icon: "icon-www",
                child: [
                  {
                    name: "iphone_11",
                    label: "IPhone 11",
                    // icon: "icon-human",
                  },
                  {
                    name: "samsung_s20",
                    label: "Samsung S20",
                    // icon: "icon-human",
                  },
                ],
              },
              {
                name: "samsung",
                label: "Samsung",
              },
            ],
          },
          {
            name: "laptops",
            label: "Laptops",
          },
        ],
      }],
     
      
    };
  },
  methods: {
    handleCurrentData(data){
      console.log(data,'dataaa')
    },
    handleEdit(data){
      console.log(data,'edit');
    },
   
  },
};
<\/script>

<style lang="scss" scoped>
.tree-select-container {
  width: 100%;
}
</style>
      `,
      tree_data: [
        {
          name: "devices",
          label: "Devices",
          active:true,
          icon: "icon-bulb-bg",
          child: [
            {
              name: "mobiles",
              label: "Mobiles",
              icon: "icon-add-bg",
              child: [
                {
                  name: "iphone",
                  label: "IPhone",
                  icon: "icon-add-file",
                  child: [
                    {
                      name: "iphone_11",
                      label: "IPhone 11",
                      icon: "icon-add",
                    },
                    {
                      name: "samsung_s20",
                      label: "Samsung S20",
                      icon: "icon-human",
                    },
                  ],
                },
                {
                  name: "samsung",
                  label: "Samsung",
                },
              ],
            },
            {
              name: "mobiles",
              label: "Mobiles",
              // icon: "icon-phone",
              child: [
                {
                  name: "iphone",
                  label: "IPhone",
                  // icon: "icon-www",
                  child: [
                    {
                      name: "iphone_11",
                      label: "IPhone 11",
                      active:true
                      // icon: "icon-human",
                    },
                    {
                      name: "samsung_s20",
                      label: "Samsung S20",
                      // icon: "icon-human",
                    },
                  ],
                },
                {
                  name: "samsung",
                  label: "Samsung",
                },
              ],
            },
            {
              name: "laptops",
              label: "Laptops",
            },
          ],
        },
      ],
      treeSelectAttributes: [
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
          width: 250,
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
          width: 250,
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
      treeSelectEvents: [
        {
          prop: "name",
          label: "Event name",
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
          prop: "parameter",
          label: "Parameter",
          width: 50,
          type: "string",
          format: "",
        },
      ],
      table_data: [
        {
          attribute: "expanded",
          description: "Make tree fully expanded",
          type: "Boolean",
          accepted_values: "true, false",
          default: "false",
          mandatory: "false",
        },
        {
          attribute: "expandAll",
          description: "Make tree fully expanded",
          type: "Boolean",
          accepted_values: "true, false",
          default: "false",
          mandatory: "false",
        },
        {
          attribute: "collapseAll",
          description: "Make tree fully collapsed",
          type: "Boolean",
          accepted_values: "true, false",
          default: "false",
          mandatory: "false",
        },
        {
          attribute: "treeData",
          description: "Data to be create the tree select, and if you need to make any prop as default selected just add active:true prop in it",
          type: "Object",
          accepted_values: "Object",
          default: "-",
          mandatory: "true",
        },
        {
          attribute: "editable",
          description: "To edit the tree data",
          type: "Boolean",
          accepted_values: "true,false",
          default: "false",
          mandatory: "false",
        },
        {
          attribute: "background",
          description: "Whether the tree select want parent backround",
          type: "Boolean",
          accepted_values: "true,false",
          default: "true",
          mandatory: "false",
        },
        {
          attribute: "headSelect",
          description: "To prevent the click and normal behaviour of parent/head or lead of tree select",
          type: "Boolean",
          accepted_values: "true,false",
          default: "true",
          mandatory: "false",
        },
      ],
      event_data: [
        {
          name: "currentValue",
          description: "To get the current value of clicked item.",
          parameter: "cliked node name",
        },
        {
          name: "edit",
          description: "To invoke edit related windows and operation",
          parameter: "clicked node data",
        },
      ],
    };
  },

  methods: {
    handleAdd(data) {
      console.log(
        "🚀 ~ file: TreeSelectView.vue:997 ~ handleAdd ~ data:",
        data
      );
    },
    calculateExpand() {
      if (this.expand) {
        this.expand = false;
        this.collapse = true;
        this.expand_status = "Expand all";
      } else {
        this.expand = true;
        this.collapse = false;
        this.expand_status = "Collapse all";
      }
    },
    handleCurrentData(data) {
      // console.log(data, "dataaa");
    },
    handleEdit(data) {
      // console.log(data, "edit");
    },
    showCode(val) {
      document.getElementById(val + "-icon").classList.toggle("active-icon");
      if (document.getElementById(val).style.display === "none") {
        document.getElementById(val).style.display = "block";
      } else if (document.getElementById(val).style.display === "block") {
        document.getElementById(val).style.display = "none";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tree-select-container {
  width: 100%;
}
</style>
