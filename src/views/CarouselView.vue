<template>
  <h1 class="component-heading">Carousel</h1>
  <p class="component-description">
    A slideshow component for cycling through elements—images or slides of text—like a carousel.
  </p>
  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>
  <p class="component-description">
    Set image and description to display in carousel
  </p>

  <div class="component-example">
    <div class="example-body">
  <carousel :images="images" :description="locations" />
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-carousel-icon" @click="showCode('basic-carousel')"
        ><i class="icon-code-regular"></i
      ></span>
    </div>
  </div>
  <div class="source-code" id="basic-carousel" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
           :id="'editor'"  :display_language="false"
          :value="carousel_badge"
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
  <el-table :data="carouselAttributes" style="width: 100%">
    <el-table-column prop="attribute" label="Attribute" width="180" />
    <el-table-column prop="description" label="Description" width="180" />
    <el-table-column prop="type" label="Type" />
    <el-table-column prop="accepted_values" label="Accepted values" />
    <el-table-column prop="default" label="Default" />
  </el-table>
</template>
<script>
import carousel from "../components/CarouselComponent.vue";
import CodeEditor from "simple-code-editor";

export default {
  name: "CarouselView",
  components: {
    carousel,
        CodeEditor,

  },
  data() {
    return {
              editor_theme: "light",
      carousel_badge:`  
      <carousel :images="images" :description="locations" />
 data(){
   return {
    images: [
        "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/holland-tour-highlights-1501738379-1000X561.jpg",
        "https://gsg-61ea.kxcdn.com/media/contents/sydney%20harbour%20aerial%20jamie-davies-Hao52Fu9-F8-unsplash%20(2).jpg",
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/3f/6d/47.jpg",
      ],
      locations: [
        "Amsterdam, The Netherlands",
        "Sydney, Australia",
        "San Francisco, California",
      ],
      }
      }`,
carouselAttributes:[{          
          attribute: "images",
          description: "Pass the list of images which to be displayed in carousel",
          type: "String",
          accepted_values: "Any images",
          default: "-",},
          
          {
          attribute: "description",
          description: "If description to be added in the carousel we can pass it into it",
          type: "String",
          accepted_values: "",
          default: "-",
          }],
      images: [
        "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/holland-tour-highlights-1501738379-1000X561.jpg",
        "https://gsg-61ea.kxcdn.com/media/contents/sydney%20harbour%20aerial%20jamie-davies-Hao52Fu9-F8-unsplash%20(2).jpg",
        "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/3f/6d/47.jpg",
      ],
      locations: [
        "Amsterdam, The Netherlands",
        "Sydney, Australia",
        "San Francisco, California",
      ],
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
};
</script>