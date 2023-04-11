<template>
<h1 class="component-heading">Other input items</h1>
  <p class="component-description">
    Allows the user to select one or more options from a set.
  </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Check box</h2>
  <p class="component-description">The payload for generating the checkbox options are sent in using the <b>:options</b> attribute which takes in an array of object. <br> Each object must contain the following attributes to function properly : <br>
    <li class="component-description">name: (String) label name for each checkbox</li>
    <li class="component-description">checked: (true / false) sets whether the option must be pre-selected or not</li>
    <li class="component-description">disabled: (true / false) sets whether the option must be disabled or not</li>
    <li class="component-description">id: (unique id) distinguishes fields from each other</li>
    <br>
    <span class="component-description">Set <b>:showSelectAll</b> attribute to true to display select all check box as shown in second example below.</span>
  </p>
  <div class="component-example">
    <div class="example-body3">
        <inputItems :options="this.options1" :type="'checkbox'"/>
          <divider :position="'horizontal'" :space="'20px'" />
        <inputItems :options="this.options2" :type="'checkbox'" :showSelectAll="true"/>
    </div>
    <div class="example-footer">
        <!-- Replace your id wherever required -->
      <span class="icon" id="basic-checkbox-icon" @click="showCode('basic-checkbox')"><i class="icon-code-regular"></i></span>
    </div>
  </div>
  <div class="source-code" id="basic-checkbox" style="display: none">
    <section class="example-source-wrapper">
        <div class="source">
          <CodeEditor
             :id="'editor'"  :display_language="false"
            :value="basic_checkbox"
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
  <h2 class="component-side-heading">Radio buttons</h2>
  <p class="component-description">Radio button uses the same format of payload. Set <b>:type</b> to radio to display checkboxes and your payload to <b>:options</b> attribute</p>
  <div class="component-example">
    <div class="example-body3">
        <inputItems :options="this.options3" :type="'radio-buttons'"/>
                  <divider :position="'horizontal'" :space="'20px'" />
        <inputItems :options="this.options4" :type="'radio-buttons'"/>
    </div>
    <div class="example-footer">
        <!-- Replace your id wherever required -->
      <span class="icon" id="basic-radio-icon" @click="showCode('basic-radio')"><i class="icon-code-regular"></i></span>
    </div>
  </div>
  <div class="source-code" id="basic-radio" style="display: none">
    <section class="example-source-wrapper">
        <div class="source">
          <CodeEditor
             :id="'editor'"  :display_language="false"
            :value="basic_radio"
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
  <h2 class="component-side-heading">Toggle switch</h2>
  <p class="component-description">Switch is a much simpler input element that directly takes in boolean value in <b>:checked</b> attribute.</p>
  <div class="component-example">
    <div class="example-body3">
      <div style="display: flex; align-items:center; margin-bottom: 25px"> false <inputItems :checked="false" :type="'switch'"/> true </div>
      <div style="display: flex; align-items:center">  false <inputItems :checked="true" :type="'switch'"/> true </div>
    </div>
    <div class="example-footer">
        <!-- Replace your id wherever required -->
      <span class="icon" id="basic-switch-icon" @click="showCode('basic-switch')"><i class="icon-code-regular"></i></span>
    </div>
  </div>
  <div class="source-code" id="basic-switch" style="display: none">
    <section class="example-source-wrapper">
        <div class="source">
          <CodeEditor
             :id="'editor'"  :display_language="false"
            :value="basic_switch"
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
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Input items Attributes</h2>
  <!-- <hlx-table
    :data="this.table_data"
    :border="true"
    theme="secondary"
    :rowHover="true"
    :ellipses="5"
    :bold_header="true"
  >
    <hlx-column :prop="'name'" :label="'Name'" :type="'string'" />
    <hlx-column :prop="'description'" :label="'Description'" :type="'string'" />
    <hlx-column :prop="'default'" :label="'Default'" :type="'string'" />
    <hlx-column :prop="'type'" :label="'Type'" :type="'string'" :width="200"/>
    <hlx-column :prop="'accepted_values'" :label="'Accepted values'" :type="'string'"/>
    <hlx-column :prop="'mandatory'" :label="'Mandatory'" :type="'string'" />
  </hlx-table> -->
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Input items Events</h2>
  <!-- <hlx-table
    :data="this.table_data_events"
    :border="true"
    theme="secondary"
    :rowHover="true"
    :ellipses="5"
    :bold_header="true"
  >
    <hlx-column :prop="'name'" :label="'Name'" :type="'string'" />
    <hlx-column :prop="'description'" :label="'Description'" :type="'string'" />
    <hlx-column :prop="'parameters'" :label="'Parameters'" :type="'string'" />
  </hlx-table> -->
</template>

<script>
import CodeEditor from 'simple-code-editor'
import inputItems from '../components/InputElementsComponent.vue'
import divider from '../components/DividerComponent.vue'
// import hlxTable from '../components/NewTable.vue'
// import hlxColumn from '../components/NewTableColumn.vue'

export default {
  components: {
    CodeEditor,
    inputItems,
    divider,
    // hlxTable,
    // hlxColumn
  },
  data () {
    return {
      table_data_events: [
        {
          name: 'selected',
          description: 'emits the value when checkbox or radio is selected',
          parameters: '(name of the selected option)'
        }
      ],
      table_data: [{
        name: 'options',
        description:
            'Array of items to be displayed on the checkbox/radio buttons',
        type: 'Array',
        accepted_values:
            '-',
        default: '-',
        mandatory: true
      },
      {
        name: 'type',
        description:
            'specify the type of the input field',
        type: 'String',
        accepted_values:
            'checkbox / radio-buttons / switch',
        default: '-',
        mandatory: true
      },
      {
        name: 'showSelectAll',
        description:
            'Toggle if you want select all option or not',
        type: 'Boolean',
        accepted_values:
            'true / false',
        default: '-',
        mandatory: true
      }],
      editor_theme: 'light',
      example_code: '`your code goes here`',
      InputItemsAttributes: {
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
        table_data: [{
          attribute: 'options',
          description:
            'Array of items to be displayed on the checkbox/radio buttons',
          type: 'Array',
          accepted_values:
            '-',
          default: '-',
          mandatory: true
        },
        {
          attribute: 'type',
          description:
            'specify the type of the input field',
          type: 'String',
          accepted_values:
            'checkbox / radio-buttons / switch',
          default: '-',
          mandatory: true
        },
        {
          attribute: 'showSelectAll',
          description:
            'Toggle if you want select all option or not',
          type: 'Boolean',
          accepted_values:
            'true / false',
          default: '-',
          mandatory: true
        }]
      },
      options1: [
        { name: 'Vishnu', checked: true, disabled: false, id: 1 },
        { name: 'Sam', checked: true, disabled: false, id: 2 },
        { name: 'Mathan', checked: true, disabled: false, id: 3 },
        { name: 'Pooja', checked: true, disabled: false, id: 4 },
        { name: 'Ragavi', checked: true, disabled: false, id: 5 },
        { name: 'Ganesh', checked: true, disabled: true, id: 6 }
      ],
      options2: [
        { name: 'Vishnu', checked: true, disabled: false, id: 1 },
        { name: 'Sam', checked: false, disabled: false, id: 2 },
        { name: 'Mathan', checked: false, disabled: false, id: 3 },
        { name: 'Pooja', checked: false, disabled: false, id: 4 },
        { name: 'Ragavi', checked: false, disabled: false, id: 5 },
        { name: 'Ganesh', checked: false, disabled: false, id: 6 }
      ],
      options3: [
        { name: 'Racheal', checked: false, disabled: false, id: 1 },
        { name: 'Ross', checked: false, disabled: false, id: 2 },
        { name: 'Monica', checked: false, disabled: false, id: 3 },
        { name: 'Chandler', checked: false, disabled: false, id: 4 },
        { name: 'Joey', checked: true, disabled: false, id: 5 },
        { name: 'Phoebe', checked: false, disabled: false, id: 6 }
      ],
      options4: [
        { name: 'Racheal', checked: true, disabled: false, id: 1 },
        { name: 'Ross', checked: false, disabled: false, id: 2 },
        { name: 'Monica', checked: false, disabled: false, id: 3 },
        { name: 'Chandler', checked: false, disabled: false, id: 4 },
        { name: 'Joey', checked: false, disabled: false, id: 5 },
        { name: 'Phoebe', checked: false, disabled: false, id: 6 }
      ],
      basic_checkbox: `
<template>
  <inputItems :options="this.options1" :type="'checkbox'"/>
  <inputItems :options="this.options2" :type="'checkbox'" :showSelectAll="true"/>
</template>

<script>
import inputItems from '../components/InputElementsComponent.vue'

export default {
  components: {
    inputItems
  },
  data () {
    return {
      options1: [
        { name: 'Vishnu', checked: false, disabled: false },
        { name: 'Sam', checked: false, disabled: false },
        { name: 'Mathan', checked: false, disabled: false },
        { name: 'Pooja', checked: true, disabled: false },
        { name: 'Ragavi', checked: false, disabled: false },
        { name: 'Ganesh', checked: true, disabled: true }
      ],
      options2: [
        { name: 'Vishnu', checked: true, disabled: false, id: 1 },
        { name: 'Sam', checked: false, disabled: false, id: 2 },
        { name: 'Mathan', checked: false, disabled: false, id: 3 },
        { name: 'Pooja', checked: false, disabled: false, id: 4 },
        { name: 'Ragavi', checked: false, disabled: false, id: 5 },
        { name: 'Ganesh', checked: false, disabled: false, id: 6 }
      ]
    }
  }
}
</\script>
      `,
      basic_radio: `
<template>
  <inputItems :options="this.options3" :type="'radio-buttons'"/>
  <inputItems :options="this.options4" :type="'radio-buttons'"/>
</template>

<script>
import inputItems from '../components/InputElementsComponent.vue'

export default {
  components: {
    inputItems
  },
  data () {
    return {
      options3: [
        { name: 'Racheal', checked: false, disabled: false, id: 1 },
        { name: 'Ross', checked: false, disabled: false, id: 2 },
        { name: 'Monica', checked: false, disabled: false, id: 3 },
        { name: 'Chandler', checked: false, disabled: false, id: 4 },
        { name: 'Joey', checked: true, disabled: false, id: 5 },
        { name: 'Phoebe', checked: false, disabled: false, id: 6 }
      ],
      options4: [
        { name: 'Racheal', checked: true, disabled: false, id: 1 },
        { name: 'Ross', checked: false, disabled: false, id: 2 },
        { name: 'Monica', checked: false, disabled: false, id: 3 },
        { name: 'Chandler', checked: false, disabled: false, id: 4 },
        { name: 'Joey', checked: false, disabled: false, id: 5 },
        { name: 'Phoebe', checked: false, disabled: false, id: 6 }
      ]
    }
  }
}
</\script>
      `,
      basic_switch: `
<template>
  <inputItems :checked="false" :type="'switch'"/>
  <inputItems :checked="true" :type="'switch'"/>
</template>

<script>
import inputItems from '../components/InputElementsComponent.vue'

export default {
  components: {
    inputItems
  },
  data () {
    return {
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

<style></style>
