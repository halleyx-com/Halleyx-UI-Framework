<template>
<h1 class="component-heading">Image gallery</h1>
  <p class="component-description">
The Image Gallery component allows you to quickly create an image gallery or slideshow.  </p>
    <divider :position="'horizontal'" :space="'20px'" />

  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">To enable autoplay mode, set <b>:autoplay</b> to true</p>
  <p class="component-description">Customise the panel position using the <b>:panel_position</b> attribute</p>
  <p class="component-description">Choose your type of input control for dotted pagination using the <b>:control_type</b> attribute</p>

  <div class="component-example">
    <div class="example-body">
          <hlx-image-gallery :image_data="this.image_data" :auto_play="false" :image_view_type="'dotted pagination'" :control_type="'hover'" :panel_position="'bottom'"/>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-image-gallery-icon" @click="showCode('basic-image-gallery')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-image-gallery" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
           :id="'editor'"  :display_language="false"
          :value="this.basic_source"
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
  <!-- <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Slider panel</h2> -->

  <!-- <div class="component-example">
    <div class="example-body">
          <hlx-image-gallery :image_data="this.image_data" :auto_play="true" :image_view_type="'panel'" :panel_position="'bottom'"/>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-image-gallery-icon" @click="showCode('basic-image-gallery1')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div> -->
  <!-- <div class="source-code" id="basic-image-gallery1" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
           :id="'editor'"  :display_language="false"
          :value="this.basic_source1"
          :read_only="true"
          :theme="editor_theme"
          :languages="[
            ['Javascript', 'Vue'],
            ['javascript', 'JS'],
            ['python', 'Python'],
          ]"
        />
      </div> -->
    <!-- </section>
  </div> -->
  <h2 class="component-side-heading">Slider panel</h2>
  <p class="component-description">Preview your images in a scrollable panel or pagination with <b>:image_view_type</b> attribute</p>


  <div class="component-example">
    <div class="example-body">
          <hlx-image-gallery :image_data="this.image_data" :auto_play="true" :image_view_type="'panel'" :panel_position="'bottom'"/>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-image-gallery2-icon" @click="showCode('basic-image-gallery2')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-image-gallery2" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
           :id="'editor'"  :display_language="false"
          :value="this.basic_source2"
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
        :width="i.width"
        :key="index"
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
  <!-- <hlxTable :data="this.imagegalleryAttributes"
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
import hlxImageGallery from "../components/ImagegalleryComponent.vue";
import divider from "../components/DividerComponent.vue";
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";

import CodeEditor from "simple-code-editor";
export default {
name: 'App',
components:{
    hlxImageGallery,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
    divider,
    CodeEditor,
},
data() {
    return {
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
            table_data:[{
        name:'image_data',
        description:'Include your array of images',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory:true
      },
      {
        name:'autoplay',
        description:'Display your image collection in a slideshow',
        type:'Boolean',
        accepted_values:'true/false',
        default:'-',
        mandatory:true
      },
      {
        name:'image_view_type',
        description:'Preview your images in a scrollable panel/add pagination',
        type:'String',
        accepted_values:'panel/dotted pagination',
        default:'-',
        mandatory:true
      },
      {
        name:'panel_position',
        description:'Choose the position to place your preview panel',
        type:'String',
        accepted_values:'bottom/left/right',
        default:'-',
        mandatory:true
      },
      {
        name:'control_type',
        description:'Choose your type of input control for dotted pagination',
        type:'String',
        accepted_values:'hover/click',
        default:'-',
        mandatory:true
      }],
      basic_source:`  
    <template>
    <hlx-image-gallery :image_data="this.image_data" :auto_play="false" :image_view_type="'dotted pagination'" :control_type="'hover'" :panel_position="'bottom'"/>
    </template>
    <script>
    export default{
      data(){
      return {
          image_data: [
            {
              url: "https://wallpaperaccess.com/full/36342.jpg",
              description:
                "Lorem ipsum dolor sit amet. In internos nobis et distinctio voluptatem qui delectus alias sed sapiente animi et voluptate natus nam omnis ullam aut ratione velit.",
              title: "Image 1",
              font_color: "dark",
            },
            {
              url: "https://wallpaperaccess.com/full/51363.jpg",
              description: "img2",
              title: "Img2",
              font_color: "dark",
            },
            {
              url: "https://www.wallpaperup.com/uploads/wallpapers/2015/05/09/682920/39b1eb6c89a2b1fdd813230cfe87a28d-700.jpg",
              description: "img3",
              title: "Img3",
              font_color: "dark",
            },
            {
              url: "https://media.istockphoto.com/photos/kauaitunnels-beach-in-hawaii-at-sunset-picture-id166182639?b=1&k=20&m=166182639&s=170667a&w=0&h=wg6WMvOqmU8Qof_MPK5WbwgwIPpoHMjvBdynLGWTnnI=",
              description: "img4",
              title: "Img4",
              font_color: "dark",
            },
            {
              url: "https://media.istockphoto.com/photos/napali-coast-aerial-picture-id943148840?b=1&k=20&m=943148840&s=170667a&w=0&h=EaO4HgflE-_knNRMKrQNXzN37IT0iiMPdyMqeVIahLE=",
              description: "img5",
              title: "Img5",
              font_color: "dark",
            },
          ],
          }
          }
        }
      </\script>`,
            basic_source1:`  
    <template>
          <hlx-image-gallery :image_data="this.image_data" :auto_play="false" :image_view_type="'panel'" :panel_position="'bottom'"/>
    </template>
    <script>
    export default{
      data(){
      return {
          image_data: [
            {
              url: "https://wallpaperaccess.com/full/36342.jpg",
              description:
                "Lorem ipsum dolor sit amet. In internos nobis et distinctio voluptatem qui delectus alias sed sapiente animi et voluptate natus nam omnis ullam aut ratione velit.",
              title: "Image 1",
              font_color: "dark",
            },
            {
              url: "https://wallpaperaccess.com/full/51363.jpg",
              description: "img2",
              title: "Img2",
              font_color: "dark",
            },
            {
              url: "https://www.wallpaperup.com/uploads/wallpapers/2015/05/09/682920/39b1eb6c89a2b1fdd813230cfe87a28d-700.jpg",
              description: "img3",
              title: "Img3",
              font_color: "dark",
            },
            {
              url: "https://media.istockphoto.com/photos/kauaitunnels-beach-in-hawaii-at-sunset-picture-id166182639?b=1&k=20&m=166182639&s=170667a&w=0&h=wg6WMvOqmU8Qof_MPK5WbwgwIPpoHMjvBdynLGWTnnI=",
              description: "img4",
              title: "Img4",
              font_color: "dark",
            },
            {
              url: "https://media.istockphoto.com/photos/napali-coast-aerial-picture-id943148840?b=1&k=20&m=943148840&s=170667a&w=0&h=EaO4HgflE-_knNRMKrQNXzN37IT0iiMPdyMqeVIahLE=",
              description: "img5",
              title: "Img5",
              font_color: "dark",
            },
          ],
          }
          }
        }
      </\script>`,
      basic_source2:`  
    <template>
          <hlx-image-gallery :image_data="this.image_data" :auto_play="true" :image_view_type="'panel'" :panel_position="'bottom'"/>
    </template>
    <script>
    export default{
      data(){
      return {
          image_data: [
            {
              url: "https://wallpaperaccess.com/full/36342.jpg",
              description:
                "Lorem ipsum dolor sit amet. In internos nobis et distinctio voluptatem qui delectus alias sed sapiente animi et voluptate natus nam omnis ullam aut ratione velit.",
              title: "Image 1",
              font_color: "dark",
            },
            {
              url: "https://wallpaperaccess.com/full/51363.jpg",
              description: "img2",
              title: "Img2",
              font_color: "dark",
            },
            {
              url: "https://www.wallpaperup.com/uploads/wallpapers/2015/05/09/682920/39b1eb6c89a2b1fdd813230cfe87a28d-700.jpg",
              description: "img3",
              title: "Img3",
              font_color: "dark",
            },
            {
              url: "https://media.istockphoto.com/photos/kauaitunnels-beach-in-hawaii-at-sunset-picture-id166182639?b=1&k=20&m=166182639&s=170667a&w=0&h=wg6WMvOqmU8Qof_MPK5WbwgwIPpoHMjvBdynLGWTnnI=",
              description: "img4",
              title: "Img4",
              font_color: "dark",
            },
            {
              url: "https://media.istockphoto.com/photos/napali-coast-aerial-picture-id943148840?b=1&k=20&m=943148840&s=170667a&w=0&h=EaO4HgflE-_knNRMKrQNXzN37IT0iiMPdyMqeVIahLE=",
              description: "img5",
              title: "Img5",
              font_color: "dark",
            },
          ],
          }
          }
        }
      </\script>`,
      image_data: [
        {
          url: "https://wallpaperaccess.com/full/36342.jpg",
          description:
            "Lorem ipsum dolor sit amet. In internos nobis et distinctio voluptatem qui delectus alias sed sapiente animi et voluptate natus nam omnis ullam aut ratione velit.",
          title: "Image 1",
          font_color: "dark",
        },
        {
          url: "https://wallpaperaccess.com/full/51363.jpg",
          description: "img2",
          title: "Img2",
          font_color: "dark",
        },
        {
          url: "https://www.wallpaperup.com/uploads/wallpapers/2015/05/09/682920/39b1eb6c89a2b1fdd813230cfe87a28d-700.jpg",
          description: "img3",
          title: "Img3",
          font_color: "dark",
        },
        {
          url: "https://media.istockphoto.com/photos/kauaitunnels-beach-in-hawaii-at-sunset-picture-id166182639?b=1&k=20&m=166182639&s=170667a&w=0&h=wg6WMvOqmU8Qof_MPK5WbwgwIPpoHMjvBdynLGWTnnI=",
          description: "img4",
          title: "Img4",
          font_color: "dark",
        },
        {
          url: "https://media.istockphoto.com/photos/napali-coast-aerial-picture-id943148840?b=1&k=20&m=943148840&s=170667a&w=0&h=EaO4HgflE-_knNRMKrQNXzN37IT0iiMPdyMqeVIahLE=",
          description: "img5",
          title: "Img5",
          font_color: "dark",
        },
      ],
      selected_img: "",
    };
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
  },
}
</script>

<style>

</style>