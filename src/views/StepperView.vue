<template>
  <h1 class="component-heading">Stepper control</h1>
  <p class="component-description">
    A two-segment UI control known as an input stepper is used to gradually
    raise or lower a numerical value.
  </p>
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    Set <b>:step</b> attribute to set the step.<br />
    To define the maximum allowed value <b>:limit</b><br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-stepper :step="150" :limit="2000" @current-step="currentStep" />
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="stepper-pagination-icon"
        @click="showCode('stepper-pagination')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="stepper-pagination" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="stepper_pagination"
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
        v-for="(i, index) in this.stepperAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.stepperAttributes"
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
        v-for="(i, index) in this.stepperEvent"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.eventData" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.stepperEvent"
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
import hlxStepper from "../components/StepperComponent.vue";
import CodeEditor from "simple-code-editor";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
export default {
  name: "paginationView",
  components: {
    hlxStepper,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    CodeEditor,
  },
  data() {
    return {
      editor_theme: "light",

      table_data: [
        {
          name: "step",
          description: "Specify the number of steps to increment",
          type: "Number",
          accepted_values: "<limit",
          default: "-",
          mandatory: true,
        },
        {
          name: "limit",
          description: "Specify the limit of increment",
          type: "Number",
          accepted_values: "",
          default: "-",
          mandatory: true,
        },
      ],
      stepperAttributes: [
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
      stepperEvent: [
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
      eventData: [
        {
          name: "current-step",
          description: "get current step count on each click",
          parameter: "currentStep",
        },
      ],
      stepper_pagination: `
<template>
        <hlx-stepper :step="150" :limit="2000" @current-step="currentStep" />

</template>

<script>
export default {
methods: {
    currentStep(step){
      console.log(step)
    },
    }
}
<\/script>
      `,
    };
  },
  methods: {
    currentStep(step) {
      // console.log(step);
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

<style lang="scss">
code {
  margin: 0;
  border-radius: 4px;
  padding: 0.15rem 0.5rem;
  font-size: 14px;
  color: black;
  line-height: 1.4;
  background-color: #f5f7fa;
}
</style>
