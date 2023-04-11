<template>
    <h1 class="component-heading">Context menu</h1>
     <p class="component-description">
      A contextual menu is a type of menu that appears on demand and contains a small set of relevant actions related to a control</p>
     <divider :position="'horizontal'" :space="'20px'" />
     <h1 class="component-side-heading">Basic usage</h1>
     <p class="component-description">Supply the options for your context-menu component using the <b>:options</b> attribute.</p>
     <div class="component-example">
       <div class="example-body">
        <span class="tempp-container" >  <hlx-button class="primary tempp-container"  @click="display()">Click me</hlx-button>

   <hlx-context-menu :options="this.options" @chosen="receivedVal"  :show="this.clicked"/>
        </span>
       </div>
       <div class="example-footer">
         <span class="icon" id="basic-context-menu-icon" @click="showCode('basic-context-menu')"><i class="icon-code-regular"></i></span>
       </div>
     </div>
   
     <div class="source-code" id="basic-context-menu" style="display: none">
       <section class="example-source-wrapper">
         <div class="source">
           <CodeEditor
              :id="'editor'"  :display_language="false"
             :value="contextmenu_source"
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
       <!-- <hlxTable :data="this.contextmenuAttributes"
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
       :data="this.contextmenuEvents"
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
   import hlxButton from '../components/ButtonComponent.vue'
   import hlxContextMenu from '../components/ContextMenuComponent.vue'
   import divider from "../components/DividerComponent.vue";
   import CodeEditor from "simple-code-editor";
   import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
   export default {
   components:{
    hlxButton,
       hlxContextMenu,
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
             clicked: false,
             options:[
          {
              label:"Expressions",
              checked: true,
          },
          {
              label:"Rules",
              icon:"icon-activity-circle-regular",
              checked: false,            
          }
      ],
               contextmenu_source: `
   <template>
    <hlx-context-menu :options="this.options" @chosen="chosen" :show="this.clicked"/>
   </template>
   
   <script>
   export default{
       data(){
           return{
            options:[
          {
              label:"Expressions",
              checked: true            
          },
          {
              label:"Rules",
              icon:"icon-activity-circle-regular",
              checked: false           
          }
      ],
             }
           }
         }
       <\/script>`,
                   table_data:[
                    {
           name:'options',
           description:'Include your list for context menu items.',
           type:'Array of objects',
           accepted_values:'[{}]',
           default:'-',
           mandatory: true
         },
                    {
           name:'show',
           description:'Toggle visibility of the context menu.',
           type:'Boolean',
           accepted_values:'true / false',
           default:'false',
           mandatory: true
         },
         ],
                   event_data:[
         {
           name:'chosen',
           description:'Emits the option chosen',
           parameter:'-'
         },
       ],
     }
   },
   mounted() {
    window.addEventListener('click',this.hide)
  },
       methods: {
        hide(e){
        
        if(event.target.classList.contains('tempp-container') == false){
          this.clicked = false
        }
    // }
    },

        receivedVal(name){
          // this.clicked = false
          this.clicked = false
        }, 

       showCode(val) {
         document.getElementById(val + "-icon").classList.toggle("active-icon");
         if (document.getElementById(val).style.display === "none") {
           document.getElementById(val).style.display = "block";
         } else if (document.getElementById(val).style.display === "block") {
           document.getElementById(val).style.display = "none";
         }
       },
       display(){
         if(event.target.classList.contains('tempp-container') == true){
          if(this.clicked == true){
            this.clicked = false
          }else{
            this.clicked = true
          }

         }else{
          // console.log('hello',event.target.className,"ki")
          this.clicked = false
         }
       }
     },
   }
   </script>
   
   <style lang="scss">

   </style>