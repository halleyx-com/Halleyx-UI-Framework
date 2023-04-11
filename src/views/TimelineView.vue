


 <template>
<h1 class="component-heading">Timeline
</h1>
  <p class="component-description">
    The most effective technique to present chronological events in a precise and organized manner is through a timeline.  </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <h1 class="component-side-heading">Basic usage</h1>
  <p class="component-description">Set the direction of flow for your timeline view to either vertical or horizontal using the <b>:view</b> attribute</p>
  <div class="component-example">
    <!-- <button class="direction1">Change view</button> -->
<!-- <div class="btn">     <hlx-button class="default border"  @click="myFunction()" style="width:120px;"
        >Change view</hlx-button></div> -->
    <div class="example-body">
 <hlx-timeline :timeline_data="this.example_data" :view="this.direction" :type="'regular'"/>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-timeline-icon" @click="showCode('basic-timeline')"><i class="icon-code-regular"></i></span>
    </div>
  </div>
  <div class="source-code" id="basic-timeline" style="display: none">
  <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
           :id="'editor'"  :display_language="false"
          :value="timeline_source"
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
  <h1 class="component-side-heading">Example</h1>
  <p class="component-description">Set the <b>:type</b> attribute to numbered to change the style of timeline attribute</p>
  <div class="component-example">
    <!-- <button class="direction1">Change view</button> -->
<!-- <div class="btn">     <hlx-button class="default border"  @click="myFunction()" style="width:120px;"
        >Change view</hlx-button></div> -->
    <div class="example-body">
 <hlx-timeline :timeline_data="this.example_data1" :view="'horizontal'" :type="'numbered'"/>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-timelinee-icon" @click="showCode('basic-timelinee')"><i class="icon-code-regular"></i></span>
    </div>
  </div>

  <div class="source-code" id="basic-timelinee" style="display: none">
  <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
           :id="'editor'"  :display_language="false"
          :value="timeline_source1"
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
import hlxTimeline
 from '../components/TimelineComponent.vue'
import divider from '../components/DividerComponent.vue'
import CodeEditor from 'simple-code-editor'
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
import hlxButton from "../components/ButtonComponent.vue";

export default {
  name: 'App',
  components: {
    hlxTimeline,
    divider,
    CodeEditor,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    hlxButton
  },
  data () {
    return {
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
        name:'timeline_data',
        description:'Include your data for timeline',
        type:'Array of objects',
        accepted_values:'[{}]',
        default: "-",
mandatory: true
      },
      {
        name:'view',
        description:'Choose the direction of flow for your timeline',
        type:'String',
        accepted_values:'horizontal/vertical',
        default: "-",
mandatory: true
      },
      {
        name:'type',
        description:'Choose the type of timeline',
        type:'String',
        accepted_values:'regular/numbered',
        default: "-",
mandatory: true
      }
    ],
example_data:[
        {
          "title":"Header1",
          "description" : "Sample description",
          "subtitle":"Subheader1",
          "active":false,
"visited":true
        },
        {
          "title":"Header2",
          "description" : "Sample description",
          "subtitle":"Subheader2",
          "active":false,
"visited":true
          
        },
        {
          "title":"Header3",
          "description" : "Sample description",
          "subtitle":"Subheader3",
          "active":true
        },
        {
          "title":"Header4",
          "description" : "Sample description",
          "subtitle":"Subheader4",
          "active":false
        },
        {
          "title":"Header5",
          "description" : "Sample description",
          "subtitle":"Subheader5",
          "active":false
        }
      ],
example_data1:[
        {
          "title":"Complete account setup",
          "description" : "",
          "subtitle":"",
          "active":false,
"visited":true
        },
        {
          "title":"Choose plan",
          "description" : "",
          "subtitle":"Subheader2",
          "active":true
        },
        {
          "title":"choose payment method",
          "description" : "Sample description",
          "subtitle":"Subheader3",
          "active":false
        },
        // {
        //   "title":"choose payment method",
        //   "description" : "Sample description",
        //   "subtitle":"Subheader3",
        //   "active":false
        // },
        // {
        //   "title":"Header4",
        //   "description" : "Sample description",
        //   "subtitle":"Subheader4",
        //   "active":false
        // },
        // {
        //   "title":"Header5",
        //   "description" : "Sample description",
        //   "subtitle":"Subheader5",
        //   "active":false
        // }
      ],
      timeline_source:
      `
<template>
<hlx-timeline :timeline_data="this.example_data" :view = "'vertical'" :type = "'regular'"/>
</template>

<script>
export default{
    data(){
        return{
          [
        {
          "title":"Header1",
          "description" : "Sample description",
          "subtitle":"Subheader1",
          "active":false,
          "visited":true
        },
        {
          "title":"Header2",
          "description" : "Sample description",
          "subtitle":"Subheader2",
          "active":false,
          "visited":true
          
        },
        {
          "title":"Header3",
          "description" : "Sample description",
          "subtitle":"Subheader3",
          "active":true,
          "visited":false
          
        },
        {
          "title":"Header4",
          "description" : "Sample description",
          "subtitle":"Subheader4",
          "active":false,
          "visited":false
        },
        {
          "title":"Header5",
          "description" : "Sample description",
          "subtitle":"Subheader5",
          "active":false,
          "visited":false
        }
      ]

        }
    }
}
}
</\script>`,
      timeline_source1:
      `
<template>
<hlx-timeline :timeline_data = "this.example_data" :view = "'horizontal'" :type = "'numbered'"/>
</template>

<script>
export default{
    data(){
        return{
          [
        {
          "title":"Header1",
          "description" : "Sample description",
          "subtitle":"Subheader1",
          "active":false,
          "visited":true
        },
        {
          "title":"Header2",
          "description" : "Sample description",
          "subtitle":"Subheader2",
          "active":false,
          "visited":true
          
        },
        {
          "title":"Header3",
          "description" : "Sample description",
          "subtitle":"Subheader3",
          "active":true,
          "visited":true
        },
        {
          "title":"Header4",
          "description" : "Sample description",
          "subtitle":"Subheader4",
          "active":false,
          "visited":true
        },
        {
          "title":"Header5",
          "description" : "Sample description",
          "subtitle":"Subheader5",
          "active":false,
          "visited":false
        }
      ]

        }
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
    myFunction(){
      if(this.direction == 'vertical'){
        this.direction = 'horizontal'
      }else if(this.direction == 'horizontal'){
        this.direction = 'vertical'
      }
    }
  }
}
</script>


