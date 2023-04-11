<template>
  <h1 class="component-heading">Tags</h1>
  <p class="component-description">
    Users can rapidly identify key information about items by using tags to
    organise and categorise them. They graphically identify items with brief
    descriptions or information about their condition, frequently together with
    keywords that assist in classifying and organising the items.
  </p>
  <h2 class="component-side-heading">Basic usage</h2>

  <p class="component-description">
    Set <b>class</b> to view tag in specific theme. <br />
    To specify text inside tag<b> :data</b><br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <section style="display: flex; gap: 10px">
        <hlx-tag :data="{ id: 123, value: 'Default' }" />
        <hlx-tag class="disable" :data="{ id: 123, value: 'Disabled' }" />
        <hlx-tag class="info" :data="{ id: 123, value: 'Info' }" />
        <hlx-tag
          class="danger"
          :data="{ id: 123, value: 'Maximum content lorem lorem atoz' }"
        />
        <hlx-tag class="warning" :data="{ id: 123, value: 'Warning' }" />
      </section>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-tags-icon" @click="showCode('basic-tags')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-tags" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_tags"
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
  <h2 class="component-side-heading">Tag with close call</h2>

  <p class="component-description">
    Set <b>class</b> to view tag in specific theme. <br />
    To recieve a event use<b> : @tag-close</b><br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <section style="display: flex; gap: 10px">
        <hlx-tag :data="{ id: 123, value: 'Default' }" @tag-close="removed" />
      </section>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="event-basic-tags-icon"
        @click="showCode('event-basic-tags')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="event-basic-tags" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="event_tag"
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
  <h2 class="component-side-heading">Tag attributes</h2>
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
        v-for="(i, index) in this.tagAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.tagAttributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  <h2 class="component-side-heading">Tag Events</h2>
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
        v-for="(i, index) in this.tagEvents"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.event_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.tagEvents"
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
import hlxTag from "../components/TagComponent.vue";
import CodeEditor from "simple-code-editor";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
export default {
  name: "TagView",
  components: {
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    hlxTag,
    CodeEditor,
  },
  data() {
    return {
      editor_theme: "light",
      tagAttributes: [
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
      tagEvents: [
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
          prop: "parameter",
          label: "Parameters",
          width: 50,
          type: "string",
          format: "",
        },
      ],
      table_data: [
        {
          name: "class",
          description:
            "Pass the class name to utilize the variety of tag styles",
          type: "String",
          accepted_values: "info , warning , success , danger, disable",
          default: "primary",
          mandatory: true,
        },
        {
          name: "Data",
          description:
            "Pass the Object with contains of text which needs t be added inside the tag and unique id",
          type: "Object",
          accepted_values: "{}",
          default: "-",
          mandatory: true,
        },
      ],
      event_data: [
        {
          name: "tag-close",
          description: "Emit the value of closed tag",
          parameter: "Tag value",
        },
      ],
      basic_tags: `
 <template>
   <section style="display:flex;gap:10px;">
        <hlx-tag  :data="{id:123,value:'Default'}" />
        <hlx-tag class="disable" :data="{id:123,value:'Disabled'}" />
        <hlx-tag class="info" :data="{id:123,value:'m'}" />
        <hlx-tag class="danger" :data="{id:123,value:'Maximum content lorem lorem atoz'}" />
        <hlx-tag class="warning" :data="{id:123,value:'warning'}" />
      </section>
</template>

<script>
export default {
data(){
  return {

  }
}
}
<\/script>
`,
      event_tag: `
 <template>
       <section style="display:flex;gap:10px;">
           <hlx-tag :data="{id:123,value:'Tag 1'}" @tag-close="removed" />
      </section>
</template>

<script>
export default {
data(){
  return {

  }
},
methods: {
    removed(data){
      console.log(data)
    },
    }
}
<\/script>
`,
    };
  },
  methods: {
    removed(data) {
      // console.log(data);
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
