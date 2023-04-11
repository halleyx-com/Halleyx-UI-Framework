<template>
<h1 class="component-heading">Search
</h1>
  <p class="component-description">
    The Search component gives a website search functionality and displays search results so that users may quickly find relevant material and view results.  </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>
    <p class="component-description">To customise the style of search bar set <b>:search_style</b> to "style1" or "style2" or "style3".</p>
    <!-- <br> -->
  <div class="component-example">
    <div class="example-body">
      <div class="box">
<hlx-search @searchkey="search" />
</div>
<div class="box">
<hlx-search @searchkey="search" :search_style="'style2'"/>
</div>
<div class="box">
<hlx-search @searchkey="search" :search_style="'style3'"/>
</div>
</div>
    <div class="example-footer">
      <span class="icon" id="basic-search-icon" @click="showCode('basic-search')"><i class="icon-code-regular"></i></span>
    </div>
  </div>
<h1 class="component-side-heading">Example
</h1>
  <p class="component-description">
   Use the <b>@searchkey</b> event to access the text captured by the search bar. 
  </p>
  <div class="component-example">
    <div class="example-body">
<div class="box">
<hlx-search @searchkey="search" :search_style="'style3'"/>
<div style="margin-top:20px;margin-left:20px">
<ul v-for="(i,index) in this.data_arr_clone" :key="index" style="font-size:14px;color:#191a15;margin-top:5px">
<li>{{i}}</li>
</ul>
</div>
</div>
</div>
    <div class="example-footer">
      <span class="icon" id="basic-search-icon" @click="showCode('basic-search')"><i class="icon-code-regular"></i></span>
    </div>
  </div>
  <div class="source-code" id="basic-search" style="display: none">
    <section class="example-source-wrapper">
        <div class="source">
          <CodeEditor
             :id="'editor'"  :display_language="false"
            :value="search_source"
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
        :width="i.width"
        :key="index"
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
  <!-- <hlx-table-component :tableData="this.searchAttributes.table_data" :theader="this.searchAttributes.columns" :height="'max-content'"/> -->

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
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  </template>

<script>
import hlxSearch
 from '../components/SearchComponent.vue'
 import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
import divider from '../components/DividerComponent.vue'
import CodeEditor from 'simple-code-editor'

export default {
  components: {
    hlxSearch
,
hlxTableCell,
    hlxTableHead,
    hlxTable,
    divider,
    CodeEditor
  },
  data () {
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
      editor_theme: "light",
       searchkey:'',
       data_arr:["JavaScript","Python","Java","PHP","Swift","Ruby","SQL"],
       data_arr_clone:["JavaScript","Python","Java","PHP","Swift","Ruby","SQL"],
             table_data:[{
        name:'search_style',
        description:'Choose your style for searchbar',
        type:'String',
        accepted_values:'syle1, style2, style3',
        default:'style1',
        mandatory:false
      }],
          event_data:[
      {
        name:'searchkey',
        description:'Emits the keyword to search',
        parameter:'(text searched)'
      }
    ],
      search_source:
      `
<template>
<hlx-search @searchkey="search" :search_style="'style1'"/> </template>

<script>
export default{
    data(){
        return{
           searchkey:''
        }
    },
    methods:{
        search(key){
          this.searchkey = key
        }
    }
}
</\script>`,
direction: 'vertical'

    }
  },
  methods: {
    showCode (val) {
      document.getElementById(val + '-icon').classList.toggle('active-icon')
      if (document.getElementById(val).style.display === 'none') {
        document.getElementById(val).style.display = 'block'
      } else if (document.getElementById(val).style.display === 'block') {
        document.getElementById(val).style.display = 'none'
      }
    },
      search(key){
      this.searchkey = key
      if(this.searchkey!=''){
        this.data_arr_clone = this.data_arr_clone.filter(function (entry) { return entry.toLowerCase().includes(key.toLowerCase())})
      }else{
        this.data_arr_clone = this.data_arr
      }
      // console.log(key,"This is the keyword to search")
    }
  }
}
</script>


