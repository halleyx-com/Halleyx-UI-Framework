<template>
  <h1 class="component-heading">Label</h1>
  <p class="component-description">
The object of the Label class is a component for placing text in a container. It is used to display a single line of read only text. The text can be changed by a programmer but a user cannot edit it directly. 
  </p>
  <h2 class="component-side-heading">Basic usage</h2>

  <p class="component-description">
    Set <b>class</b> to view label in specific theme. <br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <section class="label-wrapper-primary">
        <!-- primary -->
        <hlx-label class="primary"> Primary </hlx-label>
        <hlx-label class="success"> Success </hlx-label>
        <hlx-label class="info"> Information </hlx-label>
        <hlx-label class="error"> Error </hlx-label>
        <hlx-label class="warning"> Warning </hlx-label>
        <hlx-label class="link"> Link </hlx-label>
        <hlx-label class="disabled"> Disabled </hlx-label>
        <!-- </section> -->
        <!-- <section class="label-wrapper-lite"> -->

        <!-- Lite -->
        <!-- <hlx-label class="primary-lite"> Primary lite </hlx-label>
        <hlx-label class="success-lite"> Success lite </hlx-label>
        <hlx-label class="info-lite"> Information lite</hlx-label>
        <hlx-label class="error-lite"> Error lite </hlx-label>
        <hlx-label class="warning-lite"> Warning lite </hlx-label>
        <hlx-label class="link-lite"> Link lite </hlx-label> -->
      </section>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span class="icon" id="label-icon" @click="showCode('label')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="label" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code"
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
  <h2 class="component-side-heading">Custom label</h2>

  <p class="component-description">
    Set <b>:options</b> to change label in specific theme like background, text
    and border color. <br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <section class="label-wrapper-primary">
        <hlx-label
          class="primary"
          :options="{
            'background-color': '#54bd95',
            'text-color': 'white',
            'border-color': '#54bd95',
          }"
        >
          Primary
        </hlx-label>
      </section>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="custom-label-icon"
        @click="showCode('custom-label')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="custom-label" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="customLabel"
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
  <h2 class="component-side-heading">Size varients</h2>

  <p class="component-description">
    Add <b>lg, sm </b> to class for change lable size.<br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <section class="label-wrapper-primary">
        <!-- primary -->
        <hlx-label class="primary sm"> Primary-small </hlx-label>
        <hlx-label class="primary"> Primary-default </hlx-label>
        <hlx-label class="primary lg"> Primary-large </hlx-label>
      </section>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span class="icon" id="label-size-icon" @click="showCode('label-size')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="label-size" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code_size"
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

  <h2 class="component-side-heading">Label attributes</h2>
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
        v-for="(i, index) in this.labelAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.labelAttributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  <h2 class="component-side-heading">Label slots</h2>
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
        v-for="(i, index) in this.labelSlots"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.slot_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.labelSlots"
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
import hlxLabel from "../components/LabelComponent";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
export default {
  name: "labelView",
  components: {
    CodeEditor,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    hlxLabel,
  },
  data() {
    return {
      editor_theme: "light",
      table_data: [
        {
          name: "class",
          description: "provide different dark themes and lite theme",
          type: "String",
          accepted_values:
            "primary,success,info,error,warning,link,disabled,primary sm,success sm,info sm,error sm,warning sm,link sm,disabled sm,primary lg,success lg,info lg,error lg,warning lg,link lg,disabled lg",
          default: "-",
          mandatory: true,
        },
        {
          name: "options",
          description:
            "provide the custom theme for label backaground, border and inner text",
          type: "Object",
          accepted_values: "{}",
          default: "-",
          mandatory: false,
        },
      ],
      labelAttributes: [
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
      labelSlots: [
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
          width: 450,
          type: "string",
          format: "",
        },
        {
          prop: "fallback",
          label: "Fallback",
          width: 50,
          type: "string",
          format: "",
        },
      ],
      slot_data: [
        {
          name: "-",
          description: `Place any element inside hlx-label component. Like <hlx-label>
    <i class="icon-human"></i>
    Primary
    </hlx-label>`,
          fallback: "-",
        },
      ],
      example_code: ` 
  <template>
   <section class="label-wrapper-primary">
        <hlx-label class="primary"> Primary </hlx-label>
        <hlx-label class="success"> Success </hlx-label>
        <hlx-label class="info"> Information </hlx-label>
        <hlx-label class="error"> Error </hlx-label>
        <hlx-label class="warning"> Warning </hlx-label>
        <hlx-label class="link"> link </hlx-label>
        <hlx-label class="disabled"> Disabled </hlx-label>
      </section>
</template>

<script>
export default {
name:"label-wrapper"
}
<style lang="scss" scoped>
.label-wrapper-primary,
.label-wrapper-lite {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}
</style>
<\/script>    
     
   `,

      customLabel: ` 
  <template>
  <section class="label-wrapper-primary">
    <hlx-label class="primary" :options="{'background-color':'#54bd95','text-color':'white','border-color':'#54bd95'}"> Primary </hlx-label>
  </section>
</template>

<script>
export default {
name:"label-wrapper"
}
<style lang="scss" scoped>
.label-wrapper-primary,
.label-wrapper-lite {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}
</style>
<\/script>    
     
   `,

      example_code_size: ` 
  <template>
   <section class="label-wrapper-primary">
        <hlx-label class="primary sm"> Primary </hlx-label>
        <hlx-label class="primary"> Primary </hlx-label>
        <hlx-label class="primary lg"> Primary </hlx-label>
      </section>
</template>

<script>
export default {
name:"label-wrapper"
}
<style lang="scss" scoped>
.label-wrapper-primary,
.label-wrapper-lite {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}
</style>
<\/script>    
     
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
.label-wrapper-primary,
.label-wrapper-lite {
  display: flex;
  gap: 20px;
  align-items: end;
}
</style>
