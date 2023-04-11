<template>
  <h1 class="component-heading">Button</h1>
  <p class="component-description">
A button is basically a control component with a label that generates an event when pushed. The Button class is used to create a labeled button that has platform independent implementation. The application result in some action when the button is pushed.
  </p>
  <h2 class="component-side-heading">Basic usage</h2>

  <p class="component-description">
    To specify button in certain theme use<b> class </b> <br />
    To define disabled button use<b>:disabled</b>
  </p>
  <div class="component-example">
    <div class="example-body">
      <section class="button-container">
        <div class="button-space">
          <!-- <hlx-button class="">Button</hlx-button> -->
          <hlx-button class="primary">Button</hlx-button>

          <hlx-button class="primary-success" :label="'primary-button'">Button</hlx-button>
          <hlx-button class="primary-warning">Button</hlx-button>
          <hlx-button class="primary-info">Button</hlx-button>
          <hlx-button class="primary-error">Button</hlx-button>
          <hlx-button class="primary-error" :disabled="true">Button</hlx-button>
        </div>
      </section>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="primary-button-icon"
        @click="showCode('primary-button')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="primary-button" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="primary_button"
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

  <h2 class="component-side-heading">Secondary buttons</h2>
  <p class="component-description">
    The outlined design alternative for a button makes the backdrop translucent.
  </p>
  <div class="component-example">
    <div class="example-body">
      <section class="button-container">
        <div class="button-space">
          <hlx-button class="secondary">Button</hlx-button>
          <hlx-button class="secondary-success">Button</hlx-button>
          <hlx-button class="secondary-warning">Button</hlx-button>
          <hlx-button class="secondary-info">Button</hlx-button>
          <hlx-button class="secondary-error">Button</hlx-button>
          <hlx-button class="secondary-error" :disabled="true"
            >Button</hlx-button
          >
        </div>
      </section>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="secondary-button-icon"
        @click="showCode('secondary-button')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="secondary-button" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="secondary_button"
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

  <h2 class="component-side-heading">Text Buttons</h2>
  <p class="component-description">
    Buttons without border and background<br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <section class="button-container">
        <div class="button-space">
          <hlx-button class="text">Button</hlx-button>
          <hlx-button class="text-success">Button</hlx-button>
          <hlx-button class="text-warning">Button</hlx-button>
          <hlx-button class="text-info">Button</hlx-button>
          <hlx-button class="text-error">Button</hlx-button>
          <hlx-button class="text-error" :disabled="true">Button</hlx-button>
        </div>
      </section>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span class="icon" id="text-button-icon" @click="showCode('text-button')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="text-button" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="text_button"
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

  <h2 class="component-side-heading">Link Buttons</h2>
  <p class="component-description">
    Buttons without border and background with access the link<br />
  </p>
  <p class="component-description">
    To specify button as link use<b> class </b>as <b>link</b> <br />
    To pass url use<b> :href</b>
  </p>
  <div class="component-example">
    <div class="example-body">
      <section class="button-container">
        <div class="button-space">
          <hlx-button
            class="link"
            :href="'http://localhost:8080/buttons'"
            :target="'_self'"
            >Button</hlx-button
          >
        </div>
      </section>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span class="icon" id="link-button-icon" @click="showCode('link-button')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="link-button" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="link_button"
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

  <h2 class="component-side-heading">Pill buttons</h2>
  <p class="component-description">
    The rounded corner option is an alternative button styling where corners
    become rounded.
  </p>
  <div class="component-example">
    <div class="example-body">
      <section class="button-container">
        <div class="button-space">
          <hlx-button class="pill">Button</hlx-button>
          <hlx-button class="pill-success">Button</hlx-button>
          <hlx-button class="pill-warning">Button</hlx-button>
          <hlx-button class="pill-info">Button</hlx-button>
          <hlx-button class="pill-error">Button</hlx-button>
          <hlx-button class="pill-error" :disabled="true">Button</hlx-button>
        </div>
      </section>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span class="icon" id="pill-button-icon" @click="showCode('pill-button')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="pill-button" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="pill_button"
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

  <h2 class="component-side-heading">Tertiary buttons</h2>
  <p class="component-description">
    Use icons to give Button more meaning. You can use the icon alone to save
    space, or you can combine it with text.
  </p>
  <div class="component-example">
    <div class="example-body">
      <section class="button-container">
        <div class="button-space">
          <hlx-button class="tertiary">
            <i class="icon-location-arrow-regular"></i>
          </hlx-button>
          <hlx-button class="tertiary-invert">
            <i class="icon-location-arrow-regular"></i>
          </hlx-button>
          <hlx-button class="tertiary-secondary">
            <i class="icon-location-arrow-regular"></i>
          </hlx-button>
          <hlx-button class="tertiary" :disabled="true">
            <i class="icon-location-arrow-regular"></i>
          </hlx-button>
        </div>
      </section>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="tertiary-button-icon"
        @click="showCode('tertiary-button')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="tertiary-button" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="tertiary_button"
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
  <h2 class="component-side-heading">Button size</h2>
  <p class="component-description">
    In addition to the default size, the Button component provides three
    additional sizes from which to choose for various scenarios.
  </p>
  <div class="component-example">
    <div class="example-body">
      <section class="button-container">
        <div class="button-space">
          <hlx-button class="primary sm">Button-small</hlx-button>
          <hlx-button class="primary">Button-default</hlx-button>
          <hlx-button class="primary lg">Button-large</hlx-button>
          <!-- <hlx-button class="bg-danger">Button</hlx-button> -->
        </div>
      </section>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span class="icon" id="button-size-icon" @click="showCode('button-size')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="button-size" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="button_size"
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
  <!-- <hlx-table-component
    :tableData="this.buttonAttributes.table_data"
    :theader="this.buttonAttributes.columns"
    :height="'max-content'"
  /> -->
  <!-- Attribute table -->

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
        v-for="(i, index) in this.buttonAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.buttonAttributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  <h2 class="component-side-heading">Slots</h2>
  <!-- slot table -->

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
        v-for="(i, index) in this.buttonSlotHead"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.slotData" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.buttonSlotHead"
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
import HlxButton from "@/components/ButtonComponent.vue";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
export default {
  name: "buttonView",
  components: {
    CodeEditor,
    HlxButton,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
  },
  data() {
    return {
      editor_theme: "light",
      table_data: [
        {
          name: "class",
          description:
            "Specify the this class attribute in component for specific button . To get disabled button use bg-disabled attribute in class",
          type: "String",
          accepted_values:
            "primary,primary-success, primary-error, primary-warning, primary-info,secondary,secondary-success, secondary-error, secondary-warning, secondary-info,text,text-success, text-error, text-warning, text-info,link,tertiary,tertiary-invert,tertiary-secondary,pill,pill-success,,pill-warning,,pill-error,,pill-info,lg,sm",
          default: "-",
          mandatory: true,
        },
        {
          name: "disables",
          description: "To make button disabled.",
          type: "String",
          accepted_values: "true,false",
          default: "false",
          mandatory: false,
        },
        {
          name: "href",
          description: "To make button as link",
          type: "String",
          accepted_values: "url",
          default: "-",
          mandatory: false,
        },
      ],
      buttonAttributes: [
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
      buttonSlotHead: [
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
          prop: "fall_back",
          label: "Fallback",
          width: 50,
          type: "string",
          format: "",
        },
      ],
      slotData: [
        {
          name: "default",
          description: `Place any element inside hlx-button component. Like <hlx-button class="bg-default-lite mini"
            ><i class="icon-location"></i
          ></hlx-button>`,
          fall_back: "-",
        },
      ],

      primary_button: `
<template>
      <section class="button-container">
        <div class="button-space">
          <!-- <hlx-button class="">Button</hlx-button> -->
          <hlx-button class="primary">Button</hlx-button>
          <hlx-button class="primary-success">Button</hlx-button>
          <hlx-button class="primary-warning">Button</hlx-button>
          <hlx-button class="primary-info">Button</hlx-button>
          <hlx-button class="primary-error">Button</hlx-button>
          <hlx-button class="primary-error" :disabled="true">Button</hlx-button>
        </div>
      </section>

</template>

<script>
export default {

}
<\/script>

      <style lang="scss" scoped>

.button-container {
  .button-space {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
  }
}
</style>
      
      `,
      secondary_button: `
<template>
      <section class="button-container">
        <div class="button-space">
          <hlx-button class="secondary">Button</hlx-button>
          <hlx-button class="secondary-success">Button</hlx-button>
          <hlx-button class="secondary-warning">Button</hlx-button>
          <hlx-button class="secondary-info">Button</hlx-button>
          <hlx-button class="secondary-error">Button</hlx-button>
          <hlx-button class="secondary-error" :disabled="true">Button</hlx-button>
        </div>
      </section>
</template>

<script>
export default {

}
<\/script>

<style>

</style>
           `,

      text_button: `
<template>
      <section class="button-container">
        <div class="button-space">
          <hlx-button class="text">Button</hlx-button>
          <hlx-button class="text-success">Button</hlx-button>
          <hlx-button class="text-warning">Button</hlx-button>
          <hlx-button class="text-info">Button</hlx-button>
          <hlx-button class="text-error">Button</hlx-button>
          <hlx-button class="text-error" :disabled="true">Button</hlx-button>
        </div>
      </section>
</template>

<script>
export default {

}
<\/script>

<style>

</style>
           `,
      link_button: `
<template>
      <section class="button-container">
        <div class="button-space">
                    <hlx-button class="link" :href="'http://localhost:8080/buttons'" :target="'_self'">Button</hlx-button>
        </div>
      </section>
</template>

<script>
export default {

}
<\/script>

<style>

</style>
           `,

      pill_button: `
<template>
      <section class="button-container">
        <div class="button-space">
           <hlx-button class="pill">Button</hlx-button>
          <hlx-button class="pill-success">Button</hlx-button>
          <hlx-button class="pill-warning">Button</hlx-button>
          <hlx-button class="pill-info">Button</hlx-button>
          <hlx-button class="pill-error">Button</hlx-button>
          <hlx-button class="pill-error" :disabled="true">Button</hlx-button>
        </div>
      </section>
</template>

<script>
export default {

}
<\/script>

<style>

</style>
           `,

      tertiary_button: `
<template>
      <section class="button-container">
        <div class="button-space">
          <hlx-button class="tertiary">
          <i class="icon-location-arrow-regular"></i>
          </hlx-button>
          <hlx-button class="tertiary-invert">
          <i class="icon-location-arrow-regular"></i>
          </hlx-button>
          <hlx-button class="tertiary-secondary">
          <i class="icon-location-arrow-regular"></i>
          </hlx-button>
          <hlx-button class="tertiary" :disabled="true">
          <i class="icon-location-arrow-regular"></i>
          </hlx-button>
        </div>
      </section>
</template>`,

      button_size: `
<template>
      <section class="button-container">
        <div class="button-space">
            <hlx-button class="primary sm">Button</hlx-button>
          <hlx-button class="primary">Button</hlx-button>
          <hlx-button class="primary lg">Button</hlx-button>
        </div>
      </section>
</template>

<script>
export default {

}
<\/script>

<style>

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

<style lang="scss" scoped>
.button-container {
  .button-space {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    gap: 30px;
  }
}
</style>
