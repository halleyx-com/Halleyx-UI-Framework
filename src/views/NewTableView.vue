<template>
  <h1 class="component-heading">Table</h1>
  <p class="component-description">
    The table component is to allow you to generate tables based on the header
    configuration, and to provide a mechanism to customize the rendering of
    table cells. The table component supports responsive configurations for
    table definitions.
  </p>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic table</h2>
  <p class="component-description">
    Basic table is just for data display. <br>
    After setting attribute <b>:data</b> of <b>hlx-table</b> with an object array, you can use
    <b>:prop</b> (corresponding to a key of the object in data array) in <b>hlx-column</b> to
    insert data to table columns, and set the attribute <b>:label</b> to define the
    column name.
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table :data="this.basic_table_data ">
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Label'"
          :label="'Label'"
          :type="'label'">
        </hlx-column>
        <hlx-column
          :prop="'Value'"
          :label="'Value'"
          :type="'array'">
        </hlx-column>
        <hlx-column
          :prop="'check'"
          :label="'Check'"
          >
        </hlx-column>
      </hlx-table>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code10-icon"
        @click="showCode('example-code10')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="example-code10" style="display: none">
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
  <div v-if="this.lazy_load_table > 2">
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Table with custom column width</h2>
  <p class="component-description">
    You can add custom width to each column by adding the attribute <b>:width</b> in <b>hlx-column</b>
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table :data="this.basic_table_data">
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :width="400"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
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
          :value="this.example_code1"
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
  </div>
  <div v-if="this.lazy_load_table > 3">
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Resizable columns</h2>
  <p class="component-description">
    By setting <b>:resizable</b> attribute to true, you can resize the columns just by dragging the right corners on the go
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table :data="this.basic_table_data" :resizable="true">
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
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
          :value="this.example_code2"
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
  </div>
  <div v-if="this.lazy_load_table > 4">
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Table head themes</h2>
  <p class="component-description">
    You can now set themes for the table head based on your application theme. <br>
    By default, the attribute <b>:theme</b> is set to <b>light</b>, but you can choose between <b>primary</b>,<b>secondary</b>,<b>dark</b> and <b>light</b>. <br>
    You can also set attribute <b>:bold_header</b> to true, to make the headers labels to bold fonts.
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table
        :data="this.theme_table_data"
        theme="secondary"
        :bold_header="true"
      >
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
      <br />
      <hlx-table :data="this.theme_table_data" theme="dark">
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
      <br />
      <hlx-table :data="this.theme_table_data" theme="grey">
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code3-icon"
        @click="showCode('example-code3')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="example-code3" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code3"
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
  </div>
  <div v-if="this.lazy_load_table > 5">
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Striped table</h2>
  <p class="component-description">
    Setting attribute <b>:stripe</b> to true will add a striped theme to all the rows which makes it easier to distinguish different rows.
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table :data="this.basic_table_data" :stripe="true" :theme="'primary'">
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code4-icon"
        @click="showCode('example-code4')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="example-code4" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code4"
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
  </div>
  <div v-if="this.lazy_load_table > 6">
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Table with borders</h2>
  <p class="component-description">
    <b>:border</b> attribute in <b>hlx-table</b> simply adds a vertical border to all the table cells. By default, horizontal borders are enabled to seperate every row.
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table :data="this.basic_table_data" :border="true">
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code5-icon"
        @click="showCode('example-code5')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="example-code5" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code5"
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
  </div>
  <div v-if="this.lazy_load_table > 7">
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Fixed columns</h2>
  <p class="component-description">
    Attribute <b>:fixed</b> is used in <b>hlx-column</b>, it accepts two string literals: <b>'left'</b> and <b>'right'</b>, both indicating that the column will be fixed at corresponding direction.
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table
        :data="this.basic_table_data"
        :border="false"
        :theme="'secondary'"
      >
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :fixed="'left'"
          :width="150"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Weight_in_lbs'"
          :label="'Weight (LBS)'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Acceleration'"
          :label="'Acceleration'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Year'"
          :label="'Year'"
          :type="'date'"
          :format="'DD-MM-YYYY'"
          :width="150"
        />
        <hlx-column :prop="'Origin'" :label="'Origin'" :type="'string'" :width="150"/>
        <hlx-column :prop="'Picture'" :label="'Picture'" :type="'img'" :width="150"/>
        <hlx-column
          :prop="'Currency'"
          :label="'Currency'"
          :type="'currency'"
          :format="'INR'"
          :width="150"
        />
        <hlx-column
          :prop="'Rating'"
          :label="'Rating'"
          :type="'rating'"
          :fixed="'right'"

        />
      </hlx-table>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code6-icon"
        @click="showCode('example-code6')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="example-code6" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code6"
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
  </div>
  <div v-if="this.lazy_load_table > 8">
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Table with pagination</h2>
  <p class="component-description">
    Setting attribute <b>:pagination</b> to true, in <b>hlx-table</b> will add a pagination functionality to the table
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table
        :data="this.basic_table_data"
        :theme="'secondary'"
        :border="true"
        :pagination="true"
      >
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code7-icon"
        @click="showCode('example-code7')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="example-code7" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code7"
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
  </div>
  <div v-if="this.lazy_load_table > 9">
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Sorting</h2>
  <p class="component-description">
    You can add sorting functionality to the columns by setting <b>:sorting</b> attribute to true in <b>hlx-column</b>
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table
        :data="this.basic_table_data"
        :border="true"
        :pagination="true"
      >
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :sortable="true"
          :width="170"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code8-icon"
        @click="showCode('example-code8')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="example-code8" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code8"
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
  </div>
  <div v-if="this.lazy_load_table > 10">
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Searching</h2>
  <p class="component-description">
    The <b>:search</b> attribute in <b>hlx-table</b> adds a search functionality on top of the table.
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table
        :data="this.basic_table_data"
        :theme="'secondary'"
        :pagination="true"
        :search="true"
      >
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :sortable="true"
          :width="170"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code9-icon"
        @click="showCode('example-code9')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="example-code9" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code9"
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
  </div>
  <div v-if="this.lazy_load_table > 11">
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Grouping</h2>
  <p class="component-description">
    Grouping function allows the user to group the table data based on the column selected. <br>
    Set <b>:rowgroup</b> to true, to enable a dropdown with all the column names that can be used for grouping table rows.
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table
        :data="this.basic_table_data1"
        :theme="'secondary'"
        :border="true"
        :pagination="true"
        :rowgroup="true"
        :crud_operations="true"
        :crud_options="this.crud_options"
      >
        <hlx-column
          :prop="'name'"
          :label="'Name'"
          :type="'string'"
          :sortable="true"
        />
        <hlx-column
          :prop="'miles_per_gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'cylinders'"
          :label="'Cylinders'"
          :type="'integer'"
        />
      </hlx-table>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code11-icon"
        @click="showCode('example-code11')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="example-code11" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code11"
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
  </div>
  <div v-if="this.lazy_load_table > 12">
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">
    Action column (Re-arrange columns & CRUD)
  </h2>
  <p class="component-description">
    Action columns gives the user easy access to perform crud operations on the table directly. <br>
    To enable, set <b>:crud_operations</b> to true, along with <b>:crud_options</b> attribute on <b>hlx-table</b> where you can specify the column name and toggle the crud operations. <br>
    The action column also gives the ability to re-arrange and show/hide the columns based on users needs. It also provides a toggle to switch between inline edit and modal edit.
    <span class="notes">
      <span class="note-title">
        Example:
      </span>
      <span class="note-body">
        check the source code for a clear example on how the crud_options should look like
      </span>
    </span>
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table
        :data="this.basic_table_data"
        :theme="'secondary'"
        :border="true"
        :pagination="true"
        :crud_operations="true"
        :crud_options="this.crud_options"
        @cloneRow="logRow"
        @email="logRow"
      >
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :sortable="true"
          :width="150"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :sortable="true"
          :width="150"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Weight_in_lbs'"
          :label="'Weight (LBS)'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Acceleration'"
          :label="'Acceleration'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Year'"
          :label="'Year'"
          :type="'date'"
          :width="150"
          :format="'DD-MM-YYYY'"
        />
        <hlx-column :prop="'Origin'" :label="'Origin'" :type="'string'" :width="150"/>
        <hlx-column :prop="'Picture'" :label="'Picture'" :type="'img'" :width="150"/>
        <hlx-column
          :prop="'Currency'"
          :label="'Currency'"
          :type="'currency'"
          :format="'INR'"
          :width="150"
        />
        <hlx-column :prop="'Rating'" :label="'Rating'" :type="'rating'" :width="180"/>
      </hlx-table>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code12-icon"
        @click="showCode('example-code12')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="example-code12" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code12"
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
  </div>
  <div v-if="this.lazy_load_table > 13">
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Row expand</h2>
  <p class="component-description">
    Use <b>:rowExapand</b> attribute to inherit child tables inside each row when the data is too long to display with scrolls.
  </p>
  <!-- <hlx-divider :position="'horizontal'" :space="'20px'" /> -->
  <!-- <h2 class="component-side-heading">Primary buttons</h2> -->
  <!-- <p class="component-description">Write your description here</p> -->
  <div class="component-example">
    <div class="example-body">
      <hlx-table
        :data="this.row_expand_data"
        :search="true"
        :filterable="false"
        :border="true"
        :stripe="false"
        theme="dark"
        :pagination="true"
        :rowHover="true"
        :rowExpand="true"
      >
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :sortable="true"
          :type="'string'"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Weight_in_lbs'"
          :label="'Weight (LBS)'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Acceleration'"
          :label="'Acceleration'"
          :type="'integer'"
          :sortable="true"
        />
      </hlx-table>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code13-icon"
        @click="showCode('example-code13')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="example-code13" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code13"
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
  </div>
  <div v-if="this.lazy_load_table > 14">
  <hlx-divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Demo table</h2>
  <p class="component-description">
    Here is a table for demo purpose, with all the above mentioned features included in one table.
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-table
        :data="this.table_data"
        :search="true"
        :border="true"
        :stripe="false"
        theme="secondary"
        :pagination="true"
        :rowHover="true"
        :crud_operations="true"
        :crud_options="this.crud_options"
        :selectable="false"
        :filterable="true"
        :cascading_filter="true"
        :filter_payload="this.filters"
        :cascade="true"
        :rowgroup="true"
        :bold_header="true"
        :bold_summary="true"
        :resizable="true"
        @filterValue="filterApply"
        @filterClear="clearfilter"
      >
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :sortable="true"
          :width="190"
          :edit_options="this.edit_option_0"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :sortable="true"
          :edit_options="this.edit_option_3"
          show_summary="min"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :sortable="true"
          :type="'integer'"
          show_summary="max"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
          :sortable="true"
          show_summary="avg"
        />
        <hlx-column
          :prop="'Weight_in_lbs'"
          :label="'Weight (LBS)'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Acceleration'"
          :label="'Acceleration'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Year'"
          :label="'Year'"
          :type="'date'"
          :format="'DD-MM-YYYY'"
          :sortable="true"
          :edit_options="this.edit_option_4"
          :width="180"
          :editable="false"
        />
        <hlx-column
          :prop="'Origin'"
          :label="'Origin'"
          :type="'string'"
          :sortable="true"
          :edit_options="this.edit_option_2"
        />
        <hlx-column
          :prop="'Picture'"
          :label="'Picture'"
          :sortable="true"
          :type="'img'"
          :edit_options="this.edit_option_0"
        />
        <hlx-column
          :prop="'Currency'"
          :label="'Currency'"
          :type="'currency'"
          :format="'INR'"
          :sortable="true"
          show_summary="sum"
        />
        <hlx-column
          :prop="'Rating'"
          :label="'Rating'"
          :type="'rating'"
          :sortable="true"
        />
      </hlx-table>
    </div>
    <div class="example-footer">
      <!-- Replace your id wherever required -->
      <span
        class="icon"
        id="example-code14-icon"
        @click="showCode('example-code14')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
    <div class="source-code" id="example-code14" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="example_code14"
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
  </div>
  <h2>Table Attributes</h2>
  <hlx-table
    :data="this.table_attributes_data"
    :border="true"
    theme="secondary"
    :rowHover="true"
    :bold_header="true"
    :ellipses="10"
  >
    <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" :width="30"/>
    <hlx-column :prop="'Description'" :label="'Description'" :type="'string'" />
    <hlx-column :prop="'Default'" :label="'Default'" :type="'string'" :width="20"/>
    <hlx-column :prop="'Type'" :label="'Type'" :type="'string'" :width="200"/>
    <hlx-column
      :prop="'accepted_values'"
      :label="'Accepted values'"
      :type="'string'"
      :width="35"
    />
    <hlx-column :prop="'mandatory'" :label="'Mandatory'" :type="'string'" :width="25"/>
  </hlx-table>
  <br />
  <br />
  <h2>Table Events</h2>
  <hlx-table
    :data="this.table_events_data"
    :border="true"
    theme="secondary"
    :rowHover="true"
    :bold_header="true"
    :ellipses="7"
  >
    <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
    <hlx-column :prop="'Description'" :label="'Description'" :type="'string'" :width="450"/>
    <hlx-column :prop="'Parameters'" :label="'Parameters'" :type="'string'"/>
  </hlx-table>
  <br />
  <br />
  <h2>Table-column Attribute</h2>
  <hlx-table
    :data="this.column_attributes_data"
    :border="true"
    theme="secondary"
    :rowHover="true"
    :bold_header="true"
    :ellipses="7"
  >
    <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" :width="80"/>
    <hlx-column :prop="'Description'" :label="'Description'" :type="'string'" />
    <hlx-column :prop="'Default'" :label="'Default'" :type="'string'" :width="30"/>
    <hlx-column :prop="'Type'" :label="'Type'" :type="'string'" :width="30"/>
    <hlx-column
      :prop="'accepted_values'"
      :label="'Accepted values'"
      :type="'string'"
    />
    <hlx-column :prop="'mandatory'" :label="'Mandatory'" :type="'string'" :width="30"/>
  </hlx-table>
</template>

<script>
import HlxTable from '../components/NewTable.vue'
import HlxColumn from '../components/NewTableColumn.vue'
import HlxDivider from '../components/DividerComponent.vue'
import CodeEditor from 'simple-code-editor'
export default {
  components: {
    CodeEditor,
    HlxTable,
    HlxColumn,
    HlxDivider
  },
  data () {
    return {
      editor_theme: 'light',
      lazy_load_table: 1,
      slot_data: ['one', 'two', 'three', 'four', 'five', 'six'],
      column_attributes_data: [
        {
          Name: 'prop',
          Description: 'Corresponds to a key of the object in data array',
          Type: 'String',
          accepted_values: '-',
          mandatory: 'yes',
          Default: '-'
        },
        {
          Name: 'label',
          Description: 'Sets display name for the column in header',
          Type: 'String',
          accepted_values: '-',
          mandatory: 'yes',
          Default: '-'
        },
        {
          Name: 'type',
          Description: 'Formats data based on the type of the data in a cell',
          Type: 'String',
          accepted_values: 'string / date / currency / integer / percentage',
          mandatory: 'yes',
          Default: '-'
        },
        {
          Name: 'width',
          Description: 'Sets width for the particular column',
          Type: 'Number',
          accepted_values: 'Integers',
          mandatory: 'no',
          Default: '-'
        },
        {
          Name: 'sortable',
          Description: 'Adds sorting functionality to the column',
          Type: 'Boolean',
          accepted_values: 'true/false',
          mandatory: 'no',
          Default: 'false'
        },
        {
          Name: 'show_summary',
          Description: 'Displays a summary row on the bottom',
          Type: 'string',
          accepted_values: 'avg / sum / min / max',
          mandatory: 'no',
          Default: '-'
        }
      ],
      table_attributes_data: [
        {
          Name: 'data',
          Description: 'Table data',
          Type: 'Array of objects',
          accepted_values: 'Array of objects',
          mandatory: 'yes',
          Default: '-'
        },
        {
          Name: 'stripe',
          Description: 'Whether Table is striped',
          Type: 'boolean',
          accepted_values: 'true/false',
          mandatory: 'no',
          Default: 'false'
        },
        {
          Name: 'border',
          Description: 'Whether Table has vertical border',
          Type: 'boolean',
          accepted_values: 'true/false',
          mandatory: 'no',
          Default: 'false'
        },
        // {
        //   Name: 'sortable',
        //   Description: 'boolean value describes whether to show sort icon in each column',
        //   Type: 'boolean',
        //   accepted_values: '-',
        // mandatory: "(order: 'ascending' | 'descending')",
        //   Default: 'false(ascending order)'
        // },
        {
          Name: 'height',
          Description: 'Sets height for the table',
          Type: 'integer',
          accepted_values: 'Integer',
          mandatory: 'no',
          Default: '-'
        },
        {
          Name: 'filterable',
          Description: 'Whether to show the filter button',
          Type: 'boolean',
          accepted_values: 'true/false',
          mandatory: 'no',
          Default: 'false'
        },
        // {
        //   Name: 'cascading_filter',
        //   Description:'whether to show the filter button and apply the cascadding filter',
        //   Type: 'boolean',
        //   accepted_values: 'true/false',
        // mandatory: "-",
        //   Default:'false',
        // },
        {
          Name: 'pagination',
          Description: 'Whether to show the pagination',
          Type: 'boolean',
          accepted_values: 'true/false',
          mandatory: 'no',
          Default: 'false'
        },
        {
          Name: 'rowHover',
          Description: 'Adds hover effect for rows',
          Type: 'boolean',
          accepted_values: 'true/false',
          mandatory: 'no',
          Default: 'false'
        },
        {
          Name: 'rowExpand',
          Description: 'Gives expandable feature to the rows to inherit child tables',
          Type: 'boolean',
          accepted_values: 'true/false',
          mandatory: 'no',
          Default: 'false'
        },
        {
          Name: 'rowgroup',
          Description: 'Enables a dropdown with column names, used to group similar rows',
          Type: 'boolean',
          accepted_values: 'true/false',
          mandatory: 'no',
          Default: 'false'
        },
        {
          Name: 'search',
          Description: 'Adds search functionality to the table',
          Type: 'boolean',
          accepted_values: 'true/false',
          mandatory: 'no',
          Default: 'false'
        },
        {
          Name: 'crud_operations',
          Description: 'Adds a fixed column with crud & re-arrange functionality to the right',
          Type: 'boolean',
          accepted_values: 'true/false',
          mandatory: 'no',
          Default: 'false'
        },
        {
          Name: 'crud_options',
          Description: 'Custom object with crud options preset',
          Type: "{column_name: 'Actions', customise_columns: true, type: 'icon', view_row: true, clone: true, edit: true, delete: true, custom: [{ icon: 'calendar', name: 'Calendar' },{ icon: 'email', name: 'Email' },{ icon: 'font', name: 'Font' },{ icon: 'badge', name: 'Badge' }]}",
          accepted_values: 'Object',
          mandatory: 'no',
          Default: '-'
        }

      ],
      table_events_data: [
        {
          Name: 'filterValue',
          Description: 'Emits an object with the applied filters',
          Parameters: 'function(payload)'
        },
        {
          Name: 'filterClear',
          Description: 'Emits when the filter is cleared',
          Parameters: 'function(boolean)'
        },
        {
          Name: 'deleteRow',
          Description: 'Emits the deleted rows payload',
          Parameters: 'function(payload)'
        },
        {
          Name: 'editRow',
          Description: 'Emits the edited rows payload',
          Parameters: 'function(payload)'
        },
        {
          Name: 'cloneRow',
          Description: 'Emits the cloned rows payload',
          Parameters: 'function(boolean)'
        },
        {
          Name: 'viewRow',
          Description: 'Emits the cloned rows payload',
          Parameters: 'function(boolean)'
        },
        {
          Name: 'rowData',
          Description: 'Emits the row data',
          Parameters: 'function(payload)'
        },
        {
          Name: '<custon icon name>',
          Description: 'Use the custom icon name in action column to recieve the row data in corresponding icon clicks',
          Parameters: 'function(payload)'
        }
      ],
      example_code1: ` 
      <template>
      <hlx-table :data="this.basic_table_data">
          <hlx-column
            :prop="'Name'"
            :label="'Name'"
            :type="'string'"
            :width="400"
          />
          <hlx-column
            :prop="'Miles_per_Gallon'"
            :label="'Miles / gallon'"
            :type="'integer'"
          />
          <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
          <hlx-column
            :prop="'Displacement'"
            :label="'Displacement'"
            :type="'integer'"
          />
          <hlx-column
            :prop="'Horsepower'"
            :label="'Horsepower'"
            :type="'integer'"
          />
      </hlx-table>
  </template>
<script>

export default {
  data () {
    return {
              basic_table_data: [
        {
          // checked: false,
          Name: 'ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ],  
      }
      }
  `,

      example_code2: ` 
      <template>
      <hlx-table :data="this.basic_table_data" :resizable="true">
          <hlx-column
            :prop="'Name'"
            :label="'Name'"
            :type="'string'"
            :width="400"
          />
          <hlx-column
            :prop="'Miles_per_Gallon'"
            :label="'Miles / gallon'"
            :type="'integer'"
          />
          <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
          <hlx-column
            :prop="'Displacement'"
            :label="'Displacement'"
            :type="'integer'"
          />
          <hlx-column
            :prop="'Horsepower'"
            :label="'Horsepower'"
            :type="'integer'"
          />
      </hlx-table>
  </template>
<script>

export default {
  data () {
    return {
              basic_table_data: [
        {
          // checked: false,
          Name: 'ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ], 
      }
      }
  `,
      example_code3: ` 
      <template>

      // Secondary color
        <hlx-table
        :data="this.theme_table_data"
        theme="secondary"
        :bold_header="true"
      >
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
      <br />

      // Dark color
      <hlx-table :data="this.theme_table_data" theme="dark">
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
      <br />

      // Primary color
      <hlx-table :data="this.theme_table_data" theme="grey">
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
  </template>
<script>

export default {
  data () {
    return {
         theme_table_data: [
        {
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ],
      }
      }
  `,
      example_code4: ` 
      <template>
      <hlx-table :data="this.basic_table_data" :stripe="true" :theme="'primary'">
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
  </template>
<script>

export default {
  data () {
    return {
        basic_table_data: [
        {
          // checked: false,
          Name: 'ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ],  
      }
      }
  `,
      example_code5: ` 
      <template>
      <hlx-table :data="this.basic_table_data" :border="true"">
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
  </template>
<script>

export default {
  data () {
    return {
        basic_table_data: [
        {
          // checked: false,
          Name: 'ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ],  
      }
      }
  `,
      example_code6: ` 
      <template>
      <hlx-table
        :data="this.basic_table_data"
        :border="false"
        :theme="'secondary'"
      >
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :fixed="'left'"
          :width="150"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Weight_in_lbs'"
          :label="'Weight (LBS)'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Acceleration'"
          :label="'Acceleration'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Year'"
          :label="'Year'"
          :type="'date'"
          :format="'DD-MM-YYYY'"
          :width="150"
        />
        <hlx-column :prop="'Origin'" :label="'Origin'" :type="'string'" :width="150"/>
        <hlx-column :prop="'Picture'" :label="'Picture'" :type="'img'" :width="150"/>
        <hlx-column
          :prop="'Currency'"
          :label="'Currency'"
          :type="'currency'"
          :format="'INR'"
          :width="150"
        />
        <hlx-column
          :prop="'Rating'"
          :label="'Rating'"
          :type="'rating'"
          :fixed="'right'"
          
        />
      </hlx-table>
  </template>
<script>

export default {
  data () {
    return {
        basic_table_data: [
        {
          // checked: false,
          Name: 'ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ],  
      }
      }
  `,
      example_code7: ` 
      <template>
      <hlx-table
        :data="this.basic_table_data"
        :theme="'secondary'"
        :border="true"
        :pagination="true"
      >
        <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
  </template>
<script>

export default {
  data () {
    return {
        basic_table_data: [
        {
          // checked: false,
          Name: 'ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ],  
      }
      }
  `,
      example_code8: ` 
      <template>
      <hlx-table
        :data="this.basic_table_data"
        :border="true"
        :pagination="true"
      >
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :sortable="true"
          :width="170"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
  </template>
<script>

export default {
  data () {
    return {
        basic_table_data: [
        {
          // checked: false,
          Name: 'ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ], 
      }
      }
  `,
      example_code9: ` 
      <template>
      <hlx-table
        :data="this.basic_table_data"
        :theme="'secondary'"
        :pagination="true"
        :search="true"
      >
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :sortable="true"
          :width="170"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
  </template>
<script>

export default {
  data () {
    return {
        basic_table_data: [
        {
          // checked: false,
          Name: 'ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ],  
      }
      }
  `,
      example_code11: ` 
      <template>
      <hlx-table
        :data="this.basic_table_data"
        :theme="'secondary'"
        :border="true"
        :pagination="true"
        :rowgroup="true"
      >
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Weight_in_lbs'"
          :label="'Weight (LBS)'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Acceleration'"
          :label="'Acceleration'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Year'"
          :label="'Year'"
          :type="'date'"
          :format="'DD-MM-YYYY'"
        />
        <hlx-column :prop="'Origin'" :label="'Origin'" :type="'string'" />
        <hlx-column :prop="'Picture'" :label="'Picture'" :type="'img'" />
        <hlx-column
          :prop="'Currency'"
          :label="'Currency'"
          :type="'currency'"
          :format="'INR'"
        />
        <hlx-column :prop="'Rating'" :label="'Rating'" :type="'rating'" />
      </hlx-table>
  </template>
<script>

export default {
  data () {
    return {
        basic_table_data: [
        {
          // checked: false,
          Name: 'ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ],  
      }
      }
  `,
      example_code12: ` 
      <template>
      <hlx-table
        :data="this.basic_table_data"
        :theme="'secondary'"
        :border="true"
        :pagination="true"
        :crud_operations="true"
        :crud_options="this.crud_options"
      >
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :sortable="true"
          :width="150"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :sortable="true"
          :width="150"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Weight_in_lbs'"
          :label="'Weight (LBS)'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Acceleration'"
          :label="'Acceleration'"
          :type="'integer'"
          :width="150"
        />
        <hlx-column
          :prop="'Year'"
          :label="'Year'"
          :type="'date'"
          :width="150"
          :format="'DD-MM-YYYY'"
        />
        <hlx-column :prop="'Origin'" :label="'Origin'" :type="'string'" :width="150"/>
        <hlx-column :prop="'Picture'" :label="'Picture'" :type="'img'" :width="150"/>
        <hlx-column
          :prop="'Currency'"
          :label="'Currency'"
          :type="'currency'"
          :format="'INR'"
          :width="150"
        />
        <hlx-column :prop="'Rating'" :label="'Rating'" :type="'rating'" :width="180"/>
      </hlx-table>
      </template>
<script>

export default {
  data () {
    return {
        basic_table_data: [
        {
          // checked: false,
          Name: 'ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ],  
      }
      }
  `,
      example_code13: ` 
      <template>
      <hlx-table
        :data="this.row_expand_data"
        :search="true"
        :filterable="false"
        :border="true"
        :stripe="false"
        theme="dark"
        :pagination="true"
        :rowHover="true"
        :rowExpand="true"
      >
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :sortable="true"
          :type="'string'"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Weight_in_lbs'"
          :label="'Weight (LBS)'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Acceleration'"
          :label="'Acceleration'"
          :type="'integer'"
          :sortable="true"
        />
      </hlx-table>
      </template>
<script>

export default {
  data () {
    return {
         row_expand_data: [
        {
          Name: 'chevrolet chevelle',
          Miles_per_Gallon: '18',
          Rating: 4,
          Cylinders: '9',
          Displacement: 307,
          Horsepower: 130,
          Weight_in_lbs: 3504,
          Acceleration: 12,
          children: [
            {
              Name: 'John1 ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'buick skylark 320',
          Miles_per_Gallon: 15,
          Rating: 4,
          Cylinders: '7',
          Displacement: 350,
          Horsepower: 165,
          Weight_in_lbs: 3693,
          Acceleration: 11.5,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'plymouth satellite',
          Miles_per_Gallon: 18,
          Rating: 4,
          Cylinders: '8',
          Displacement: 318,
          Horsepower: 150,
          Weight_in_lbs: 3436,
          Acceleration: 11,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'amc rebel sst',
          Miles_per_Gallon: 16,
          Rating: 4,
          Cylinders: '8',
          Displacement: 304,
          Horsepower: 150,
          Weight_in_lbs: 3433,
          Acceleration: 12,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'ford torino',
          Miles_per_Gallon: 17,
          Rating: 4,
          Cylinders: '8',
          Displacement: 302,
          Horsepower: 140,
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'ford galaxie 500',
          Miles_per_Gallon: 15,
          Rating: 4,
          Cylinders: '8',
          Displacement: 429,
          Horsepower: 198,
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'chevrolet impala',
          Miles_per_Gallon: 14,
          Rating: 4,
          Cylinders: '8',
          Displacement: 454,
          Horsepower: 220,
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'plymouth fury iii',
          Miles_per_Gallon: 14,
          Rating: 4,
          Cylinders: '8',
          Displacement: 440,
          Horsepower: 215,
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'pontiac catalina',
          Miles_per_Gallon: 14,
          Rating: 4,
          Cylinders: '8',
          Displacement: 455,
          Horsepower: 225,
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: 15,
          Rating: 4,
          Cylinders: '8',
          Displacement: 390,
          Horsepower: 190,
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]

        }
      ]
      }
      }
  `,
      example_code14: ` 
      <template>
      <hlx-table
        :data="this.table_data"
        :search="true"
        :border="true"
        :stripe="false"
        theme="secondary"
        :pagination="true"
        :rowHover="true"
        :crud_operations="true"
        :crud_options="this.crud_options"
        :selectable="false"
        :filterable="true"
        :cascading_filter="true"
        :filter_payload="this.filters"
        :cascade="true"
        :rowgroup="true"
        :bold_header="true"
        :bold_summary="true"
        :resizable="true"
        @filterValue="filterApply"
        @filterClear="clearfilter"
      >
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :sortable="true"
          :width="190"
          :edit_options="this.edit_option_0"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
          :sortable="true"
          :edit_options="this.edit_option_3"
          show_summary="min"
        />
        <hlx-column
          :prop="'Cylinders'"
          :label="'Cylinders'"
          :sortable="true"
          :type="'integer'"
          show_summary="max"
        />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
          :sortable="true"
          show_summary="avg"
        />
        <hlx-column
          :prop="'Weight_in_lbs'"
          :label="'Weight (LBS)'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Acceleration'"
          :label="'Acceleration'"
          :type="'integer'"
          :sortable="true"
        />
        <hlx-column
          :prop="'Year'"
          :label="'Year'"
          :type="'date'"
          :format="'DD-MM-YYYY'"
          :sortable="true"
          :edit_options="this.edit_option_4"
          :width="180"
        />
        <hlx-column
          :prop="'Origin'"
          :label="'Origin'"
          :type="'string'"
          :sortable="true"
          :edit_options="this.edit_option_2"
        />
        <hlx-column
          :prop="'Picture'"
          :label="'Picture'"
          :sortable="true"
          :type="'img'"
          :edit_options="this.edit_option_0"
        />
        <hlx-column
          :prop="'Currency'"
          :label="'Currency'"
          :type="'currency'"
          :format="'INR'"
          :sortable="true"
          show_summary="sum"
        />
        <hlx-column
          :prop="'Rating'"
          :label="'Rating'"
          :type="'rating'"
          :sortable="true"
        />
      </hlx-table>
      </template>
<script>

export default {
  data () {
    return {
      table_data: [
        {  
          Name: 'chevrolet chevelle',
          Miles_per_Gallon: {
            name: 16,
            id: 31,
            checked: true,
            disabled: false
          },
          Rating: 4,
          Cylinders: 9,
          Horsepower: { name: 130, id: 99, checked: true, disabled: false },
          Weight_in_lbs: 3504,
          Acceleration: 12,
          Displacement: { name: 307, id: 88, checked: true, disabled: false },
          Year: '2000-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          Name: 'chevrolet chevelle',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 3,
          Cylinders: 7,
          Displacement: { name: 350, id: 87, checked: true, disabled: false },
          Horsepower: { name: 165, id: 98, checked: true, disabled: false },
          Weight_in_lbs: 3693,
          Acceleration: 11.5,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Warning'
        },
        {
          Name: 'plymouth satellite',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 5,
          Cylinders: 8,
          Displacement: { name: 318, id: 86, checked: true, disabled: false },
          Horsepower: { name: 150, id: 97, checked: true, disabled: false },
          Weight_in_lbs: 3436,
          Acceleration: 11,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          Name: 'amc rebel sst',
          Miles_per_Gallon: { name: 16, id: 3, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 304, id: 85, checked: true, disabled: false },
          Horsepower: { name: 150, id: 97, checked: true, disabled: false },
          Weight_in_lbs: 3433,
          Acceleration: 12,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Success'
        },
        {
          Name: 'ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ],
      filters: {
        Origin: {
          description: 'Origin',
          type: 'string', 
          data: [
            { name: 'USA', id: 1, checked: true, disabled: false },
            { name: 'Russia', id: 3, checked: true, disabled: false },
            { name: 'India', id: 4, checked: true, disabled: false }
          ]
        },
        Miles_per_Gallon: {
          description: 'Miles per Gallon',
          type: 'integer', 
          data: [
            { name: 14, id: 1, checked: true, disabled: false },
            { name: 15, id: 2, checked: true, disabled: false },
            { name: 18, id: 5, checked: true, disabled: false },
            { name: 16, id: 31, checked: true, disabled: false },
            { name: 17, id: 41, checked: true, disabled: false }
          ]
        },
        Horsepower: {
          description: 'Horsepower',
          type: 'integer', 
          data: [
            { name: 130, id: 99, checked: true, disabled: false },
            { name: 165, id: 98, checked: true, disabled: false },
            { name: 150, id: 97, checked: true, disabled: false },
            { name: 140, id: 96, checked: true, disabled: false },
            { name: 198, id: 95, checked: true, disabled: false },
            { name: 220, id: 94, checked: true, disabled: false },
            { name: 215, id: 93, checked: true, disabled: false },
            { name: 225, id: 92, checked: true, disabled: false }
          ]
        },
        Displacement: {
          description: 'Displacement',
          type: 'integer',
          data: [
            { name: 307, id: 88, checked: true, disabled: false },
            { name: 350, id: 87, checked: true, disabled: false },
            { name: 318, id: 86, checked: true, disabled: false },
            { name: 304, id: 85, checked: true, disabled: false },
            { name: 302, id: 84, checked: true, disabled: false },
            { name: 429, id: 83, checked: true, disabled: false },
            { name: 454, id: 82, checked: true, disabled: false }
          ],
          crud_options: {
        column_name: 'Actions',
        customise_columns: true,
        type: 'icon',
        view_row: true,
        clone: true,
        edit: true,
        delete: true
      },
            edit_option_0: {
        editable: true,
        type: 'textarea'
      },
      edit_option_1: {
        editable: true,
        options: [6, 7, 8, 9],
        type: 'dropdown'
      },
      edit_option_2: {
        editable: true,
        options: [
          { name: 'USA', id: 1 },
          { name: 'India', id: 2 },
          { name: 'Russia', id: 3 },
          { name: 'Russia', id: 4 }
        ],
        type: 'radio'
      },
      edit_option_3: {
        editable: true,
        options: [
          { name: 14, id: 1 },
          { name: 15, id: 2 },
          { name: 16, id: 3 },
          { name: 17, id: 4 },
          { name: 18, id: 5 }
        ],
        type: 'radio'
      },
      edit_option_4: {
        editable: true,
        type: 'date'
      },
        },
       methods: {
          filterApply (val) {
            this.table_data = val
          },
          clearfilter (val2) {
            // console.log(val2, 'rainbow')
            // this.filters = val1
          }
        }
      }
      }
      }
  `,
      custom_column: `
      <template>
            <hlx-table :data="this.basic_table_data">
        <hlx-column
          :prop="'Name'"
          :label="'Name'"
          :type="'string'"
          :width="400"
        />
        <hlx-column
          :prop="'Miles_per_Gallon'"
          :label="'Miles / gallon'"
          :type="'integer'"
        />
        <hlx-column :prop="'Cylinders'" :label="'Cylinders'" :type="'integer'" />
        <hlx-column
          :prop="'Displacement'"
          :label="'Displacement'"
          :type="'integer'"
        />
        <hlx-column
          :prop="'Horsepower'"
          :label="'Horsepower'"
          :type="'integer'"
        />
      </hlx-table>
      </template>
      `,
      basic_table_data: [
        {
          // checked: false,
          Name: 'Ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: {type:'primary',value:'success'},
          Value: {type:'array',value:[1,2,3,4,5]},
          check:'dlkjfk'
        },
        {
          // checked: false,
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: {type:'primary',value:'success'},
          Value:{type:'array',value:[1,2,3,4,5]},
          check:'dlkjfk'
        },
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: {type:'primary',value:'success'},
          Value:{type:'array',value:[1,2,3,4,5]},
          check:'dlkjfk'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: {type:'warning',value:'warning'},
          Value:{type:'array',value:[1,2,3,4,5]},
          check:'dlkjfk'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: {type:'error',value:'success'},
          Value:{type:'array',value:[1,2,3,4,5]},
          check:'dlkjfk'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: {type:'info',value:'success'},
          Value:{type:'array',value:[1,2,3,4,5]},
          check:'dlkjfk'
        }
      ],
      fixed_head_table_data: [
        {
          // checked: false,
          Name: 'chevrolet chevelle',
          Miles_per_Gallon: {
            name: 16,
            id: 31,
            checked: true,
            disabled: false
          },
          Rating: 4,
          Cylinders: 9,
          Horsepower: { name: 130, id: 99, checked: true, disabled: false },
          Weight_in_lbs: 3504,
          Acceleration: 12,
          Displacement: { name: 307, id: 88, checked: true, disabled: false },
          Year: '2000-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet chevelle',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 3,
          Cylinders: 7,
          Displacement: { name: 350, id: 87, checked: true, disabled: false },
          Horsepower: { name: 165, id: 98, checked: true, disabled: false },
          Weight_in_lbs: 3693,
          Acceleration: 11.5,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Warning'
        },
        {
          // checked: false,
          Name: 'plymouth satellite',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 5,
          Cylinders: 8,
          Displacement: { name: 318, id: 86, checked: true, disabled: false },
          Horsepower: { name: 150, id: 97, checked: true, disabled: false },
          Weight_in_lbs: 3436,
          Acceleration: 11,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'amc rebel sst',
          Miles_per_Gallon: { name: 16, id: 3, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 304, id: 85, checked: true, disabled: false },
          Horsepower: { name: 150, id: 97, checked: true, disabled: false },
          Weight_in_lbs: 3433,
          Acceleration: 12,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Success'
        },
        {
          // checked: false,
          Name: 'ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ],
      theme_table_data: [
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ],
      table_data: [
        {
          // checked: false,
          Name: 'chevrolet chevelle',
          Miles_per_Gallon: {
            name: 16,
            id: 31,
            checked: true,
            disabled: false
          },
          Rating: 4,
          Cylinders: 9,
          Horsepower: { name: 130, id: 99, checked: true, disabled: false },
          Weight_in_lbs: 3504,
          Acceleration: 12,
          Displacement: { name: 307, id: 88, checked: true, disabled: false },
          Year: '2000-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet chevelle',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 3,
          Cylinders: 7,
          Displacement: { name: 350, id: 87, checked: true, disabled: false },
          Horsepower: { name: 165, id: 98, checked: true, disabled: false },
          Weight_in_lbs: 3693,
          Acceleration: 11.5,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Warning'
        },
        {
          // checked: false,
          Name: 'plymouth satellite',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 5,
          Cylinders: 8,
          Displacement: { name: 318, id: 86, checked: true, disabled: false },
          Horsepower: { name: 150, id: 97, checked: true, disabled: false },
          Weight_in_lbs: 3436,
          Acceleration: 11,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'amc rebel sst',
          Miles_per_Gallon: { name: 16, id: 3, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 304, id: 85, checked: true, disabled: false },
          Horsepower: { name: 150, id: 97, checked: true, disabled: false },
          Weight_in_lbs: 3433,
          Acceleration: 12,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Success'
        },
        {
          // checked: false,
          Name: 'ford torino',
          Miles_per_Gallon: { name: 17, id: 4, checked: true, disabled: false },
          Rating: 2,
          Cylinders: 8,
          Displacement: { name: 302, id: 84, checked: true, disabled: false },
          Horsepower: { name: 140, id: 96, checked: true, disabled: false },
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'Error'
        },
        {
          // checked: false,
          Name: 'ford galaxie 500',
          Miles_per_Gallon: { name: 15, id: 2, checked: true, disabled: false },
          Rating: 1,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 198, id: 95, checked: true, disabled: false },
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'chevrolet impala',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 0,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 220, id: 94, checked: true, disabled: false },
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: { name: 'Russia', id: 3, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'plymouth fury iii',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 215, id: 93, checked: true, disabled: false },
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'USA', id: 1, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'pontiac catalina',
          Miles_per_Gallon: { name: 14, id: 1, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 454, id: 82, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        },
        {
          // checked: false,
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: { name: 18, id: 5, checked: true, disabled: false },
          Rating: 4,
          Cylinders: 8,
          Displacement: { name: 429, id: 83, checked: true, disabled: false },
          Horsepower: { name: 225, id: 92, checked: true, disabled: false },
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: { name: 'India', id: 4, checked: true, disabled: false },
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success'
        }
      ],
      basic_table_data1: [
        {
          // checked: false,
          name: 'ford torino',
          miles_per_gallon: { name: 17, id: 4, checked: true, disabled: false },
          cylinders: 8,

        },
        {
          // checked: false,
          name: 'ford galaxie 500',
          miles_per_gallon: { name: 15, id: 2, checked: true, disabled: false },
          cylinders: 8,
        },
        {
          // checked: false,
          name: 'chevrolet impala',
          miles_per_gallon: { name: 14, id: 1, checked: true, disabled: false },
          cylinders: 8,
        },
        {
          // checked: false,
          name: 'plymouth fury iii',
          miles_per_gallon: { name: 14, id: 1, checked: true, disabled: false },
          cylinders: 8,
        },
        {
          // checked: false,
          name: 'pontiac catalina',
          miles_per_gallon: { name: 14, id: 1, checked: true, disabled: false },
          cylinders: 8,
        },
        {
          // checked: false,
          name: 'amc ambassador dpl',
          miles_per_gallon: { name: 18, id: 5, checked: true, disabled: false },
          cylinders: 8,
        }
      ],
      row_expand_data: [
        {
          Name: 'chevrolet chevelle',
          Miles_per_Gallon: '18',
          Rating: 4,
          Cylinders: '9',
          Displacement: 307,
          Horsepower: 130,
          Weight_in_lbs: 3504,
          Acceleration: 12,
          children: [
            {
              Name: 'John1 ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'buick skylark 320',
          Miles_per_Gallon: 15,
          Rating: 4,
          Cylinders: '7',
          Displacement: 350,
          Horsepower: 165,
          Weight_in_lbs: 3693,
          Acceleration: 11.5,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'plymouth satellite',
          Miles_per_Gallon: 18,
          Rating: 4,
          Cylinders: '8',
          Displacement: 318,
          Horsepower: 150,
          Weight_in_lbs: 3436,
          Acceleration: 11,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'amc rebel sst',
          Miles_per_Gallon: 16,
          Rating: 4,
          Cylinders: '8',
          Displacement: 304,
          Horsepower: 150,
          Weight_in_lbs: 3433,
          Acceleration: 12,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'ford torino',
          Miles_per_Gallon: 17,
          Rating: 4,
          Cylinders: '8',
          Displacement: 302,
          Horsepower: 140,
          Weight_in_lbs: 3449,
          Acceleration: 10.5,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'ford galaxie 500',
          Miles_per_Gallon: 15,
          Rating: 4,
          Cylinders: '8',
          Displacement: 429,
          Horsepower: 198,
          Weight_in_lbs: 4341,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'chevrolet impala',
          Miles_per_Gallon: 14,
          Rating: 4,
          Cylinders: '8',
          Displacement: 454,
          Horsepower: 220,
          Weight_in_lbs: 4354,
          Acceleration: 9,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'plymouth fury iii',
          Miles_per_Gallon: 14,
          Rating: 4,
          Cylinders: '8',
          Displacement: 440,
          Horsepower: 215,
          Weight_in_lbs: 4312,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'pontiac catalina',
          Miles_per_Gallon: 14,
          Rating: 4,
          Cylinders: '8',
          Displacement: 455,
          Horsepower: 225,
          Weight_in_lbs: 4425,
          Acceleration: 10,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]
        },
        {
          Name: 'amc ambassador dpl',
          Miles_per_Gallon: 15,
          Rating: 4,
          Cylinders: '8',
          Displacement: 390,
          Horsepower: 190,
          Weight_in_lbs: 3850,
          Acceleration: 8.5,
          Year: '1970-01-01',
          Origin: 'USA',
          Currency: '3456',
          Picture:
            'https://image.shutterstock.com/image-photo/game-joystick-isolated-on-white-260nw-531776173.jpg',
          Url: 'https://www.google.com/',
          Label: 'success',
          children: [
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'John ',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Henry',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            },
            {
              Name: 'Stuart',
              City: 'London',
              Address: 'lmn opq',
              Date: '11/12/2008'
            }
          ],
          children_label: [
            {
              label_name: 'Name',
              type: 'string'
            },
            {
              label_name: 'City',
              type: 'string'
            },
            {
              label_name: 'Address',
              type: 'string'
            },
            {
              label_name: 'Date',
              type: 'date',
              format: 'DD-MM-YYYY'
            }
          ]

        }
      ],
      crud_options: {
        column_name: 'Actions',
        customise_columns: true,
        type: 'icon',
        view_row: false,
        clone: false,
        edit: false,
        delete: false,
        custom: [
          { icon: 'calendar', name: 'Calendar' },
          { icon: 'email', name: 'Email' },
          { icon: 'font', name: 'Font' },
          { icon: 'badge', name: 'Badge' }
        ]
      },
      edit_option_0: {
        editable: false,
        type: 'textarea'
      },
      edit_option_1: {
        editable: true,
        options: [6, 7, 8, 9],
        type: 'dropdown'
      },
      edit_option_2: {
        editable: true,
        options: [
          { name: 'USA', id: 1 },
          { name: 'India', id: 2 },
          { name: 'Russia', id: 3 },
          { name: 'Russia', id: 4 }
        ],
        type: 'radio'
      },
      edit_option_3: {
        editable: true,
        options: [
          { name: 14, id: 1 },
          { name: 15, id: 2 },
          { name: 16, id: 3 },
          { name: 17, id: 4 },
          { name: 18, id: 5 }
        ],
        type: 'radio'
      },
      edit_option_4: {
        editable: true,
        type: 'date'
      },
      filter_payload: {},
      cascade_array: [],
      filters: {
        Origin: {
          description: 'Origin',
          type: 'string', // generate in UI
          data: [
            { name: 'USA', id: 1, checked: true, disabled: false },
            { name: 'Russia', id: 3, checked: true, disabled: false },
            { name: 'India', id: 4, checked: true, disabled: false }
          ]
        },
        Miles_per_Gallon: {
          description: 'Miles per Gallon',
          type: 'integer', // Generate in UI
          data: [
            { name: 14, id: 1, checked: true, disabled: false },
            { name: 15, id: 2, checked: true, disabled: false },
            { name: 18, id: 5, checked: true, disabled: false },
            { name: 16, id: 31, checked: true, disabled: false },
            { name: 17, id: 41, checked: true, disabled: false }
          ]
        },
        Horsepower: {
          description: 'Horsepower',
          type: 'integer', // Generate in UI
          data: [
            { name: 130, id: 99, checked: true, disabled: false },
            { name: 165, id: 98, checked: true, disabled: false },
            { name: 150, id: 97, checked: true, disabled: false },
            { name: 140, id: 96, checked: true, disabled: false },
            { name: 198, id: 95, checked: true, disabled: false },
            { name: 220, id: 94, checked: true, disabled: false },
            { name: 215, id: 93, checked: true, disabled: false },
            { name: 225, id: 92, checked: true, disabled: false }
          ]
        },
        Displacement: {
          description: 'Displacement',
          type: 'integer', // Generate in UI
          data: [
            { name: 307, id: 88, checked: true, disabled: false },
            { name: 350, id: 87, checked: true, disabled: false },
            { name: 318, id: 86, checked: true, disabled: false },
            { name: 304, id: 85, checked: true, disabled: false },
            { name: 302, id: 84, checked: true, disabled: false },
            { name: 429, id: 83, checked: true, disabled: false },
            { name: 454, id: 82, checked: true, disabled: false }
          ]
        }
      }
    }
  },
  mounted () {
    const arr = []
    const obj = {}
    obj.Origin = this.edit_option_2
    arr.push(obj)
    const obj1 = {}
    obj1.Miles_per_Gallon = this.edit_option_3
    arr.push(obj1)
    this.cascade_array = arr
    for (let c = 0; c < 18; c++) {
      setTimeout(() => {
        this.lazy_load_table += 1
      }, 100)
    }
  },
  watch: {
    table_data: {
      handler (val) {},
      immediate: true,
      deep: true
    }
  },
  methods: {
    logRow (data) {
      console.log('recieved data', data)
    },
    showCode (val) {
      document.getElementById(val + '-icon').classList.toggle('active-icon')
      if (document.getElementById(val).style.display === 'none') {
        document.getElementById(val).style.display = 'block'
      } else if (document.getElementById(val).style.display === 'block') {
        document.getElementById(val).style.display = 'none'
      }
    },

    filterApply (val) {
      // console.log(val, 'color')
      this.table_data = val
    },
    clearfilter (val2) {
      // console.log(val2, 'rainbow')
      this.table_data = val2
      // this.filters = val1
    }
  }
}
</script>

<style></style>
