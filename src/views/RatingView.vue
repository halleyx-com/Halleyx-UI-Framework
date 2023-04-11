<template>
  <h1 class="component-heading">Rating</h1>
  <p class="component-description">
    Ratings provide insight regarding others' opinions and experiences with a product. 
  </p>
  <h2 class="component-side-heading">Basic usage</h2>

  <p class="component-description">
    Set <b>:rating</b> to define the number of filled star <br />
    To make rating editable<b> :readOnly</b> to <b>false</b><br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-rating :rating="1" :readOnly="false"></hlx-rating>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="input-rating-icon"
        @click="showCode('input-rating')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="input-rating" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="inputRating"
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
  <h2 class="component-side-heading">Read-only</h2>
  <p class="component-description">
    To make rating editable<b> :readOnly</b> to <b>true</b><br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-rating :rating="2" :readOnly="true"></hlx-rating>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="readOnly-rating-icon"
        @click="showCode('readOnly-rating')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="readOnly-rating" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="readOnlyRating"
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

  <h2 class="component-side-heading">Half rating</h2>
  <p class="component-description">
    Set <b>:rating </b>to define the number of half-filled star <br />
    To make rating editable<b> :readOnly</b> to <b>true</b><br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-rating :rating="3.5" :readOnly="true"></hlx-rating>
    </div>
    <div class="example-footer">
      <span class="icon" id="half-rating-icon" @click="showCode('half-rating')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="half-rating" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="halfRating"
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
  <h2 class="component-side-heading">Rating attributes</h2>

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
        v-for="(i, index) in this.ratingAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.ratingAttributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  <h2 class="component-side-heading">Rating events</h2>

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
        v-for="(i, index) in this.ratingEvents"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.event_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.ratingEvents"
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
import hlxRating from "../components/RatingComponent.vue";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
export default {
  name: "rating",
  components: {
    hlxRating,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    CodeEditor,
  },
  data() {
    return {
      event_data: [
        {
          name: "updatedRating",
          description: "Indicate current rating point",
          parameter: "current rating point",
        },
      ],
      table_data: [
        {
          name: "rating",
          description: "Fill the star by the rating",
          type: "Number",
          accepted_values: "0-5",
          default: 0,
          mandatory: false,
        },
        {
          name: "readOnly",
          description: "Make component to actionable",
          type: "Boolean",
          accepted_values: "true/false",
          default: true,
          mandatory: false,
        },
      ],
      ratingAttributes: [
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
      ratingEvents: [
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
      editor_theme: "light",
      readOnlyRating: `
<template>
      <hlx-rating :rating="2" :readOnly="true" ></hlx-rating>
</template>

<script>
export default {

}
<\/script>
      `,

      halfRating: `
<template>
   <hlx-rating :rating="3.5" :readOnly="true"></hlx-rating>
</template>

<script>
export default {

}
<\/script>`,
      inputRating: `
<template>
  <hlx-rating :rating="1" :readOnly="false"></hlx-rating>,
</template>

<script>
export default {

}
<\/script>`,
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
