<template>
  <!-- Component title -->
  <h1 class="component-heading">Colors</h1>
  <p class="component-description">
    This palette can be used as a reference for the color scheme that reflects
    your brand or style.
  </p>
  <divider :position="'horizontal'" :space="'20px'" />

  <section class="color-codes-container">
    <div
      class="color-code-type"
      v-for="color_type in Object.keys(this.colors)"
      :key="color_type"
    >
      <h2 class="component-side-heading">{{ color_type }}</h2>
      <section
        class="color-panel"
        :class="color_type"
        v-if="color_type !== 'Gradient'"
      >
        <div
          v-for="color in Object.keys(colors[color_type])"
          :key="color"
          class="color-card"
        >
          <div
            class="color-space"
            :style="{ background: colors[color_type][color] }"
          ></div>
          <p class="color-code">
            {{ color }}
            <span @click="copyColorCode($event, colors[color_type][color])">
              <i class="icon-copy-regular"></i>
            </span>
          </p>
        </div>
      </section>
      <section
        class="color-panel"
        :class="colors"
        v-else-if="color_type == 'Gradient'"
      >
        <div
          v-for="color in Object.keys(colors[color_type])"
          :key="color"
          class="color-card"
        >
          <div
            class="color-space"
            :style="{
              background: `linear-gradient(${colors[color_type][color].angle},${colors[color_type][color].from.value},${colors[color_type][color].to.value})`,
            }"
          ></div>
          <div class="color-code">
            <p>
              {{ colors[color_type][color].from.name }}
              <span
                @click="
                  copyColorCode($event, colors[color_type][color].from.value)
                "
                ><i class="icon-copy-regular"></i
              ></span>
            </p>
            <p>
              {{
                colors[color_type][color].angle.substring(
                  colors[color_type][color].angle.length - 3,
                  0
                )
              }}
              &deg;
            </p>
            <p>
              {{ colors[color_type][color].to.name }}
              <span
                @click="
                  copyColorCode($event, colors[color_type][color].to.value)
                "
                ><i class="icon-copy-regular"></i
              ></span>
            </p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import CodeEditor from "simple-code-editor";
import divider from "../components/DividerComponent.vue";

export default {
  name: "Color-view",
  components: {
    CodeEditor,
    divider,
  },
  data() {
    return {
      editor_theme: "light",
      example_code: "`your code goes here`",
      colorCodes: {
        "Primary colors": ["#265E4B", "#54bd95", "#A8DEC9"],
        "Secondary colors": ["#161C28", "#222938"],
        "Neutral colors": [
          "#191A15",
          "#A6A6A6",
          "#D8D8D8",
          "#EBEBEB",
          "#F7F7F7",
          "#FBFBFB",
          "#FFFFFF",
        ],
        Gradient: [
          {
            from: "#265E4B",
            to: "#54bd95",
            angle: "45deg",
          },
          {
            from: "#54bd95",
            to: "#265E4B",
            angle: "45deg",
          },
        ],
      },
      colors: {
        "Primary colors": {
          "primary-success": "#02b55c",
          "primary-error": "#ff5050",
          "primary-info": "#2879b7",
          "primary-warning": "#f8a523",
          "primary-link": "#2879b7",
          "primary-color": "#54bd95",
          "primary-disabled": "#ece9f1",
          "primary-disabled-text": "#d0c9d6",
          "primary-text-color": "#fbfbfb",
          "primary-tree-text": "#222f2b",
          "border-color": "#d8d8d8",
          grey: "#ebebeb",
          "font-color": "#191a15",
        },
        "Secondary colors": {
          "secondary-success": "#DCF9EA",
          "secondary-error": "#FFE8E8",
          "secondary-info": "#D8EDFC",
          "secondary-warning": "#F9ECD7",
          "secondary-link": "#D8EDFC",
          "secondary-color": "#ffffff",
          "secondary-color-red": "#ff5050",
          "secondary-color-blue": "#2879b7",
          "border-color-secondary": "#ebebeb",
        },
        "Light colors": {
          "primary-bg-light": "#A8DEC9",
          "primary-color-light-opacity": "#e4fff5",
          "primary-color-light": "#A8DEC9",
          "secondary-color-green-light": "#dcfae9",
          "secondary-color-blue-light": "#d8edfc",
          "grey-light": "#f7f7f7",
        },
        Dark: {
          "secondary-color-dark": "#161c28",
          "grey-dark": "#a6a6a6",
          "primary-color-dark": "#265E4B",
          "secondary-color-dark-blue": "#222938",
        },
        Gradient: {
          "gradiant-left": {
            angle: "90deg",
            from: { value: "#54bd95", name: "primary-color" },
            to: { value: "#265E4B", name: "primary-color-dark" },
          },
          "gradiant-right": {
            angle: "270deg",
            from: { value: "#54bd95", name: "primary-color" },
            to: { value: "#265E4B", name: "primary-color-dark" },
          },
          "gradiant-up": {
            angle: "180deg",
            from: { value: "#54bd95", name: "primary-color" },
            to: { value: "#265E4B", name: "primary-color-dark" },
          },
          "gradiant-down": {
            angle: "360deg",
            from: { value: "#54bd95", name: "primary-color" },
            to: { value: "#265E4B", name: "primary-color-dark" },
          },
          //             linear-gradient("to left", , )`,

          // "gradiant-right": `linear-gradient("to right", "#54bd95", "#265E4B")`,

          // "gradiant-down": `linear-gradient("180deg", "#54bd95", "#265E4B")`,

          // "gradiant-up": `linear-gradient("360deg", "#54bd95", "#265E4B")`,
        },
      },
    };
  },
  methods: {
    copyColorCode($event, color) {
      var Text = $event.target.textContent;
      $event.target.classList.add("copied");

      /* Select the text inside text area. */
      // Text.select();

      /* Copy selected text into clipboard */
      navigator.clipboard.writeText(color);
      setTimeout(() => {
        $event.target.classList.remove("copied");
      }, 1000);
    },
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

<style lang="scss">
@import "../assets/styles/common/var.scss";

.color-code-type {
  margin: 45px 0;
  h3 {
    margin-bottom: 30px;
  }
}
.color-panel {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
  &.Gradient {
    .color-card {
      width: 500px;
      height: 150px;
      //box-shadow: -1px 16px 60px -36px;
      box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
        rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
        rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
      div.color-code {
        justify-content: space-between;
        padding: 5px;
        display: flex;
        cursor: pointer;
        font-size: 14px;
        p {
          display: flex;
        }
        i.icon-copy-regular {
          font-size: $icon-sm;

          margin-right: 5px;
        }
        span {
          position: relative;
          &:before {
            content: "";
            display: none;
            position: absolute;
            z-index: 9998;
            top: 35px;
            width: 0;
            left: 13%;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid rgba(0, 0, 0, 0.72);
          }
          &:after {
            content: "Copy to Clipboard";
            display: none;
            position: absolute;
            z-index: 9999;
            top: 40px;
            left: -46px;
            width: 114px;
            height: 36px;
            color: #fff;
            font-size: 10px;
            line-height: 36px;
            text-align: center;
            background: rgba(0, 0, 0, 0.72);
            border-radius: 3px;
          }
          &:hover {
            &:before,
            &:after {
              display: block;
            }
          }
        }
        span {
          &:active,
          &:focus {
            outline: none;

            &:after {
              content: "Copied!";
            }
          }
        }
      }
    }
  }
  .color-card {
    width: 160px;
    height: 160px;
    //box-shadow: -1px 16px 60px -36px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;

    .color-space {
      height: 75%;
      width: 100%;
      border-radius: 7px 7px 0 0;
      margin: 0;
      padding: 0;
    }
    .color-code:not(div) {
      height: 25%;
      width: 100%;
      margin-left: auto;
      background: white;
      margin-top: auto;
      display: flex;
      font-size: 14px;
      margin: 0px;
      text-align: center;
      border-radius: 0 0 15px 15px;
      align-items: center;
      justify-content: center;
      position: relative;
      cursor: pointer;
      i.icon-copy-regular {
        font-size: $icon-sm;
        margin-left: 5px;
        &:hover {
          visibility: visible;
        }
      }
      & > span {
        position: relative;

        line-height: 1;
        &:before {
          content: "";
          display: none;
          position: absolute;
          z-index: 9998;
          top: 35px;
          width: 0;
          right: 5px;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid rgba(0, 0, 0, 0.72);
        }
        &:after {
          content: "Copy to Clipboard";
          display: none;
          position: absolute;
          z-index: 9999;
          top: 40px;
          left: -44px;
          width: 114px;
          height: 36px;
          color: #fff;
          font-size: 10px;
          line-height: 36px;
          text-align: center;
          background: rgba(0, 0, 0, 0.72);
          border-radius: 3px;
        }
        &:hover {
          &:before,
          &:after {
            display: block;
          }
        }
        &:active,
        &.copied:focus {
          outline: none;

          &:after {
            content: "Copied!";
          }
        }
      }
    }
    .color-code:has(div) {
      height: 25%;
      width: 100%;
      margin-left: auto;
      background: white;
      margin-top: auto;
      display: flex;
      font-size: 14px;
      margin: 0px;
      text-align: center;
      border-radius: 0 0 15px 15px;
      align-items: center;
      justify-content: center;
      position: relative;
      cursor: pointer;
      i.icon-copy-regular {
        font-size: $icon-sm;

        margin-left: 5px;
        &:hover {
          visibility: visible;
        }
      }
      & > span {
        position: relative;

        line-height: 1;
        &:before {
          content: "";
          display: none;
          position: absolute;
          z-index: 9998;
          top: 35px;
          width: 0;
          right: 44px;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid rgba(0, 0, 0, 0.72);
        }
        &:after {
          content: "Copy to Clipboard";
          display: none;
          position: absolute;
          z-index: 9999;
          top: 40px;
          left: -46px;
          width: 114px;
          height: 36px;
          color: #fff;
          font-size: 10px;
          line-height: 36px;
          text-align: center;
          background: rgba(0, 0, 0, 0.72);
          border-radius: 3px;
        }
        &:hover {
          &:before,
          &:after {
            display: block;
          }
        }
        &:active,
        &.copied:focus {
          outline: none;

          &:after {
            content: "Copied!";
          }
        }
      }
    }
  }
}
</style>
