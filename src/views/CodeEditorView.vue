<template>
  <h1 class="component-heading">Code Editor</h1>
  <p class="component-description">
    Code editor component is a language sensitive and context-aware editor. It
    highlights the syntax elements of your programs; and provides many features.
  </p>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    By default the code editor gives the user to write code/text inside the
    editor. <br>
    Use v-model:value to receive the content from code-editor
  </p>
  <div class="component-example">
    <div class="example-body3">
      <hlx-code-editor
        :intellisenseData="this.list"
        :lineNumber="true"
      ></hlx-code-editor>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="basic-code-editor-icon"
        @click="showCode('basic-code-editor')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-code-editor" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_code_editor"
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
  <h2 class="component-side-heading">Beautify code</h2>
  <p class="component-description">
    Set <b>:beautify</b> to true that adds a button to beautify the code. You
    can also set <b>:lineNumber</b> to display the line numbers
  </p>
  <div class="component-example">
    <div class="example-body3">
      <hlx-code-editor
        :intellisenseData="this.list"
        :beautify="true"
        :lineNumber="true"
        :primaryColor="'blue'"
        :secondaryColor="'brown'"
      ></hlx-code-editor>
    </div>
    <div class="example-footer">
      <span class="icon" id="code-editor-icon" @click="showCode('code-editor')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="code-editor" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="code_editor"
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
  <h2 class="component-side-heading">Single line editor</h2>
  <p class="component-description">
    By default the code editor is set to 10 rows. You can specify the rows
    attribute by setting <b>:this.rows</b> to 1 to get the single line code
    editor
  </p>
  <div class="component-example">
    <div class="example-body3" style="overflow: inherit">
      <hlx-code-editor
        :intellisenseData="this.list"
        :rows="1"
        :beautify="true"
        :lineNumber="false"
      ></hlx-code-editor>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="line_code_editor-icon"
        @click="showCode('line_code_editor')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="line_code_editor" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="line_code_editor"
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
  <h2 class="component-side-heading">Code editor attributes</h2>
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
        v-for="(i, index) in this.codeEditorAttributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.code_editor_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.codeEditorAttributes"
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
import HlxCodeEditor from '../components/CodeEditorComponent.vue'
import hlxTable from '../components/table/HlxTable.vue'
import hlxTableHead from '../components/table/HlxTableHead.vue'
import hlxTableCell from '../components/table/HlxTableCell.vue'
import HlxDivider from '../components/DividerComponent.vue'

export default {
  components: {
    HlxCodeEditor,
    CodeEditor,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    HlxDivider
  },
  data () {
    return {
      list: {
        schema: [
          { label: 'quote.agreement', type: 'string' },
          { label: 'quote.attachment', type: 'string' },
          { label: 'quote.quoteDate', type: 'date' },
          { label: 'quote.quoteItem', type: 'Array' }
        ],
        keywords: [
          { label: 'if' },
          { label: 'then' },
          { label: 'else' },
          { label: 'and' },
          { label: 'or' },
          { label: 'function' },
          { label: 'filter' },
          { label: 'reduce' },
          { label: 'map' },
          { label: 'Date' },
          { label: 'Math' },
          { label: 'slice' },
          { label: 'substr' },
          { label: 'concat' },
          { label: 'true' },
          { label: 'false' }
        ],
        methods: {
          array: [
            {
              label: 'filter',
              syntax:
                'array.filter(function(currentValue, index, arr), thisValue)'
            },
            {
              label: 'reduce',
              syntax:
                'array.reduce(function(total, currentValue, currentIndex, arr), initialValue)'
            },
            {
              label: 'map',
              syntax:
                'array.map(function(currentValue, index, arr), thisValue)'
            }
          ],
          date: [
            {
              label: 'getDay',
              syntax: 'getDay()'
            },
            {
              label: 'getDate',
              syntax: 'getDate()'
            },
            {
              label: 'getTime',
              syntax: 'getTime()'
            },
            {
              label: 'getMonth',
              syntax: 'getMonth()'
            },
            {
              label: 'getFullYear',
              syntax: 'getFullYear()'
            },
            {
              label: 'setDate',
              syntax: 'setDate()'
            },
            {
              label: 'setTime',
              syntax: 'setTime()'
            },
            {
              label: 'setMonth',
              syntax: 'setMonth()'
            },
            {
              label: 'setFullYear',
              syntax: 'setFullYear()'
            }
          ],
          integer: [
            {
              label: 'random',
              syntax: 'Math.random()'
            },
            {
              label: 'round',
              syntax: 'Math.round(x)'
            }
          ],
          string: [
            { label: 'charAt', syntax: 'string.charAt(index)' },
            { label: 'slice', syntax: 'string.slice(start, end)' }
          ]
        }
      },
      editor_theme: 'light',
      codeEditorAttributes: [
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
      code_editor_data: [
        {
          name: 'lineNumber',
          description: 'Displays line number in the code editor',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: false
        },
        {
          name: 'intellisenseData',
          description: 'Supply payload data for intellisense suggesstion box',
          type: 'Array',
          accepted_values: '-',
          default: '-',
          mandatory: true
        },
        {
          name: 'height',
          description: 'Sets height for the code editor',
          type: 'Number',
          accepted_values: '>0',
          default: '200',
          mandatory: false
        },
        {
          name: 'primaryColor',
          description: 'Sets primary color for code formatting',
          type: 'String',
          accepted_values: '(all css color values)',
          default: '#905',
          mandatory: false
        },
        {
          name: 'secondaryColor',
          description: 'Sets secondary color for code formatting',
          type: 'String',
          accepted_values: '(all css color values)',
          default: '#690',
          mandatory: false
        },
        {
          name: 'beautify',
          description: 'Enables button to beautify the code',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: false
        },
        {
          name: 'rows',
          description: 'Sets height for code-editor in rows like textarea',
          type: 'Number',
          accepted_values: '>0',
          default: '10',
          mandatory: false
        },
        {
          name: 'pre_value',
          description: 'Used to pre populate the code-editor',
          type: 'String / Number / Array',
          accepted_values: '-',
          default: '-',
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
      code_editor_events_data: [
        {
          Name: 'codeChanges',
          Description: 'Emits the input value',
          Parameters: '(value)'
        }
      ],
      basic_code_editor: `
<template>
    <hlx-code-editor
      :intellisenseData="this.list"
      :lineNumber="true"
      ></hlx-code-editor>
</template>

<script>
export default {
data () {
    return {
        list: {
        schema: [
          { label: 'quote.agreement', type: 'string' },
          { label: 'quote.attachment', type: 'string' },
          { label: 'quote.quoteDate', type: 'date' },
          { label: 'quote.quoteItem', type: 'Array' }
        ],
        keywords: [
          { label: 'if' },
          { label: 'then' },
          { label: 'else' },
          { label: 'and' },
          { label: 'or' },
          { label: 'function' },
          { label: 'filter' },
          { label: 'reduce' },
          { label: 'map' },
          { label: 'Date' },
          { label: 'Math' },
          { label: 'slice' },
          { label: 'substr' },
          { label: 'concat' },
          { label: 'true' },
          { label: 'false' }
        ],
        methods: {
          array: [
            {
              label: 'filter',
              syntax:
                'array.filter(function(currentValue, index, arr), thisValue)'
            },
            {
              label: 'reduce',
              syntax:
                'array.reduce(function(total, currentValue, currentIndex, arr), initialValue)'
            },
            {
              label: 'map',
              syntax:
                'array.map(function(currentValue, index, arr), thisValue)'
            }
          ],
          date: [
            {
              label: 'getDay',
              syntax: 'getDay()'
            },
            {
              label: 'getDate',
              syntax: 'getDate()'
            },
            {
              label: 'getTime',
              syntax: 'getTime()'
            },
            {
              label: 'getMonth',
              syntax: 'getMonth()'
            },
            {
              label: 'getFullYear',
              syntax: 'getFullYear()'
            },
            {
              label: 'setDate',
              syntax: 'setDate()'
            },
            {
              label: 'setTime',
              syntax: 'setTime()'
            },
            {
              label: 'setMonth',
              syntax: 'setMonth()'
            },
            {
              label: 'setFullYear',
              syntax: 'setFullYear()'
            }
          ],
          integer: [
            {
              label: 'random',
              syntax: 'Math.random()'
            },
            {
              label: 'round',
              syntax: 'Math.round(x)'
            }
          ],
          string: [
            { label: 'charAt', syntax: 'string.charAt(index)' },
            { label: 'slice', syntax: 'string.slice(start, end)' }
          ]
        }
      }
    }
}
}
</\script>
`,
      code_editor: `
<hlx-code-editor
  :intellisenseData="this.list"
  :beautify="true"
  :lineNumber="true"
  :primaryColor="'blue'"
  :secondaryColor="'brown'"
  ></hlx-code-editor>

<script>
export default {
data () {
    return {
        list: {
        schema: [
          { label: 'quote.agreement', type: 'string' },
          { label: 'quote.attachment', type: 'string' },
          { label: 'quote.quoteDate', type: 'date' },
          { label: 'quote.quoteItem', type: 'Array' }
        ],
        keywords: [
          { label: 'if' },
          { label: 'then' },
          { label: 'else' },
          { label: 'and' },
          { label: 'or' },
          { label: 'function' },
          { label: 'filter' },
          { label: 'reduce' },
          { label: 'map' },
          { label: 'Date' },
          { label: 'Math' },
          { label: 'slice' },
          { label: 'substr' },
          { label: 'concat' },
          { label: 'true' },
          { label: 'false' }
        ],
        methods: {
          array: [
            {
              label: 'filter',
              syntax:
                'array.filter(function(currentValue, index, arr), thisValue)'
            },
            {
              label: 'reduce',
              syntax:
                'array.reduce(function(total, currentValue, currentIndex, arr), initialValue)'
            },
            {
              label: 'map',
              syntax:
                'array.map(function(currentValue, index, arr), thisValue)'
            }
          ],
          date: [
            {
              label: 'getDay',
              syntax: 'getDay()'
            },
            {
              label: 'getDate',
              syntax: 'getDate()'
            },
            {
              label: 'getTime',
              syntax: 'getTime()'
            },
            {
              label: 'getMonth',
              syntax: 'getMonth()'
            },
            {
              label: 'getFullYear',
              syntax: 'getFullYear()'
            },
            {
              label: 'setDate',
              syntax: 'setDate()'
            },
            {
              label: 'setTime',
              syntax: 'setTime()'
            },
            {
              label: 'setMonth',
              syntax: 'setMonth()'
            },
            {
              label: 'setFullYear',
              syntax: 'setFullYear()'
            }
          ],
          integer: [
            {
              label: 'random',
              syntax: 'Math.random()'
            },
            {
              label: 'round',
              syntax: 'Math.round(x)'
            }
          ],
          string: [
            { label: 'charAt', syntax: 'string.charAt(index)' },
            { label: 'slice', syntax: 'string.slice(start, end)' }
          ]
        }
      }
    }
}
}
</\script>
`,
      line_code_editor: `
<hlx-code-editor
    :intellisenseData="this.list"
    :rows="1"
    :beautify="true"
    :lineNumber="true"
    ></hlx-code-editor>

<script>
export default {
data () {
    return {
        list: {
        schema: [
          { label: 'quote.agreement', type: 'string' },
          { label: 'quote.attachment', type: 'string' },
          { label: 'quote.quoteDate', type: 'date' },
          { label: 'quote.quoteItem', type: 'Array' }
        ],
        keywords: [
          { label: 'if' },
          { label: 'then' },
          { label: 'else' },
          { label: 'and' },
          { label: 'or' },
          { label: 'function' },
          { label: 'filter' },
          { label: 'reduce' },
          { label: 'map' },
          { label: 'Date' },
          { label: 'Math' },
          { label: 'slice' },
          { label: 'substr' },
          { label: 'concat' },
          { label: 'true' },
          { label: 'false' }
        ],
        methods: {
          array: [
            {
              label: 'filter',
              syntax:
                'array.filter(function(currentValue, index, arr), thisValue)'
            },
            {
              label: 'reduce',
              syntax:
                'array.reduce(function(total, currentValue, currentIndex, arr), initialValue)'
            },
            {
              label: 'map',
              syntax:
                'array.map(function(currentValue, index, arr), thisValue)'
            }
          ],
          date: [
            {
              label: 'getDay',
              syntax: 'getDay()'
            },
            {
              label: 'getDate',
              syntax: 'getDate()'
            },
            {
              label: 'getTime',
              syntax: 'getTime()'
            },
            {
              label: 'getMonth',
              syntax: 'getMonth()'
            },
            {
              label: 'getFullYear',
              syntax: 'getFullYear()'
            },
            {
              label: 'setDate',
              syntax: 'setDate()'
            },
            {
              label: 'setTime',
              syntax: 'setTime()'
            },
            {
              label: 'setMonth',
              syntax: 'setMonth()'
            },
            {
              label: 'setFullYear',
              syntax: 'setFullYear()'
            }
          ],
          integer: [
            {
              label: 'random',
              syntax: 'Math.random()'
            },
            {
              label: 'round',
              syntax: 'Math.round(x)'
            }
          ],
          string: [
            { label: 'charAt', syntax: 'string.charAt(index)' },
            { label: 'slice', syntax: 'string.slice(start, end)' }
          ]
        }
      }
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
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-panel {
  display: flex;
}
</style>
