<template>
  <h1 class="component-heading">Tabs</h1>
  <p class="component-description">
Tabs make it easy to explore and switch between different views. Tabs enable content organization at a high level, such as switching between views, data sets, or functional aspects of an app. Present tabs as a single row above their associated content. 
  </p>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">Basic and concise tabs.</p>
  <p class="component-description">
    By default the first tab is selected as active. Set <b>:border</b> attribute
    in hlx-tabs tag to top or bottom to position the active tab border. <br />
    &#60;hlx-tab-pane&#62;&#60;&#47;hlx-tab-pane&#62; can be used as a slot to
    write any HTML inside it. Also, the title can be customised using
    <b>:title</b> attribute in hlx-tab-pane tag
  </p>
  <div class="component-example">
    <div class="example-body3">
      <hlx-tabs border="bottom">
        <hlx-tab-pane title="Marvel Cinematic Universe">
          The Marvel Cinematic Universe (MCU) is an American media franchise and
          shared universe centered on a series of superhero films produced by
          Marvel Studios. The films are based on characters that appear in
          American comic books published by Marvel Comics. The franchise also
          includes television series, short films, digital series, and
          literature. The shared universe, much like the original Marvel
          Universe in comic books, was established by crossing over common plot
          elements, settings, cast, and characters. <br />
          <br />
          Marvel Studios releases its films in groups called "Phases", with the
          first three phases collectively known as "The Infinity Saga" and the
          following three phases as "The Multiverse Saga". The first MCU film,
          Iron Man (2008), began Phase One, which culminated in the 2012
          crossover film The Avengers. Phase Two began with Iron Man 3 (2013)
          and concluded with Ant-Man (2015). Phase Three began with Captain
          America: Civil War (2016) and concluded with Spider-Man: Far From Home
          (2019). Phase Four began with Black Widow (2021) and will conclude
          with Black Panther: Wakanda Forever (2022). Ant-Man and the Wasp:
          Quantumania (2023) will begin Phase Five, which will end with Blade
          (2024), and Phase Six begins with Deadpool 3 (2024). Phase Six and
          "The Multiverse Saga" will conclude with Avengers: The Kang Dynasty
          (2025) and Avengers: Secret Wars (2026).
        </hlx-tab-pane>
        <hlx-tab-pane title="Phase 5 Marvel movies">
          <b>Marvel Phase 5 movies: what you can expect to see (updated)</b>
          <br />
          <li>
            Ant-Man and The Wasp: Quantumania (released 17th February 2023)
          </li>
          <li>Guardians Of The Galaxy Vol. 3 (released 5th May 2023)</li>
          <li>The Marvels (released 28th July 2023)</li>
          <li>Captain America: New World Order (released May 3rd 2024)</li>
          <li>Blade (released 6th September 2024)</li>
        </hlx-tab-pane>
        <hlx-tab-pane title="Phase 5 timeline">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/download-2022-07-25t142658-439-1658755625.png?crop=1.00xw:1.00xh;0,0&resize=980:*"
            alt=""
            height="300"
          />
        </hlx-tab-pane>
      </hlx-tabs>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-tabs-icon" @click="showCode('basic-tabs')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-tabs" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_tabs"
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
  <h2 class="component-side-heading">Tabs with scrollable headers</h2>
  <p class="component-description">
    When there are multiple tabs, horizontal scroll is enabled by default
  </p>
  <div class="component-example">
    <div class="example-body3">
      <hlx-tabs border="bottom">
        <hlx-tab-pane title="Title 1"> Content for tab 1 </hlx-tab-pane>
        <hlx-tab-pane title="Title 2"> Content for tab 2 </hlx-tab-pane>
        <hlx-tab-pane title="Title 3"> Content for tab 3</hlx-tab-pane>
        <hlx-tab-pane title="Title 4"> Content for tab 4</hlx-tab-pane>
        <hlx-tab-pane title="Title 5"> Content for tab 5</hlx-tab-pane>
        <hlx-tab-pane title="Title 6"> Content for tab 6</hlx-tab-pane>
        <hlx-tab-pane title="Title 7"> Content for tab 7 </hlx-tab-pane>
        <hlx-tab-pane title="Title 8"> Content for tab 8</hlx-tab-pane>
        <hlx-tab-pane title="Title 9"> Content for tab 9</hlx-tab-pane>
        <hlx-tab-pane title="Title 10"> Content for tab 10 </hlx-tab-pane>
      </hlx-tabs>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span class="icon" id="scroll-tabs-icon" @click="showCode('scroll-tabs')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="scroll-tabs" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="scroll_tabs"
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
  <h2 class="component-side-heading">Tabs wrapper attributes</h2>
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
        v-for="(i, index) in this.tabsAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.tabsAttributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Tab pane attributes</h2>
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
        v-for="(i, index) in this.tabsAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data_tabs" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.tabsAttributes"
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
import CodeEditor from 'simple-code-editor'
import HlxTabPane from '../components/TabComponent.vue'
import HlxTabs from '../components/TabWrapperComponent.vue'
import hlxTable from '../components/table/HlxTable.vue'
import hlxTableHead from '../components/table/HlxTableHead.vue'
import hlxTableCell from '../components/table/HlxTableCell.vue'
import HlxDivider from '../components/DividerComponent.vue'

export default {
  components: {
    HlxTabPane,
    HlxTabs,
    CodeEditor,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    HlxDivider
  },
  data () {
    return {
      editor_theme: 'light',
      tabsAttributes: [
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
      tabsSlots: [
        {
          prop: 'name',
          label: 'Attributes',
          width: 50,
          type: 'string',
          format: ''
        },
        {
          prop: 'description',
          label: 'Description',
          width: 650,
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
      table_data: [
        {
          name: 'border',
          description: 'Display highlight border for active tab',
          type: 'String',
          accepted_values: 'top / bottom',
          default: 'bottom',
          mandatory: false
        }
      ],
      TabswrapperAttributes: {
        columns: [
          {
            name: 'attribute',
            label: 'Attributes',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'description',
            label: 'Description',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'type',
            label: 'Type',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'accepted_values',
            label: 'Accepted values',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'default',
            label: 'Default',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'mandatory',
            label: 'Mandatory',
            width: '50',
            type: 'string',
            format: ''
          }
        ],
        table_data: [
          {
            attribute: 'border',
            description: 'Display highlight border for active tab',
            type: 'String',
            accepted_values: 'top / bottom',
            default: 'bottom',
            mandatory: false
          }
        ]
      },
      TabsAttributes: {
        columns: [
          {
            name: 'attribute',
            label: 'Attributes',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'description',
            label: 'Description',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'type',
            label: 'Type',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'accepted_values',
            label: 'Accepted values',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'default',
            label: 'Default',
            width: '50',
            type: 'string',
            format: ''
          },
          {
            name: 'mandatory',
            label: 'Mandatory',
            width: '50',
            type: 'string',
            format: ''
          }
        ],
        table_data: [
          {
            attribute: 'title',
            description: 'Displays the title for the tab',
            type: 'String',
            required: 'true',
            default: '-',
            mandatory: true
          }
        ]
      },
      table_data_tabs: [
        {
          name: 'title',
          description: 'Displays the title for the tab',
          type: 'String',
          required: 'true',
          default: '-',
          mandatory: true
        }
      ],
      basic_tabs: `
<template>
  <hlx-tabs border="bottom">
    <hlx-tab-pane title="Marvel Cinematic Universe">
      The Marvel Cinematic Universe (MCU) is an American media franchise and
      shared universe centered on a series of superhero films produced by
      Marvel Studios. The films are based on characters that appear in
      American comic books published by Marvel Comics. The franchise also
      includes television series, short films, digital series, and
      literature. The shared universe, much like the original Marvel
      Universe in comic books, was established by crossing over common plot
      elements, settings, cast, and characters. <br />
      <br />
      Marvel Studios releases its films in groups called "Phases", with the
      first three phases collectively known as "The Infinity Saga" and the
      following three phases as "The Multiverse Saga". The first MCU film,
      Iron Man (2008), began Phase One, which culminated in the 2012
      crossover film The Avengers. Phase Two began with Iron Man 3 (2013)
      and concluded with Ant-Man (2015). Phase Three began with Captain
      America: Civil War (2016) and concluded with Spider-Man: Far From Home
      (2019). Phase Four began with Black Widow (2021) and will conclude
      with Black Panther: Wakanda Forever (2022). Ant-Man and the Wasp:
      Quantumania (2023) will begin Phase Five, which will end with Blade
      (2024), and Phase Six begins with Deadpool 3 (2024). Phase Six and
      "The Multiverse Saga" will conclude with Avengers: The Kang Dynasty
      (2025) and Avengers: Secret Wars (2026).
    </hlx-tab-pane>
    <hlx-tab-pane title="Phase 5 Marvel movies">
      <b>Marvel Phase 5 movies: what you can expect to see (updated)</b>
      <br />
      <li>
        Ant-Man and The Wasp: Quantumania (released 17th February 2023)
      </li>
      <li>Guardians Of The Galaxy Vol. 3 (released 5th May 2023)</li>
      <li>The Marvels (released 28th July 2023)</li>
      <li>Captain America: New World Order (released May 3rd 2024)</li>
      <li>Blade (released 6th September 2024)</li>
    </hlx-tab-pane>
    <hlx-tab-pane title="Phase 5 timeline">
      <img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/download-2022-07-25t142658-439-           
        1658755625.png?crop=1.00xw:1.00xh;0,0&resize=980:*"
        alt=""
        height="300"
      />
    </hlx-tab-pane>
  </hlx-tabs>
</template>

<script>

</\script>
      `,
      scroll_tabs: `
<template>
  <hlx-tabs border="bottom">
    <hlx-tab-pane title="Title 1"> Content for tab 1 </hlx-tab-pane>
    <hlx-tab-pane title="Title 2"> Content for tab 2 </hlx-tab-pane>
    <hlx-tab-pane title="Title 3"> Content for tab 3</hlx-tab-pane>
    <hlx-tab-pane title="Title 4"> Content for tab 4</hlx-tab-pane>
    <hlx-tab-pane title="Title 5"> Content for tab 5</hlx-tab-pane>
    <hlx-tab-pane title="Title 6"> Content for tab 6</hlx-tab-pane>
    <hlx-tab-pane title="Title 7"> Content for tab 7 </hlx-tab-pane>
    <hlx-tab-pane title="Title 8"> Content for tab 8</hlx-tab-pane>
    <hlx-tab-pane title="Title 9"> Content for tab 9</hlx-tab-pane>
    <hlx-tab-pane title="Title 10"> Content for tab 10 </hlx-tab-pane>
  </hlx-tabs>
</template>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-panel {
  display: flex;
}
</style>
