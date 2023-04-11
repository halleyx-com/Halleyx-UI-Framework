<template>
  <h1 class="component-heading">Inputs</h1>
  <p class="component-description">
    The input element represents a typed data field, usually with a form control to allow the user to edit the data. The type attribute controls the data type of the element. It is an enumerated attribute.
  </p>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    set <b>:type</b> to <b>text</b> for basic text input field. <br />
    To display custom placeholder, add <b>:label_value</b> attribute which takes
    in a string value <br />
    You can also toggle label animation to On/Off by setting
    <b>:label_animation</b> attribute to <b>true</b>
  </p>
  <br />
  <div class="notes">
    <p class="note-title">Note:</p>
    <p class="note-body">
      use <b> v-model:value </b> to store your input values
    </p>
  </div>
  <div class="component-example">
    <div class="example-body3" style="background-color: white; border-radius: 5px;" >
      <hlx-input
        :label_animation="true"
        label_value="Username"
        type="text"
        :clearable="true"
        :custom_background="'linear-gradient(181deg, #f7f7f7)'"
        name="username"
        :max_length="18"
        @atInput="log"
      />
      <br />
      <hlx-input
        :label_animation="false"
        type="text"
        label_value="Placeholder"
        :clearable="false"
        name="placeholder"
        :min_length="5"
      />
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-input-icon" @click="showCode('basic-input')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-input" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_input"
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
  <h2 class="component-side-heading">Mixed input fields</h2>
  <p class="component-description">
    Set <b>:type</b> to <b>mixed</b> for mixed input field. <br />
    Use slot to distribute elements that prepend or append to Input. Set
    <b>#prefix</b> to prepend and <b>#suffix</b> to append
  </p>
  <div class="component-example">
    <div class="example-body3" style="background-color: white; border-radius: 5px;">
      <hlx-input
        :disabled="false"
        :label_animation="true"
        label_value="Multi"
        type="mixed"
        :clearable="true"
        name="username"
        :suffix="true"
      >
        <template #suffix> @gmail.com </template>
      </hlx-input>
      <br />
      <hlx-input
        :label_animation="false"
        label_value="Multi"
        type="mixed"
        :clearable="true"
        name="username"
        :suffix="true"
        :prefix="true"
      >
        <template #prefix> www. </template>
        <template #suffix> @halleyx.com </template>
      </hlx-input>
    </div>
    <div class="example-footer">
      <span class="icon" id="mixed-input-icon" @click="showCode('mixed-input')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="mixed-input" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="mixed_input"
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
  <h2 class="component-side-heading">Text area</h2>
  <p class="component-description">
    Set <b>:type</b> attribute to <b>textarea</b> to access textarea input
    field. You can also control character limit of the text area by setting
    <b>:max_length</b> attribute with an integer value. But to display the
    validation you have to set <b>:display_error</b> attribute to <b>true</b>
  </p>
  <div class="component-example">
    <div class="example-body3" style="background-color: white; border-radius: 5px;">
      <hlx-input
        :label_animation="true"
        label_value="Feedback box"
        type="textarea"
        :max_length="500"
        :display_error="true"
        :disabled="false"
      />
      <hlx-input
        :label_animation="false"
        type="textarea"
        label_value="Please share your valuable feedback here"
      />
    </div>
    <div class="example-footer">
      <span class="icon" id="text-area-icon" @click="showCode('text-area')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="text-area" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="textarea_input"
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
  <h2 class="component-side-heading">Input with icons</h2>
  <p class="component-description">
    Add icons to the input field by specifying <b>:icon</b> attribute with the
    icon name (refer to our iconography page for icon names) and setting
    <b>:iconposition</b> attribute to either <b>left or right</b>
  </p>
  <div class="component-example">
    <div class="example-body3" style="background-color: white; border-radius: 5px;">
      <hlx-input
        :label_animation="true"
        label_value="Firstname"
        type="text"
        :clearable="true"
        icon="note-text-regular"
        iconposition="left"
      />
      <br />
      <hlx-input
        :label_animation="true"
        label_value="Lastname"
        type="text"
        :clearable="false"
        icon="user-regular"
        iconposition="right"
      />
    </div>
    <div class="example-footer">
      <span class="icon" id="icon-input-icon" @click="showCode('icon-input')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="icon-input" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="icon_input"
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
  <h2 class="component-side-heading">Email & password</h2>
  <p class="component-description">
    Most commonly used form fields like email and password with inbuilt
    validations can also be used by setting <b>:type</b> attribute. <br />
    Set <b>:password_condition</b> attribute to true to display the validation
    box.
  </p>
  <div class="component-example">
    <div class="example-body3" style="background-color: white; border-radius: 5px;overflow: visible">
      <hlx-input
        :label_animation="true"
        label_value="Email"
        type="email"
        :clearable="true"
        :display_error="true"
        :disabled="false"
      />
      <hlx-input
        :label_animation="true"
        type="password"
        :password_condition="true"
        label_value="Password"
        :clearable="false"
        :display_error="true"
      />
      <hlx-input
        :label_animation="true"
        type="confirmpassword"
        :password_condition="true"
        label_value="Confirm password"
        :clearable="false"
      />
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="email-password-icon"
        @click="showCode('email-password')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="email-password" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="email_password"
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
  <h2 class="component-side-heading">Date, number & phone number</h2>
  <p class="component-description">
    Other input fields like date and number can also be used. <br />
    Set <b>:type</b> attribute to <b>phonenumber</b> enable phone number field.
    Supports validation for India, Canada & USA.
  </p>
  <div class="component-example">
    <div class="example-body3" style="background-color: white; border-radius: 5px;overflow: visible">
      <hlx-input
        :label_animation="false"
        type="date"
        :clearable="false"
        icon="calendar-regular"
        iconposition="right"
        :disable_weekend="true"
        :start_year="2000"
        :end_year="2050"
        :holiday_list="this.holidays"
      />
      <br />
      <hlx-input
        :label_animation="true"
        type="number"
        label_value="Number"
        :clearable="false"
        :disabled="false"
      />
      <br />
      <hlx-input
        :label_animation="false"
        type="phonenumber"
        label_value="Phone number"
        :country_codes="this.countries"
        :clearable="false"
        :display_error="true"
      />
    </div>
    <div class="example-footer">
      <span class="icon" id="date-phone-icon" @click="showCode('date-phone')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="date-phone" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="date_phone"
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
  <h2 class="component-side-heading">Check box</h2>
  <p class="component-description">
    The payload for generating the checkbox options are sent in using the
    <b>:options</b> attribute which takes in an array of object. <br />
    Each object must contain the following attributes to function properly :
    <br />
  </p>
  <li class="component-description">
    name: (String) label name for each checkbox
  </li>
  <li class="component-description">
    checked: (true / false) sets whether the option must be pre-selected or not
  </li>
  <li class="component-description">
    disabled: (true / false) sets whether the option must be disabled or not
  </li>
  <li class="component-description">
    id: (unique id) distinguishes fields from each other
  </li>
  <br />
  <span class="component-description"
    >Set <b>:showSelectAll</b> attribute to true to display select all check box
    as shown in second example below.</span
  >
  <div class="component-example">
    <div class="example-body3" style="background-color: white; border-radius: 5px;">
      <hlx-input :options="this.options1" :type="'checkbox'" />
      <hlx-divider :position="'horizontal'" :space="'20px'" />
      <hlx-input
        :options="this.options2"
        :type="'checkbox'"
        :showSelectAll="true"
      />
      <hlx-divider :position="'horizontal'" :space="'20px'" />
      <hlx-input
        :options="this.options3"
        :type="'checkbox'"
        :showSelectAll="true"
      />
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="basic-checkbox-icon"
        @click="showCode('basic-checkbox')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-checkbox" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
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
  <p class="component-description">
    Radio button uses the Joeye format of payload. Set <b>:type</b> to radio to
    display checkboxes and your payload to <b>:options</b> attribute
  </p>
  <div class="component-example">
    <div class="example-body3" style="background-color: white; border-radius: 5px;">
      <hlx-input
        :options="this.options3"
        :type="'radio-buttons'"
        :position="'horizontal'"
      />
      <hlx-divider :position="'horizontal'" :space="'20px'" />
      <hlx-input :options="this.options4" :type="'radio-buttons'" />
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span class="icon" id="basic-radio-icon" @click="showCode('basic-radio')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-radio" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
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
  <p class="component-description">
    Switch is a much simpler input element that directly takes in boolean value
    in <b>:checked</b> attribute.
  </p>
  <div class="component-example">
    <div class="example-body3" style="background-color: white; border-radius: 5px;">
      <div style="display: flex; align-items: center; margin-bottom: 25px">
        false <hlx-input :checked="false" :type="'switch'" /> true
      </div>
      <div style="display: flex; align-items: center">
        false <hlx-input :checked="true" :type="'switch'" /> true
      </div>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="basic-switch-icon"
        @click="showCode('basic-switch')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-switch" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
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
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Input attributes</h2>
  <hlx-table
    :columnCount="6"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head v-for="(i, index) in this.inputAttributes" :key="index" :width="i.width">{{
        i.label
      }}</hlx-table-head>
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.inputAttributes"
          :align="'left'"
          :key="col_index"
          :width="i.width"
          style="word-wrap: break-word"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Input slots</h2>
  <hlx-table
    :columnCount="3"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head v-for="(i, index) in this.inputSlots" :key="index" :width="i.width">{{
        i.label
      }}</hlx-table-head>
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data_slots" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.inputSlots"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
  <hlx-divider :position="'horizontal'" :space="'20px'" />

  <h2 class="component-side-heading">Input events</h2>

  <hlx-table
  :columnCount="3"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head v-for="(i, index) in this.inputEvents" :key="index" :width="i.width">{{
        i.label
      }}</hlx-table-head>
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.input_events_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.inputEvents"
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
import HlxInput from '../components/InputComponent.vue'
import HlxDivider from '../components/DividerComponent.vue'
import CodeEditor from 'simple-code-editor'
import hlxTable from '../components/table/HlxTable.vue'
import hlxTableHead from '../components/table/HlxTableHead.vue'
import hlxTableCell from '../components/table/HlxTableCell.vue'

export default {
  components: {
    HlxInput,
    HlxDivider,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    CodeEditor
  },
  data () {
    return {
      holidays: ['17-10-2022', '21-10-2022', '4-11-2022'],
      countries: [
        {
          id: 1,
          flag: 'in',
          name: 'India',
          code: '+91',
          checked: false
        },
        {
          id: 2,
          flag: 'ca',
          name: 'Canada',
          code: '+1',
          checked: false
        },
        {
          id: 3,
          flag: 'us',
          name: 'USA',
          code: '+1',
          checked: false
        },
        {
          id: 4,
          flag: 'cn',
          name: 'China',
          code: '+86',
          checked: false
        },
        {
          id: 5,
          flag: 'jp',
          name: 'Japan',
          code: '+81',
          checked: false
        },
        {
          id: 6,
          flag: 'kr',
          name: 'Korea',
          code: '+82',
          checked: false
        },
        {
          id: 7,
          flag: 'br',
          name: 'Brazil',
          code: '+55',
          checked: false
        },
        {
          id: 8,
          flag: 'mx',
          name: 'Mexico',
          code: '+52',
          checked: false
        },
        {
          id: 9,
          flag: 'ru',
          name: 'Russia',
          code: '+7',
          checked: false
        },
        {
          id: 10,
          flag: 'au',
          name: 'Australia',
          code: '+61',
          checked: false
        },
        {
          id: 11,
          flag: 'gb',
          name: 'UK',
          code: '+44',
          checked: false
        },
        {
          id: 12,
          flag: 'fr',
          name: 'France',
          code: '+33',
          checked: false
        },
        {
          id: 13,
          flag: 'de',
          name: 'Germany',
          code: '+49',
          checked: false
        }

      ],
      options1: [
        { name: 'Racheal', checked: false, disabled: false, id: 1 },
        { name: 'Joey', checked: true, disabled: false, id: 2 },
        { name: 'Ross', checked: true, disabled: false, id: 3 },
        { name: 'Phoebe', checked: true, disabled: false, id: 4 },
        { name: 'Monica', checked: true, disabled: false, id: 5 },
        { name: 'Gunther', checked: true, disabled: true, id: 6 }
      ],
      options2: [
        { name: 'Racheal', checked: true, disabled: false, id: 1 },
        { name: 'Joey', checked: false, disabled: false, id: 2 },
        { name: 'Ross', checked: false, disabled: false, id: 3 },
        { name: 'Phoebe', checked: false, disabled: false, id: 4 },
        { name: 'Monica', checked: false, disabled: false, id: 5 },
        { name: 'Gunther', checked: false, disabled: false, id: 6 }
      ],
      options3: [
        { name: 'Racheal', checked: false, disabled: false, id: 1 },
        { name: 'Ross', checked: false, disabled: false, id: 2 },
        { name: 'Monica', checked: false, disabled: false, id: 3 },
        { name: 'Chandler', checked: false, disabled: false, id: 4 },
        { name: 'Joey', checked: false, disabled: false, id: 5 },
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
      editor_theme: 'light',
      inputEvents: [
        {
          prop: 'name',
          label: 'Event name',
          width: 100,
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
          prop: 'parameter',
          label: 'Parameter',
          width: null,
          type: 'string',
          format: ''
        }
      ],
      input_events_data: [
        {
          name: 'atEnter',
          description: 'Triggers when the enter key is pressed',
          parameter: '(Object{event, value})'
        },
        {
          name: 'atInput',
          description: 'Triggers when the input value is changed',
          parameter: '(value: string|number)'
        },
        {
          name: 'clear',
          description: 'Triggers when the input value is cleared',
          parameter: '-'
        },
        {
          name: 'selected',
          description: 'Emits the value when checkbox or radio is selected',
          parameter: '(name of the selected option)'
        }
      ],
      input_attributes_data: [
        {
          Name: 'type',
          Description: 'Sets the type of the input field',
          Type: 'String',
          accepted_values:
            'text / textarea / email / password / confirmpassword / number / phonenumber / date',
          mandatory: 'yes',
          Default: 'text'
        },
        {
          Name: 'label_value',
          Description: 'Sets placeholder value for the inout field',
          Type: 'String',
          accepted_values: '-',
          mandatory: 'no',
          Default: '-'
        },
        {
          Name: 'label_animation',
          Description:
            'Adds an animation to the label value when the input field is active',
          Type: 'Boolean',
          accepted_values: 'true / false',
          mandatory: 'no',
          Default: 'false'
        },
        {
          Name: 'clearable',
          Description:
            'Shows a clear icon on the right end of the field to clear the input value',
          Type: 'Boolean',
          accepted_values: 'true / false',
          mandatory: 'no',
          Default: 'false'
        },
        {
          Name: 'icon',
          Description:
            'Choose a name of the icon from our iconography page to display in the input field',
          Type: 'String',
          accepted_values: 'names from iconography page',
          mandatory: 'no',
          Default: 'false'
        },
        {
          Name: 'icon_position',
          Description: 'Sets position for the icon whether on left or right',
          Type: 'String',
          accepted_values: 'left / right',
          mandatory: 'no',
          Default: 'right'
        }
      ],
      inputAttributes: [
        {
          prop: 'name',
          label: 'Attributes',
          width: null,
          type: 'string',
          format: ''
        },
        {
          prop: 'description',
          label: 'Description',
          width: 350,
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
          width: 200,
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
          name: 'type',
          description:
            'Specify the type of the input field, for example text, text area, number. You can also use specifc types like email, password and date',
          type: 'String',
          accepted_values:
            'text / mixed / textarea / email / password / confirmpassword / date / number / phonenumber',
          default: 'text',
          mandatory: false
        },
        {
          name: 'label_animation',
          description:
            'Adds animation to the labels whenever the input is focused',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: false
        },
        {
          name: 'label_value',
          description:
            'Label value acts as the placeholder value for the input field',
          type: 'String',
          accepted_values: '-',
          default: '-',
          mandatory: true
        },
        {
          name: 'clearable',
          description:
            'Adds a clear icon to the regular input fields that clear the input value when clicked',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: false
        },
        {
          name: 'icon',
          description:
            'Add icons to your input fields to give a better user experience',
          type: 'String',
          accepted_values: 'refer to our iconography page',
          default: '-',
          mandatory: false
        },
        {
          name: 'icon_position',
          description:
            'Specify thr position of the icon. can be used only when icon name is specified',
          type: 'String',
          accepted_values: 'left / right',
          default: '-',
          mandatory: 'true (if icon is true)'
        },
        {
          name: 'min_limit',
          description: 'Set minimum limit for the number input field',
          type: 'Number',
          accepted_values: '-',
          default: '0',
          mandatory: false
        },
        {
          name: 'max_limit',
          description: 'Set maximum limit for the number input field',
          type: 'Number',
          accepted_values: '-',
          default: '1000',
          mandatory: false
        },
        {
          name: 'password_condition',
          description: 'Shows a popover for validating the password',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'true',
          mandatory: false
        },
        {
          name: 'min_length',
          description: 'Set minimum character limit for input text',
          type: 'Number',
          accepted_values: '> 0',
          default: '-',
          mandatory: false
        },
        {
          name: 'max_length',
          description: 'Set maximum character limit for input text',
          type: 'Number',
          accepted_values: '> 0',
          default: '-',
          mandatory: false
        },
        {
          name: 'disable_weekend',
          description:
            'Specify to enable / disable the option to select the weekend days in date input field',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: 'false'
        },
        {
          name: 'start_year',
          description: 'Set starting year in the date input',
          type: 'Number',
          accepted_values: 'integer',
          default: '1950',
          mandatory: 'false'
        },
        {
          name: 'end_year',
          description: 'Set ending year in the date input',
          type: 'Number',
          accepted_values: 'integer',
          default: '2050',
          mandatory: 'false'
        },
        {
          name: 'options',
          description:
            'Array of items to be displayed on the checkbox/radio buttons',
          type: 'Array',
          accepted_values: '-',
          default: '-',
          mandatory: true
        },
        {
          name: 'showSelectAll',
          description: 'Toggle if you want select all option or not',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: '-',
          mandatory: true
        },
        {
          name: 'position',
          description: 'Sets horizontal/vertical view for radio buttons',
          type: 'String',
          accepted_values: 'horizontal / vertical',
          default: 'vertical',
          mandatory: false
        },
        {
          name: 'country_codes',
          description:
            'Supply the list of country codes for phone number component',
          type: 'Array',
          accepted_values: '[{}]',
          default: `[
        {
          id: 1,
          flag: 'in',
          name: 'India',
          code: '+91',
          checked: false
        },
        {
          id: 2,
          flag: 'ca',
          name: 'Canada',
          code: '+1',
          checked: false
        },
        {
          id: 3,
          flag: 'us',
          name: 'USA',
          code: '+1',
          checked: false
        }
]`,
          mandatory: false
        },
        {
          name: 'prefix',
          description: 'Enables prefix slot for mixed input type',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: 'true (if prefix slot is used in mixed input is true)'
        },
        {
          name: 'suffix',
          description: 'Enables suffix slot for mixed input type',
          type: 'Boolean',
          accepted_values: 'true / false',
          default: 'false',
          mandatory: 'true (if prefix slot is used in mixed input is true)'
        },
        {
          name: 'custom_background',
          description: 'Adds custom background color for label and input fields',
          type: 'String',
          accepted_values: 'any CSS color value',
          default: '#ffffff',
          mandatory: 'false'
        }
      ],
      inputSlots: [
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
      table_data_slots: [
        {
          name: '#prefix',
          description: 'Displays text in front of type "mixed" input',
          fallback: '-'
        },
        {
          name: '#suffix',
          description: 'Displays text at the end of type "mixed" input',
          fallback: '-'
        }
      ],
      input_Attributes: {
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
            name: 'type',
            description:
              'Specify the type of the input field, for example text, text area, number. You can also use specifc types like email, password and date',
            type: 'String',
            accepted_values:
              'text / textarea / email / password / confirmpassword / date / number / phonenumber',
            default: 'text',
            mandatory: false
          },
          {
            name: 'label_animation',
            description:
              'Adds animation to the labels whenever the input is focused',
            type: 'Boolean',
            accepted_values: 'true / false',
            default: 'false',
            mandatory: false
          },
          {
            name: 'label_value',
            description:
              'Label value acts as the placeholder value for the input field',
            type: 'String',
            accepted_values: '-',
            default: '-',
            mandatory: true
          },
          {
            name: 'clearable',
            description:
              'Adds a clear icon to the regular input fields that clear the input value when clicked',
            type: 'Boolean',
            accepted_values: 'true / false',
            default: 'false',
            mandatory: false
          },
          {
            name: 'icon',
            description:
              'Add icons to your input fields to give a better user experience',
            type: 'String',
            accepted_values: 'refer to our iconography page',
            default: '-',
            mandatory: false
          },
          {
            name: 'icon_position',
            description:
              'Specify thr position of the icon. can be used only when icon name is specified',
            type: 'String',
            accepted_values: 'left / right',
            default: '-',
            mandatory: 'true (if icon is true)'
          },
          {
            name: 'min_limit',
            description: 'Set minimum limit for the number input field',
            type: 'Number',
            accepted_values: '-',
            default: '0',
            mandatory: false
          },
          {
            name: 'max_limit',
            description: 'Set maximum limit for the number input field',
            type: 'Number',
            accepted_values: '-',
            default: '1000',
            mandatory: false
          },
          {
            name: 'password_condition',
            description: 'Shows a popover for validating the password',
            type: 'Boolean',
            accepted_values: 'true / false',
            default: 'true',
            mandatory: false
          },
          {
            name: 'min_length',
            description: 'Set minimum character limit for input text',
            type: 'Number',
            accepted_values: '> 0',
            default: '-',
            mandatory: false
          },
          {
            name: 'max_length',
            description: 'Set maximum character limit for input text',
            type: 'Number',
            accepted_values: '> 0',
            default: '-',
            mandatory: false
          },
          {
            name: 'disable_weekend',
            description:
              'Specify to enable / disable the option to select the weekend days in date input field',
            type: 'Boolean',
            accepted_values: 'true / false',
            default: 'false',
            mandatory: 'false'
          }
        ]
      },
      basic_input: `
<template>
    <hlx-input
          :label_animation="true"
          label_value="Username"
          type="text"
          :clearable="true"
        />
    <hlx-input
          :label_animation="false"
          type="text"
          label_value="Placeholder"
          :clearable="false"
        />
</template>

<script>
export default {

}
</\script>
`,
      mixed_input: `
<template>
    <hlx-input
      :disabled="false"
        :label_animation="true"
        label_value="Multi"
        type="mixed"
        :clearable="true"
        name="username"
        :suffix="true"
        >
        <template #suffix>
          www.
        </template>
      </hlx-input>
      <br>
      <hlx-input
        :label_animation="false"
        label_value="Multi"
        type="mixed"
        :clearable="true"
        name="username"
        :prefix="true"
        :suffix="true"
        >
        <template #prefix>
          www.
        </template>
        <template #suffix>
          @halleyx.com
        </template>
      </hlx-input>
</template>

<script>
export default {

}
</\script>
`,
      textarea_input: `
<template>
    <hlx-input
          :label_animation="true"
          label_value="Feedback box"
          type="textarea"
          :clearable="true"
        />
    <hlx-input
          :label_animation="false"
          type="textarea"
          label_value="Please share your valuable feedback here"
          :clearable="false"
        />
</template>

<script>
export default {

}
</\script>
`,
      icon_input: `
<template>
    <hlx-input
          :label_animation="true"
          label_value="Firstname"
          type="text"
          :clearable="true"
          icon="font"
          iconposition="left"
        />
    <hlx-input
          :label_animation="true"
          label_value="Lastname"
          type="text"
          :clearable="false"
          icon="human"
          iconposition="right"
        />
</template>

<script>
export default {

}
<//script>
`,
      email_password: `
<template>
    <hlx-input
          :label_animation="true"
          label_value="Email"
          type="email"
          :clearable="true"
        />
    <hlx-input
          :label_animation="true"
          type="password"
          :password_condition="true"
          label_value="Password"
          :clearable="false"
        />
    <hlx-input
          :label_animation="true"
          type="confirmpassword"
          :password_condition="true"
          label_value="Confirm password"
          :clearable="false"
        />
</template>

<script>
export default {

}
</\script>
`,
      date_phone: `
<template>
    <hlx-input
          :label_animation="false"
          type="date"
          :clearable="false"
          icon="calendar"
          iconposition="right"
        />
    <hlx-input
          :label_animation="true"
          type="number"
          label_value="Number"
          :clearable="false"
        />
    <hlx-input
          :label_animation="true"
          type="phonenumber"
          label_value="Phone number"
          :clearable="false"
        />
</template>

<script>
export default {

}
</\script>
`,
      basic_checkbox: `
<template>
  <hlx-input :options="this.options1" :type="'checkbox'"/>
  <hlx-input :options="this.options2" :type="'checkbox'" :showSelectAll="true"/>
</template>

<script>

export default {
  data () {
    return {
      options1: [
        { name: 'Racheal', checked: false, disabled: false },
        { name: 'Joey', checked: false, disabled: false },
        { name: 'Ross', checked: false, disabled: false },
        { name: 'Phoebe', checked: true, disabled: false },
        { name: 'Monica', checked: false, disabled: false },
        { name: 'Gunther', checked: true, disabled: true }
      ],
      options2: [
        { name: 'Racheal', checked: true, disabled: false, id: 1 },
        { name: 'Joey', checked: false, disabled: false, id: 2 },
        { name: 'Ross', checked: false, disabled: false, id: 3 },
        { name: 'Phoebe', checked: false, disabled: false, id: 4 },
        { name: 'Monica', checked: false, disabled: false, id: 5 },
        { name: 'Gunther', checked: false, disabled: false, id: 6 }
      ]
    }
  }
}
</\script>
      `,
      basic_radio: `
<template>
  <hlx-input :options="this.options3" :type="'radio-buttons'"/>
  <hlx-input :options="this.options4" :type="'radio-buttons'"/>
</template>

<script>

export default {

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
  <hlx-input :checked="false" :type="'switch'"/>
  <hlx-input :checked="true" :type="'switch'"/>
</template>

<script>

export default {

}
</\script>
      `
    }
  },
  computed: {},
  methods: {
    log (val) {
      console.log(val)
    },
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
