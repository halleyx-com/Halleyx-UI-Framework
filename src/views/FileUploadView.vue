<template>
  <h1 class="component-heading">File upload</h1>
  <p class="component-description">
    File uploading is a facility for accepting and managing user files, including photos, videos, PDFs, and other documents.
  </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    Specify the type of file and file size limit using the <b>:file_type</b> and <b>:file_size_limit</b> attributes respectively.
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-file-upload :file_type="'.xlsx,.png,.json'" :file_size_limit="'20mb'" :custom_icon="this.icon" :type="'button'"/>
      
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-file-upload-icon"
        @click="showCode('basic-file-upload')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-file-upload2" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
           :id="'editor'"  :display_language="false"
          :value="file_upload_source"
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

  <h2 class="component-side-heading">Example</h2>
  <p class="component-description">
    Specify the type of upload bys setting the<b> :type </b>attribute to 'button' or 'regular'.
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-file-upload :file_type="'.xlsx,.png,.json'" :file_size_limit="'20mb'" :custom_icon="this.icon" :type="'regular'"/>
      <!-- <hlx-file-upload :file_type="'.xlsx,.png,.json'" :file_size_limit="'20mb'" @file_data = "fileData" @delete_file="deleteFile" @preview_file="previewFile" :custom_icon="this.icon" :type="'regular'"/> -->
      
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-file-upload-icon2"
        @click="showCode('basic-file-upload2')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-file-upload2" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
           :id="'editor'"  :display_language="false"
          :value="file_upload_source2"
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
  <!-- <hlxTable :data="this.fileuploadAttributes"
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
   <h2 class="component-side-heading">Events</h2>
   <hlx-table
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
    :columnCount="3"
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
   <!-- <hlx-table
    :data="this.fileuploadEvents"
    :border="true"
    theme="secondary"
    :rowHover="true"
    :bold_header="true"
  >
    <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
    <hlx-column :prop="'Description'" :label="'Description'" :type="'string'" :width="400"/>
    <hlx-column :prop="'Parameters'" :label="'Parameters'" :type="'string'" />
  </hlx-table> -->
</template>

<script>
import hlxFileUpload from "../components/FileUploadComponent.vue";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";

import divider from "../components/DividerComponent.vue";
import CodeEditor from "simple-code-editor";

export default {
  name: "App",
  components: {
    hlxFileUpload,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    divider,
    CodeEditor,
  },
  data() {
    return {
      events: [
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
          width: "600",
          type: "string",
          format: "",
        },
        {
          prop: "parameter",
          label: "Parameter",
          width: "200",
          type: "string",
          format: "",
        },
      ],
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
        icon: "icon-eye-regular",
      editor_theme: "light",
                  table_data:[
                    {
        name:'file_type',
        description:'Specify the file extension',
        type:'String',
        accepted_values:'-',
       default: "-",
mandatory: true
      },
                    {
        name:'type',
        description:'Specify the type',
        type:'String',
        accepted_values:'-',
       default: "-",
mandatory: true
      },
      {
        name:'file_size_limit',
        description:'Specify the size limit for files (in mb)',
        type:'String',
        accepted_values:'-',
       default: "-",
mandatory: true
      },
      {
        name:'cutom_icon',
        description:'Specify the icon for custom function',
        type:'String',
        accepted_values:'-',
       default: "-",
mandatory: false
      },
    ],
                        event_data:[
        {
         name:'file_data',
          description:
            "emits the uploaded file data",
          parameter:""
        },
        {
         name:'delete_file',
          description:
            "emits the empty file data",
          parameter:""
        },
        {
         name:'preview_file',
          description:
            "emits the file data",
          parameter:""
        },
        
      ],
      file_upload_source: `
<template>
 <hlx-file-upload :file_type="'.xlsx,.png'" :file_size_limit="'20mb'" :type="'button'"/>
</template>`,
      file_upload_source2: `
<template>
 <hlx-file-upload :file_type="'.xlsx,.png'" :file_size_limit="'20mb'" :type="'regular'"/>
</template>`,
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
    // deleteFile(file){
    //   console.log(file,"pp");
    // } 
  },
};
</script>
