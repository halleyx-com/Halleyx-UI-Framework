<template>
  <h1 class="component-heading">Text Editor</h1>
  <p class="component-description">
A text editor is a type of program used for editing plain text files.
  </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic modal</h2>
  <p class="component-description">
    To specify the list of fonts use the attribute <b> :setFont</b>
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlxtexteditor @currentChange = check :setFont="this.fontvalue"  ></hlxtexteditor>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-model-icon" @click="showCode('basic-model')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-model" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_modal"
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
  <h2 class="component-side-heading">Events</h2>
  <!-- <hlx-table
    :data="this.event_data"
    :border="true"
    theme="secondary"
    :rowHover="true"
    :bold_header="true"
  >
    <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
    <hlx-column :prop="'Description'" :label="'Description'" :type="'string'" />
    <hlx-column :prop="'Parameters'" :label="'Parameters'" :type="'string'" />
  </hlx-table> -->
    <hlx-table
    :columnCount="this.theads"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head v-for="(i, index) in this.alertAttributes" :key="index" :width="i.width">{{
        i.label
      }}</hlx-table-head>
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.event_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.alertAttributes"
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
import divider from "../components/DividerComponent.vue";
import hlxtexteditor from "../components/TexteditorComponent.vue";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
import CodeEditor from "simple-code-editor";

export default {
  name: "TexteditorView",
  components: {
    divider,
    hlxtexteditor,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    CodeEditor
  },
  data() {
    return {
            basic_modal: `
      <template>      
      <hlxtexteditor @currentChange = check :setFont="this.fontvalue"></hlxtexteditor>
      </template>

      <script>
            data() {
              return {
              fontvalue:[
              {name:'Times New Roman',id:'24',checked:false},
              {name:'Arial',id:'28',checked:false},
              {name:'Cursive',id:'278',checked:false},
              {name:'OpenSans',id:'2844',checked:true},
              {name:'QuickSand',id:'2896',checked:false},
              {name:'OstrichSans',id:'8560',checked:false}
            ],
              },
            methods:{
              check(val){
                console.log(val,'Texteditor value');
              },
        }
`,
      editor_theme: "light",
      fontvalue:[
              {name:'Times New Roman',id:'24',checked:false},
              {name:'Arial',id:'28',checked:false},
              {name:'Cursive',id:'278',checked:false},
              {name:'OpenSans',id:'2844',checked:true},
              {name:'QuickSand',id:'2896',checked:false},
              {name:'OstrichSans',id:'8560',checked:false}
            ],
      event_data: [
        {
          Name: "customValue",
          Description: "To return the value inside the texteditor",
          Parameters: "-",
        },
        {
          Name: "currentChange",
          Description: "Return the value when being typed",
          Parameters: "-",
        },
         {
          Name: "input",
          Description:
            "triggers when content is being typed inside the texteditor",
          Parameters: "-",
        },
      ],
            alertAttributes: [
        {
          prop: "Name",
          label: "Name",
          width: 100,
          type: "string",
          format: "",
        },
        {
          prop: "Description",
          label: "Description",
          width: 450,
          type: "string",
          format: "",
        },
        {
          prop: "Parameters",
          label: "Parameters",
          width: 450,
          type: "string",
          format: "",
        },
      ],
      input_events_data: [
        {
          Name: "input",
          Description:
            "triggers when content is being typed inside the texteditor",
          Parameters: "-",
        },
      ],
    };
  },
  methods:{
    check(val){
      // console.log(val,'Texteditor value');
    },
    showCode(val) {
      document.getElementById(val + "-icon").classList.toggle("active-icon");
      if (document.getElementById(val).style.display === "none") {
        document.getElementById(val).style.display = "block";
      } else if (document.getElementById(val).style.display === "block") {
        document.getElementById(val).style.display = "none";
      }
    },
  }
};
</script>

<style scoped>
.example-body {
  overflow: none;
}
</style>
