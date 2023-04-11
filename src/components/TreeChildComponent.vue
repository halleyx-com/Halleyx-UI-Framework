<template>
  <li
    @mousedown="mouseDown"
    @mouseup="mouseUp"
    @mousemove="mouseMove"
    @dblclick="mouseDown"
  >
    <hlx-card
      :seperator="false"
      :card_title="false"
      :card_footer="false"
      :hover="true"
    >
      <template #card-body>
        <div style="padding: 0">
          <!-- {{node.label}} -->
          <!-- <div class="hlx-tree box">/ -->
          <div class="header grid">{{ node.label }}</div>
          <div
            class="grid"
            v-for="key in Object.keys(node.data ? node.data : {}) || []"
            :key="key"
          >
            <span class="key">{{ key }}:</span>
            <span class="value">{{ node.data[`${key}`] }}</span>
          </div>
          <i
            :ref="'icon-' + this.unique"
            @click="nodeToggler"
            :class="
              node.child !== undefined && node.child.length > 0
                ? this.collapse
                : ''
            "
          ></i>
        </div>
        <!-- </div> -->
      </template>
    </hlx-card>
    <ul v-if="node && node.child && node.child.length > 0" :ref="'ul'">
      <hlx-tree-child
        v-for="child in node.child || node.child[0]"
        :node="child"
        :key="child"
      >
        <!-- @mouseDown="mouseDown"
   @mouseUp="mouseUp"
   @mouseMove="mouseMove"   -->
        <slot></slot>
      </hlx-tree-child>
    </ul>
  </li>
</template>

<script>
import hlxCard from "./CardsComponent.vue";
export default {
  name: "hlx-tree-child",
  emits: ["mouseeDown", "mouseeUp", "mouseeMove"],
  components: {
    hlxCard,
  },
  props: {
    node: Object,
    isDraggable: {
      type: Boolean,
      default() {
        return false;
      },
    },
    parentInst: {
      type: String,
      default: undefined,
    },
  },
  mounted() {
    this.unique = Math.random() * 1000;
  },
  data() {
    return {
      collapse: "icon-minus-circle-filled",
      unique: "",
    };
  },
  methods: {
    nodeToggler(event) {
      // const ul = event.target.parentElement.nextElementSibling
      const ul = this.$refs["ul"];
      event.target.classList.contains("icon-minus-circle-filled")
        ? event.target.setAttribute("class", "icon-plus-circle-filled")
        : event.target.setAttribute("class", "icon-minus-circle-filled");
      ul.classList.toggle("hide");
      if (event.target.parentElement.classList.contains("root")) {
        const icon = document.querySelector(".tree-container > i");
        if (!event.target.classList.contains("icon-minus-circle-filled")) {
          icon.setAttribute("class", "icon-full-page");
        } else {
          icon.setAttribute("class", "icon-vEdge");
        }
        // const name = event.target.classList.contains('icon-minus-circle-filled') ? 'icon-full-page' : 'icon-vEdge'
      }
    },
    mouseDown($event) {
      this.$emit("mouseeDown", $event);
    },
    mouseUp($event) {
      this.$emit("mouseeUp", $event);
    },
    mouseMove($event) {
      this.$emit("mouseeMove", $event);
    },
  },
};
</script>
