<template>
  <h1 class="component-heading">Typography</h1>
  <p class="component-description">
    Look at the font style, size, and appearance of your typographical components.
  </p>
  <h1 class="component-side-heading">Fonts</h1>
  <section>
    <div class="header-font">
      <div v-for="size in usedFonts" :key="size">
        <p :style="{ 'font-family': size }">{{ size }}</p>
      </div>
    </div>
    <h1 class="component-side-heading">Standard font-sizes for content</h1>
    <div class="content-font">
      <div v-for="size in content_font_size" :key="size">{{ size }}</div>
    </div>
    <h1 class="component-side-heading">Standard line height</h1>
    <div class="line-height-font">
      <div v-for="size in line_height_size" :key="size">{{ size }}</div>
    </div>
  <h1 class="component-side-heading">Standard font-sizes for header</h1>
    <div class="header-font">
      <div v-for="size in header_font_size" :key="size">{{ size }}</div>
    </div>
  </section>
  <!-- <section>
    <h1 class="component-side-heading">Standard font-sizes for content</h1>
    <div class="content-font">
      <div v-for="size in content_font_size" :key="size">{{ size }}</div>
    </div>
    <h1 class="component-side-heading">Standard line height</h1>
    <div class="line-height-font">
      <div v-for="size in line_height_size" :key="size">{{ size }}</div>
    </div>
  </section> -->
  <div
    class="font-container"
    v-for="font_type in Object.keys(fonts)"
    :key="font_type"
  >
    <divider :position="'horizontal'" :space="'20px'" />
    <h2 class="component-side-heading" :style="{}">
      {{ font_type.split("@")[0] }} <span>{{ font_type.split("@")[1] }}</span>
    </h2>
    <section class="font-card-area">
      <div class="font-card" v-for="font in fonts[font_type]" :key="font">
        <section class="font-space">
          <p
            :style="{
              'font-family': font.name,
              'font-size': font.size,
              'font-weight': font.font_weight,
              'line-height': font.line_height,
            }"
          >
            {{ font.title }}
          </p>
        </section>
        <section class="font-name">
          <p
            :style="{
              'font-family': font.name,
              'font-size': font.size,
              'font-weight': font.font_weight,
              'line-height': font.line_height,
            }"
          >
            {{ font.font_weight_des }}
          </p>
          <!-- <p :style="{'font-family':font.name,'font-size':font.size,'font-weight':font.font_weight,'line-height':font.line_height}" >{{ font.size }}</p> -->
        </section>
      </div>
    </section>
    <!-- <divider :position="'horizontal'" :space="'20px'" /> -->
  </div>
</template>

<script>
import divider from "../components/DividerComponent.vue";

export default {
  name: "Typography-view",
  components: { divider },
  data() {
    return {
      fonts: {
        "Display 2xl@Font: Quicksand | Font size:72px / 4.5rem | Line height:90px / 5.625rem ":
          [
            {
              title: "Display 2xl",
              name: "Quicksand",
              size: "4.5rem",
              font_weight: "normal",
              line_height: "90px",
              font_weight_des: "Regular",
              description: "Quicksand",
            },
            {
              title: "Display 2xl",
              name: "Quicksand",
              size: "4.5rem",
              font_weight: "500",
              line_height: "90px",
              font_weight_des: "Medium",

              description: "Quicksand",
            },
            {
              title: "Display 2xl",
              name: "Quicksand",
              size: "4.5rem",
              font_weight: "600",
              font_weight_des: "Semi bold",
              line_height: "90px",

              description: "Quicksand",
            },
            {
              title: "Display 2xl",
              name: "Quicksand",
              size: "4.5rem",
              font_weight: "700",
              line_height: "90px",
              font_weight_des: "Bold",

              description: "Quicksand",
            },
          ],
        "Display xl@Font: Quicksand | Font size:60px / 3.75rem | Line height:72px / 4.5rem ":
          [
            {
              title: "Display xl",
              name: "Quicksand",
              size: "60px",
              font_weight: "normal",
              line_height: "72px",
              font_weight_des: "Regular",
              description: "Quicksand",
            },
            {
              title: "Display xl",
              name: "Quicksand",
              size: "60px",
              font_weight: "500",
              line_height: "72px",
              font_weight_des: "Medium",

              description: "Quicksand",
            },
            {
              title: "Display xl",
              name: "Quicksand",
              size: "60px",
              font_weight: "600",
              font_weight_des: "Semi bold",
              line_height: "72px",

              description: "Quicksand",
            },
            {
              title: "Display xl",
              name: "Quicksand",
              size: "60px",
              font_weight: "700",
              line_height: "72px",
              font_weight_des: "Bold",

              description: "Quicksand",
            },
          ],
        "Display lg@Font: Quicksand | Font size:48px / 3rem | Line height:60px / 3.75rem ":
          [
            {
              title: "Display lg",
              name: "Quicksand",
              size: "48px",
              font_weight: "normal",
              line_height: "60px",
              font_weight_des: "Regular",
              description: "Quicksand",
            },
            {
              title: "Display lg",
              name: "Quicksand",
              size: "48px",
              font_weight: "500",
              line_height: "60px",
              font_weight_des: "Medium",

              description: "Quicksand",
            },
            {
              title: "Display lg",
              name: "Quicksand",
              size: "48px",
              font_weight: "600",
              font_weight_des: "Semi bold",
              line_height: "60px",

              description: "Quicksand",
            },
            {
              title: "Display lg",
              name: "Quicksand",
              size: "48px",
              font_weight: "700",
              line_height: "60px",
              font_weight_des: "Bold",

              description: "Quicksand",
            },
          ],
        "Display md@Font: Quicksand | Font size:36px / 2.25rem | Line height:44px / 2.75rem ":
          [
            {
              title: "Display md",
              name: "Quicksand",
              size: "36px",
              font_weight: "normal",
              line_height: "44px",
              font_weight_des: "Regular",
              description: "Quicksand",
            },
            {
              title: "Display md",
              name: "Quicksand",
              size: "36px",
              font_weight: "500",
              line_height: "44px",
              font_weight_des: "Medium",

              description: "Quicksand",
            },
            {
              title: "Display md",
              name: "Quicksand",
              size: "36px",
              font_weight: "600",
              font_weight_des: "Semi bold",
              line_height: "44px",

              description: "Quicksand",
            },
            {
              title: "Display md",
              name: "Quicksand",
              size: "36px",
              font_weight: "700",
              line_height: "44px",
              font_weight_des: "Bold",

              description: "Quicksand",
            },
          ],
        "Display sm@Font: Quicksand | Font size:30px / 1.875rem | Line height:38px / 2.375rem ":
          [
            {
              title: "Display xl",
              name: "Quicksand",
              size: "30px",
              font_weight: "normal",
              line_height: "38px",
              font_weight_des: "Regular",
              description: "Quicksand",
            },
            {
              title: "Display xl",
              name: "Quicksand",
              size: "30px",
              font_weight: "500",
              line_height: "38px",
              font_weight_des: "Medium",

              description: "Quicksand",
            },
            {
              title: "Display xl",
              name: "Quicksand",
              size: "30px",
              font_weight: "600",
              font_weight_des: "Semi bold",
              line_height: "38px",

              description: "Quicksand",
            },
            {
              title: "Display xl",
              name: "Quicksand",
              size: "30px",
              font_weight: "700",
              line_height: "38px",
              font_weight_des: "Bold",

              description: "Quicksand",
            },
          ],
        "Display xs@Font: Quicksand | Font size:24px / 1.5rem | Line height:32px / 2rem ":
          [
            {
              title: "Display xs",
              name: "Quicksand",
              size: "24px",
              font_weight: "normal",
              line_height: "32px",
              font_weight_des: "Regular",
              description: "Quicksand",
            },
            {
              title: "Display xs",
              name: "Quicksand",
              size: "24px",
              font_weight: "500",
              line_height: "32px",
              font_weight_des: "Medium",

              description: "Quicksand",
            },
            {
              title: "Display xs",
              name: "Quicksand",
              size: "24px",
              font_weight: "600",
              font_weight_des: "Semi bold",
              line_height: "32px",

              description: "Quicksand",
            },
            {
              title: "Display xs",
              name: "Quicksand",
              size: "24px",
              font_weight: "700",
              line_height: "32px",
              font_weight_des: "Bold",

              description: "Quicksand",
            },
          ],
        "Text xl@Font: Opensans | Font size:20px / 1.25rem | Line height:30px / 1.875rem ":
          [
            {
              title: "Text xl",
              name: "OpenSans",
              size: "24px",
              font_weight: "normal",
              line_height: "32px",
              font_weight_des: "Regular",
              description: "OpenSans",
            },
            {
              title: "Text xl",
              name: "OpenSans",
              size: "24px",
              font_weight: "500",
              line_height: "32px",
              font_weight_des: "Medium",

              description: "OpenSans",
            },
            {
              title: "Text xl",
              name: "OpenSans",
              size: "24px",
              font_weight: "600",
              font_weight_des: "Semi bold",
              line_height: "32px",

              description: "OpenSans",
            },
            {
              title: "Text xl",
              name: "OpenSans",
              size: "24px",
              font_weight: "700",
              line_height: "32px",
              font_weight_des: "Bold",

              description: "OpenSans",
            },
          ],
        "Text lg@Font: Opensans | Font size:18px / 1.125rem | Line height:28px / 1.75rem ":
          [
            {
              title: "Text lg",
              name: "OpenSans",
              size: "18px",
              font_weight: "normal",
              line_height: "28px",
              font_weight_des: "Regular",
              description: "OpenSans",
            },
            {
              title: "Text lg",
              name: "OpenSans",
              size: "18px",
              font_weight: "500",
              line_height: "28px",
              font_weight_des: "Medium",

              description: "OpenSans",
            },
            {
              title: "Text lg",
              name: "OpenSans",
              size: "18px",
              font_weight: "600",
              font_weight_des: "Semi bold",
              line_height: "28px",

              description: "OpenSans",
            },
            {
              title: "Text lg",
              name: "OpenSans",
              size: "18px",
              font_weight: "700",
              line_height: "28px",
              font_weight_des: "Bold",
              description: "OpenSans",
            },
          ],
        "Text md@Font: Opensans | Font size:16px / 1rem | Line height:24px / 1.5rem ":
          [
            {
              title: "Text md",
              name: "OpenSans",
              size: "16px",
              font_weight: "normal",
              line_height: "24px",
              font_weight_des: "Regular",
              description: "OpenSans",
            },
            {
              title: "Text md",
              name: "OpenSans",
              size: "16px",
              font_weight: "500",
              line_height: "24px",
              font_weight_des: "Medium",
              description: "OpenSans",
            },
            {
              title: "Text md",
              name: "OpenSans",
              size: "16px",
              font_weight: "600",
              font_weight_des: "Semi bold",
              line_height: "24px",
              description: "OpenSans",
            },
            {
              title: "Text md",
              name: "OpenSans",
              size: "16px",
              font_weight: "700",
              line_height: "24px",
              font_weight_des: "Bold",
              description: "OpenSans",
            },
          ],
        "Text sm@Font: Opensans | Font size:14px / 0.875rem | Line height:20px / 1.25rem ":
          [
            {
              title: "Text sm",
              name: "OpenSans",
              size: "14px",
              font_weight: "normal",
              line_height: "20px",
              font_weight_des: "Regular",
              description: "OpenSans",
            },
            {
              title: "Text sm",
              name: "OpenSans",
              size: "14px",
              font_weight: "500",
              line_height: "20px",
              font_weight_des: "Medium",
              description: "OpenSans",
            },
            {
              title: "Text sm",
              name: "OpenSans",
              size: "14px",
              font_weight: "600",
              font_weight_des: "Semi bold",
              line_height: "20px",
              description: "OpenSans",
            },
            {
              title: "Text sm",
              name: "OpenSans",
              size: "14px",
              font_weight: "700",
              line_height: "20px",
              font_weight_des: "Bold",
              description: "OpenSans",
            },
          ],
        "Text xs@Font: Opensans | Font size:12px / 0.75rem | Line height:18px / 1.125rem ":
          [
            {
              title: "Text xs",
              name: "OpenSans",
              size: "12px",
              font_weight: "normal",
              line_height: "18px",
              font_weight_des: "Regular",
              description: "OpenSans",
            },
            {
              title: "Text xs",
              name: "OpenSans",
              size: "12px",
              font_weight: "500",
              line_height: "18px",
              font_weight_des: "Medium",
              description: "OpenSans",
            },
            {
              title: "Text xs",
              name: "OpenSans",
              size: "12px",
              font_weight: "600",
              font_weight_des: "Semi bold",
              line_height: "18px",
              description: "OpenSans",
            },
            {
              title: "Text xs",
              name: "OpenSans",
              size: "12px",
              font_weight: "700",
              line_height: "18px",
              font_weight_des: "Bold",
              description: "OpenSans",
            },
          ],
        //
      },
      usedFonts: ["QuickSand", "OpenSans"],
      header_font_size: [
        "$font-h-xxl: 4.5rem",

        "$font-h-xl: 3.75rem",

        "$font-h-lg: 3rem",

        "$font-h-md: 2.25rem",

        "$font-h-sm: 1.875rem",
      ],
      content_font_size: [
        "$font-c-xl: 1.25rem",

        "$font-c-lg: 1.125rem",

        "$font-c-md: 1rem;",

        "$font-c-sm: 0.875rem",

        "$font-c-xs: 0.75rem",
      ],
      line_height_size: [
        "$line-height-xxl: 2rem",
        "$line-height-xl: 1.875rem",
        "$line-height-lg: 1.75rem",
        "$line-height-md: 1.5rem",
        "$line-height-sm: 1.25rem",
        "$line-height-xs: 1.125rem",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.font-container {
  display: flex;
  flex-wrap: wrap;
  max-height: auto;
  /* flex-direction: column; */
  gap: 6px 50px;
  margin-bottom: 3%;
  .component-side-heading {
    margin: -10px 0 30px 0;
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    span {
      margin-left: auto;
      color: #565553;
      font-size: 12px;
    }
  }
  .font-card-area {
    display: flex;
    gap: 50px 60px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
  .font-card {
    //min-width: 300px;
    //height: 183px;
    max-height: auto;
    //box-shadow: 0px 7px 12px -10px;
    display: flex;
    flex-direction: column;
    border-radius: 5%;
    //gap: 30px;
    align-items: center;
    justify-content: center;

    .font-space {
      width: 100%;
      //height: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      i {
        font-size: 1rem;
      }
    }
    .font-name {
      // height: 60%;
      width: 100%;
      font-size: 12px;
      /* margin-left: auto; */
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      p {
        margin: 0;
      }
    }
  }
}
.header-font,
.content-font,
.line-height-font {
  line-height: 1.5rem;
}
</style>
