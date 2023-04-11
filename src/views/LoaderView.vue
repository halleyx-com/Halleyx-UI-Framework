<template>
  <h1 class="component-heading">Loaders</h1>
  <p class="component-description">
A loader or loading indicator is an animated element which is displayed on the website to show that a process is running at the moment and the user needs to wait for it to complete. 
  </p>

  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    To set jumper loader use <b>load-type</b> to <b>dotted-jumper</b><br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <section class="dotted-jump-load-container">
        <hlx-loader load-type="dotted-jumper" />
      </section>
    </div>
    <div class="example-footer">
      <span class="icon" id="jump-loader-icon" @click="showCode('jump-loader')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="jump-loader" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="jump_loader"
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

  <h2 class="component-side-heading">Horizontal loop loader</h2>
  <p class="component-description">
    To set indeterminate loader <b>load-type</b> to <b>horizontal-loop</b>
  </p>
  <div class="component-example">
    <div class="example-body">
      <section class="horizontal-load-container">
        <hlx-loader load-type="horizontal-loop" />
      </section>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="horizontal-loop-loader-icon"
        @click="showCode('horizontal-loop-loader')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="horizontal-loop-loader" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="horizontal_loop_loader"
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

  <h2 class="component-side-heading">Spinner</h2>
  <p class="component-description">
    Displays animation in a container <b>load-type</b> to <b>spinner</b>
  </p>
  <div class="component-example">
    <div class="example-body">
      <section class="spin-loader-container">
        <hlx-loader load-type="spinner" />
      </section>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-loader-icon"
        @click="showCode('basic-loader')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-loader" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="spin_loader"
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
        v-for="(i, index) in this.loaderAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.loaderAttributes"
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
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
import hlxLoader from "../components/LoaderComponent.vue";

export default {
  name: "loader-view",
  components: {
    hlxLoader,
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
          attribute: "load-type",
          description: "Customize load-type name for Loading",
          type: "String",
          accepted_values: "spinner/dotted-jumper/horizontal-loop",
          default: "-",
          mandatory: true,
        },
      ],
      loaderAttributes: [
        {
          prop: "attribute",
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

      spin_loader: `
<template>
  <hlx-loader load-type="spinner"/>
</template>

<script>
export default {

}
<\/script>

<style>
.spin-loader-container {
  position: relative;
  height: 150px;
}
</style>
    `,
      jump_loader: `
<template>
  <hlx-loader load-type="dotted-jumper"/>
</template>

<script>
export default {

}
<\/script>

<style>
.dotted-jump-load-container {
  position: relative;
  height: 150px;
}
</style>
    `,
      horizontal_loop_loader: `
<template>
  <hlx-loader load-type="horizontal-loop"/>
</template>

<script>
export default {

}
<\/script>

<style>
.horizontal-load-container {
  position: relative;
  height: 150px;
}
</style>
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

<style>
.component-body {
  position: relative;
}
.spin-loader-container {
  position: relative;
  height: 150px;
}
.dotted-jump-load-container {
  position: relative;
  height: 150px;
}
.horizontal-load-container {
  position: relative;
  height: 150px;
}
</style>
