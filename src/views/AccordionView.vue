<template>
  <h1 class="component-heading">Accordion</h1>

  <p class="component-description">
The accordion component allows the user to show and hide sections of related content on a page.
The accordion component delivers large amounts of content in a small space through progressive disclosure. </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <!-- <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    To switch between viewing multiple/single expanded item, change the value to
    true/false in accordion attribute.
  </p> -->
  <h2 class="component-side-heading">Basic usage</h2>
    <p class="component-description">To switch between viewing multiple/single expanded item, change the value to true/false in <b>:multiple</b> attribute.</p>
  <div class="component-example">
    <div class="example-body">
      <div class="acc-container">
      <hlx-accordion :accordion_data="this.example_data" :multiple="false" v-for="(e, index) in this.example_data" :key="index" >
        <template #item-title>
            {{ e.title }}
          </template>
          <template #item-body>
            {{ e.content }}

          </template>
        </hlx-accordion>
      </div>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-accordion-icon"
        @click="showCode('basic-accordion')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-accordion" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
           :id="'editor'"  :display_language="false"
          :value="accordion_source"
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
        <!-- <hlxTable :data="this.accordionAttributes"
    :border="true"
    theme="secondary"
    :rowHover="true"
    :ellipses="5"
    :bold_header="true">
    <hlx-column :prop="'name'" :label="'Name'" :type="'string'" />
    <hlx-column :prop="'description'" :label="'Description'" :type="'string'" />
    <hlx-column :prop="'default'" :label="'Default'" :type="'string'" />
    <hlx-column :prop="'type'" :label="'Type'" :type="'string'" :width="200"/>
    <hlx-column :prop="'accepted_values'" :label="'Accepted values'" :type="'string'"/>
    <hlx-column :prop="'mandatory'" :label="'Mandatory'" :type="'string'" />
</hlxTable> -->
</template>

<script>
import hlxAccordion from "../components/AccordionComponent.vue";
// import hlxTable from "../components/NewTable.vue"
// import hlxColumn from '../components/NewTableColumn.vue'
import hlxSwitch from '../components/SwitchComponent.vue'
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";

import divider from "../components/DividerComponent.vue";
import CodeEditor from "simple-code-editor";

export default {
  components: {
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    hlxAccordion,
    divider,
    CodeEditor,
    hlxSwitch
  },
  data() {
    return {
      switch_items: [{name: "value", checked: true}, { name: "Expression", checked: false } ],
      editor_theme: "light",
      example_data: [
        {
          title: "Header1",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Header2",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          title: "Header3",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
      table_dataa: [
        {
          name: "icon",
          description: "Pass the icon class in icon section",
          type: "String",
          accepted_values: "icon names",
          default: "-",
          mandatory: true,
        },
        {
          name: "count",
          description: "Pass the count of the notification",
          type: "Integer",
          accepted_values: 3,
          default: "-",
          mandatory: true,
        },
      ],
      attributes: [
        {
          prop: "name",
          label: "Attributes",
          width: "50",
          type: "string",
          format: "",
        },
        {
          prop: "description",
          label: "Description",
          width: "50",
          type: "string",
          format: "",
        },
        {
          prop: "type",
          label: "Type",
          width: "50",
          type: "string",
          format: "",
        },
        {
          prop: "accepted_values",
          label: "Accepted values",
          width: "50",
          type: "string",
          format: "",
        },
        {
          prop: "default",
          label: "Default",
          width: "50",
          type: "string",
          format: "",
        },
        {
          prop: "mandatory",
          label: "Mandatory",
          width: "50",
          type: "string",
          format: "",
        },
      ],
      table_data:[{
        name:'accordion_data',
        description:'Include your data for accordion',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory:true
      },
      {
        name:'multiple',
        description:'Toggle to expand one/multiple panels at a time',
        type:'Boolean',
        accepted_values:'true, false',
        default:'true',
        mandatory:false
      }],

      accordion_source: `
<template>
  <div class="acc-container">
      <hlx-accordion :accordion_data="this.example_data" :multiple="false" v-for="(e, index) in this.example_data" :key="index" >
        <template #item-title>
            {{ e.title }}
          </template>
          <template #item-body>
            {{ e.content }}

          </template>
        </hlx-accordion>
      </div>
      </template>

<script>
export default{
    data(){
        return{
        example_data:[
        {
          "title":"Header1",
          "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "title":"Header2",
          "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "title":"Header3",
          "content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      ]
        }
    }
}
}
</\script>

<style>
.acc-container{
    display: flex;
    flex-direction: column;
    gap:0 !important;
    width: 100%;
    border: 1px solid #d8d8d8;
    border-bottom: 0;
    border-radius: 5px;
  }
</\style>`,

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
  },
};
</script>

<style lang="scss" scoped>
.dummy{
  width: 100%;

}
</style>
