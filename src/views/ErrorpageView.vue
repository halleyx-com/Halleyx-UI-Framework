<template>
  <!-- <hlx-errorpage/>
  <divider :position="'horizontal'" :space="'20px'" />
        <h2 class="component-side-heading">Usage</h2>
<div><pre>{{this.source}}</pre></div> -->
<h1 class="component-heading">Error page</h1>
  <p class="component-description">
    A web page designated as an error page will be shown when a request results in an HTTP error response code.</p>       <divider :position="'horizontal'" :space="'20px'" />
<h1 class="component-side-heading">Basic usage</h1>
  <p class="component-description">Set the error code for your error page using the <b>:error_code</b> attribute</p>
  <p class="component-description">Define the error message using the <b>:error_message</b> attribute</p>
<div class="component-example">

    <div class="example-body">
      <hlx-errorpage :error_code="404" :error_message="`Page not found !`"/>    </div>
    <div class="example-footer">
      <span class="icon" id="basic-errorpage-icon" @click="showCode('basic-errorpage')"><i class="icon-code-regular"></i></span>
    </div>
  </div>

  <div class="source-code" id="basic-errorpage" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
           :id="'editor'"  :display_language="false"
          :value="errorpage_source"
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
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
    :columnCount="6"
  >
    <template #thead>
      <hlx-table-head
        v-for="(i, index) in this.attributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
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
</template>

<script>
import hlxErrorpage from '../components/ErrorpageComponent.vue'
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
import divider from "../components/DividerComponent.vue";
import CodeEditor from "simple-code-editor";
export default {
  components: {hlxErrorpage, CodeEditor, divider, hlxTableCell,
    hlxTableHead,
    hlxTable,},
  data(){
    return{
      attributes: [
        {
          prop: "name",
          label: "Name",
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
      editor_theme: "light",
            table_data:[{
        name:'error_code',
        description:'Specify the error code.',
        type:'Number',
        accepted_values:'-',
        default:'-',
        mandatory:false
      },{
        name:'error_message',
        description:'Describe the error message.',
        type:'String',
        accepted_values:'-',
        default:'-',
                mandatory:false

      }
      ],
            errorpage_source:
      `
<template>
  <hlx-error-page :error_code="404" :error_message="Page not found !"/>
</template>`,
    }
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
}
</script>

<style>

</style>