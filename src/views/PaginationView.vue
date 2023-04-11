<template>
  <h1 class="component-heading">Pagination</h1>
  <p class="component-description">
   Pagination is a function of apps that allows them to show data on a series of pages. The information can be seen by going from one page to the next rather than viewing it.
  </p>
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    Set <b>:total</b> for specifiying total item count<br />
    Define <b> :background</b> to <b>false</b> for removing background<br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <div>
        <!-- :rows-per-page="3" -->
        <!-- :pagerCount="2" -->
        <hlx-pagination
          :total="25"
          :background="false"
          @current-page="showPage"
          :rowsPerPageList="[7]"
        />
        <!-- <hlx-pagination :total="100" :pager-count="2" :rows-per-page="5"  @current-page="showPage" :background="true"/> -->
      </div>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-pagination-icon"
        @click="showCode('basic-pagination')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-pagination" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="default_pagination"
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
  <h2 class="component-side-heading">Rows per page</h2>
  <p class="component-description">
    Set <b>:rowsPerPage = true</b> for specifiying rows per page selection<br />
    Define number of rows-per-page-list in <b>:row-per-page-list</b> and get
    updated data from<b> @updated:rows-per-page</b>
  </p>
  <div class="component-example">
    <div class="example-body">
      <div>
        <!-- :rows-per-page="3" -->
        <hlx-pagination
          :total="15"
          :pagerCount="5"
          @current-page="showPage"
          :rowsPerPageList="[5, 10, 15]"
          rows-per-page
          @updated:rows-per-page="rowsPerPage"
        >
        </hlx-pagination>
        <!-- <hlx-pagination :total="100" :pager-count="2" :rows-per-page="5"  @current-page="showPage" :background="true"/> -->
      </div>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="rows-per-page-pagination-icon"
        @click="showCode('rows-per-page-pagination')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="rows-per-page-pagination" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="rowsPerPagePagination"
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
  <h2 class="component-side-heading">Go to page</h2>
  <p class="component-description">
    Set <b>:goTo = true</b> to enable pagination goto functionality,using this
    we can jumb any page directly.<br />
    and get updated data from<b> @go-to</b>
  </p>
  <div class="component-example">
    <div class="example-body">
      <div>
        <!-- :rows-per-page="3" -->
        <hlx-pagination
          :total="10"
          :pagerCount="7"
          @current-page="showPage"
          :rowsPerPageList="[5, 10, 15]"
          rows-per-page
          go-to
          @updated:rows-per-page="rowsPerPage"
        />
        <!-- <hlx-pagination :total="100" :pager-count="2" :rows-per-page="5"  @current-page="showPage" :background="true"/> -->
      </div>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="go-to-pagination-icon"
        @click="showCode('go-to-pagination')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="go-to-pagination" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="goToPagination"
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
  <h2 class="component-side-heading">Custom pagination</h2>
  <p class="component-description">
    By using the <b>options:</b> parameter, you can easily alter some of the
    pagination properties. to customize or remove the rows per page title and
    result panel using these options
  </p>
  <p class="notes">
    <b>Note:</b> &nbsp;&nbsp; Create a custom pagination using&nbsp;
    <b> slots</b>&nbsp; utilising the default functionalities that are disabled
    after your slot is filled with items or data.
  </p>
  <div class="component-example">
    <div class="example-body">
      <div>
        <!-- :rows-per-page="3" -->
        <hlx-pagination
          :total="10"
          :pagerCount="7"
          @current-page="showPage"
          :rowsPerPageList="[5, 10, 15]"
          rows-per-page
          :options="{
            attributes: {
              rowsPerPageTitle: true,
              rowsPerPageResult: true,
            },
          }"
          @updated:rows-per-page="rowsPerPage"
        >
          <template #custom-rows-per-page-title>
            <p>custom Rows per page title</p>
          </template>
          <template #custom-rows-per-page-result>
            <!-- <p>custom result</p> -->
          </template>
        </hlx-pagination>
      </div>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="custom-pagination-icon"
        @click="showCode('custom-pagination')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="custom-pagination" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="customPagination"
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
        v-for="(i, index) in this.paginationAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.paginationAttributes"
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
        v-for="(i, index) in this.paginationEvents"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.event_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.paginationEvents"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  <h2 class="component-side-heading">Slots</h2>
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
        v-for="(i, index) in this.paginationSlots"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.slot_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.paginationSlots"
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
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
import hlxPagination from "../components/PaginationComponent.vue";
import CodeEditor from "simple-code-editor";

export default {
  name: "paginationView",
  components: {
    hlxPagination,
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
          attribute: "total",
          description:
            "Specify the total number of documents to compile a pagination",
          type: "Number",
          accepted_values: "infinite",
          default: "-",
          mandatory: true,
        },
        {
          attribute: "options",
          description: "To customize the pagination attribtes",
          type: "Object",
          accepted_values: "{}",
          default: `
                    {
                      attribute:{
                                  rowsPerPageTitle:true,
                                  rowsPerPageResult:true
                      }
                    }`,
          mandatory: false,
        },
        {
          attribute: "pager-count",
          description:
            "To specify how many pagger buttons need to load while compile a pagination",
          type: "Number",
          accepted_values: ">5",
          default: "-",
          mandatory: true,
        },
        {
          attribute: "rows-per-page-list",
          description:
            "To specify how many rows options needed on that page to calculate pagination buttons",
          type: "Array",
          accepted_values: "[Numbers]",
          default: "[5, 10, 15]",
          mandatory: false,
        },
        {
          attribute: "rows-per-page",
          description: "To enable rows per page selection functionality",
          type: "Boolean",
          accepted_values: "true / false",
          default: "false",
          mandatory: false,
        },
        {
          attribute: "go-to",
          description: "To enable jump direct to the page",
          type: "Boolean",
          accepted_values: "true / false",
          default: "false",
          mandatory: false,
        },
        {
          attribute: "background",
          description: "To specify whether pager button need a background",
          type: "Boolean",
          accepted_values: "true / false",
          default: "false",
          mandatory: false,
        },
      ],
      event_data: [
        {
          event_name: "current-page",
          description: "get current page number",
          parameter: "currentPage",
        },
        {
          event_name: "updated:rows-per-page",
          description: "get current rows per page count",
          parameter: "current rows count",
        },
        {
          event_name: "go-to",
          description: "get current jumped page",
          parameter: "current page",
        },
      ],
      paginationAttributes: [
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
      paginationEvents: [
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
      paginationSlots: [
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
          name: "#custom-rows-per-page-title",
          description: `Specify the customized rows per page tile`,
          fallback: "Rows per page",
        },
        {
          name: "#custom-rows-per-page-result",
          description: `Specify the customized  pagination results`,
          fallback: "Showing n - n of n results",
        },
      ],
      default_pagination: `
<template>
         <hlx-pagination
          :total="25"
          :background="false"
          @current-page="showPage"
          :rowsPerPageList="[7]"
        />
</template>

<script>
export default {
 methods: {
    showPage(cp){
      console.log(cp)
    }
    }
}
<\/script>
      `,
      rowsPerPagePagination: `
<template>
          <hlx-pagination
          :total="10  "
          :pagerCount="7"
          @current-page="showPage"
          :rowsPerPageList="[5,10,15]"
          rows-per-page
          @updated:rows-per-page="rowsPerPage"
        />
</template>

<script>
export default {
 methods: {
  rowsPerPage(count) {
      console.log(count)
    },
    showPage(cp){
      console.log(cp)
    }
    }
}
<\/script>
      `,
      goToPagination: `
<template>
           <hlx-pagination
          :total="10  "
          @current-page="showPage"
          :rowsPerPageList="[5,10,15]"
          rows-per-page
          go-to
          @updated:rows-per-page="rowsPerPage"
          @go-to="goToPage"
        />
</template>

<script>
export default {
 methods: {
  rowsPerPage(count) {
      console.log(count)
    },
    showPage(cp){
      console.log(cp)
    },
     goToPage(page) {
      console.log(page);
    },
    }
}
<\/script>
      `,
      customPagination: `
<template>
           <hlx-pagination
          :total="10"
          :pagerCount="7"
          @current-page="showPage"
          :rowsPerPageList="[5, 10, 15]"
          rows-per-page
          :options="{
            attributes: {
              rowsPerPageTitle: true,
              rowsPerPageResult: true,
            },
          }"
          @updated:rows-per-page="rowsPerPage"
        >
          <template #custom-rows-per-page-title>
            <p>custom Rows per page title</p>
          </template>
          <template #custom-rows-per-page-result>
            <!-- <p>custom result</p> -->
          </template>
        </hlx-pagination>
</template>

<script>
export default {
 methods: {
  rowsPerPage(count) {
      console.log(count)
    },
    showPage(cp){
      console.log(cp)
    },
     goToPage(page) {
      console.log(page);
    },
    }
}
<\/script>
      `,
    };
  },
  methods: {
    rowsPerPage(count) {
      // console.log(count);
    },
    showPage(cp) {
      // console.log(cp);
    },
    goToPage(page) {
      // console.log(page);
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
.component-description code {
  margin: 0;
  border-radius: 4px;
  padding: 0.15rem 0.5rem;
  font-size: 14px;
  color: black;
  line-height: 1.4;
  background-color: #f5f7fa;
}
</style>
