<template>
    <h1 class="component-heading">Switch</h1>

     <p class="component-description">
A switch allows the user to change a setting among any number of states.</p>
     <divider :position="'horizontal'" :space="'20px'" />
     <h1 class="component-side-heading">Basic usage</h1>
     <p class="component-description">Supply the options for your switch component using the <b>:switch_items</b> attribute.</p>
     <p class="component-description">Choose the type of your button group <b>:type</b> attribute.</p>
     <div class="component-example">
       <div class="example-body">
        <!-- <div class="temp-container"> -->
   <hlx-switch :switch_items="this.switch_items" @chosen="chosen" :id="this.unique" :type="'regular'" />
<!-- </div> -->

       </div>
       <div class="example-footer">
         <span class="icon" id="basic-switch-icon" @click="showCode('basic-switch')"><i class="icon-code-regular"></i></span>
       </div>
     </div>
   
     <div class="source-code" id="basic-switch" style="display: none">
       <section class="example-source-wrapper">
         <div class="source">
           <CodeEditor
              :id="'editor'"  :display_language="false"
             :value="switch_source"
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
   
   </template>
   
   
     
   <script>
   import hlxSwitch from '../components/SwitchComponent.vue'
   import divider from "../components/DividerComponent.vue";
   import CodeEditor from "simple-code-editor";
   import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
   export default {
   components:{
       hlxSwitch,
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
   
      //        switch_items: [
      //   {
      //     name: "Manual",
      //     icon: "",
      //     checked: true,
      //   },
      //   {
      //     name: "API",
      //     checked: false,
      //   },
      //   {
      //     name: "Upload",
      //     icon: "icon-file-tick",
      //     checked: false,
      //   },
      // ], 
      switch_items:[{ name: "Monthly billing", checked: true, icon:'icon-dollar-circle-regular'}, { name: "Annual billing"}, { name: "Custom billing"}],
               switch_source: `
   <template>
    <hlx-switch :switch_items="this.switch_items" @chosen="chosen" :type="'regular'" :position="'bottom'"/>
   </template>
   
   <script>
   export default{
       data(){
           return{
            switch_items:[{ name: "Monthly billing", checked: true,  icon:'icon-dollar'}, { name: "Annual billing"}, { name: "Custom billing"}],

             }
           }
         }
       }
       <\/script>`,
                   table_data:[
                    {
           name:'switch_items',
           description:'Include your list for switch items',
           type:'Array of objects',
           accepted_values:'[{}]',
           default:'-',
           mandatory: true
         },
                    {
           name:'type',
           description:'Choose the type of switch',
           type:'String',
           accepted_values:'tab / regular',
           default:'-',
           mandatory: true
         },
                    {
           name:'position',
           description:'Choose the position of switch',
           type:'String',
           accepted_values:'top / bottom',
           default:'-',
           mandatory: true
         },
         ],
                   event_data:[
         {
           name:'chosen',
           description:'Emits the option chosen',
           parameters:'-'
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
   
   <style lang="scss">
   .temp-container{
    width: 500px
   }
   </style>