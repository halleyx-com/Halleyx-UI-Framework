<template>
  <h1 class="component-heading">Table</h1>
  <p class="component-description">
    The table component is completely based on slots which gives the user
    more control over each row and each cell but with some added features and
    functionalities. The table component supports responsive configurations for
    table definitions.
  </p>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic table</h2>
  <span class="component-description">
    Basic table is just for data display. <br />
    table consists of <b>three main tags.</b>
    <li>
      hlx-table (containes named slot like, #mergehead, #thead, #tbody)
    </li>
    <li>hlx-table-head (tag itself is a default slot)</li>
    <li>hlx-table-cell (tag itself is a default slot)</li>
  </span>
  <div class="component-example">
    <div class="example-body">

      <div class="pagination-container">
      <hlx-table
        :columnCount="this.theads"
        :border="['table', 'header', 'vertical', 'horizontal']"
        :boldHeaders="false"
        :rowHover="false"
         theme="grey"
         :id="'table-1'"
        :stripedRows="false"
        :reArrangeColumns="this.re_arrange"
        :reArrangeHeads="this.theads"
        @closeRearrange="arrange"
        @applyRearrangedColumns="applyColumns"
      >
        <template #thead>
          <hlx-table-head :width="60">
            <label class="check-container">
              <i
                class="icon-minus-regular partial-check"
                v-if="this.partially_checked == true"
              ></i>
              <input
                type="checkbox"
                :class="'select-all' + this.unique"
                :checked="false"
                @click="selectAll"
              />
              <span
                class="checkmark"
                :id="'select-all-checkmark' + this.unique"
              ></span>
            </label>
          </hlx-table-head>
          <hlx-table-head :width="60">{{ "S.no" }}</hlx-table-head>
          <hlx-table-head
            v-for="(i, index) in this.headvalue"
            :key="index"
            :prop="i.prop"
            :sortable="i.sortable"
            :resizable="i.resizable"
            @sorting_func="sorting_Data"
            :width="185"
            @resizewidth="resizewidthdata"
          >
            {{ i.label }}
          </hlx-table-head>
          <hlx-table-head :align="'right'" :width="90">Price</hlx-table-head>
          <hlx-table-head :width="150">Date</hlx-table-head>
          <!-- <hlx-table-head :align="'center'"
            ><span class="action-gear"
              ><i class="icon-settings-regular" @click="arrange(true)"></i></span
          ></hlx-table-head> -->
        </template>
        <template #tbody>
          <tr v-for="(i, index) in paginatedData" :key="index" id="">
            <hlx-table-cell>
              <label class="check-container">
                <input
                  type="checkbox"
                  :checked="i.checked"
                  :disabled="i.disabled"
                  :class="'check-drag' + this.unique"
                  :id="'check-drag' + this.unique + index"
                  @click="checkItem(i, $event)"
                />
                <span class="checkmark"></span>
              </label>
            </hlx-table-cell>
            <hlx-table-cell>{{ serialNumber(index) }}</hlx-table-cell>
            <hlx-table-cell
              v-for="(j, col_index) in this.headvalue"
              :key="col_index"
            >
              {{ i[j.prop] }}
            </hlx-table-cell>
            <hlx-table-cell :align="'right'">
              {{ "$150" }}
            </hlx-table-cell>
            <hlx-table-cell :align="'center'">
              {{ this.getDate('number') }}
            </hlx-table-cell>
            <!-- <hlx-table-cell
              ><i class="icon-more-vertical-regular" @click="Contextmenu1(index);display(i)"> </i>
              <hlx-context-menu
                style="z-index: 9000"
                :options="this.options"
                :data="index.toString()"
                @chosen="receivedVal(i)"
                @closecontext="closecontext"
                :show="i.context['show'] == true"
              />
            </hlx-table-cell> -->
          </tr>
        </template>
      </hlx-table>
      </div>
        <hlx-pagination
          :total="this.tableData.length"
          :pagerCount="10"
          @current-page="currentPage"
          rows-per-page
          :rowsPerPageList="[5, 10, 15]"
          @updated:rows-per-page="changeRowsPerPage"
        ></hlx-pagination>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code0-icon"
        @click="showCode('example-code0')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="example-code0" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code0"
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
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Table with slots</h2>
  <span class="component-description">
    We have two seperate <b>Slots for thead and tbody</b>. hlx-table-head is
    looped inside the #thead slot to generate the table heads and regular tr tag
    is looped inside the #tbody slot to generate the rows. We can now specify
    the hlx-table-cell inside the tr and set values to display inside each cell.
  </span>
  <br />
  <br />
  <p class="notes">
    <b>Note:</b> &nbsp;&nbsp; Features like pagination & sorting requires
    methods that should be placed in the view files. check code to copy paste
    them according to your needs.
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table
        :columnCount="this.theads"
        :border="['table', 'header', 'vertical', 'horizontal']"
        :boldHeaders="false"
        :rowHover="false"
         theme="grey"
        :stripedRows="false"
        :reArrangeColumns="this.re_arrange"
        :reArrangeHeads="this.theads"
        @closeRearrange="arrange"
        @applyRearrangedColumns="applyColumns"
      >
        <template #thead>
          <hlx-table-head :width="60">{{ "S.no" }}</hlx-table-head>
          <hlx-table-head
            v-for="(i, index) in this.headvalue"
            :key="index"
            :prop="i.prop"
            :sortable="i.sortable"
            :resizable="i.resizable"
            @sorting_func="sorting_Data"
            @resizewidth="resizewidthdata"
          >
            {{ i.label }}
          </hlx-table-head>
          <hlx-table-head :align="'right'" :width="290">Username</hlx-table-head>
          <hlx-table-head :width="195">Button</hlx-table-head>
          <hlx-table-head :align="'center'"
            ><span class="action-gear"
              ><i class="icon-settings-regular" @click="arrange(true)"></i></span
          ></hlx-table-head>
        </template>
        <template #tbody>
          <tr v-for="(i, index) in paginatedData" :key="index" id="">
            <hlx-table-cell>{{ serialNumber(index) }}</hlx-table-cell>
            <hlx-table-cell
              v-for="(j, col_index) in this.headvalue"
              :key="col_index"
            >
              <div v-if="j.prop == 'status'">
                <span v-if="i[j.prop] === 'Active'"
                  ><hlx-label class="success"> Active </hlx-label>
                </span>
                <span v-else
                  ><hlx-label class="error"> Inactive </hlx-label>
                </span>
              </div>
              <div v-else>
                {{ i[j.prop] }}
              </div>
            </hlx-table-cell>
            <hlx-table-cell>
              <hlx-input
                :label_animation="true"
                label_value="Username"
                type="text"
                :clearable="true"
              />
            </hlx-table-cell>
            <hlx-table-cell :align="'right'">
              <hlx-button class="primary sm">Button</hlx-button>
            </hlx-table-cell>
            <hlx-table-cell
              ><i class="icon-more-vertical-regular" @click="display(i,index)"> </i>
              <hlx-context-menu
                style="z-index: 9000"
                :options="this.options"
                :data="index.toString()"
                @chosen="receivedVal(i)"
                :show="i.context['show'] == true"
              />
            </hlx-table-cell>
          </tr>
        </template>
      </hlx-table>

      <div class="pagination-container">
        <hlx-pagination
          :total="this.tableData.length"
          @current-page="currentPage"
          rows-per-page
          :rowsPerPageList="[5, 10, 15]"
          @updated:rows-per-page="changeRowsPerPage"
        ></hlx-pagination>
      </div>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code1-icon"
        @click="showCode('example-code1')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="example-code1" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code1"
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
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">
    Table with merge headers and Fixed columns
  </h2>
  <span class="component-description">
    To implement merge headers, use slot named <b>#mergehead</b> which is
    similar to the regular #thead slot. But, here you can specify the rowspan
    and colspan according to your needs.
  </span>
  <br />
  <span class="component-description">
    Set <b>:fixed</b> to 'left' or 'right' to fix the columns in their
    respective positions. You have to specify the fixed prop in both
    hlx-table-head as well as hlx-table-cell.
  </span>
  <br />
  <div class="component-example">
    <div class="example-body">
      <hlx-table
        :columnCount="this.theads"
        :border="['table', 'header', 'vertical', 'horizontal']"
        :boldHeaders="false"
        :rowHover="false"
        theme="grey"
        :stripedRows="false"
        :height="320"
      >
        <template #mergehead>
          <hlx-table-head rowspan="2" :width="60" :fixed="'left'">
            S.No
          </hlx-table-head>
          <hlx-table-head colspan="2">pokemon</hlx-table-head>
          <hlx-table-head colspan="4">Naruto</hlx-table-head>
        </template>
        <template #thead>
          <hlx-table-head
            v-for="(i, index) in this.headvalue"
            :key="index"
            :prop="i.prop"
            :width="i.prop === 'name' || i.prop === 'cartoon' ? 300 : 0"
            :sortable="false"
            :resizable="i.resizable"
            @sorting_func="sorting_Data"
            >{{ i.label }}</hlx-table-head
          >
          <hlx-table-head :align="'right'" :width="200">Username</hlx-table-head>
          <hlx-table-head>Button</hlx-table-head>
          <hlx-table-head :align="'center'" :fixed="'right'"
            ><p>Active</p></hlx-table-head>
        </template>
        <template #tbody>
          <tr v-for="(i, index) in paginatedData1" :key="index" id="">
            <hlx-table-cell :fixed="'left'">
              {{ serialNumber(index) }}
            </hlx-table-cell>
            <hlx-table-cell
              v-for="(j, col_index) in this.headvalue"
              :key="col_index"
            >
              <div v-if="j.prop == 'status'">
                <span v-if="i[j.prop] === 'Active'"
                  ><hlx-label class="success"> Active </hlx-label>
                </span>
                <span v-else
                  ><hlx-label class="error"> Inactive </hlx-label>
                </span>
              </div>
              <div v-else>
                {{ i[j.prop] }}
              </div>
            </hlx-table-cell>
            <hlx-table-cell>
              <hlx-input
                :label_animation="true"
                label_value="Username"
                type="text"
                :clearable="true"
            /></hlx-table-cell>
            <hlx-table-cell :align="'right'">
              <hlx-button class="primary sm">Button</hlx-button>
            </hlx-table-cell>
                        <hlx-table-cell :fixed="'right'"
              >
              <hlx-input :checked="false" :type="'switch'"/>
            </hlx-table-cell>
          </tr>
        </template>
      </hlx-table>
      <div class="pagination-container">
        <hlx-pagination
          :total="this.tableData.length"
          @current-page="currentPage"
          rows-per-page
          :rowsPerPageList="[5, 10, 15]"
          @updated:rows-per-page="changeRowsPerPage"
        ></hlx-pagination>
      </div>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code2-icon"
        @click="showCode('example-code2')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>

  <div class="source-code" id="example-code2" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code2"
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
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">hlx-table attributes</h2>
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
        v-for="(i, index) in this.tableattributeheadvalue"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.tableattributebodydata" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.tableattributeheadvalue"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">hlx-table-head attributes</h2>
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
        v-for="(i, index) in this.theadattributeheadvalue"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.theadattributebodydata" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.theadattributeheadvalue"
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
import HlxTable from '../components/table/HlxTable.vue'
import HlxTableCell from '../components/table/HlxTableCell.vue'
import HlxTableHead from '../components/table/HlxTableHead.vue'
import HlxPagination from '../components/PaginationComponent.vue'
import HlxContextMenu from '../components/ContextMenuComponent.vue'
import HlxInput from '../components/InputComponent.vue'
import HlxButton from '../components/ButtonComponent.vue'
import HlxDivider from '../components/DividerComponent.vue'
import CodeEditor from 'simple-code-editor'
import HlxLabel from '../components/LabelComponent.vue'
import HlxSelect from '../components/SelectComponent.vue'

export default {
  components: {
    HlxLabel,
    HlxTable,
    HlxTableCell,
    HlxTableHead,
    HlxPagination,
    HlxContextMenu,
    HlxInput,
    HlxButton,
    CodeEditor,
    HlxDivider,
    HlxSelect
  },
  data () {
    return {
      closeindex:0,
      unique: Math.floor(Math.random() * 1000 + 1),
      partially_checked: false,
      editor_theme: 'light',
      re_arrange: false,
      dropdown_data: [
                        { name: "Php", checked: false, disabled: false, value: "Php"},
                        { name: "VueJs", checked: false, disabled: false, value: "VueJs"  },
                        { name: "ReactJs", checked: false, disabled: false, value: "ReactJs"  },
                        { name: "Html", checked: false, disabled: false, value: "Html"  },
                        { name: "Css", checked: false, disabled: false, value: "Css"  },
                        { name: "Scss", checked: false, disabled: false, value: "Scss"  },
                        { name: "Sass", checked: false, disabled: false, value: "Sass"  },
                        { name: "Sql", checked: false, disabled: false, value: "Sql"  },
                        { name: "MongoDB", checked: false, disabled: false, value: "MongoDB" },
                        { name: "Javascript", checked: false, disabled: false, value: "Javascriptq"  },
                      ],
      theads: [
        {
          name: 'Name',
          checked: true,
          id: 1,
          disabled: false,
          prop: 'name',
          label: 'Name',
          sortable: true,
          resizable: true
        },
        {
          name: 'Cartoon',
          checked: true,
          id: 2,
          disabled: false,
          prop: 'cartoon',
          label: 'Cartoon',
          sortable: true,
          resizable: true
        },
        {
          name: 'Status',
          checked: true,
          id: 3,
          disabled: false,
          prop: 'status',
          label: 'Status',
          sortable: true,
          resizable: true
        }
      ],
      headvalue: [
        { prop: 'name', label: 'Name', sortable: true, resizable: true },
        { prop: 'cartoon', label: 'Cartoon', sortable: true, resizable: true },
        { prop: 'status', label: 'Status', sortable: true, resizable: true }
      ],
      tableData: [
        {
          name: 'vijay',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Brock',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Misty',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'May',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Feroz',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Ganesh',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Mathan',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Pooja',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Raags',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Gopi',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Sudhar',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Thanos',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Kang',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'MODOK',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Loki',
          cartoon: 'charizard',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        }
      ],
      tableData1: [
        {
          name: 'vijay',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Brock',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Misty',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'May',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Feroz',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Ganesh',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Mathan',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Pooja',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Raags',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Gopi',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Sudhar',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Thanos',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Kang',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'MODOK',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Loki',
          cartoon: 'charizard',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        }
      ],
      sortData: [
        {
          name: 'vijay',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Brock',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Misty',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'May',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Feroz',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Ganesh',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Mathan',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Pooja',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Raags',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Gopi',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Sudhar',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Thanos',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Kang',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'MODOK',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Loki',
          cartoon: 'charizard',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        }
      ],
      currPage: 1,
      rowsPerPage: 5,
      contextmenu: false,
      options: [
        {
          label: 'Add',
          icon: 'icon-plus-regular'
        },
        {
          label: 'View',
          icon: 'icon-eye-regular'
        },
        {
          label: 'Edit',
          icon: 'icon-edit-regular'
        },
        {
          label: 'Delete',
          icon: 'icon-trash-regular'
        }
      ],
      example_code0: `
<template>
  <hlx-table
    :columnCount="this.theads"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
    :reArrangeColumns="this.re_arrange"
    :reArrangeHeads="this.theads"
    @closeRearrange="arrange"
    @applyRearrangedColumns="applyColumns"
    :height="242"
  >
    <template #thead>
      <hlx-table-head :width="60">
        <label class="check-container">
          <i
            class="icon-minus-regular partial-check"
            v-if="this.partially_checked == true"
          ></i>
          <input
            type="checkbox"
            :class="'select-all' + this.unique"
            :checked="false"
            @click="selectAll"
          />
          <span
            class="checkmark"
            :id="'select-all-checkmark' + this.unique"
          ></span>
        </label>
      </hlx-table-head>
      <hlx-table-head :width="60">{{ "S.no" }}</hlx-table-head>
      <hlx-table-head
        v-for="(i, index) in this.headvalue"
        :key="index"
        :prop="i.prop"
        :sortable="i.sortable"
        :resizable="i.resizable"
        @sorting_func="sorting_Data"
        :width="185"
        @resizewidth="resizewidthdata"
      >
        {{ i.label }}
      </hlx-table-head>
      <hlx-table-head :align="'right'" :width="90">Price</hlx-table-head>
      <hlx-table-head :width="150">Date</hlx-table-head>
    </template>
    <template #tbody>
      <tr v-for="(i, index) in paginatedData" :key="index" id="">
        <hlx-table-cell>
          <label class="check-container">
            <input
              type="checkbox"
              :checked="i.checked"
              :disabled="i.disabled"
              :class="'check-drag' + this.unique"
              :id="'check-drag' + this.unique + index"
              @click="checkItem(i, $event)"
            />
            <span class="checkmark"></span>
          </label>
        </hlx-table-cell>
        <hlx-table-cell>{{ serialNumber(index) }}</hlx-table-cell>
        <hlx-table-cell
          v-for="(j, col_index) in this.headvalue"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
        <hlx-table-cell :align="'right'">
          {{ "$150" }}
        </hlx-table-cell>
        <hlx-table-cell :align="'center'">
          {{ this.getDate('number') }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>

  <div class="pagination-container">
    <hlx-pagination
      :total="this.tableData.length"
      :pagerCount="10"
      @current-page="currentPage"
      rows-per-page
      :rowsPerPageList="[5, 10, 15]"
      @updated:rows-per-page="changeRowsPerPage"
    ></hlx-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unique: Math.floor(Math.random() * 1000 + 1),
      partially_checked: false,
      editor_theme: 'light',
      re_arrange: false,
      theads: [
        {
          name: 'Name',
          checked: true,
          id: 1,
          disabled: false,
          prop: 'name',
          label: 'Name',
          sortable: true,
          resizable: true
        },
        {
          name: 'Cartoon',
          checked: true,
          id: 2,
          disabled: false,
          prop: 'cartoon',
          label: 'Cartoon',
          sortable: true,
          resizable: true
        },
        {
          name: 'Status',
          checked: true,
          id: 3,
          disabled: false,
          prop: 'status',
          label: 'Status',
          sortable: true,
          resizable: true
        }
      ],
      headvalue: [
        { prop: 'name', label: 'Name', sortable: true, resizable: true },
        { prop: 'cartoon', label: 'Cartoon', sortable: true, resizable: true },
        { prop: 'status', label: 'Status', sortable: true, resizable: true }
      ],
      tableData: [
        {
          name: 'vijay',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Brock',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Misty',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'May',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Feroz',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Ganesh',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Mathan',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Pooja',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Raags',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Gopi',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Sudhar',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Thanos',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Kang',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'MODOK',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Loki',
          cartoon: 'charizard',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        }
      ],
      sortData: [
        {
          name: 'vijay',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Brock',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Misty',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'May',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Feroz',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Ganesh',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Mathan',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Pooja',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Raags',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Gopi',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Sudhar',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Thanos',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Kang',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'MODOK',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Loki',
          cartoon: 'charizard',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        }
      ],
      currPage: 1,
      rowsPerPage: 5,
      contextmenu: false,
      options: [
        {
          label: 'Add',
          icon: 'icon-plus-regular'
        },
        {
          label: 'View',
          icon: 'icon-eye-regular'
        },
        {
          label: 'Edit',
          icon: 'icon-edit-regular'
        },
        {
          label: 'Delete',
          icon: 'icon-trash-regular'
        }
      ],
    }
  },
  computed: {
    paginatedData () {
      const start = (this.currPage - 1) * this.rowsPerPage
      const end = start + this.rowsPerPage
      return this.tableData.slice(start, end)
    },
    showingFrom () {
      return (this.currPage - 1) * this.rowsPerPage + 1
    },
    showingTo () {
      const lastItem = this.showingFrom + this.rowsPerPage - 1
      return lastItem > this.totalRows ? this.totalRows : lastItem
    },
    totalRows () {
      return this.tableData.length
    }
  },
  methods: {
    getDate (format) {
      const dateObj = new Date()
      const year = dateObj.getFullYear()
      const month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
      const date = ('0' + dateObj.getDate()).slice(-2)

      if (format === 'number') {
        return '{year}-{month}-{date}'
      } else if (format === 'string') {
        const monthNames = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]
        const monthName = monthNames[dateObj.getMonth()]
        return '{monthName} {date}, {year}'
      } else {
        return "Invalid argument. Please enter 'number' or 'string'."
      }
    },
    applyColumns (val) {
      this.headvalue = []
      val.forEach((e) => {
        if (e.checked === true) {
          this.headvalue.push(e)
        }
      })
    },
    arrange (val) {
      console.log('arrange', val)
      this.re_arrange = val
    },
    serialNumber (index) {
      return (this.currPage - 1) * this.rowsPerPage + index + 1
    },
    currentPage (val) {
      this.currPage = val
    },
    changeRowsPerPage (count) {
      console.log(count)
      this.rowsPerPage = count
    },
    sorting_Data (data, data1) {
      console.log(data, data1)
      if (data === 'icon-angle-up-small-filled sorting-icon') {
        const x = [...this.tableData].sort(function (a, b) {
          console.log(a)
          if (typeof a === 'object') {
            console.log(a[data1])
            if (typeof a[data1] === 'string') {
              return String(b[data1])
                .toLowerCase()
                .localeCompare(String(a[data1]).toLowerCase())
            } else if (typeof a[data1] === 'number') {
              return b[data1] - a[data1]
            }
          } else if (typeof a === 'string') {
            return String(b)
              .toLowerCase()
              .localeCompare(String(a).toLowerCase())
          } else if (typeof b === 'number') {
            return b - a
          } else {
            return 0
          }
          return 0
        })
        this.tableData = x
      } else if (data === 'icon-angle-down-small-filled sorting-icon') {
        const x = [...this.tableData].sort(function (a, b) {
          if (typeof a === 'object') {
            if (typeof a[data1] === 'string') {
              return String(a[data1])
                .toLowerCase()
                .localeCompare(String(b[data1]).toLowerCase())
            } else if (typeof a[data1] === 'number') {
              return a[data1] - b[data1]
            }
          } else if (typeof a === 'string') {
            return String(a)
              .toLowerCase()
              .localeCompare(String(b).toLowerCase())
          } else if (typeof a === 'number') {
            return a - b
          } else {
            return 0
          }
          return 0
        })
        this.tableData = x
      } else if (data === 'icon-angle-up-small-filled') {
        this.tableData = this.sortData
      } else if (data === 'icon-angle-down-small-filled') {
        this.tableData = this.sortData
      }
    },
    resizewidthdata (data1, data2) {
      console.log(data1, data2, 'resizewidth') // (widthsize, propvalue)
    },
    selectAll ($event) {
      this.select_all = $event.target.checked
      if (this.select_all === true) {
        this.partially_checked = false
        document
          .querySelectorAll('[id^=check-drag' + this.unique + ']')
          .forEach((ele) => {
            if (ele.disabled === false) {
              ele.checked = true
            }
          })
        this.tableData.forEach((ele) => {
          if (ele.disabled === false) {
            ele.checked = true
          }
        })

        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.remove('grey')
        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.add('theme')
      } else {
        this.partially_checked = false
        document
          .querySelectorAll('[id^=check-drag' + this.unique + ']')
          .forEach((ele) => {
            if (ele.disabled === false) {
              ele.checked = false
            }
            if (ele.checked === true) {
              this.partially_checked = true
              document
                .getElementById('select-all-checkmark' + this.unique)
                .classList.add('theme')
            }
          })
        this.tableData.forEach((ele) => {
          if (ele.disabled === false) {
            ele.checked = false
          }
        })
        if (this.partially_checked === false) {
          // console.log('aa');
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.remove('theme')
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.add('grey')
        } else if (this.partially_checked === true) {
          // console.log('bb');
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.remove('grey')
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.add('theme')
        }
      }
    },
    checkItem (val, $event) {
      this.atleastOne = false
      this.all_checked = true
      console.log(val)
      val.checked = $event.target.checked
      if ($event.target.checked === false) {
        document.querySelector('.select-all' + this.unique).checked = false
      }
      this.$emit('change', this.list)
      this.tableData.forEach((ele) => {
        if (ele.checked === false) {
          this.all_checked = false
        }
        if (ele.checked === true) {
          this.atleastOne = true
        }
      })
      if (this.all_checked === true) {
        document.querySelector('.select-all' + this.unique).checked = true
        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.add('theme')
      } else if (
        document.getElementById('select-all-checkmark' + this.unique)
      ) {
        this.partially_checked = false
        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.add('grey')
      }
      if (this.atleastOne === true && this.all_checked === false) {
        this.partially_checked = true
        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.remove('grey')
        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.add('theme')
      } else if (this.all_checked === true) {
        this.partially_checked = false
      }
    }
  }
}
<\script>
`,
      example_code1: `
<template>
  <hlx-table
    :columnCount="this.theads"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
    :reArrangeColumns="this.re_arrange"
    :reArrangeHeads="this.theads"
    @closeRearrange="arrange"
    @applyRearrangedColumns="applyColumns"
    :height="276"
  >
    <template #thead>
      <hlx-table-head :width="60">
        <label class="check-container">
          <i
            class="icon-minus-regular partial-check"
            v-if="this.partially_checked == true"
          ></i>
          <input
            type="checkbox"
            :class="'select-all' + this.unique"
            :checked="false"
            @click="selectAll"
          />
          <span
            class="checkmark"
            :id="'select-all-checkmark' + this.unique"
          ></span>
        </label>
      </hlx-table-head>
      <hlx-table-head :width="60">{{ 'S.no' }}</hlx-table-head>
      <hlx-table-head
        v-for="(i, index) in this.headvalue"
        :key="index"
        :prop="i.prop"
        :sortable="i.sortable"
        :resizable="i.resizable"
        @sorting_func="sorting_Data"
        @resizewidth="resizewidthdata"
      >
        {{ i.label }}
      </hlx-table-head>
      <hlx-table-head :align="'right'" :width="300">Slot 1</hlx-table-head>
      <hlx-table-head :width="195">Slot 2</hlx-table-head>
      <hlx-table-head :align="'center'"
        ><span class="action-gear"
          ><i class="icon-settings-regular" @click="arrange(true)"></i></span
      ></hlx-table-head>
    </template>
    <template #tbody>
      <tr v-for="(i, index) in paginatedData" :key="index" id="">
        <hlx-table-cell>
          <label class="check-container">
            <input
              type="checkbox"
              :checked="i.checked"
              :disabled="i.disabled"
              :class="'check-drag' + this.unique"
              :id="'check-drag' + this.unique + index"
              @click="checkItem(i, $event)"
            />
            <span class="checkmark"></span>
          </label>
        </hlx-table-cell>
        <hlx-table-cell>{{ serialNumber(index) }}</hlx-table-cell>
        <hlx-table-cell
          v-for="(j, col_index) in this.headvalue"
          :key="col_index"
        >
          <div v-if="j.prop == 'status'">
            <span v-if="i[j.prop] === 'Active'"
              ><hlx-label class="success"> Active </hlx-label>
            </span>
            <span v-else
              ><hlx-label class="error"> Inactive </hlx-label>
            </span>
          </div>
          <div v-else>
            {{ i[j.prop] }}
          </div>
        </hlx-table-cell>
        <hlx-table-cell>
          <hlx-input
            :label_animation="true"
            label_value="Username"
            type="text"
            :clearable="true"
          />
        </hlx-table-cell>
        <hlx-table-cell :align="'right'">
          <hlx-button class="primary sm">Save</hlx-button>
        </hlx-table-cell>
        <hlx-table-cell
          ><i class="icon-more-vertical-regular" @click="Contextmenu(index)">
            <hlx-context-menu
              :options="this.options"
              :data="index.toString()"
              @chosen="closecontextmenu"
              :show="i.context['show'] == true"
          /></i>
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>

  <div class="pagination-container">
    <hlx-pagination
      :total="this.tableData.length"
      @current-page="currentPage"
      rows-per-page
      :rowsPerPageList="[5, 10, 15]"
      @updated:rows-per-page="changeRowsPerPage"
    ></hlx-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unique: Math.floor(Math.random() * 1000 + 1),
      partially_checked: false,
      editor_theme: 'light',
      re_arrange: false,
      theads: [
        {
          name: 'Name',
          checked: true,
          id: 1,
          disabled: false,
          prop: 'name',
          label: 'Name',
          sortable: true,
          resizable: true
        },
        {
          name: 'Cartoon',
          checked: true,
          id: 2,
          disabled: false,
          prop: 'cartoon',
          label: 'Cartoon',
          sortable: true,
          resizable: true
        },
        {
          name: 'Status',
          checked: true,
          id: 3,
          disabled: false,
          prop: 'status',
          label: 'Status',
          sortable: true,
          resizable: true
        }
      ],
      headvalue: [
        { prop: 'name', label: 'Name', sortable: true, resizable: true },
        { prop: 'cartoon', label: 'Cartoon', sortable: true, resizable: true },
        { prop: 'status', label: 'Status', sortable: true, resizable: true }
      ],
      tableData: [
        {
          name: 'vijay',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Brock',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Misty',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'May',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Feroz',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Ganesh',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Mathan',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Pooja',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Raags',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Gopi',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Sudhar',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Thanos',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Kang',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'MODOK',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Loki',
          cartoon: 'charizard',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        }
      ],
      sortData: [
        {
          name: 'vijay',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Brock',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Misty',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'May',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Feroz',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Ganesh',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Mathan',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Pooja',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Raags',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Gopi',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Sudhar',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Thanos',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Kang',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'MODOK',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Loki',
          cartoon: 'charizard',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        }
      ],
      currPage: 1,
      rowsPerPage: 5,
      contextmenu: false,
      options: [
        {
          label: 'Add',
          icon: 'icon-plus-regular'
        },
        {
          label: 'View',
          icon: 'icon-eye-regular'
        },
        {
          label: 'Edit',
          icon: 'icon-edit-regular'
        },
        {
          label: 'Delete',
          icon: 'icon-trash-regular'
        }
      ],
    }
  },
  computed: {
    paginatedData () {
      const start = (this.currPage - 1) * this.rowsPerPage
      const end = start + this.rowsPerPage
      return this.tableData.slice(start, end)
    },
    showingFrom () {
      return (this.currPage - 1) * this.rowsPerPage + 1
    },
    showingTo () {
      const lastItem = this.showingFrom + this.rowsPerPage - 1
      return lastItem > this.totalRows ? this.totalRows : lastItem
    },
    totalRows () {
      return this.tableData.length
    }
  },
  methods: {
    applyColumns (val) {
      this.headvalue = []
      val.forEach((e) => {
        if (e.checked === true) {
          this.headvalue.push(e)
        }
      })
    },
    arrange (val) {
      this.re_arrange = val
    },
    serialNumber (index) {
      return (this.currPage - 1) * this.rowsPerPage + index + 1
    },
    currentPage (val) {
      this.currPage = val
    },
    changeRowsPerPage (count) {
      this.rowsPerPage = count
    },
    sorting_Data (data, data1) {
      if (data === 'icon-angle-up-small-filled sorting-icon') {
        const x = [...this.tableData].sort(function (a, b) {
          console.log(a)
          if (typeof a === 'object') {
            console.log(a[data1])
            if (typeof a[data1] === 'string') {
              return String(b[data1])
                .toLowerCase()
                .localeCompare(String(a[data1]).toLowerCase())
            } else if (typeof a[data1] === 'number') {
              return b[data1] - a[data1]
            }
          } else if (typeof a === 'string') {
            return String(b)
              .toLowerCase()
              .localeCompare(String(a).toLowerCase())
          } else if (typeof b === 'number') {
            return b - a
          } else {
            return 0
          }
          return 0
        })
        this.tableData = x
      } else if (data === 'icon-angle-down-small-filled sorting-icon') {
        const x = [...this.tableData].sort(function (a, b) {
          if (typeof a === 'object') {
            if (typeof a[data1] === 'string') {
              return String(a[data1])
                .toLowerCase()
                .localeCompare(String(b[data1]).toLowerCase())
            } else if (typeof a[data1] === 'number') {
              return a[data1] - b[data1]
            }
          } else if (typeof a === 'string') {
            return String(a)
              .toLowerCase()
              .localeCompare(String(b).toLowerCase())
          } else if (typeof a === 'number') {
            return a - b
          } else {
            return 0
          }
          return 0
        })
        this.tableData = x
      } else if (data === 'icon-angle-up-small-filled') {
        this.tableData = this.sortData
      } else if (data === 'icon-angle-down-small-filled') {
        this.tableData = this.sortData
      }
    },
    resizewidthdata (data1, data2) {
      console.log(data1, data2, 'resizewidth') // (widthsize, propvalue)
    },
  }
}
<\script>
`,
      example_code2: `
<template>
       <hlx-table
        :columnCount="this.theads"
        :border="['table', 'header', 'vertical', 'horizontal']"
        :boldHeaders="false"
        :rowHover="false"
        theme="grey"
        :stripedRows="false"
        :height="320"
      >
        <template #mergehead>
          <hlx-table-head rowspan="2" :width="60" :fixed="'left'">
            S.No
          </hlx-table-head>
          <hlx-table-head colspan="2">pokemon</hlx-table-head>
          <hlx-table-head colspan="4">Naruto</hlx-table-head>
        </template>
        <template #thead>
          <hlx-table-head
            v-for="(i, index) in this.headvalue"
            :key="index"
            :prop="i.prop"
            :width="i.prop === 'name' || i.prop === 'cartoon' ? 300 : 0"
            :sortable="false"
            :resizable="i.resizable"
            @sorting_func="sorting_Data"
            >{{ i.label }}</hlx-table-head
          >
          <hlx-table-head :align="'right'" :width="200">Username</hlx-table-head>
          <hlx-table-head>Button</hlx-table-head>
          <hlx-table-head :align="'center'" :fixed="'right'"
            ><p>Active</p></hlx-table-head>
        </template>
        <template #tbody>
          <tr v-for="(i, index) in paginatedData1" :key="index" id="">
            <hlx-table-cell :fixed="'left'">
              {{ serialNumber(index) }}
            </hlx-table-cell>
            <hlx-table-cell
              v-for="(j, col_index) in this.headvalue"
              :key="col_index"
            >
              <div v-if="j.prop == 'status'">
                <span v-if="i[j.prop] === 'Active'"
                  ><hlx-label class="success"> Active </hlx-label>
                </span>
                <span v-else
                  ><hlx-label class="error"> Inactive </hlx-label>
                </span>
              </div>
              <div v-else>
                {{ i[j.prop] }}
              </div>
            </hlx-table-cell>
            <hlx-table-cell>
              <hlx-input
                :label_animation="true"
                label_value="Username"
                type="text"
                :clearable="true"
            /></hlx-table-cell>
            <hlx-table-cell :align="'right'">
              <hlx-button class="primary sm">Button</hlx-button>
            </hlx-table-cell>
                        <hlx-table-cell :fixed="'right'"
              >
              <hlx-input :checked="false" :type="'switch'"/>
            </hlx-table-cell>
          </tr>
        </template>
      </hlx-table>
  <div class="pagination-container">
    <hlx-pagination
      :total="this.tableData.length"
      @current-page="currentPage"
      rows-per-page
      :rowsPerPageList="[5, 10, 15]"
      @updated:rows-per-page="changeRowsPerPage"
    ></hlx-pagination>
  </div>
</template>

<script>

export default {
  data() {
    return {
      unique: Math.floor(Math.random() * 1000 + 1),
      partially_checked: false,
      editor_theme: 'light',
      re_arrange: false,
      theads: [
        {
          name: 'Name',
          checked: true,
          id: 1,
          disabled: false,
          prop: 'name',
          label: 'Name',
          sortable: true,
          resizable: true
        },
        {
          name: 'Cartoon',
          checked: true,
          id: 2,
          disabled: false,
          prop: 'cartoon',
          label: 'Cartoon',
          sortable: true,
          resizable: true
        },
        {
          name: 'Status',
          checked: true,
          id: 3,
          disabled: false,
          prop: 'status',
          label: 'Status',
          sortable: true,
          resizable: true
        }
      ],
      headvalue: [
        { prop: 'name', label: 'Name', sortable: true, resizable: true },
        { prop: 'cartoon', label: 'Cartoon', sortable: true, resizable: true },
        { prop: 'status', label: 'Status', sortable: true, resizable: true }
      ],
      tableData: [
        {
          name: 'vijay',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Brock',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Misty',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'May',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Feroz',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Ganesh',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Mathan',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Pooja',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Raags',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Gopi',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Sudhar',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Thanos',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Kang',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'MODOK',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Loki',
          cartoon: 'charizard',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        }
      ],
      sortData: [
        {
          name: 'vijay',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Brock',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Misty',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'May',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Feroz',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Ganesh',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Mathan',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Pooja',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Raags',
          cartoon: 'pikachu',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Gopi',
          cartoon: 'charizard',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Sudhar',
          cartoon: 'ninja',
          status: 'Inactive',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Thanos',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Kang',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'MODOK',
          cartoon: 'frookie',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        },
        {
          name: 'Loki',
          cartoon: 'charizard',
          status: 'Active',
          context: { show: false },
          checked: false,
          id: 1,
          disabled: false
        }
      ],
      currPage: 1,
      rowsPerPage: 5,
      contextmenu: false,
      options: [
        {
          label: 'Add',
          icon: 'icon-plus-regular'
        },
        {
          label: 'View',
          icon: 'icon-eye-regular'
        },
        {
          label: 'Edit',
          icon: 'icon-edit-regular'
        },
        {
          label: 'Delete',
          icon: 'icon-trash-regular'
        }
      ],
    }
  },
    computed: {
    paginatedData () {
      const start = (this.currPage - 1) * this.rowsPerPage
      const end = start + this.rowsPerPage
      return this.tableData.slice(start, end)
    },
    showingFrom () {
      return (this.currPage - 1) * this.rowsPerPage + 1
    },
    showingTo () {
      const lastItem = this.showingFrom + this.rowsPerPage - 1
      return lastItem > this.totalRows ? this.totalRows : lastItem
    },
    totalRows () {
      return this.tableData.length
    }
  },
  methods: {
    applyColumns (val) {
      this.headvalue = []
      val.forEach((e) => {
        if (e.checked === true) {
          this.headvalue.push(e)
        }
      })
    },
    arrange (val) {
      this.re_arrange = val
    },
    serialNumber (index) {
      return (this.currPage - 1) * this.rowsPerPage + index + 1
    },
    currentPage (val) {
      this.currPage = val
    },
    changeRowsPerPage (count) {
      this.rowsPerPage = count
    },
    sorting_Data (data, data1) {
      if (data === 'icon-angle-up-small-filled sorting-icon') {
        const x = [...this.tableData].sort(function (a, b) {
          console.log(a)
          if (typeof a === 'object') {
            console.log(a[data1])
            if (typeof a[data1] === 'string') {
              return String(b[data1])
                .toLowerCase()
                .localeCompare(String(a[data1]).toLowerCase())
            } else if (typeof a[data1] === 'number') {
              return b[data1] - a[data1]
            }
          } else if (typeof a === 'string') {
            return String(b)
              .toLowerCase()
              .localeCompare(String(a).toLowerCase())
          } else if (typeof b === 'number') {
            return b - a
          } else {
            return 0
          }
          return 0
        })
        this.tableData = x
      } else if (data === 'icon-angle-down-small-filled sorting-icon') {
        const x = [...this.tableData].sort(function (a, b) {
          if (typeof a === 'object') {
            if (typeof a[data1] === 'string') {
              return String(a[data1])
                .toLowerCase()
                .localeCompare(String(b[data1]).toLowerCase())
            } else if (typeof a[data1] === 'number') {
              return a[data1] - b[data1]
            }
          } else if (typeof a === 'string') {
            return String(a)
              .toLowerCase()
              .localeCompare(String(b).toLowerCase())
          } else if (typeof a === 'number') {
            return a - b
          } else {
            return 0
          }
          return 0
        })
        this.tableData = x
      } else if (data === 'icon-angle-up-small-filled') {
        this.tableData = this.sortData
      } else if (data === 'icon-angle-down-small-filled') {
        this.tableData = this.sortData
      }
    },
    resizewidthdata (data1, data2) {
      console.log(data1, data2, 'resizewidth') // (widthsize, propvalue)
    },
  }
}
<\script>
`,
      tableattributeheadvalue: [
        { prop: 'name', label: 'Name', width: 150 },
        { prop: 'description', label: 'Description', width: null },
        { prop: 'default', label: 'Default', width: null },
        { prop: 'type', label: 'Type', width: null },
        { prop: 'accepted_values', label: 'Accepted values', width: null },
        { prop: 'mandatory', label: 'Mandatory', width: null }
      ],
      theadattributeheadvalue: [
        { prop: 'name', label: 'Name', width: 150 },
        { prop: 'description', label: 'Description', width: null },
        { prop: 'default', label: 'Default', width: null },
        { prop: 'type', label: 'Type', width: null },
        { prop: 'accepted_values', label: 'Accepted values', width: null },
        { prop: 'mandatory', label: 'Mandatory', width: null }
      ],
      eventheadvalue: [
        { prop: 'name', label: 'Name' },
        { prop: 'description', label: 'Description' },
        { prop: 'parameters', label: 'Parameters' }
      ],
      tableattributebodydata: [
        {
          name: 'columnCount',
          description:
            'Supply the total number of columns as Array of objects to render the colgroups',
          default: '-',
          type: 'Number',
          accepted_values: '>0',
          mandatory: 'true'
        },
        {
          name: 'border',
          description:
            'Sets different types of border styles for the table. Toggle between table, header, horiontal and vertical',
          default: '-',
          type: 'Array',
          accepted_values: '["table","header","horizontal","vertical"]',
          mandatory: 'false'
        },
        {
          name: 'boldHeaders',
          description: 'Sets bold font style for the column header text',
          default: 'false',
          type: 'Boolean',
          accepted_values: 'true / false',
          mandatory: 'false'
        },
        {
          name: 'rowHover',
          description: 'Sets hover effect for rows',
          default: 'false',
          type: 'Boolean',
          accepted_values: 'true / false',
          mandatory: 'false'
        },
        {
          name: 'theme',
          description: 'Sets theme color for the header area',
          default: 'light',
          type: 'String',
          accepted_values: 'light / grey / primary',
          mandatory: 'false'
        },
        {
          name: 'stripedRows',
          description: 'Sets striped theme for the table rows',
          default: 'false',
          type: 'Boolean',
          accepted_values: 'true / false',
          mandatory: 'false'
        },
        {
          name: 'height',
          description: 'Sets height for the table',
          default: '400',
          type: 'Number',
          accepted_values: '>0',
          mandatory: 'false'
        },
        {
          name: 'reArrangeColumns',
          description: 'Enables a modal window to rearrange, show/hide columns',
          default: 'false',
          type: 'Boolean',
          accepted_values: 'true / false',
          mandatory: 'false'
        },
        {
          name: 'reArrangeHeads',
          description:
            'Supply the thead(whichever is used ti loop through the hlx-table-head) array along with name, checked and disabled attributes as boolean',
          default: '-',
          type: 'Array',
          accepted_values: '[]',
          mandatory: 'true (if reArrangeColumns is true)'
        },
        {
          name: 'fixed',
          description: 'Freeze columns to either side of the table',
          default: '-',
          type: 'String',
          accepted_values: 'left / right',
          mandatory: 'false'
        }
      ],
      theadattributebodydata: [
        {
          name: 'width',
          description: 'Sets width for the column',
          default: '-',
          type: 'Number',
          accepted_values: '>0',
          mandatory: 'false'
        },
        {
          name: 'sortable',
          description: 'Displays sorting icon near the column name',
          default: 'false',
          type: 'Boolean',
          accepted_values: 'true / false',
          mandatory: 'false'
        },
        {
          name: 'resizable',
          description:
            'Enables dynamic resizing of column by holding and dragging the edges of the column',
          default: 'false',
          type: 'Boolean',
          accepted_values: 'true / false',
          mandatory: 'false'
        },
        {
          name: 'align',
          description:
            'Sets text alignment for the column (this attribute can be set on both hlx-table-head as well as hlx-table-cell)',
          default: 'center',
          type: 'String',
          accepted_values: 'left / center / right',
          mandatory: 'false'
        }
      ],
      eventbodydata: [
        {
          name: '--',
          description: 'op',
          parameters: 'okkj'
        }
      ]
    }
  },
  mounted() {
     window.addEventListener('click',this.hide)
  },
  computed: {
    paginatedData () {
      const start = (this.currPage - 1) * this.rowsPerPage
      const end = start + this.rowsPerPage
      return this.tableData.slice(start, end)
    },
    paginatedData1 () {
      const start = (this.currPage - 1) * this.rowsPerPage
      const end = start + this.rowsPerPage
      return this.tableData1.slice(start, end)
    },
    showingFrom () {
      return (this.currPage - 1) * this.rowsPerPage + 1
    },
    showingTo () {
      const lastItem = this.showingFrom + this.rowsPerPage - 1
      return lastItem > this.totalRows ? this.totalRows : lastItem
    },
    totalRows () {
      return this.tableData.length
    }
  },
  methods: {
    hide(event){
      if(event.target.classList.contains('icon-more-vertical-regular') == false){
        // console.log('jhdvj',this.closeindex,this.tableData[this.closeindex]);
          this.tableData[this.closeindex].context['show'] = false
      }
 },
    receivedVal(ele){
       ele.context['show'] = false
    },
    display(ele,index){
      this.closeindex = index
      if(event.target.classList.contains('icon-more-vertical-regular') == true){
      if(ele.context['show'] == true){
         ele.context['show'] = false
      }else{
      ele.context['show'] = true
      }
        }else{
        ele.context['show'] = false
        }
},
    openorclose(value)
    {
       if(value === 'open')
       {
         console.log('hello');
        //  document.querySelector('#table-1').style.overflowY = 'none'
        //  document.querySelector('#table-1').style.overflowX = 'hidden'
       }
       else if(value === 'close'){
        //   console.log('hi');
        //    document.querySelector('#table-1').style.overflowX = 'auto'
        //  document.querySelector('#table-1').style.overflowY = 'auto'
       }
    },
    getDate (format) {
      const dateObj = new Date()
      const year = dateObj.getFullYear()
      const month = ('0' + (dateObj.getMonth() + 1)).slice(-2)
      const date = ('0' + dateObj.getDate()).slice(-2)

      if (format === 'number') {
        return `${year}-${month}-${date}`
      } else if (format === 'string') {
        const monthNames = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]
        const monthName = monthNames[dateObj.getMonth()]
        return `${monthName} ${date}, ${year}`
      } else {
        return "Invalid argument. Please enter 'number' or 'string'."
      }
    },
    applyColumns (val) {
      this.headvalue = []
      val.forEach((e) => {
        if (e.checked === true) {
          this.headvalue.push(e)
        }
      })
    },
    arrange (val) {
      // console.log('arrange', val)
      this.re_arrange = val
    },
    serialNumber (index) {
      return (this.currPage - 1) * this.rowsPerPage + index + 1
    },
    currentPage (val) {
      this.currPage = val
    },
    changeRowsPerPage (count) {
      // console.log(count)
      this.rowsPerPage = count
    },
    sorting_Data (data, data1) {
      // console.log(data, data1)
      if (data === 'icon-angle-up-small-filled sorting-icon') {
        const x = [...this.tableData].sort(function (a, b) {
          // console.log(a)
          if (typeof a === 'object') {
            // console.log(a[data1])
            if (typeof a[data1] === 'string') {
              return String(b[data1])
                .toLowerCase()
                .localeCompare(String(a[data1]).toLowerCase())
            } else if (typeof a[data1] === 'number') {
              return b[data1] - a[data1]
            }
          } else if (typeof a === 'string') {
            return String(b)
              .toLowerCase()
              .localeCompare(String(a).toLowerCase())
          } else if (typeof b === 'number') {
            return b - a
          } else {
            return 0
          }
          return 0
        })
        this.tableData = x
      } else if (data === 'icon-angle-down-small-filled sorting-icon') {
        const x = [...this.tableData].sort(function (a, b) {
          if (typeof a === 'object') {
            if (typeof a[data1] === 'string') {
              return String(a[data1])
                .toLowerCase()
                .localeCompare(String(b[data1]).toLowerCase())
            } else if (typeof a[data1] === 'number') {
              return a[data1] - b[data1]
            }
          } else if (typeof a === 'string') {
            return String(a)
              .toLowerCase()
              .localeCompare(String(b).toLowerCase())
          } else if (typeof a === 'number') {
            return a - b
          } else {
            return 0
          }
          return 0
        })
        this.tableData = x
      } else if (data === 'icon-angle-up-small-filled') {
        this.tableData = this.sortData
      } else if (data === 'icon-angle-down-small-filled') {
        this.tableData = this.sortData
      }
    },
    resizewidthdata (data1, data2) {
      // console.log(data1, data2, 'resizewidth') // (widthsize, propvalue)
    },
    Contextmenu (index) {
      if (event.target.className === 'icon-more-vertical-regular') {
        this.tableData1[index].context.show = true
      } else {
        // this.clicked = false;
        this.tableData1.forEach((e) => {
          if (e.context !== undefined) {
            e.context.show = false
          }
        })
      }
      // console.log(this.tableData);
    },
    Contextmenu1 (index) {
      if (event.target.className === 'icon-more-vertical-regular') {
        this.tableData[index].context.show = true
      } else {
        // this.clicked = false;
        this.tableData.forEach((e) => {
          if (e.context !== undefined) {
            e.context.show = false
          }
        })
      }
      this.closeindex = index
      // console.log(this.tableData);
    },
    closecontextmenu (data1, data2) {
      const indexvalue = parseInt(data2)
      // console.log(data1, indexvalue) // (select contextmenuvalue, dataindex value)
    },
    closecontext(val)
    {
      // console.log(val,'opopo');
      this.tableData[this.closeindex].context['show'] = val
    },
    showCode (val) {
      document.getElementById(val + '-icon').classList.toggle('active-icon')
      if (document.getElementById(val).style.display === 'none') {
        document.getElementById(val).style.display = 'block'
      } else if (document.getElementById(val).style.display === 'block') {
        document.getElementById(val).style.display = 'none'
      }
    },
    selectAll ($event) {
      this.select_all = $event.target.checked
      if (this.select_all === true) {
        this.partially_checked = false
        document
          .querySelectorAll('[id^=check-drag' + this.unique + ']')
          .forEach((ele) => {
            if (ele.disabled === false) {
              ele.checked = true
            }
          })
        this.tableData.forEach((ele) => {
          if (ele.disabled === false) {
            ele.checked = true
          }
        })

        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.remove('grey')
        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.add('theme')
      } else {
        this.partially_checked = false
        document
          .querySelectorAll('[id^=check-drag' + this.unique + ']')
          .forEach((ele) => {
            if (ele.disabled === false) {
              ele.checked = false
            }
            if (ele.checked === true) {
              this.partially_checked = true
              document
                .getElementById('select-all-checkmark' + this.unique)
                .classList.add('theme')
            }
          })
        this.tableData.forEach((ele) => {
          if (ele.disabled === false) {
            ele.checked = false
          }
        })
        if (this.partially_checked === false) {
          // console.log('aa');
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.remove('theme')
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.add('grey')
        } else if (this.partially_checked === true) {
          // console.log('bb');
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.remove('grey')
          document
            .getElementById('select-all-checkmark' + this.unique)
            .classList.add('theme')
        }
      }
      this.$emit('change', this.tableData)
    },
    checkItem (val, $event) {
      this.atleastOne = false
      this.all_checked = true
      // console.log(val)
      val.checked = $event.target.checked
      if ($event.target.checked === false) {
        document.querySelector('.select-all' + this.unique).checked = false
      }
      this.$emit('change', this.list)
      this.tableData.forEach((ele) => {
        if (ele.checked === false) {
          this.all_checked = false
        }
        if (ele.checked === true) {
          this.atleastOne = true
        }
      })
      if (this.all_checked === true) {
        document.querySelector('.select-all' + this.unique).checked = true
        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.add('theme')
      } else if (
        document.getElementById('select-all-checkmark' + this.unique)
      ) {
        this.partially_checked = false
        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.add('grey')
      }
      if (this.atleastOne === true && this.all_checked === false) {
        this.partially_checked = true
        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.remove('grey')
        document
          .getElementById('select-all-checkmark' + this.unique)
          .classList.add('theme')
      } else if (this.all_checked === true) {
        this.partially_checked = false
      }
    }
  }
}
</script>

<style>
.icon-more-vertical-regular:hover{ 
    cursor: pointer;
      color: white;
      background: #265E4B ;
      padding: 5px;
      border-radius: 17px;
}
</style>
