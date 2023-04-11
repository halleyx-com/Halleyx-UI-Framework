<!-- eslint-disable no-useless-escape -->
<template>
  <h2 class="component-heading">Sidebar</h2>
  <p class="component-description">
The Sidebar is an expandable and collapsible component that typically acts as a side container to place primary or secondary content alongside the main content. It provides flexible options to be shown and hidden based on user interactions.
  </p>

  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    Set the input data for the sidebar in <b>:navItems</b>
    <br />
    To separate sidebar item just add <b>:separator</b> as true in
    <b>:navItems</b><br />
    Set default sidebar active item just add <b>:active</b> as true in
    <b>:navItems</b><br />
    Specify language in sidebar <b>:lang</b> <br />
  </p>
  <section class="component-example">
    <div class="example-body">
      <hlx-sidebar
        :navItems="nav_items"
        :lang="'en-US'"
        @nav-to="navTo"
        @go-to-home="goToHome"
      >
        <template #expand>
          <img
            src="../assets/img/Halleyx-Logo-Line-Lite.png"
            alt="halleyx"
            srcset=""
          />
        </template>
        <template #collapse>
          <img src="../assets/img/logo.png" alt="halleyx" srcset="" />
        </template>
      </hlx-sidebar>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="hlx-sidebar-basic-icon"
        @click="showCode('hlx-sidebar-basic')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>

    <!-- <span>Hide source</span>
        <i class="i-arrow-up1"></i> -->
  </section>
  <div class="source-code" id="hlx-sidebar-basic" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_sidebar_source"
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

  <!-- collapsed sidebar -->
  <h2 class="component-side-heading">Collapsed view</h2>
  <p class="component-description">
    To make sidebar as collapsed add <b>collapse</b> prop to the component.
    <br />
  </p>
  <section class="component-example">
    <div class="example-body">
      <hlx-sidebar
        :navItems="nav_items"
        :lang="'en-US'"
        collapse
        @nav-to="navTo"
        @go-to-home="goToHome"
      >
        <template #expand>
          <img
            src="../assets/img/Halleyx-Logo-Line-Lite.png"
            alt="halleyx"
            srcset=""
          />
        </template>
        <template #collapse>
          <img src="../assets/img/logo.png" alt="halleyx" srcset="" />
        </template>
      </hlx-sidebar>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="hlx-sidebar-collapsed-icon"
        @click="showCode('hlx-sidebar-collapsed')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>

    <!-- <span>Hide source</span>
        <i class="i-arrow-up1"></i> -->
  </section>
  <div class="source-code" id="hlx-sidebar-collapsed" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="collapsed_sidebar_source"
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

  <!--collapsible with default expand view -->

  <h2 class="component-side-heading">
    Collapsible sidebar with default expand view
  </h2>
  <p class="component-description">
    To make sidebar as collapsible and also make expanded as default view add
    <b>collapsible</b> prop to the component.
    <br />
  </p>
  <section class="component-example">
    <div class="example-body">
      <hlx-sidebar
        :navItems="nav_items"
        :lang="'en-US'"
        collapsible
        @nav-to="navTo"
        @go-to-home="goToHome"
      >
        <template #expand>
          <img
            src="../assets/img/Halleyx-Logo-Line-Lite.png"
            alt="halleyx"
            srcset=""
          />
        </template>
        <template #collapse>
          <img src="../assets/img/logo.png" alt="halleyx" srcset="" />
        </template>
      </hlx-sidebar>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="hlx-sidebar-collapsible-default-icon"
        @click="showCode('hlx-sidebar-collapsible-default')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>

    <!-- <span>Hide source</span>
        <i class="i-arrow-up1"></i> -->
  </section>
  <div
    class="source-code"
    id="hlx-sidebar-collapsible-default"
    style="display: none"
  >
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="collapsible_sidebar_source"
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

  <!--collapsible with default collapse  view -->

  <h2 class="component-side-heading">
    Collapsible sidebar with default collapse view
  </h2>
  <p class="component-description">
    To make sidebar as collapsible and also make collapsed as default view add
    <b>collapsible</b> and <b>collapse</b> prop to the component.
    <br />
  </p>
  <section class="component-example">
    <div class="example-body">
      <hlx-sidebar
        :navItems="nav_items"
        :lang="'en-US'"
        collapse
        collapsible
        @nav-to="navTo"
        @go-to-home="goToHome"
      >
        <template #expand>
          <img
            src="../assets/img/Halleyx-Logo-Line-Lite.png"
            alt="halleyx"
            srcset=""
          />
        </template>
        <template #collapse>
          <img src="../assets/img/logo.png" alt="halleyx" srcset="" />
        </template>
      </hlx-sidebar>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="hlx-sidebar-collapsible-collapsed-icon"
        @click="showCode('hlx-sidebar-collapsible-collapsed')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>

    <!-- <span>Hide source</span>
        <i class="i-arrow-up1"></i> -->
  </section>
  <div
    class="source-code"
    id="hlx-sidebar-collapsible-collapsed"
    style="display: none"
  >
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="collapsed_collapsible_sidebar_source"
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
        v-for="(i, index) in this.sidebarAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.sidebarAttributes"
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
        v-for="(i, index) in this.sidebarEvents"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.event_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.sidebarEvents"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>

  <h2 class="component-side-heading">Slots</h2>
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
        v-for="(i, index) in this.sidebarSlots"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.slot_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.sidebarSlots"
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
/* eslint-disable no-useless-escape */
import CodeEditor from "simple-code-editor";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
import hlxSidebar from "../components/SideBar.vue";

export default {
  name: "SideBarView",
  emits: ["navTo"],
  components: {
    hlxSidebar,
    CodeEditor,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
  },
  data() {
    return {
      nav_items: [
        {
          name: "Home",
          label: "Home",
          label_fr: "Home*",
          separator: false,
          active: true,
          icon: "icon-home-regular",
          description_en: "Home",
          description_fn: "*Home",
        },
        {
          name: "Residential business market ",
          active: true,
          label: "About",
          separator: false,
          icon: "icon-presentation-user-regular",
          description_en: "Residential business market ",
          description_fr: "*Residential business market ",
        },
        {
          name: "Small business markets",
          label: "Contact",
          separator: false,
          icon: "icon-phone-office-regular",
          description_en: "Small business markets",
          description_fr: "*Small business markets",
        },
        {
          name: "Residential business market ",
          label: "About",
          separator: true,
          icon: "icon-settings-regular",
          description_en: "Residential business market ",
          description_fr: "*Residential business market ",
        },
        {
          name: "Small business markets",
          label: "Contact",
          separator: false,
          icon: "icon-log-out-regular",
          description_en: "Small business markets",
          description_fr: "*Small business markets",
        },
      ],

      editor_theme: "light",
      basic_sidebar_source: `
    <template>
   <hlx-sidebar
        :navItems="nav_items"
        :lang="'en-US'"
        @nav-to="navTo"
        @go-to-home="goToHome"
      >
        <template #expand>
          <img
            src="../assets/img/Halleyx-Logo-Line-Lite.png"
            alt="halleyx"
            srcset=""
          />
        </template>
        <template #collapse>
          <img src="../assets/img/logo.png" alt="halleyx" srcset="" />
        </template>
      </hlx-sidebar>
</template>
<script>
export default {
  name: "hlx-sidebarView",
  emits: ["navTo"],
  components: {
    hlx-sidebar
  },
  data() {
    return {
      nav_items: [
        {
          name: 'Home',
          label: 'Home',
          separator:false,
          active:true,
          icon: 'icon-home-regular',
          description_en: 'Home',
          description_fn: '*Home'
        },
        {
          name: 'Residential business market ',
          active:true,
          label: 'About',
          separator:false,
          icon: 'icon-presentation-user-regular',
          description_en: 'Residential business market ',
          description_fr: '*Residential business market '
        },
        {
          name: 'Small business markets',
          label: 'Contact',
          separator:false,
          icon: 'icon-phone-office-regular',
          description_en: 'Small business markets',
          description_fr: '*Small business markets'
        },
        {
          name: 'Residential business market ',
          label: 'About',
          separator:true,
          icon: 'icon-settings-regular',
          description_en: 'Residential business market ',
          description_fr: '*Residential business market '
        },
        {
          name: 'Small business markets',
          label: 'Contact',
          separator:false,
          icon: 'icon-log-out-regular',
          description_en: 'Small business markets',
          description_fr: '*Small business markets'
        }
      ],
 
          };
  },
  methods: {
    navTo(item) {
      console.log(item, "item from goto");
    },
    goToHome() {
      console.log("goto home");
    }
  },
};
// eslint-disable-next-line no-useless-escape
</\script>
      `,
      collapsed_sidebar_source: `
    <template>
 <hlx-sidebar
        :navItems="nav_items"
        :lang="'en-US'"
        collapse
        @nav-to="navTo"
        @go-to-home="goToHome"
      >
        <template #expand>
          <img
            src="../assets/img/Halleyx-Logo-Line-Lite.png"
            alt="halleyx"
            srcset=""
          />
        </template>
        <template #collapse>
          <img src="../assets/img/logo.png" alt="halleyx" srcset="" />
        </template>
      </hlx-sidebar>
</template>
<script>
export default {
  name: "hlx-sidebarView",
  emits: ["navTo"],
  components: {
    hlx-sidebar
  },
  data() {
    return {
     nav_items: [
        {
          name: 'Home',
          label: 'Home',
          separator:false,
          active:true,
          icon: 'icon-home-regular',
          description_en: 'Home',
          description_fn: '*Home'
        },
        {
          name: 'Residential business market ',
          active:true,
          label: 'About',
          separator:false,
          icon: 'icon-presentation-user-regular',
          description_en: 'Residential business market ',
          description_fr: '*Residential business market '
        },
        {
          name: 'Small business markets',
          label: 'Contact',
          separator:false,
          icon: 'icon-phone-office-regular',
          description_en: 'Small business markets',
          description_fr: '*Small business markets'
        },
        {
          name: 'Residential business market ',
          label: 'About',
          separator:true,
          icon: 'icon-settings-regular',
          description_en: 'Residential business market ',
          description_fr: '*Residential business market '
        },
        {
          name: 'Small business markets',
          label: 'Contact',
          separator:false,
          icon: 'icon-log-out-regular',
          description_en: 'Small business markets',
          description_fr: '*Small business markets'
        }
      ],
      
          };
  },
  methods: {
    navTo(item) {
      console.log(item, "item from goto");
    },
    goToHome() {
      console.log("goto home");
    }
  },
};
</\script>
      `,
      collapsible_sidebar_source: `
    <template>
  <hlx-sidebar
        :navItems="nav_items"
        :lang="'en-US'"
        collapsible
        @nav-to="navTo"
        @go-to-home="goToHome"
      >
        <template #expand>
          <img
            src="../assets/img/Halleyx-Logo-Line-Lite.png"
            alt="halleyx"
            srcset=""
          />
        </template>
        <template #collapse>
          <img src="../assets/img/logo.png" alt="halleyx" srcset="" />
        </template>
      </hlx-sidebar>
</template>
<script>
export default {
  name: "hlx-sidebarView",
  emits: ["navTo"],
  components: {
    hlx-sidebar
  },
  data() {
    return {
     nav_items: [
        {
          name: 'Home',
          label: 'Home',
          separator:false,
          active:true,
          icon: 'icon-home-regular',
          description_en: 'Home',
          description_fn: '*Home'
        },
        {
          name: 'Residential business market ',
          active:true,
          label: 'About',
          separator:false,
          icon: 'icon-presentation-user-regular',
          description_en: 'Residential business market ',
          description_fr: '*Residential business market '
        },
        {
          name: 'Small business markets',
          label: 'Contact',
          separator:false,
          icon: 'icon-phone-office-regular',
          description_en: 'Small business markets',
          description_fr: '*Small business markets'
        },
        {
          name: 'Residential business market ',
          label: 'About',
          separator:true,
          icon: 'icon-settings-regular',
          description_en: 'Residential business market ',
          description_fr: '*Residential business market '
        },
        {
          name: 'Small business markets',
          label: 'Contact',
          separator:false,
          icon: 'icon-log-out-regular',
          description_en: 'Small business markets',
          description_fr: '*Small business markets'
        }
      ],
      
          };
  },
  methods: {
    navTo(item) {
      console.log(item, "item from goto");
    },
    goToHome() {
      console.log("goto home");
    }
  },
};
</\script>
      `,
      collapsed_collapsible_sidebar_source: `
    <template>
 <hlx-sidebar
    :navItems="nav_items"
    :lang="'en-US'"
    :title="'Universal product catalogue'"
    :iLogo="'i-home'"
    :collapse="true"
    :collapsible=
    "true"
    @nav-to="navTo"
    @go-to-home="goToHome"
  >
  <template #logo-with-brand>
  <img src="../assets/img/Halleyx-Logo-Line-Lite.png" alt="halleyx" srcset="">
  </template>
  <template #logo-only>
  <img src="../assets/img/Halleyx-Logo-White.png" alt="halleyx" srcset="">
  </template>
  </hlx-sidebar>
</template>
<script>
export default {
  name: "hlx-sidebarView",
  emits: ["navTo"],
  components: {
    hlx-sidebar
  },
  data() {
    return {
nav_items: [
        {
          name: 'Home',
          label: 'Home',
          separator:false,
          active:true,
          icon: 'icon-home-regular',
          description_en: 'Home',
          description_fn: '*Home'
        },
        {
          name: 'Residential business market ',
          active:true,
          label: 'About',
          separator:false,
          icon: 'icon-presentation-user-regular',
          description_en: 'Residential business market ',
          description_fr: '*Residential business market '
        },
        {
          name: 'Small business markets',
          label: 'Contact',
          separator:false,
          icon: 'icon-phone-office-regular',
          description_en: 'Small business markets',
          description_fr: '*Small business markets'
        },
        {
          name: 'Residential business market ',
          label: 'About',
          separator:true,
          icon: 'icon-settings-regular',
          description_en: 'Residential business market ',
          description_fr: '*Residential business market '
        },
        {
          name: 'Small business markets',
          label: 'Contact',
          separator:false,
          icon: 'icon-log-out-regular',
          description_en: 'Small business markets',
          description_fr: '*Small business markets'
        }
      ],
      
          };
  },
  methods: {
    navTo(item) {
      console.log(item, "item from goto");
    },
    goToHome() {
      console.log("goto home");
    }
  },
};
</\script>
      `,
      table_data: [
        {
          attribute: "navItems",
          description: "Navigation menu list with array of object",
          type: "Array of object",
          accepted_values: "[{}]",
          default: "-",
          mandatory: true,
        },
        {
          attribute: "lang",
          description:
            "Specifiy lang to match appropriate description in many language ",
          type: "String",
          accepted_values: "en-US,etc.",
          default: "en-US",
          mandatory: true,
        },
        {
          attribute: "collapse",
          description: "Make sidebar collapsible",
          type: "Boolean",
          accepted_values: "true/false",
          default: "false",
          mandatory: false,
        },
        {
          attribute: "collapsible",
          description: "Make siedabr collapsible",
          type: "Boolean",
          accepted_values: "true/false",
          default: "false",
          mandatory: false,
        },
      ],
      event_data: [
        {
          event_name: "navTo",
          description: "Indicate current navigate item",
          parameter: "navigation object",
        },
        {
          event_name: "goToHome",
          description:
            "press the logo to do any job like redirecting or any other stufs",
          parameter: "-",
        },
      ],
      slot_data: [
        {
          name: "collapse",
          description: "Place a logo for collapsed view",
          fallback: "-",
        },
        {
          name: "expand",
          description: "Place a logo for expanded view",
          fallback: "-",
        },
      ],
      sidebarAttributes: [
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
      sidebarEvents: [
        {
          prop: "event_name",
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
      sidebarSlots: [
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
          width: 350,
          type: "string",
          format: "",
        },
        {
          prop: "fallback",
          label: "FallBack",
          width: 50,
          type: "string",
          format: "",
        },
      ],
    };
  },
  methods: {
    navTo(item) {
      // console.log(item, "item from goto");
    },
    goToHome() {
      // console.log("goto home");
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
