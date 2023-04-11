<template>
  <h1 class="component-heading">Tooltip</h1>
  <p class="component-description">
    When the user hovers the mouse pointer over an element, a tooltip is
    frequently used to provide further information about that object.
  </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    To define input data in tooltip use <b>:data-tooltip</b><br />
    Set the location of tooltip by giving the attribute
    <b>:data-tooltip-location</b>
  </p>
  <div class="component-example">
    <div class="example-body2">
      <hlx-button
        class="bg-default border"
        data-tooltip="Here is an example of very long tooltip text that spans multiple lines. Note:
Tooltips are dynamically sized to fit content. However, it has a minimum and maximum width defined."
        data-tooltip-location="top"
        >Top</hlx-button
      >
      <hlx-button
        class="bg-default border"
        data-tooltip="Here is an example of very long tooltip text that spans multiple lines."
        data-tooltip-location="right"
        >Right</hlx-button
      >
      <hlx-button
        class="bg-default border"
        data-tooltip="Here is an example of very long tooltip text that spans multiple lines. Note:
Tooltips are dynamically sized to fit content. However, it has a minimum and maximum width defined."
        data-tooltip-location="bottom"
        >Bottom</hlx-button
      >
      <hlx-button
        class="bg-default border"
        data-tooltip="Here is an example of very long tooltip text that spans multiple lines. Note:
Tooltips are dynamically sized to fit content. However, it has a minimum and maximum width defined."
        data-tooltip-location="left"
        >Left</hlx-button
      >
      <!-- <hlx-button class="bg-default border" tooltip="Bottom" flow="down" -->
      <!-- >Bottom</hlx-button
      >
      <hlx-button class="bg-default border" tooltip="Left" flow="left"
        >Left</hlx-button
      >
      <hlx-button class="bg-default border" tooltip="Right" flow="right"
        >Right</hlx-button -->
      <!-- > -->
    </div>

    <div class="example-footer">
      <span
        class="icon"
        id="basic-tooltip-icon"
        @click="showCode('basic-tooltip')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-tooltip" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_tooltip"
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
  <!-- <hlx-table-component :tableData="this.tooltipAttributes.table_data" :theader="this.tooltipAttributes.columns" :height="'max-content'"/> -->
  <!-- <hlx-table
    :data="this.table_data"
    :border="true"
    theme="secondary"
    :rowHover="true"
    :ellipses="5"
    :bold_header="true"
  >
    <hlx-column
      :prop="'attribute'"
      :label="'Name'"
      :type="'string'"
      :width="200"
    />
    <hlx-column
      :prop="'description'"
      :label="'Description'"
      :type="'string'"
      :width="300"
    />
    <hlx-column :prop="'default'" :label="'Default'" :type="'string'" />
    <hlx-column :prop="'type'" :label="'Type'" :type="'string'" />
    <hlx-column
      :prop="'accepted_values'"
      :label="'Accepted values'"
      :type="'string'"
    />
    <hlx-column :prop="'mandatory'" :label="'Mandatory'" :type="'string'" />
  </hlx-table> -->
   <hlx-table
    :columnCount="this.theads"
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
</template>

<script>
import CodeEditor from "simple-code-editor";
import divider from "../components/DividerComponent.vue";
import hlxButton from "../components/ButtonComponent.vue";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";

export default {
  name: "App",
  components: {
    divider,
    hlxButton,
    CodeEditor,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
  },
  data() {
    return {
            alertAttributes: [
        {
          prop: "attribute",
          label: "Attributes",
          width: 100,
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
          prop: "type",
          label: "Type",
          width: 80,
          type: "string",
          format: "",
        },
        {
          prop: "accepted_values",
          label: "Accepted values",
          width: 150,
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
      table_data: [
        {
          attribute: "data-tooltip",
          description:
            "specify the inputs need to be displayed inside the tooltip",
          type: "String",
          accepted_values: "-",
          default: "-",
          mandatory: "true",
        },
        {
          attribute: "data-tooltip-location",
          description: "specify the direction where tooltip to be displayed",
          type: "String",
          accepted_values: "top | left | right | bottom",
          default: "-",
          mandatory: "true",
        },
      ],
      editor_theme: "light",

      basic_tooltip: `
      <template>
      <p class="bg-default border"data-tooltip="Here is an example of very long tooltip text that spans multiple lines. Note:Tooltips are dynamically sized to fit content. However, it has a minimum and maximum width defined." data-tooltip-location="top">Top</p>
      <p class="bg-default border" data-tooltip="Here is an example of very long tooltip text that spans multiple lines." data-tooltip-location="right">Right</p>
      <p class="bg-default border" data-tooltip="Here is an example of very long tooltip text that spans multiple lines. Note: Tooltips are dynamically sized to fit content. However, it has a minimum and maximum width defined." data-tooltip-location="bottom">Bottom</p>
      <p class="bg-default border" data-tooltip="Here is an example of very long tooltip text that spans multiple lines. Note: Tooltips are dynamically sized to fit content. However, it has a minimum and maximum width defined." data-tooltip-location="left">Left</p>
      </template>
`,
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
  },
};
</script>

<style lang="scss" scoped>
.example-body2 {
  align-items: center;
}
</style>
