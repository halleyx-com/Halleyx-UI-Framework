<template>
  <h1 class="component-heading">Import progress bar</h1>
  <p class="component-description">
ProgressBar Component provides a way to show the progress of any tasks/activity to the user in the form of the progress bar.
  </p>
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    Set <b>:tooltip</b> to <b>true</b> view the percentage of loader<br />
    Define strokeWidth specify <b>:strokeWidth</b> and <b> :progress</b> to
    describe the import progress stage<br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-import-progress
        :tooltip="true"
        :progress="this.progress"
        :strokeWidth="20"
      />
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-importProgress-icon"
        @click="showCode('basic-importProgress')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-importProgress" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="importProgress_source"
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
        v-for="(i, index) in this.progressbarAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.progressbarAttributes"
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
import HlxImportProgress from "../components/ImportProgressComponent.vue";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
import CodeEditor from "simple-code-editor";

export default {
  name: "ImportProgressView",
  components: {
    CodeEditor,
    HlxImportProgress,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
  },
  data() {
    return {
      editor_theme: "light",
      progress: 10,
      table_data: [
        {
          attribute: "progress",
          description: "To describe the import progress stage",
          type: "String",
          accepted_values: "-",
          default: "-",
          mandatory: true,
        },
        {
          attribute: "tooltip",
          description: "To enable the tooltip",
          type: "Boolean",
          accepted_values: "true,false",
          default: "false",
          mandatory: false,
        },
        {
          attribute: "strokeWidth",
          description: "The width of progress bar",
          type: "Number",
          accepted_values: "-",
          default: "20",
          mandatory: false,
        },
      ],
      progressbarAttributes: [
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

      importProgress_source: `
<template>
  <hlx-import-progress
  :tooltip="true"
  :progress="this.progress"
  :strokeWidth="20"
  />
</template>

<script>
export default {
  data(){
    return{
      progress:1,
    }
  },
  mounted() {
    let interval = setInterval(() => {
      if (this.progress < 75) {
        this.progress += 2;
      } else {
        this.progress -= 5;
      }
    }, 200);
    setTimeout(() => {
      // this.progress = 100;
      clearInterval(interval);
    }, 15000);
  },
}
<\/script>

<style>

</style>
        `,
    };
  },
  mounted() {
    let interval = setInterval(() => {
      if (this.progress < 75) {
        this.progress += 2;
      } else {
        this.progress -= 5;
      }
    }, 200);
    setTimeout(() => {
      // this.progress = 100;
      clearInterval(interval);
    }, 15000);
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
