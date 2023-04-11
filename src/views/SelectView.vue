<template>
<!-- {{this.data.key}}
{{this.data}} -->

  <h1 class="component-heading">Select</h1>
  <p class="component-description">
The select component collects user-provided information from a list of options. Selects are usually used in forms where a user submits data and chooses one option from a list.
  </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>

  <p class="component-description">
    To specify input for the dropdown<b> :options</b><br />
    To display custom placeholder, add <b>:placeholder_value</b> attribute which
    takes in a string value <br />
    You can also toggle label animation to On/Off by setting
    <b>:label_animation</b> attribute to <b>true</b> To clear the selected value
    use <b>:clearable</b> to <b>true</b><br />
    The selected value can be accessed from the <b>v-model:value</b> attribute<br>
    The selected name can be accessed from the <b>v-model:name</b> attribute<br>
  </p>
    <div class="component-example">
    <div class="example-body">
      <hlxselect
        :options="this.dropdown_data"
        :placeholder_value="'Language'"
        :labelanimation="true"
        v-model:value ="this.data.key"
        :clearable="true"
      ></hlxselect>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-select-icon"
        @click="showCode('basic-select')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-select" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_select"
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
  <p>    Pre-populate the select with value of the option using the :prevalue attribute </p>
  <div class="component-example">
    <div class="example-body">
      <hlxselect
        :options="this.dropdown_data"
        :placeholder_value="'Language'"
        :labelanimation="true"
        v-model:value ="this.data.key"
        :clearable="true"
        :prevalue="this.prevalue"
      ></hlxselect>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-select1-icon"
        @click="showCode('basic-select1')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-select1" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_select1"
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
  <h2 class="component-side-heading">Select with icons</h2>

  <p class="component-description">
    To have icon inside the select refer the table below<br />
    To specify input for the dropdown<b> :options</b><br />
    To display custom placeholder, add <b>:placeholder_value</b> attribute which
    takes in a string value <br />
    You can also toggle label animation to On/Off by setting
    <b>:label_animation</b> attribute to <b>true</b> To clear the selected value
    use <b>:clearable</b> to <b>true</b><br />
    To add country flag inside the select use <b>:icon</b> to <b>true</b>
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlxselect
        :options="this.new_data"
        :placeholder_value="'CountryFlag'"
        :labelanimation="true"
        :icon="true"
        @customChange="selectValue"
      ></hlxselect>
      <!-- <hlxselect :options="this.dropdown_data" :placeholder_value="'hello'" :labelanimation="true" :clearable="true"  @customChange="selectValue"></hlxselect> -->
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-country-select-icon"
        @click="showCode('basic-country-select')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-country-select" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_country_select"
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

  <h1 class="component-heading">Multiple select with search</h1>

  <p class="component-description">
    To enable multi-select use <b>:multi_select</b> to <b>true</b><br />
    To specify input for the dropdown<b> :multiselect_options</b><br />
    You can also toggle label animation to On/Off by setting
    <b>:label_animation</b> attribute to <b>true</b>
    You can also toggle search to on/off by setting
    <b>:searchable</b> attribute to <b> true </b>
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlxselect
        :multiselect_options="this.dropdown_data1"
        :multi_select="true"
        :placeholder_value="'Language'"
        :searchable="true"
        :labelanimation="true"
        v-model:value ="this.check"
        @customChange="selectValue"
      ></hlxselect>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-multiselect-icon"
        @click="showCode('basic-multiselect')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-multiselect" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_multiselect"
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


    <div class="component-example">
    <div class="example-body">
      <hlxselect
        :multiselect_options="this.dropdown_data1"
        :multi_select="true"
        :multiselect_prevalue="this.prevalue_data"
        :placeholder_value="'Language'"
        :labelanimation="true"
        v-model:value ="this.check"
        @customChange="selectValue"
      ></hlxselect>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-multiselect1-icon"
        @click="showCode('basic-multiselect1')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-multiselect1" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_multiselect1"
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

  <!-- <h1 class="component-heading">Multiple select for filter</h1>

  <p class="component-description">
    To enable multi-select use <b>:multi_select</b> to <b>true</b> and to enable
    cascade filter enable the <b>filter_select</b> to <b>true</b><br />
    To specify input for the dropdown<b> :multiselect_options</b><br />
    You can also toggle label animation to On/Off by setting
    <b>:label_animation</b> attribute to <b>true</b>
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlxselect
        :multiselect_options="this.dropdown_data1"
        :multi_select="true"
        :filter_select="true"
        :placeholder_value="'Language'"
        :labelanimation="true"
        @customChange="selectValue"
      ></hlxselect>  
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-multiselect-filter-icon"
        @click="showCode('basic-multiselect-filter')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-multiselect-filter" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_multiselect_filter"
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
  </div> -->

  <h1 class="component-heading">Select with inline search</h1>
  <p class="component-description">
     To enable inline search in select set <b>:inline_search</b> to <b>true</b> <br>
     The selected value and prevalue can be accessed from the <b>v-model</b> attribute<br>
  </p>
   <div class="component-example">
    <div class="example-body">
        <hlxselect
        :options="this.dropdown_data1"
        :placeholder_value="'Language'"
        :labelanimation="true"
        :inline_search="true"
        v-model="this.prevalue"
        @inlinevalue="checkval"
        @inlinereferencevalue="checkval1"
        @searchvalue="setvalue"
        @customChange="setvalue"
        @selectedvalue="setvalue1"
          ></hlxselect>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="inline-search-icon"
        @click="showCode('inline-search')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
    <div class="source-code" id="inline-search" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="inline_search"
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
  <!-- <hlx-table-component :tableData="this.data.table_data" :theader="this.data.columns" :border="true"/> -->
    <h2 class="component-side-heading">Select attributes</h2>
    <hlx-table
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
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
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
      
      <h2 class="component-side-heading">Events</h2>
      
      <hlx-table
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
  <h2 class="component-side-heading">Events</h2>
    <template #thead>
      <hlx-table-head v-for="(i, index) in this.selectevents" :key="index" :width="i.width">{{
        i.label
      }}</hlx-table-head>
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.select_events" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.selectevents"
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
// import hlxTable from "../components/NewTable.vue";
// import hlxColumn from "../components/NewTableColumn.vue";
  import axios from 'axios'
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
import divider from "../components/DividerComponent.vue";
import hlxselect from "../components/SelectComponent.vue";
import CodeEditor from "simple-code-editor";


export default {
  name: "App",
  components: {
    hlxselect,
    divider,
    CodeEditor,
    // hlxTable,
    // hlxColumn,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
  },
  data() {
    return {
      data:{key:''},
      prevalue:'Html',
      check:[],
      value12:'',
      selectvalue:'',
      prevalue_data:['Html','VueJs'],
      alertAttributes: [
        {
          prop: "attribute",
          label: "Attributes",
          width: 80,
          type: "string",
          format: "",
        },
        {
          prop: "description",
          label: "Description",
          width: 320,
          type: "string",
          format: "",
        },
        {
          prop: "type",
          label: "Type",
          width: 100,
          type: "string",
          format: "",
        },
        {
          prop: "accepted_values",
          label: "Accepted values",
          width: 200,
          type: "string",
          format: "",
        },
        {
          prop: "default",
          label: "Default",
          width: 100,
          type: "string",
          format: "",
        },
        {
          prop: "mandatory",
          label: "Mandatory",
          width: 100,
          type: "string",
          format: "",
        },
      ],
      selectevents:[
          {
          prop: "name",
          label: "Name",
          width: 150,
          type: "string",
          format: "",
        },
        {
          prop: "description",
          label: "Description",
          width: 450,
          type: "string",
          format: "",
        },
        {
          prop: "parameters",
          label: "Parameters",
          width: 450,
          type: "string",
          format: "",
        },
      ],
      select_events:[  {
          name: "customChange",
          description: "Return the selected values from dropdown",
          parameters: "-",
        },
        {
           name: "searchvalue",
          description: "Emits the name of the newly added option whose inline search is true",
          parameters: "-",
        },
        {
           name: "selectedvalue",
          description: "Emits the selected value",
          parameters: "-",
        },
        {
           name: "inlinevalue",
          description: "Emits the name of the select whose inline seqarch is set to true",
          parameters: "-",
        },
        {
           name: "inlinereferencevalue",
          description: "Emits the value of the select whose inline seqarch is set to true",
          parameters: "-",
        },
        ],
      pre_value: [
        {
          id: 7,
          name: "Stuart",
        },
      ],
      new_data: [
                {
          id: 1,
          flag: 'in',
          name: 'India',
          code: '+91',
          checked: false
        },
        {
          id: 2,
          flag: 'ca',
          name: 'Canada',
          code: '+1',
          checked: false
        },
        {
          id: 3,
          flag: 'us',
          name: 'USA',
          code: '+1',
          checked: false
        },
        {
          id: 4,
          flag: 'cn',
          name: 'China',
          code: '+86',
          checked: false
        },
        {
          id: 5,
          flag: 'jp',
          name: 'Japan',
          code: '+81',
          checked: false
        },
        {
          id: 6,
          flag: 'kr',
          name: 'South Korea',
          code: '+82',
          checked: false
        },
        {
          id: 7,
          flag: 'br',
          name: 'Brazil',
          code: '+55',
          checked: false
        },
        {
          id: 8,
          flag: 'mx',
          name: 'Mexico',
          code: '+52',
          checked: false
        },
        {
          id: 9,
          flag: 'ru',
          name: 'Russia',
          code: '+7',
          checked: false
        },
        {
          id: 10,
          flag: 'au',
          name: 'Australia',
          code: '+61',
          checked: false
        },
        {
          id: 11,
          flag: 'gb',
          name: 'United Kingdom',
          code: '+44',
          checked: false
        },
        {
          id: 12,
          flag: 'fr',
          name: 'France',
          code: '+33',
          checked: false
        },
        {
          id: 13,
          flag: 'de',
          name: 'Germany',
          code: '+49',
          checked: false
        }
      ],

      table_data: [
        {
          attribute: "options",
          description:
            "Pass the list of items to be added in the dropdown list",
          type: "String",
          accepted_values: "Array of objects",
          default: "-",
          mandatory: true,
        },
        {
          attribute: "dropdown_data",
          description:
            "Pass the list of items to be added in the dropdown list",
          type: "String",
          accepted_values: "Array of objects",
          default: "-",
          mandatory: true,
        },
        {
          attribute: "title",
          description: "Pass the title",
          type: "String",
          accepted_values: "enter the title",
          default: "-",
          mandatory: false,
        },
        {
          attribute: "placeholder",
          description: "Pass the placeholder",
          type: "String",
          accepted_values: "enter the placeholder",
          default: "-",
          mandatory: false,
        },
        {
          attribute: "multi_select",
          description:
            "boolean value which specifies whether to enable muli select or not",
          type: "Boolean",
          accepted_values: "true/false",
          default: "-",
          mandatory: true,
        },
        {
          attribute: "prevalue",
          description:
            "pre-populate data in single select ",
          type: "String",
          accepted_values: "-",
          default: "-",
          mandatory: false,
        },
        {
          attribute: "multiselect_prevalue",
          description:
            "pre-populate data in multi select ",
          type: "Array",
          accepted_values: "-",
          default: "-",
          mandatory: false,
        },
        {
          attribute: "searchable",
          description:
            "enable searchable multi-select dropdown",
          type: "Boolean",
          accepted_values: "true/false",
          default: "-",
          mandatory: false,
        },
        {
          attribute: "inline_search",
          description:
            "enable inline search dropdown",
          type: "Boolean",
          accepted_values: "true/false",
          default: "-",
          mandatory: false,
        },
        {
          attribute: "background_color",
          description:
            "set background color for the input field",
          type: "Boolean",
          accepted_values: "true/false",
          default: "-",
          mandatory: false,
        },
        {
          attribute: "placeholder_color",
          description:
            "Change the placeholder in select",
          type: "Boolean",
          accepted_values: "true/false",
          default: "-",
          mandatory: false,
        },
        {
          attribute: "label_font_color",
          description:
            "Change the label font color in select",
          type: "Boolean",
          accepted_values: "true/false",
          default: "-",
          mandatory: false,
        },
        {
          attribute: "font_color",
          description:
            "Change the font color in select",
          type: "Boolean",
          accepted_values: "true/false",
          default: "-",
          mandatory: false,
        },
        {
          attribute: "label_background_color",
          description:
            "Change the label background color in select",
          type: "Boolean",
          accepted_values: "true/false",
          default: "-",
          mandatory: false,
        },
        {
          attribute: "top",
          description:
            "position the options container to the top",
          type: "Number",
          accepted_values: "0",
          default: "-",
          mandatory: false,
        },
        {
          attribute: "right",
          description:
            "position the options container to the right",
          type: "Number",
          accepted_values: "0",
          default: "-",
          mandatory: false,
        },
      ],
      editor_theme: "light",
      inline_search:`
<template>
        <hlxselect
        :options="this.dropdown_data1"
        :placeholder_value="'Language'"
        :labelanimation="true"
        :inline_search="true"
        v-model="this.prevalue"
        @inlinevalue="checkval"
        @inlinereferencevalue="checkval1"
        @searchvalue="setvalue"
        @customChange="setvalue"
        @selectedvalue="setvalue1"
          ></hlxselect>
</template>
<script> 
    export default {
    data() {
      return{
        prevalue:'Html'
        dropdown_data: [
            { name: "Php", checked: false, disabled: false, value: "Php",icon:'icon-database-regular',id:1},
            { name: "VueJs", checked: false, disabled: false, value: "VueJs" ,icon:'icon-database-regular',id:2},
            { name: "ReactJs", checked: false, disabled: false, value: "ReactJs" ,icon:'icon-database-regular',id:3 },
            { name: "Html", checked: false, disabled: false, value: "Html" ,icon:'icon-database-regular' ,id:4},
            { name: "Css", checked: false, disabled: false, value: "Css" ,icon:'icon-database-regular' ,id:5},
            { name: "Scss", checked: false, disabled: false, value: "Scss" ,icon:'icon-database-regular' ,id:6},
            { name: "Sass", checked: false, disabled: false, value: "Sass" ,icon:'icon-database-regular' ,id:7},
            { name: "Sql", checked: false, disabled: false, value: "Sql" ,icon:'icon-database-regular',id:8 },
            { name: "MongoDB", checked: false, disabled: false, value: "MongoDB" ,icon:'icon-database-regular',id:9},
            { name: "Javascript", checked: false, disabled: false, value: "Javascriptq" ,icon:'icon-database-regular' ,id:10},
          ],
      }
    }
    }
      `,
      basic_country_select:`
           <template>
                  <hlx-select
                  :options="this.new_data"
                  :placeholder_value="'CountryFlag'"
                  :labelanimation="true"
                  :icon="true"
                  @customChange="selectValue"
                ></hlx-select>
                </template>
                <script> 
                export default {
                      data() {
                  return{
                          new_data: [
                                      {
                                id: 1,
                                flag: 'in',
                                name: 'India',
                                code: '+91',
                                checked: false
                              },
                              {
                                id: 2,
                                flag: 'ca',
                                name: 'Canada',
                                code: '+1',
                                checked: false
                              },
                              {
                                id: 3,
                                flag: 'us',
                                name: 'USA',
                                code: '+1',
                                checked: false
                              },
                              {
                                id: 4,
                                flag: 'cn',
                                name: 'China',
                                code: '+86',
                                checked: false
                              },
                              {
                                id: 5,
                                flag: 'jp',
                                name: 'Japan',
                                code: '+81',
                                checked: false
                              },
                              {
                                id: 6,
                                flag: 'kr',
                                name: 'South Korea',
                                code: '+82',
                                checked: false
                              },
                              {
                                id: 7,
                                flag: 'br',
                                name: 'Brazil',
                                code: '+55',
                                checked: false
                              },
                              {
                                id: 8,
                                flag: 'mx',
                                name: 'Mexico',
                                code: '+52',
                                checked: false
                              },
                              {
                                id: 9,
                                flag: 'ru',
                                name: 'Russia',
                                code: '+7',
                                checked: false
                              },
                              {
                                id: 10,
                                flag: 'au',
                                name: 'Australia',
                                code: '+61',
                                checked: false
                              },
                              {
                                id: 11,
                                flag: 'gb',
                                name: 'United Kingdom',
                                code: '+44',
                                checked: false
                              },
                              {
                                id: 12,
                                flag: 'fr',
                                name: 'France',
                                code: '+33',
                                checked: false
                              },
                              {
                                id: 13,
                                flag: 'de',
                                name: 'Germany',
                                code: '+49',
                                checked: false
                              }
                            ],
                  }
                }
                }
      `,
            basic_select1: `
                <template>
                <hlx-select
                  :options="this.dropdown_data"
                  :placeholder_value="'Language'"
                  :labelanimation="true"
                  v-model:value ="this.data.key"
                  :clearable="true"
                  :prevalue="this.prevalue"
                ></hlx-select>
                </template>
                <script> 
                export default {
                   data() {
                      return{
                          prevalue:'Html',
                          dropdown_data: [
                            { name: "Php", checked: false, disabled: false, value: "Php"},
                            { name: "VueJs", checked: false, disabled: false, value: "VueJs"  },
                            { name: "ReactJs", checked: false, disabled: false, value: "ReactJs"  },
                            { name: "Html", checked: false, disabled: false, value: "Html"  },
                            { name: "Css", checked: false, disabled: false, value: "Css"  },
                            { name: "Scss", checked: false, disabled: false, value: "Scss"  },
                            { name: "Sass", checked: false, disabled: false, value: "Sass"  },
                            { name: "Sql", checked: false, disabled: false, value: "Sql"  },
                            { name: "MongoDB", checked: false, disabled: false, value: "MongoDB" },
                            { name: "Javascript", checked: false, disabled: false, value: "Javascriptq"  },
                          ],
                      }
                }
                }
      `,
            basic_select: `
                <template>
                <hlx-select
                :options="this.dropdown_data"
                :placeholder_value="'Language'"
                :labelanimation="true"
                :clearable="true"
                v-model:value="this.selectvalue"
                @customChange="selectValue"
              ></hlx-select>
                </template>
                <script> 
                export default {
                   data() {
                      return{
                          dropdown_data: [
                            { name: "Php", checked: false, disabled: false, value: "Php"},
                            { name: "VueJs", checked: false, disabled: false, value: "VueJs"  },
                            { name: "ReactJs", checked: false, disabled: false, value: "ReactJs"  },
                            { name: "Html", checked: false, disabled: false, value: "Html"  },
                            { name: "Css", checked: false, disabled: false, value: "Css"  },
                            { name: "Scss", checked: false, disabled: false, value: "Scss"  },
                            { name: "Sass", checked: false, disabled: false, value: "Sass"  },
                            { name: "Sql", checked: false, disabled: false, value: "Sql"  },
                            { name: "MongoDB", checked: false, disabled: false, value: "MongoDB" },
                            { name: "Javascript", checked: false, disabled: false, value: "Javascriptq"  },
                          ],
                      }
                }
                }
      `,
      basic_multiselect_filter:`
      <template>
            <hlx-select
              :multiselect_options="this.dropdown_data"
              :multi_select="true"
              :placeholder_value="'Language'"
              :labelanimation="true"
              @customChange="selectValue"
            ></hlx-select>
            </template>

            <script> 
                export default
                {
                data() {
                  return{
                        dropdown_data: [
                          { name: "Php", checked: false, disabled: false, value: "Php"},
                          { name: "VueJs", checked: false, disabled: false, value: "VueJs"  },
                          { name: "ReactJs", checked: false, disabled: false, value: "ReactJs"  },
                          { name: "Html", checked: false, disabled: false, value: "Html"  },
                          { name: "Css", checked: false, disabled: false, value: "Css"  },
                          { name: "Scss", checked: false, disabled: false, value: "Scss"  },
                          { name: "Sass", checked: false, disabled: false, value: "Sass"  },
                          { name: "Sql", checked: false, disabled: false, value: "Sql"  },
                          { name: "MongoDB", checked: false, disabled: false, value: "MongoDB" },
                          { name: "Javascript", checked: false, disabled: false, value: "Javascriptq"  },
                        ],
                  }
                }
                }
`,

            basic_multiselect: `
            <template>
            <hlx-select
              :multiselect_options="this.dropdown_data"
              :multi_select="true"
              :placeholder_value="'Language'"
              :searchable="true"
              :labelanimation="true"
              v-model:value ="this.check"
              @customChange="selectValue"
            ></hlx-select>
            </template>

            <script> 
                export default
                {
                  data() {
                  return{
                    dropdown_data: [
                      { name: "Php", checked: false, disabled: false, value: "Php",icon:'icon-database-regular',id:1},
                      { name: "VueJs", checked: false, disabled: false, value: "VueJs" ,icon:'icon-database-regular' ,id:2},
                      { name: "ReactJs", checked: false, disabled: false, value: "ReactJs" ,icon:'icon-database-regular' ,id:3},
                      { name: "Html", checked: false, disabled: false, value: "Html" ,icon:'icon-database-regular' ,id:4},
                      { name: "Css", checked: false, disabled: false, value: "Css" ,icon:'icon-database-regular' ,id:5},
                      { name: "Scss", checked: false, disabled: false, value: "Scss" ,icon:'icon-database-regular' ,id:6},
                      { name: "Sass", checked: false, disabled: false, value: "Sass" ,icon:'icon-database-regular' ,id:7},
                      { name: "Sql", checked: false, disabled: false, value: "Sql" ,icon:'icon-database-regular' ,id:8},
                      { name: "MongoDB", checked: false, disabled: false, value: "MongoDB" ,icon:'icon-database-regular',id:9},
                      { name: "Javascript", checked: false, disabled: false, value: "Javascriptq" ,icon:'icon-database-regular',id:10 },
                    ],
                  }
                }

                }
      `,
                  basic_multiselect1: `
            <template>
            <hlx-select
              :multiselect_options="this.dropdown_data"
              :multi_select="true"
              :multiselect_prevalue="this.prevalue_data"
              :placeholder_value="'Language'"
              :labelanimation="true"
              v-model:value ="this.check"
              @customChange="selectValue"
            ></hlx-select>
            </template>

            <script> 
                export default
                {
                  data() {
                  return{
                      prevalue_data:['Html','VueJs'],
                      dropdown_data: [
                        { name: "Php", checked: false, disabled: false, value: "Php",icon:'icon-database-regular',id:1},
                        { name: "VueJs", checked: false, disabled: false, value: "VueJs" ,icon:'icon-database-regular' ,id:2},
                        { name: "ReactJs", checked: false, disabled: false, value: "ReactJs" ,icon:'icon-database-regular' ,id:3},
                        { name: "Html", checked: false, disabled: false, value: "Html" ,icon:'icon-database-regular' ,id:4},
                        { name: "Css", checked: false, disabled: false, value: "Css" ,icon:'icon-database-regular' ,id:5},
                        { name: "Scss", checked: false, disabled: false, value: "Scss" ,icon:'icon-database-regular' ,id:6},
                        { name: "Sass", checked: false, disabled: false, value: "Sass" ,icon:'icon-database-regular' ,id:7},
                        { name: "Sql", checked: false, disabled: false, value: "Sql" ,icon:'icon-database-regular' ,id:8},
                        { name: "MongoDB", checked: false, disabled: false, value: "MongoDB" ,icon:'icon-database-regular',id:9},
                        { name: "Javascript", checked: false, disabled: false, value: "Javascriptq" ,icon:'icon-database-regular',id:10 },
                      ],
                  }
                }

                }
      `,
      title: "Name",
      placeholder: "Sortby",
      search1: "",
      singleselectvalue: [],
      dropdown_data: [
        { name: "Php", checked: false, disabled: false, value: "Php"},
        { name: "VueJs", checked: false, disabled: false, value: "VueJs"  },
        { name: "ReactJs", checked: false, disabled: false, value: "ReactJs"  },
        { name: "Html", checked: false, disabled: false, value: "Html"  },
        { name: "Css", checked: false, disabled: false, value: "Css"  },
        { name: "Scss", checked: false, disabled: false, value: "Scss"  },
        { name: "Sass", checked: false, disabled: false, value: "Sass"  },
        { name: "Sql", checked: false, disabled: false, value: "Sql"  },
        { name: "MongoDB", checked: false, disabled: false, value: "MongoDB" },
        { name: "Javascript", checked: false, disabled: false, value: "Javascriptq"  },
      ],
      dropdown_data1: [
        { name: "Php", checked: false, disabled: false, value: "Php",icon:'icon-database-regular',id:1},
        { name: "VueJs", checked: false, disabled: false, value: "VueJs" ,icon:'icon-database-regular' ,id:2},
        { name: "ReactJs", checked: false, disabled: false, value: "ReactJs" ,icon:'icon-database-regular' ,id:3},
        { name: "Html", checked: false, disabled: false, value: "Html" ,icon:'icon-database-regular' ,id:4},
        { name: "Css", checked: false, disabled: false, value: "Css" ,icon:'icon-database-regular' ,id:5},
        { name: "Scss", checked: false, disabled: false, value: "Scss" ,icon:'icon-database-regular' ,id:6},
        { name: "Sass", checked: false, disabled: false, value: "Sass" ,icon:'icon-database-regular' ,id:7},
        { name: "Sql", checked: false, disabled: false, value: "Sql" ,icon:'icon-database-regular' ,id:8},
        { name: "MongoDB", checked: false, disabled: false, value: "MongoDB" ,icon:'icon-database-regular',id:9},
        { name: "Javascript", checked: false, disabled: false, value: "Javascriptq" ,icon:'icon-database-regular',id:10 },
      ],
      // dropdown_data1:[]
      // checkval:'',
      // checkval1:''
    };
  },
  async mounted()
  {
//         await axios.get(`http://localhost:5080/test/pooja`,{

// auth: {

//  username: "testuser@test.com",

//  password: " ",

//   },

//  }
//  ).then((res)=>{
//    this.dropdown_data1 = res.data
//  })
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
    selectValue(value1) {
      this.singleselectvalue = value1;
      // console.log('pop',this.check);
      // console.log(this.singleselectvalue, "check");
      // console.log(this.selectvalue);
    },
    checkval(data)
    {
      // console.log(data,'ojjnj');  //namedata
    },
    checkval1(data1)
    {
      //  console.log(data1,'ofsijiugyi');  //valuedata
    },
    setvalue(data1)
    {
        // console.log(data1,'dataa');
        // console.log(this.prevalue,'yeses');
    },
    setvalue1(data1)
    {
        // console.log(data1,'datdlaa');
    },
    clear(value1) {
      let clearvalue = value1;
      // console.log(clearvalue);
    },
  },
};
</script>

<style lang="scss" scoped>
.example-body {
  overflow: visible !important;
}
</style>