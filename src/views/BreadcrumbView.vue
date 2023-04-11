<template>
  <h1 class="component-heading">Breadcrumb</h1>
  <p class="component-description">
The Breadcrumb Component displays the position of the current page within the site hierarchy, allowing page visitors to navigate the page hierarchy from their current location.
  </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    To specify the array for <b>:items</b>.
    This will push value to params and you can route to your specific page using
    routers
  </p>
   <div class="notes">
    <p class="note-title" >Note:</p><p class="note-body"> Default separator set as <i> '/' </i></p>
  </div>
  <div class="component-example">
    <div class="example-body">
       <span class="breadcrumb-area">
      <hlx-breadcrumb :items="items" @path="pathTo" />
       </span>
    </div>
    <div class="example-footer">
      <span class="icon" id="breadcrumb-icon" @click="showCode('breadcrumb')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="breadcrumb" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="bredcrumb_source"
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
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Custom separator</h2>
   <p class="component-description">
    To specify the <b>:separator</b> as String or Object</p>
    <p class="component-description">For the special characters <b>:separator="'>'"</b> directly add as string, for custom icon <b>:separator="separator"</b> the separator value will be in Object type
    
  </p>
  <div class="component-example">
    <div class="example-body">
       <span class="breadcrumb-area">
      <hlx-breadcrumb :items="items" :separator="separator" @path="pathTo"/>
       </span>
    </div>
    <div class="example-footer">
      <span class="icon" id="breadcrumb1-icon" @click="showCode('breadcrumb1')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="breadcrumb1" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="bredcrumb_source1"
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
  <divider :position="'horizontal'" :space="'20px'" />
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
      <hlx-table-head v-for="(i, index) in this.attributes" :key="index" :width="i.width">{{
        i.label
      }}</hlx-table-head>
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.attributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>


  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Events</h2>
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
        v-for="(i, index) in this.events"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.event_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.events"
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
import hlxBreadcrumb from "../components/BreadcrumbComponent.vue";
import CodeEditor from "simple-code-editor";
import divider from "../components/DividerComponent.vue";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
export default {
  name: "App",
  components: {
    hlxBreadcrumb,
    CodeEditor,
    divider,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
  },
  data() {
    return {
      items: [
        { label: 'Home', link: '/' ,icon:'icon-home-regular'},
        { label: 'Category', link: '/breadcrumb' },
        { label: 'Product', link: '/braedcrumb/product' }
      ],
      separator:{icon:'icon-angles-right-small-filled'},
      editor_theme: "light",
      direction: "vertical",
      bredcrumb_source: `<template>
      <hlx-breadcrumb :items="items" @path="pathTo" />
<template>
<script>
   export default {
    data ()
    {
      return{
        items: [
       { label: 'Home', link: '/' ,icon:'icon-home-ot'},
        { label: 'Category', link: '/breadcrumb' },
        { label: 'Product', link: '/braedcrumb/product' }
      ],
      ]
      }
    }
   }
`,
      bredcrumb_source1: `<template>
      <hlx-breadcrumb :items="items" :separator="separator" @path="pathTo"/>
<template>
<script>
   export default {
    data ()
    {
      return{
        items: [
        { label: 'Home', link: '/' ,icon:'icon-home-ot'},
        { label: 'Category', link: '/breadcrumb' },
        { label: 'Product', link: '/braedcrumb/product' }
      ],
      separator:{icon:'icon-arrow-right-ot'},
      }
    },
    methods:{
      pathTo(val) {
      console.log("val",val);
      this.$router.push(val.link)
    }
    }
   }`,
   events: [
        {
          prop: "name",
          label: "Event name",
          width: 30,
          type: "string",
          format: "",
        },
        {
          prop: "description",
          label: "Description",
          width: 800,
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
      attributes: [
        {
          prop: "name",
          label: "Name",
          width: 30,
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
          width: 350,
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
      table_data: [
        {
          name: "separator",
          description: "Specify the separator between list",
          type: "symbols",
          accepted_values: "[>,/,-,>>]",
          default: "/",
          mandatory: "false",
        },
        {
          name: "items",
          description: "Specify the array",
          type: "Array",
          accepted_values: "array of values",
          default: "-",
          mandatory: "true",
        },
      ],
      event_data:[
         {
           name:'path',
           description:'Emits the option chosen',
           parameters:'-'
         },
       ],
        
    };
  },
  methods: {
    showCode(val) {
      document.getElementById(val + "-icon").classList.toggle("active-icon");
      if (document.getElementById(val).style.display === "none") {
        document.getElementById(val).style.display = "block";
      } else if (document.getElementById(val).style.display === "block") {
        document.getElementById(val).style.display = "none";
      }
    },
    pathTo(val) {
      console.log("val",val);
      this.$router.push(val.link)
    },
  },
};
</script>