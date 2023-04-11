<template>
 <h1 class="component-heading">Data view</h1>
  <p class="component-description">
A DataView is a representation of a full table or a small section of rows.
It is used to sort and find data within Datatable.  </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">Define your data in array of objects</p>
  <div class="component-example">
    <div class="example-body">
          <hlx-dataview :card_data = "this.card_data"/>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-data-view-icon" @click="showCode('basic-data-view')"><i class="icon-code-regular"></i></span>
    </div>
  </div>

  <div class="source-code" id="basic-data-view" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
           :id="'editor'"  :display_language="false"
          :value="data_view_source"
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
        <h2 class="component-side-heading">Attributes</h2>
        <hlx-table
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
    :columnCount="6"
  >
    <template #thead>
      <hlx-table-head
        v-for="(i, index) in this.attributes"
        :key="index"
        :width="i.width"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.attributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table>
        <!-- <hlxTable :data="this.data_viewAttributes"
    :border="true"
    theme="secondary"
    :rowHover="true"
    :ellipses="5"
    :bold_header="true">
    <hlx-column :prop="'name'" :label="'Name'" :type="'string'" />
    <hlx-column :prop="'description'" :label="'Description'" :type="'string'" />
    <hlx-column :prop="'default'" :label="'Default'" :type="'string'" />
    <hlx-column :prop="'type'" :label="'Type'" :type="'string'" :width="200"/>
    <hlx-column :prop="'accepted_values'" :label="'Accepted values'" :type="'string'"/>
    <hlx-column :prop="'mandatory'" :label="'Mandatory'" :type="'string'" />
</hlxTable> -->

</template>

<script>
import hlxDataview from "../components/DataviewComponent.vue";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
import divider from "../components/DividerComponent.vue";
import CodeEditor from "simple-code-editor";
export default {
components:{
    hlxDataview,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    divider,
    CodeEditor,
},
data(){
  return{
    attributes: [
        {
          prop: "name",
          label: "Name",
          width: "50",
          type: "string",
          format: "",
        },
        {
          prop: "description",
          label: "Description",
          width: "50",
          type: "string",
          format: "",
        },
        {
          prop: "type",
          label: "Type",
          width: "50",
          type: "string",
          format: "",
        },
        {
          prop: "accepted_values",
          label: "Accepted values",
          width: "50",
          type: "string",
          format: "",
        },
        {
          prop: "default",
          label: "Default",
          width: "50",
          type: "string",
          format: "",
        },
        {
          prop: "mandatory",
          label: "Mandatory",
          width: "50",
          type: "string",
          format: "",
        },
      ],
     editor_theme: "light",
          card_data: 
          [
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex boardd",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "low stock"
          },
          card_footer: {
            price: {whole:"655678",
fraction:"32"},
            currency: "USD",
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "abc",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
      ],
      data_view_source: `
<template>
          <hlx-dataview :card_data = "this.card_data"/>
</template>

<script>
export default{
    data(){
        return{
                  card_data: [
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex boardd",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "low stock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "abc",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: "60",
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: "63",
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
        {
          card_title: "Accessories",
          card_body: {
            product_img_url:
              "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
            product_title: "Webex board",
            product_description: "Webex board",
            product_rating: "4",
            product_stock: "instock"
          },
          card_footer: {
            price: {whole:"65",
fraction:"32"},
            currency:"USD"
          },
        },
      ],
    }
}
}
</\script>`,

table_data:[{
        name:'card_data',
        description:'Include your data',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory:true
      },]
   

  }
},
methods:{
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

<style>

</style>