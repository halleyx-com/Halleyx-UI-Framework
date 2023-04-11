<template>
  <h1 class="component-heading">Alert</h1>
  <p class="component-description">
An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
  </p>
  <h2 class="component-side-heading">Basic usage</h2>

  <p class="component-description">
    Set <b>:showAlert</b> to <b>true</b> to display the alert window. <br />
    To specify type of notification<b> :type</b><br />
    To specify a message <b>:message</b><br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <div class="button">
        <hlx-button class="primary-success" @click="Success()"
          >Success</hlx-button
        >
        <hlx-button class="primary-error" @click="Danger()">Danger</hlx-button>
        <hlx-button class="primary-warning" @click="Warning()"
          >Warning</hlx-button
        >
        <hlx-button class="primary-info" @click="Primary()">Primary</hlx-button>
      </div>
      <hlx-alert-notification
        :showAlert="this.showAlert"
        :type="this.type"
        :message="'Notification description'"
        :autoClose="false"
      />
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-cards-icon" @click="showCode('basic-cards')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-cards" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="alert_source"
          :read_only="true"
          :theme="editor_theme"
        />
      </div>
    </section>
  </div>
  <h2 class="component-side-heading">Alert with closing delay</h2>

  <p class="component-description">
    To specify a time delay of notification <b>:delay</b><br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <div class="button">
        <hlx-button class="primary-success" @click="Success('delay')"
          >Success</hlx-button
        >
        <hlx-button class="primary-error" @click="Danger('delay')"
          >Danger</hlx-button
        >
        <hlx-button class="primary-warning" @click="Warning('delay')"
          >Warning</hlx-button
        >
        <hlx-button class="primary-info" @click="Primary('delay')"
          >Primary</hlx-button
        >
      </div>
      <hlx-alert-notification
        :showAlert="this.showAlertDelay"
        :type="this.typeDelay"
        :message="'Notification description'"
        :delay="7000"
      />
    </div>
    <div class="example-footer">
      <span class="icon" id="alert_delay-icon" @click="showCode('alert_delay')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="alert_delay" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="alert_source_delay"
          :read_only="true"
          :theme="editor_theme"
        />
      </div>
    </section>
  </div>
  <h2 class="component-side-heading">Alert with auto close</h2>

  <p class="component-description">
    To specify a close call of notification either auto or manually using
    <b>:autoClose</b> by default it was true.<br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <div class="button">
        <hlx-button class="primary-success" @click="Success('auto')"
          >Success</hlx-button
        >
        <hlx-button class="primary-error" @click="Danger('auto')"
          >Danger</hlx-button
        >
        <hlx-button class="primary-warning" @click="Warning('auto')"
          >Warning</hlx-button
        >
        <hlx-button class="primary-info" @click="Primary('auto')"
          >Primary</hlx-button
        >
      </div>
      <hlx-alert-notification
        :showAlert="this.showAlertAuto"
        :type="this.typeAuto"
        :message="'Notification description'"
        :autoClose="false"
      />
    </div>
    <div class="example-footer">
      <span class="icon" id="auto-alert-icon" @click="showCode('auto-alert')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="auto-alert" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="alert_source"
          :read_only="true"
          :theme="editor_theme"
        />
      </div>
    </section>
  </div>
  <h2 class="component-side-heading">Alert attributes</h2>
  <hlx-table
    :columnCount="6"
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
import hlxAlertNotification from "../components/AlertComponent.vue";
import hlxButton from "@/components/ButtonComponent.vue";
import CodeEditor from "simple-code-editor";
import divider from "../components/DividerComponent.vue";
// import hlxTable from "../components/NewTable.vue";
import HlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
// import hlxColumn from "../components/NewTableColumn.vue";
export default {
  name: "AlertView",
  components: {
    // hlxTable,
    hlxTableCell,
    hlxTableHead,
    HlxTable,
    // hlxColumn,
    hlxAlertNotification,
    CodeEditor,
    hlxButton,
    divider,
  },
  data() {
    return {
      editor_theme: "light",
      showAlert: false,
      type: "Success",
      showAlertDelay: false,
      typeDelay: "Success",
      showAlertAuto: false,
      typeAuto: "Success",
      table_data: [
        {
          name: "type",
          description: "Specify the type of the alert",
          type: "String",
          accepted_values: "Sucess, Danger, Primary, Warning",
          default: "-",
          mandatory: "true",
        },
        {
          name: "message",
          description: "Specify the message to be displayed",
          type: "String",
          accepted_values: "Message need to be shown is entered",
          default: "-",
          mandatory: "true",
        },
        {
          name: "showAlert",
          description: "Whether to display alert or not",
          type: "Boolean",
          accepted_values: "true,false",
          default: "false",
          mandatory: "false",
        },
        {
          name: "autoClose",
          description: "Close the alert automatically or manually",
          type: "Boolean",
          accepted_values: "true,false",
          default: "false",
          mandatory: "false",
        },
        {
          name: "delay",
          description: "To extend/short the time of alert showing",
          type: "Number",
          accepted_values: ">3000",
          default: "3000",
          mandatory: "false",
        },
      ],
      alertAttributes: [
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
          width: 350,
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

      alert_source: `
<template>
    <hlx-alert-notification
      :showAlert="this.showAlert"
      :type="this.type"
      :message="'Notification description'"
      />
</template>
<script>
export default {
  components: {
    hlxAlertNotification,
  },
  data() {
    return {
          showAlert: false,
          type: "Success",
          }
      },
  methods: {
    Success() {
      this.type = "Success";
      this.showAlert = true;
    },
    Danger() {
      this.type = "danger";
      this.showAlert = true;
    },
    Warning() {
      this.type = "Warning";
      this.showAlert = true;
    },
    Primary() {
      this.type = "Primary";
      this.showAlert = true;
    },
  },
};
<\/script>

<style lang="scss" scoped>
.button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  margin: inherit;
  gap: 20px;
}
</style>
 `,

      alert_source_delay: `
<template>
     <hlx-alert-notification
        :showAlert="this.showAlertDelay"
        :type="this.typeDelay"
        :message="'Notification description'"
        :delay="7000"
      />
</template>
<script>
export default {
  components: {
    hlxAlertNotification,
  },
  data() {
    return {
          showAlert: false,
          type: "Success",
          }
      },
  methods: {
    Success() {
      this.type = "Success";
      this.showAlert = true;
    },
    Danger() {
      this.type = "danger";
      this.showAlert = true;
    },
    Warning() {
      this.type = "Warning";
      this.showAlert = true;
    },
    Primary() {
      this.type = "Primary";
      this.showAlert = true;
    },
  },
};
<\/script>

<style lang="scss" scoped>
.button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  margin: inherit;
  gap: 20px;
}
</style>
 `,

      alert_source_auto: `
<template>
    <hlx-alert-notification
        :showAlert="this.showAlertAuto"
        :type="this.typeAuto"
        :message="'Notification description'"
        :autoClose="false"
      />
</template>
<script>
export default {
  components: {
    hlxAlertNotification,
  },
  data() {
    return {
          showAlert: false,
          type: "Success",
          }
      },
  methods: {
    Success() {
      this.type = "Success";
      this.showAlert = true;
    },
    Danger() {
      this.type = "danger";
      this.showAlert = true;
    },
    Warning() {
      this.type = "Warning";
      this.showAlert = true;
    },
    Primary() {
      this.type = "Primary";
      this.showAlert = true;
    },
  },
};
<\/script>

<style lang="scss" scoped>
.button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  margin: inherit;
  gap: 20px;
}
</style>
 `,
    };
  },
  methods: {
    Success(key) {
      switch (key) {
        case "delay":
          this.typeDelay = "Success";
          this.showAlertDelay = true;
          break;
        case "auto":
          this.typeAuto = "Success";
          this.showAlertAuto = true;
          break;
        default:
          this.type = "Success";
          this.showAlert = true;
          break;
      }
    },
    Danger(key) {
      switch (key) {
        case "delay":
          this.typeDelay = "danger";
          this.showAlertDelay = true;
          break;
        case "auto":
          this.typeAuto = "danger";
          this.showAlertAuto = true;
          break;
        default:
          this.type = "danger";
          this.showAlert = true;
          break;
      }
    },
    Warning(key) {
      switch (key) {
        case "delay":
          this.typeDelay = "Warning";
          this.showAlertDelay = true;
          break;
        case "auto":
          this.typeAuto = "Warning";
          this.showAlertAuto = true;
          break;
        default:
          this.type = "Warning";
          this.showAlert = true;
          break;
      }
    },
    Primary(key) {
      switch (key) {
        case "delay":
          this.typeDelay = "Primary";
          this.showAlertDelay = true;
          break;
        case "auto":
          this.typeAuto = "Primary";
          this.showAlertAuto = true;
          break;
        default:
          this.type = "Primary";
          this.showAlert = true;
          break;
      }
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

<style lang="scss" scoped>
.button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  margin: inherit;
  gap: 20px;
}
</style>
