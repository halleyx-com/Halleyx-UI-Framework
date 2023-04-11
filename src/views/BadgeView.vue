<template>
  <h1 class="component-heading">Badge</h1>
  <p class="component-description">
    To display a notification or to call attention to another UI element, use
    the badge component.
  </p>
  <h2 class="component-side-heading">Basic usage</h2>

  <p class="component-description">
    Set <b>:icon</b> display the icon inside badge. <br />
    To specify count<b> :count</b><br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-badge :icon="'icon-bell-notification-regular'" :count="'3'" />
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-badge-icon" @click="showCode('basic-badge')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-badge" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_badge"
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
  <h2 class="component-side-heading">Badge attributes</h2>
  <hlx-table
  :columnCount="6"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head v-for="(i, index) in this.badgeAttributes" :key="index" :width="i.width">{{
        i.label
      }}</hlx-table-head>
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.badgeAttributes"
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
import HlxBadge from "../components/BadgeComponent.vue";
import CodeEditor from "simple-code-editor";
import divider from "../components/DividerComponent.vue";
// import hlxTable from '../components/NewTable.vue'
// import hlxColumn from '../components/NewTableColumn.vue'
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
export default {
  name: "BadgeView",
  components: {
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    HlxBadge,
    CodeEditor,
    divider,
  },
  data() {
    return {
      editor_theme: "light",
      table_data: [
        {
          name: "icon",
          description: "Pass the icon class in icon section",
          type: "String",
          accepted_values: "icon names",
          default: "-",
          mandatory: true,
        },
        {
          name: "count",
          description: "Pass the count of the notification",
          type: "Integer",
          accepted_values: 3,
          default: "-",
          mandatory: true,
        },
      ],
      badgeAttributes: [
        {
          prop: "name",
          label: "Attributes",
          width: 30,
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
          width: 150,
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
      basic_badge: `
<template>  
  <hlx-badge :icon="'icon-bell-notification-regular'" :count="'3'"/>
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
