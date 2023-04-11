<template>
  <h1 class="component-heading">Drawer</h1>
  <p class="component-description">
The Drawer component is a panel that slides out from the edge of the screen. It can be useful when you need users to complete a task or view some details without leaving the current page.
  </p>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    To toggle the drawer, set <b>:show</b> attribute to true. <br />
    Bind title of the drawer panel to <b>:title</b> attribute and position of
    the drawer to <b>:position</b> attribute. <br />
    We can set position to top, bottom, left or right
  </p>
  <div class="component-example">
    <div class="example-body4">
      <hlx-button class="primary sm" @click="showDrawerLeft">Left</hlx-button>
      <hlx-button class="primary sm" @click="showDrawerRight">Right</hlx-button>
      <hlx-button class="primary sm" @click="showDrawerTop">Top</hlx-button>
      <hlx-button class="primary sm" @click="showDrawerBottom"
        >Bottom</hlx-button
      >
    </div>
    <div class="example-footer">
      <span class="icon" id="drawer-icon" @click="showCode('drawer')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="drawer" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="drawer_source"
          :read_only="true"
          :theme="'light'"
          :languages="[
            ['Javascript', 'Vue'],
            ['javascript', 'JS'],
            ['python', 'Python'],
          ]"
        />
      </div>
    </section>
  </div>
  <hlx-drawer
    :show="this.show_top"
    @close="closeTop"
    :height="'300'"
    position="top"
    :footer="true"
  >
    <template #body>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </template>
  </hlx-drawer>
  <hlx-drawer
    :show="this.show_bottom"
    @close="closeBottom"
    :height="'300'"
    position="bottom"
    :footer="true"
  >
    <template #body>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
    </template>
  </hlx-drawer>
  <hlx-drawer
    :show="this.show_right"
    @close="closeRight"
    :width="'300'"
    position="right"
    :footer="true"
  >
    <template #header> Custom header </template>
    <template #body>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </template>
  </hlx-drawer>
  <hlx-drawer
    :show="this.show_left"
    @close="closeLeft"
    :width="'300'"
    position="left"
    :footer="true"
  >
    <template #body>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </template>
  </hlx-drawer>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Drawer attributes</h2>
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
        v-for="(i, index) in this.drawerAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.drawerAttributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Drawer slots</h2>
  <hlx-table
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head
        v-for="(i, index) in this.drawerSlots"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data_slots" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.drawerSlots"
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
import HlxDrawer from '../components/DrawerComponent.vue'
import HlxButton from '../components/ButtonComponent.vue'
import HlxDivider from '../components/DividerComponent.vue'
import hlxTable from '../components/table/HlxTable.vue'
import hlxTableHead from '../components/table/HlxTableHead.vue'
import hlxTableCell from '../components/table/HlxTableCell.vue'
import CodeEditor from 'simple-code-editor'

export default {
  components: {
    HlxDrawer,
    HlxButton,
    HlxDivider,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    CodeEditor
  },
  data () {
    return {
      show_right: false,
      show_left: false,
      show_top: false,
      show_bottom: false,
      drawerAttributes: [
        {
          prop: 'name',
          label: 'Attributes',
          width: 150,
          type: 'string',
          format: ''
        },
        {
          prop: 'description',
          label: 'Description',
          width: null,
          type: 'string',
          format: ''
        },
        {
          prop: 'type',
          label: 'Type',
          width: null,
          type: 'string',
          format: ''
        },
        {
          prop: 'accepted_values',
          label: 'Accepted values',
          width: null,
          type: 'string',
          format: ''
        },
        {
          prop: 'default',
          label: 'Default',
          width: null,
          type: 'string',
          format: ''
        },
        {
          prop: 'mandatory',
          label: 'Mandatory',
          width: null,
          type: 'string',
          format: ''
        }
      ],
      table_data: [
        {
          name: 'show',
          description: 'Holds boolean value to display hide the drawer',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: '-',
          mandatory: true
        },
        {
          name: 'title',
          description: 'Displays the title of the drwer',
          type: 'String',
          accepted_values: '-',
          default: '-',
          mandatory: false
        },
        {
          name: 'footer',
          description: 'Enables the footer slot',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: false
        },
        {
          name: 'position',
          description: 'Sets the position of the drawer',
          type: 'String',
          accepted_values: 'top / bottom / left / right',
          default: '-',
          mandatory: true
        },
        {
          name: 'height',
          description:
            'Sets height of the drawer when the position is top or bottom',
          type: 'Number',
          accepted_values: '-',
          default: '-',
          mandatory: false
        },
        {
          name: 'width',
          description:
            'Sets width of the drawer when the position is right or left',
          type: 'Number',
          accepted_values: '-',
          default: '-',
          mandatory: false
        }
      ],
      drawerSlots: [
        {
          prop: 'name',
          label: 'Name',
          width: 50,
          type: 'string',
          format: ''
        },
        {
          prop: 'description',
          label: 'Description',
          width: 450,
          type: 'string',
          format: ''
        },
        {
          prop: 'fallback',
          label: 'Fallback',
          width: 250,
          type: 'string',
          format: ''
        }
      ],
      table_data_slots: [
        {
          name: '#header',
          description: 'Displays custom heading for the drawer',
          fallback: 'Drawer title'
        },
        {
          name: '#body',
          description: 'Displays body content of the drawer',
          fallback: 'Drawer body'
        },
        {
          name: '#footer',
          description: 'Displays footer for the drawer',
          fallback: 'Drawer footer'
        }
      ],
      drawer_source: `
<template>
  <hlx-button class="primary sm" @click="showDrawerLeft">Left</hlx-button>
  <hlx-button class="primary sm" @click="showDrawerRight">Right</hlx-button>
  <hlx-button class="primary sm" @click="showDrawerTop">Top</hlx-button>
  <hlx-button class="primary sm" @click="showDrawerBottom">Bottom</hlx-button>

  <hlx-drawer 
    :title="'Filter panel'" 
    :show="this.show_top" 
    :height="300" 
    position="top" 
    :footer="true"
    @close="closeTop" 
    >
    <template #body>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et       
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum."
    </template>
  </hlx-drawer>

  <hlx-drawer 
    :title="'Filter panel'" 
    :show="this.show_bottom" 
    :height="300" 
    position="bottom" 
    :footer="true"
    @close="closeBottom" 
    >
    <template #body>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et       
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum."
    </template>

  </hlx-drawer>
  <hlx-drawer 
    :show="this.show_right" 
    :width="300" 
    position="right" 
    :footer="true"
    @close="closeRight" 
    >
    <template #header>
        Custom header
    </template>
    <template #body>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et       
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum."
    </template>
  </hlx-drawer>

  <hlx-drawer 
    :title="'Filter panel'" 
    :show="this.show_left" 
    :width="300" 
    position="left" 
    :footer="true"
    @close="closeLeft" 
    >
    <template #body>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et       
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum."
    </template>
  </hlx-drawer>
</template>

<script>
export default {
  data () {
    return {
      show_right: false,
      show_left: false,
      show_top: false,
      show_bottom: false
    }
  },
  methods: {
    showDrawerLeft () {
      this.show_left = true
    },
    showDrawerRight () {
      this.show_right = true
    },
    showDrawerTop () {
      this.show_top = true
    },
    showDrawerBottom () {
      this.show_bottom = true
    },
    closeLeft () {
      this.show_left = false
    },
    closeRight () {
      this.show_right = false
    },
    closeTop () {
      this.show_top = false
    },
    closeBottom () {
      this.show_bottom = false
    }
  }
}
</\script>
      `
    }
  },
  methods: {
    showCode (val) {
      document.getElementById(val + '-icon').classList.toggle('active-icon')
      if (document.getElementById(val).style.display === 'none') {
        document.getElementById(val).style.display = 'block'
      } else if (document.getElementById(val).style.display === 'block') {
        document.getElementById(val).style.display = 'none'
      }
    },
    showDrawerLeft () {
      this.show_left = true
    },
    showDrawerRight () {
      this.show_right = true
    },
    showDrawerTop () {
      this.show_top = true
    },
    showDrawerBottom () {
      this.show_bottom = true
    },
    closeLeft () {
      this.show_left = false
    },
    closeRight () {
      this.show_right = false
    },
    closeTop () {
      this.show_top = false
    },
    closeBottom () {
      this.show_bottom = false
    }
  }
}
</script>

<style></style>
