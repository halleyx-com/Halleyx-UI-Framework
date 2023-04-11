<template>
  <h1 class="component-heading">Modal Window</h1>
  <p class="component-description">
A modal (also called a modal window or lightbox) is a web page element that displays in front of and deactivates all other page content. To return to the main content, the user must engage with the modal by completing an action or by closing it.  </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    Modal window is made up of header, body and footer. Header and footer is
    optional, and its content distribution depends on a named slots as below:
  </p>
  <li class="component-description">#header: displays title of modal window</li>
  <li class="component-description">
    #content: displays body content of modal window
  </li>
  <li class="component-description">
    #footer: displays footer of modal window
  </li>
  <p class="component-description">
    Set <b>:modal</b> to <b>true</b> for basic modal window. <br />
    To specify a custom height<b> :height</b><br />
    To specify a custom width <b>:width</b><br />
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-button class="primary sm" @click="this.modal_active = true"
        >Click</hlx-button
      >
      <hlx-modal
        :modalActive="modal_active"
        @close="this.modal_active = false"
        :height="'400px'"
        :width="'600px'"
        :modal="true"
        :closeicon="true"
        :footerline = false
      >
        <template v-slot:header>
          <div>Header</div>
        </template>
        <template v-slot:content>
          <div class="modal-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio voluptas aliquid enim esse id adipisci assumenda aut et
              aperiam tempore, possimus, sint debitis! Illo in hic officia
              accusamus mollitia architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              dolores ipsam natus. Sequi dolorum blanditiis error deserunt
              aperiam quae, odit in praesentium autem? Atque voluptatem quis eos
              nihil explicabo accusamus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, dicta distinctio vitae necessitatibus ut dolore
              veritatis quaerat id ipsum repellendus nobis eligendi possimus cum
              veniam porro minima modi maiores architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, dicta distinctio vitae necessitatibus ut dolore
              veritatis quaerat id ipsum repellendus nobis eligendi possimus cum
              veniam porro minima modi maiores architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, dicta distinctio vitae necessitatibus ut dolore
              veritatis quaerat id ipsum repellendus nobis eligendi possimus cum
              veniam porro minima modi maiores architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, dicta distinctio vitae necessitatibus ut dolore
              veritatis quaerat id ipsum repellendus nobis eligendi possimus cum
              veniam porro minima modi maiores architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, dicta distinctio vitae necessitatibus ut dolore
              veritatis quaerat id ipsum repellendus nobis eligendi possimus cum
              veniam porro minima modi maiores architecto.
            </p>
            
          </div>
        </template>
        <template v-slot:footer>
          <hlx-button class="primary sm" @click="this.modal_active = false"
            >Save</hlx-button
          >
        </template>
      </hlx-modal>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-model-icon" @click="showCode('basic-model')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-model" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="basic_model"
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

  <h2 class="component-side-heading">Modal without header and footer</h2>
  <p class="component-description">
    You can also display or hide the headers and footers by setting
    <b>:contentOnly</b> attribute to true or false
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-button class="primary sm" @click="this.modal_active1 = true"
        >Click</hlx-button
      >
      <hlx-modal
        :modalActive="modal_active1"
        @close="this.modal_active1 = false"
        :height="'300px'"
        :width="'800px'"
        :contentOnly="true"
      >
        <template v-slot:content>
          <div class="modal-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio voluptas aliquid enim esse id adipisci assumenda aut et
              aperiam tempore, possimus, sint debitis! Illo in hic officia
              accusamus mollitia architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              dolores ipsam natus. Sequi dolorum blanditiis error deserunt
              aperiam quae, odit in praesentium autem? Atque voluptatem quis eos
              nihil explicabo accusamus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, dicta distinctio vitae necessitatibus ut dolore
              veritatis quaerat id ipsum repellendus nobis eligendi possimus cum
              veniam porro minima modi maiores architecto.
            </p>
          </div>
        </template>
      </hlx-modal>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="custom-model-icon"
        @click="showCode('custom-model')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="custom-model" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="custom_model"
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

  <h2 class="component-side-heading">Modal with header and content</h2>
  <p class="component-description">
    You can also display or hide the footers by setting
    <b>:headercontent</b> attribute to true or false
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-button class="primary sm" @click="this.modal_active2 = true">
        Click</hlx-button
      >
      <hlx-modal
        :modalActive="modal_active2"
        @close="this.modal_active2 = false"
        :height="'400px'"
        :width="'600px'"
        :headercontent="true"
      >
        <template v-slot:header>
          <div>Header</div>
        </template>
        <template v-slot:content>
          <div class="modal-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio voluptas aliquid enim esse id adipisci assumenda aut et
              aperiam tempore, possimus, sint debitis! Illo in hic officia
              accusamus mollitia architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              dolores ipsam natus. Sequi dolorum blanditiis error deserunt
              aperiam quae, odit in praesentium autem? Atque voluptatem quis eos
              nihil explicabo accusamus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, dicta distinctio vitae necessitatibus ut dolore
              veritatis quaerat id ipsum repellendus nobis eligendi possimus cum
              veniam porro minima modi maiores architecto.
            </p>
            <!-- <div class="items">Hi item 1</div>
            <div class="items">Hi item 2</div>
            <div class="items">Hi item 2</div>
            <div class="items">Hi item 4</div> -->
          </div>
        </template>
        <template v-slot:footer>
          <!-- <hlx-button
            class="bg-disabled cancel"
            @click="this.modal_active = false"
            >Cancel</hlx-button
          > -->
          <hlx-button class="primary sm" @click="this.modal_active = false"
            >Save</hlx-button
          >
        </template>
      </hlx-modal>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="without-footer-icon"
        @click="showCode('without-footer')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="without-footer" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="without_footer"
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

  <h2 class="component-side-heading">Modal with content and footer</h2>
  <p class="component-description">
    You can also display or hide the headers by setting
    <b>:contentfooter</b> attribute to true or false
  </p>
  <div class="component-example">
    <div class="example-body">
      <hlx-button class="primary sm" @click="this.modal_active3 = true"
        >Click</hlx-button
      >
      <hlx-modal
        :modalActive="modal_active3"
        @close="this.modal_active3 = false"
        :contentfooter="true"
      >
        <template v-slot:header>
          <div>Header</div>
        </template>
        <template v-slot:content>
          <div class="modal-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio voluptas aliquid enim esse id adipisci assumenda aut et
              aperiam tempore, possimus, sint debitis! Illo in hic officia
              accusamus mollitia architecto.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              dolores ipsam natus. Sequi dolorum blanditiis error deserunt
              aperiam quae, odit in praesentium autem? Atque voluptatem quis eos
              nihil explicabo accusamus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, dicta distinctio vitae necessitatibus ut dolore
              veritatis quaerat id ipsum repellendus nobis eligendi possimus cum
              veniam porro minima modi maiores architecto.
            </p>
          </div>
        </template>
        <template v-slot:footer>
          <!-- <hlx-button
            class="bg-disabled cancel"
            @click="this.modal_active3 = false"
            >Cancel</hlx-button
          > -->
          <hlx-button class="primary sm" @click="this.modal_active3 = false"
            >Save</hlx-button
          >
        </template>
      </hlx-modal>
    </div>
    <div class="example-footer">
      <span
        class="icon"
        id="without-header-icon"
        @click="showCode('without-header')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="without-header" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
          :id="'editor'"
          :display_language="false"
          :value="without_header"
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
  <h2 class="component-side-heading">Modal attributes</h2>
  <!-- <hlx-table-component :tableData="this.data.table_data" :theader="this.data.columns" :border="true"/> -->
  <!-- <hlxTable
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
  </hlxTable>
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Modal events</h2>
  <hlx-table
    :data="this.event_data"
    :border="true"
    theme="secondary"
    :rowHover="true"
    :bold_header="true"
  >
    <hlx-column :prop="'Name'" :label="'Name'" :type="'string'" />
    <hlx-column
      :prop="'Description'"
      :label="'Description'"
      :type="'string'"
      :width="400"
    />
    <hlx-column :prop="'Parameters'" :label="'Parameters'" :type="'string'" />
  </hlx-table> -->
    <hlx-table
    :columnCount="this.theads"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head v-for="(i, index) in this.alertAttributes" :key="index" :width="i.width">{{
        i.label
      }}</hlx-table-head>
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.alertAttributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>

   <h2 class="component-side-heading">Modal events</h2>

       <hlx-table
    :columnCount="this.theads"
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head v-for="(i, index) in this.eventdata" :key="index" :width="i.width">{{
        i.label
      }}</hlx-table-head>
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.event_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.eventdata"
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
import divider from "../components/DividerComponent.vue";
import hlxModal from "../components/ModalwindowComponent.vue";
import hlxButton from "../components/ButtonComponent.vue";
import CodeEditor from "simple-code-editor";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
// import hlxTable from "../components/NewTable.vue";
// import hlxColumn from "../components/NewTableColumn.vue";
export default {
  name: "App",
  data() {
    return {
      editor_theme: "light",
      modal_active: false,
      modal_active1: false,
      modal_active2: false,
      modal_active3: false,
            alertAttributes: [
        {
          prop: "name",
          label: "Attributes",
          width: 80,
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
          prop: "type",
          label: "Type",
          width: 150,
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
          width: 150,
          type: "string",
          format: "",
        },
        {
          prop: "mandatory",
          label: "Mandatory",
          width: 100,
          type: "string",
          format: "",
        },
      ],
      event_data: [
        {
          Name: "close",
          Description:
            "Triggers when the close button is clicked or when clicked outside the modal window",
          Parameters: "-",
        },
      ],
      eventdata: [
        {
          prop: "Name",
          label: "Name",
          width: 150,
          type: "string",
          format: "",
        },
         {
          prop: "Description",
          label: "Description",
          width: 750,
          type: "string",
          format: "",
        },
         {
          prop: "Parameters",
          label: "Parameters",
          width: 150,
          type: "string",
          format: "",
        }],
      table_data: [
        {
          name: "modal",
          description:
            "boolean value describes whether to show header,content and footer",
          type: "Boolean",
          accepted_values: "true/false",
          default: "-",
          mandatory: "false",
        },
        {
          name: "contentOnly",
          description: "boolean value describes whether to show only content",
          type: "Boolean",
          accepted_values: "true/false",
          default: "-",
          mandatory: "false",
        },
        {
          name: "headerContent",
          description:
            "boolean value describes whether to show header and content",
          type: "Boolean",
          accepted_values: "true/false",
          default: "-",
          mandatory: "false",
        },
        {
          name: "footerContent",
          description:
            "boolean value describes whether to show footer and content",
          type: "Boolean",
          accepted_values: "true/false",
          default: "-",
          mandatory: "false",
        },
        {
          name: "modalActive",
          description:
            "Define a boolean variable in data section to open and close the modal window",
          type: "Boolean",
          accepted_values: "true/false",
          default: "-",
          mandatory: "false",
        },
        {
          name: "width",
          description: "displays the width of the model",
          type: "Integer",
          accepted_values: "160px",
          default: "-",
          mandatory: "false",
        },
        {
          name: "height",
          description: "displays the height of the model",
          type: "Integer",
          accepted_values: "160px",
          default: "-",
          mandatory: "false",
        },
      ],

      without_header: `
      <template>
              <hlx-modal
        :modalActive="modal_active3"
        @close="this.modal_active3 = false"
        :contentfooter="true"
      >
        <template v-slot:header>
          <div>Header</div>
        </template>
        <template v-slot:content>
          <div class="modal-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptas aliquid enim esse id adipisci assumenda aut et aperiam tempore, possimus, sint debitis! Illo in hic officia accusamus mollitia architecto.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores ipsam natus. Sequi dolorum blanditiis error deserunt aperiam quae, odit in praesentium autem? Atque voluptatem quis eos nihil explicabo accusamus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta distinctio vitae necessitatibus ut dolore veritatis quaerat id ipsum repellendus nobis eligendi possimus cum veniam porro minima modi maiores architecto.</p>
          </div>
        </template>
        <template v-slot:footer>
          <hlx-button class="primary sm" @click="this.modal_active3 = false"
            >Save</hlx-button
          >
        </template>
      </hlx-modal>
       </template>

        <script>
        export default {
          name: "App",
          data() {
            return {
              modal_active3: false,
              }
            }
        `,
      without_footer: `
      <template>
              <hlx-modal
        :modalActive="modal_active2"
        @close="this.modal_active2 = false"
        :height="'400px'"
        :width="'600px'"
        :headercontent="true"
      >
        <template v-slot:header>
          <div>Header</div>
        </template>
        <template v-slot:content>
          <div class="modal-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptas aliquid enim esse id adipisci assumenda aut et aperiam tempore, possimus, sint debitis! Illo in hic officia accusamus mollitia architecto.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores ipsam natus. Sequi dolorum blanditiis error deserunt aperiam quae, odit in praesentium autem? Atque voluptatem quis eos nihil explicabo accusamus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta distinctio vitae necessitatibus ut dolore veritatis quaerat id ipsum repellendus nobis eligendi possimus cum veniam porro minima modi maiores architecto.</p>
            <!-- <div class="items">Hi item 1</div>
            <div class="items">Hi item 2</div>
            <div class="items">Hi item 2</div>
            <div class="items">Hi item 4</div> -->
          </div>
        </template>
        <template v-slot:footer>
          <hlx-button class="primary sm" @click="this.modal_active = false"
            >Save</hlx-button
          >
        </template>
      </hlx-modal>
      </template>
             <script>
          export default {
            name: "App",
            data() {
              return {
                modal_active2: false,
                }
              }
        `,
      basic_model: `<template>     
       <hlx-modal
        :modalActive="modal_active"
        @close="this.modal_active = false"
        :height="'400px'"
        :width="'600px'"
        :modal="true"
      >
        <template v-slot:header>
          <div>Header</div>
        </template>
        <template v-slot:content>
          <div class="modal-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptas aliquid enim esse id adipisci assumenda aut et aperiam tempore, possimus, sint debitis! Illo in hic officia accusamus mollitia architecto.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores ipsam natus. Sequi dolorum blanditiis error deserunt aperiam quae, odit in praesentium autem? Atque voluptatem quis eos nihil explicabo accusamus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta distinctio vitae necessitatibus ut dolore veritatis quaerat id ipsum repellendus nobis eligendi possimus cum veniam porro minima modi maiores architecto.</p>
          </div>
        </template>
        <template v-slot:footer>
          <hlx-button class="primary sm" @click="this.modal_active = false"
            >Save</hlx-button
          >
        </template>
      </hlx-modal>
      </template>
      
      <script>
      export default {
        name: "App",
        data() {
          return {
            modal_active: false,
            }
          }`,
      custom_model: `
      <hlx-modal
        :modalActive="modal_active1"
        @close="this.modal_active1 = false"
        :height="'300px'"
        :width="'800px'"
        :contentOnly="true"
      >
        <template v-slot:content>
          <div class="modal-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio voluptas aliquid enim esse id adipisci assumenda aut et aperiam tempore, possimus, sint debitis! Illo in hic officia accusamus mollitia architecto.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolores ipsam natus. Sequi dolorum blanditiis error deserunt aperiam quae, odit in praesentium autem? Atque voluptatem quis eos nihil explicabo accusamus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta distinctio vitae necessitatibus ut dolore veritatis quaerat id ipsum repellendus nobis eligendi possimus cum veniam porro minima modi maiores architecto.</p>
          </div>
        </template>
      </hlx-modal>
       <script>
export default {
  name: "App",
  data() {
    return {
      modal_active1: false,
      }
    }}`,
    };
  },
  components: {
    hlxModal,
    divider,
    hlxButton,
    CodeEditor,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
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
    enableModalWindow() {
      this.enable_modal_window = true;
    },
    close() {
      this.modal_active = false;
    },
    cancelModal() {
      this.enable_modal_window = false;
    },
    confirmModal() {
      this.modal_active = false;
    },
    disableModalWindow() {
      this.enable_modal_window = false;
    },
  },
};
</script>

<!-- <style lang="scss" scoped>
@import '../assets/styles/variables.scss';
.modal-content{
display: flex;
flex-direction: column;

  .head{
    font-family: QuickSand;
    font-size: 24px;
    margin-top: auto;
  }
  .items{
    margin-bottom: auto;
  }
}
.modal-primary-button{
                cursor: pointer;
                box-sizing: border-box;
                height: 30px;
                min-width: 55px;
                padding: 0px 20px;
                background: #f9ac19;
                color: white;
                border: none;
                border-radius: 6px;
                margin-left: 15px;
                font-size: 14px;
                 display: flex;
                  align-items: center;

                }

                .modal-secondary-button{
                    cursor: pointer;
                    box-sizing: border-box;
                    height: 30px;
                    min-width: 55px;
                    padding: 0px 20px;
                    background: #fcfcfc;
                    border: 1px solid #f97a19;
                    color: #f9ac19;
                    border-radius: 6px;
                font-size: 14px;
                  display: flex;
                  align-items: center;

                }
</style> -->
<style lang="scss" scoped>
.cancel {
  margin-right: 10px;
  height: 32px;
  width: 14%;
}
// .save {
//   height: 32px;
//   width: 14%;
// }
</style>
