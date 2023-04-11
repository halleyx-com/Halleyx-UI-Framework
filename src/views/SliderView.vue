<template>
  <h1 class="component-heading">Slider</h1>
  <p class="component-description">
Sliders allow users to make selections from a range of values. Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.
  </p>
  <h2 class="component-side-heading">Basic usage</h2>

  <p class="component-description">
    To specify certain theme for slider use the attribute <b> :config </b> to
    specify color<br />
    To define maximum and minimum level of range in slider use<b> :max</b> &
    <b> :min</b> attributes
  </p>
  <br />
  <div class="notes">
    <p class="note-title">Note:</p>
    <p class="note-body">
      use <b> v-model:data </b> Get the current slide value
    </p>
  </div>
  <div class="component-example">
    <div class="example-body">
      <hlx-slider
        :config="{
          fill: '#54bd95',
          background: '#F0EEEC',
        }"
        :max="200"
        :min="-10"
        v-model="data"
        @change="change"
      />
      {{ data }}
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-slider-icon"
        @click="showCode('basic-slider')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-slider" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="slider_source"
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
        v-for="(i, index) in this.sliderAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.sliderAttributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  <h2 class="component-side-heading">Events</h2>
  <!-- Events -->
  <hlx-table
    :columnCount="3"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head
        v-for="(i, index) in this.slidingEvents"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.event_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.slidingEvents"
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
import hlxSlider from "../components/SliderComponent.vue";
import CodeEditor from "simple-code-editor";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
export default {
  name: "SliderView",
  components: {
    hlxSlider,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    CodeEditor,
  },
  data() {
    return {
      editor_theme: "light",
      data: "",
      slider_source: ` 
<template>
  <hlx-slider
        :config="{
          fill: '#54bd95',
          background: '#F0EEEC',
        }"
        :max="200"
        :min="-10"
        v-model="data"
        @change="change"
      />
</template>

<script>
export default {
  data(){
    return{
      data:0
    }
  },
  methods: {
    change(data){console.log(data,'from change')},

  },
}
<\/script>

<style>

</style> 
      `,

      sliderAttributes: [
        {
          prop: "name",
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
      slidingEvents: [
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
          width: 350,
          type: "string",
          format: "",
        },
        {
          prop: "parameter",
          label: "Parameter",
          width: 50,
          type: "string",
          format: "",
        },
      ],
      table_data: [
        {
          name: "v-model",
          description: "Get the current slide value",
          type: "Number",
          accepted_values: "-infinite to infinite",
          default: "-",
          mandatory: false,
        },
        {
          name: "min",
          description: "To specify the minimum level of range",
          type: "Number",
          accepted_values: "0 to -infinite",
          default: "0",
          mandatory: false,
        },
        {
          name: "max",
          description: "To specify the maximum level of range",
          type: "Number",
          accepted_values: "0 to infinite",
          default: "100",
          mandatory: false,
        },
        {
          name: "config",
          description: "To specify the range fill and background color",
          type: "Object",
          accepted_values: `
          {
            fill: "color-code",
            background: "color-code"
          }
          `,
          default: "100",
          mandatory: false,
        },
      ],
      event_data: [
        {
          name: "change",
          description: "emit the event with data while slide change",
          parameter: "slide count",
        },
      ],
    };
  },
  methods: {
    change(d) {
      // console.log(d, "from change");
    },
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
