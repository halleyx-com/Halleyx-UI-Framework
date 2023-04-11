<template>
 <h1 class="component-heading">Speed dial</h1>
  <p class="component-description">
A Speed Dial component is like a dialog with multiple floating action buttons. It can be used to make any primary actions like share, copy, print, etc. more accessible and make the user experience better.</p>  <divider :position="'horizontal'" :space="'20px'" />
  <h1 class="component-side-heading">Basic usage</h1>
  <p class="component-description">Set the direction of flow for your menu items to either vertical or horizontal using the <b>:direction</b> attribute</p>
  <div class="component-example">
    <div class="example-body">
<hlx-speeddial :speed_dial_data="this.speed_dial_data" @iconChosen="iconChosen" :direction="'vertical'"/>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-speed-dial-icon" @click="showCode('basic-speed-dial')"><i class="icon-code-regular"></i></span>
    </div>
  </div>

  <div class="source-code" id="basic-speed-dial" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
           :id="'editor'"  :display_language="false"
          :value="speed_dial_source"
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
   <h2 class="component-side-heading">Events</h2>
   <hlx-table
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :columnCount="3"
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
          {{ i[j.prop]  }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>

</template>


  
<script>
import hlxSpeeddial from '../components/SpeeddialComponent.vue'
import divider from "../components/DividerComponent.vue";
import CodeEditor from "simple-code-editor";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
export default {
components:{
    hlxSpeeddial,
    divider,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    CodeEditor,
},
data(){
  return{
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
          editor_theme: "light",

    speed_dial_data:
      {
        parent_icon:'icon-share-filled',
        children_icon:[
          'icon-facebook-f-filled',
          'icon-instagram-filled',
          'icon-twitter-filled'
        ]
      },
            speed_dial_source: `
<template>
  <hlx-speed-dial :speed_dial_data="this.speed_dial_data" @iconChosen="iconChosen" :direction="'vertical'"/>
</template>

<script>
export default{
    data(){
        return{
          speed_dial_data:
      {
        parent_icon:'icon-share',
        children_icon:[
          'icon-cart',
          'icon-bulb',
          'icon-rocket'
        ]
      },
          }
        }
      }
    }
    <\/script>`,
               table_data:[{
        name:'speed_dial_data',
        description:'Include your data for speed dial.',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory: true
      },
      {
        name:'direction',
        description:'Choose the direction of flow for your menu items',
        type:'String',
        accepted_values:'horizontal, vertical',
        default:'-',
        mandatory: true
      }],
                event_data:[
      {
        name:'iconChosen',
        description:'Emits the icon chosen',
        parameter:'-'
      },
    ],
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