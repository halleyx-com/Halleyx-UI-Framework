<template>
  <section
    class="hlx-pagination-container"
    :id="'hlx-pagination-container-hlx-' + Math.floor(Math.random() * 1000)"
    :class="{ 'rows-per-page': rowsPerPage, 'go-to': goTo }"
  >
    <div class="hlx-rows-per-page-container" v-if="rowsPerPage == true">
      <slot name="custom-rows-per-page-title">
        <p class="rpp-title" v-if="this.options.attributes.rowsPerPageTitle">
          Rows per page
        </p>
      </slot>
      <hlx-select
        :options="this.computedRowsPerPage"
        :placeholder_value="''"
        v-model:value="this.rowsPerPageCount"
        @customChange="updateRowsPerPage"
      ></hlx-select>
      {{ this.showingResult }}
      <slot name="custom-rows-per-page-result">
        <p
          class="rpp-result"
          v-if="this.options.attributes['rowsPerPageResult']"
        >
          Showing {{ this.result.from }} - {{ this.result.to }} of
          {{ this.total }} results
        </p>
      </slot>
    </div>
    <div
      class="hlx-go-to-container"
      v-if="goTo == true && isPagination === true"
    >
      <div class="go-to-wrapper">
        <p>Go to</p>
        <div class="input-area">
          <hlx-input
            type="number"
            label_value="Number"
            :clearable="false"
            @atEnter="goToPage"
            :pre_val="goToPageNumber"
            v-model:value="goToPageNumber"
          />
        </div>
      </div>
    </div>
    <div class="hlx-pagination" v-show="isPagination === true">
      <span class="nav prev-btn" ref="prevBtn" @click="previousPage()"
        ><i class="icon-angle-left-regular"></i>
        <!-- <i class="icon-angle-left-regular"></i
      > -->
      </span>
      <div
        class="page-btn"
        :class="{ higlight: this.currentPage == 1 }"
        :page="1"
        @click="handleCurrentChange(1)"
        v-if="1 !== this.totalPages"
      >
        1
      </div>
      <div
        class="page-btn dec"
        :class="{ hide: this.hideLeftNav }"
        @click="previousPage()"
      >
        <i class="icon-angle-left-regular dec-icon"></i>
      </div>
      <div
        class="page-btn"
        v-for="i in pageNumbers"
        :key="i"
        :page="i"
        @click="handleCurrentChange(i)"
        :class="{
          higlight: this.currentPage == i,
          background: this.background == true,
        }"
      >
        {{ i }}
      </div>
      <div
        class="page-btn inc"
        :class="{ hide: this.hiderightNav }"
        @click="nextPage()"
      >
        <i class="icon-angle-right-regular dec-icon"></i>
      </div>
      <div
        class="page-btn"
        :page="this.totalPages"
        @click="handleCurrentChange(this.totalPages)"
        :class="{
          higlight: this.currentPage == this.totalPages,
          background: this.background,
        }"
      >
        {{ this.totalPages }}
      </div>
      <span
        class="nav next-btn"
        ref="nextBtn"
        @click="nextPage()"
        :class="{ disabled: currentPage == totalPages }"
        :style="{ 'pointer-events': 'none' }"
        ><i class="icon-angle-right-regular"> </i>
        <!-- <i class="icon-angle-right-regular dec-icon"></i
        > -->
      </span>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";
import hlxSelect from "./SelectComponent.vue";
import HlxInput from "./InputComponent.vue";

export default {
  name: "hlx-pagination",
  components: {
    hlxSelect,
    HlxInput,
  },
  emits: ["current-page", "updated:rows-per-page", "go-to"],
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pagerCount: {
      type: Number,
      default: 5,
    },
    rowsPerPageList: {
      type: Array,
      default: [5, 10, 20],
    },
    background: {
      type: Boolean,
      default: false,
    },
    rowsPerPage: {
      type: Boolean,
      default: false,
    },
    goTo: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: {
        attributes: {
          rowsPerPageTitle: true,
          rowsPerPageResult: true,
        },
      },
    },
  },
  data() {
    return {
      result: {
        from: 0,
        to: 0,
      },
      goToPageNumber: 1,
      rowsPerPageCount: 5,
      dropdown_data: [
        { name: 5, value: 5, checked: true, disabled: false, id: 32 },
        { name: 10, value: 5, checked: false, disabled: false, id: 33 },
        { name: 20, value: 5, checked: false, disabled: false, id: 34 },
      ],
      currentPage: ref(1),
      pageNumbers: ref([]),
      hideLeftNav: ref(true),
      hiderightNav: ref(false),
    };
  },
  mounted() {
    this.pageNumbers = [];
    this.rowsPerPageCount = this.rowsPerPageList[0] || 5;
    let curr_page = 1;
    if (this.totalPages == this.computedPager) {
      for (let i = 0; i < this.computedPager - 2; i++) {
        this.pageNumbers.push(++curr_page);
      }
    } else {
      for (let i = 0; i < this.computedPager; i++) {
        this.pageNumbers.push(++curr_page);
      }
    }
    const prevBtn = this.$refs.prevBtn;
    const nextBtn = this.$refs.nextBtn;
    if (prevBtn) {
      prevBtn.style.pointerEvents = "none";
      nextBtn.style.pointerEvents = "auto";
      prevBtn.classList.add("disabled");
    }
    this.result = {
      from: 1,
      to: this.rowsPerPageCount,
    };
    this.showingResult;
  },
  watch: {
    currentPage: {
      handler(curr_page) {
        this.customWatch(curr_page);
        this.$emit("current-page", this.currentPage);
      },
      immediate: true,
    },
    rowsPerPageList: {
      handler(list) {
        this.customWatch(this.currentPage);
        // this.$emit("current-rows-per-page", this.rowsPerPageCount);
      },
      immediate: true,
    },
  },
  computed: {
    showingResult() {
      let from =
        this.rowsPerPageCount * this.currentPage - this.rowsPerPageCount + 1;
      let to = this.rowsPerPageCount * this.currentPage;
      if (this.currentPage == this.totalPages) {
        to = this.total;
        // console.log('lasss');
      }
      // console.log("🚀 ~ file: PaginationComponent.vue:194 ~ showingResult ~ to:", to)

      // console.log("🚀 ~ file: PaginationComponent.vue:193 ~ showingResult ~ from:", from)
      this.result = {
        from,
        to,
      };
    },
    isPagination() {
      return this.totalPages > 1 ? true : false;
    },
    computedRowsPerPage() {
      return this.rowsPerPageList.map((item, i) => {
        return {
          name: item,
          value: item,
          checked: i == 0 ? true : false,
          disabled: false,
          id: 32 + i,
        };
      });
    },
    totalPages() {
      return Math.ceil(this.total / this.rowsPerPageCount);
    },
    computedPager() {
      // if(this.pagerCount == this.totalPages){
      //   return 1
      // }
      // console.log("come", this.pagerCount, this.totalPages, this.currentPage);
      if (this.totalPages < 5) {
        return this.totalPages;
      } else if (!this.pagerCount && this.totalPages < 5) {
        return this.totalPages;
      } else if (!this.pagerCount) {
        return 5;
      } else if (
        this.pagerCount < 5 &&
        Math.round(this.totalPages / 2) - 2 <= this.pagerCount
      ) {
        return this.totalPages;
      } else if (
        this.pagerCount < 5 &&
        Math.round(this.totalPages / 2) - 2 >= this.pagerCount
      ) {
        return 5;
      } else {
        return (this.pagerCount - 2) % 2 == 0
          ? this.pagerCount - 2 + 1
          : this.pagerCount - 2;
      }
    },
  },

  methods: {
    goToPage({ value }) {
      if (value >= this.totalPages) {
        this.currentPage = this.totalPages;
      } else if (value <= 1) {
        this.currentPage = 1;
      } else {
        this.currentPage = value;
      }
      this.goToPageNumber = this.currentPage;
      this.$emit("go-to", this.goToPageNumber);
    },
    customWatch(curr_page) {
      if (curr_page == 1) {
        const prevBtn = this.$refs.prevBtn;

        const nextBtn = this.$refs.nextBtn;
        // console.log("before makes work", prevBtn, nextBtn);
        if (prevBtn && nextBtn) {
          prevBtn.classList.add("disabled");
          // console.log("makes work");
          prevBtn.style.pointerEvents = "none";
          nextBtn.style.pointerEvents = "auto";
          nextBtn.classList.remove("disabled");
        }
      }
      if (curr_page <= 1) {
        const prevBtn = this.$refs.prevBtn;

        const nextBtn = this.$refs.nextBtn;

        if (prevBtn && nextBtn) {
          prevBtn.classList.add("disabled");
          // console.log("makes work");
          prevBtn.style.pointerEvents = "none";
          nextBtn.style.pointerEvents = "auto";
          nextBtn.classList.remove("disabled");
        }
      }
      if (curr_page > 1 && curr_page < this.totalPages) {
        const prevBtn = this.$refs.prevBtn;

        const nextBtn = this.$refs.nextBtn;

        if (prevBtn && nextBtn) {
          // console.log(nextBtn);

          prevBtn.style.pointerEvents = "auto";
          nextBtn.style.pointerEvents = "auto";
          prevBtn.classList.remove("disabled");
          nextBtn.classList.remove("disabled");
        }
      }
      if (curr_page >= this.totalPages) {
        const nextBtn = this.$refs.nextBtn;
        const prevBtn = this.$refs.prevBtn;

        if (nextBtn && prevBtn) {
          nextBtn.style.pointerEvents = "none";
          nextBtn.classList.add("disabled");
          prevBtn.classList.remove("disabled");
          prevBtn.style.pointerEvents = "auto";
        }
      }
      if (curr_page < Math.ceil(this.computedPager / 2)) {
        this.hideLeftNav = true;
        this.hiderightNav = false;
      }
      if (this.computedPager == this.totalPages) {
        this.hideLeftNav = true;
        this.hiderightNav = true;
        this.pageNumbers = [];
        // curr_page = this.totalPages - this.computedPager;
        for (let i = 2; i < this.totalPages; i++) {
          this.pageNumbers.push(i);
        }
      } else if (this.computedPager + 2 == this.totalPages) {
        this.pageNumbers = [];
        let curr_page = 1;
        // console.log("left");
        for (let i = 0; i < this.computedPager; i++) {
          this.pageNumbers.push(++curr_page);
        }
        this.hideLeftNav = true;
        this.hiderightNav = true;
        // console.log("hide");
      } else if (
        this.computedPager != this.totalPages &&
        curr_page < Math.ceil(this.computedPager / 2)
      ) {
        this.pageNumbers = [];
        let curr_page = 1;
        // console.log("left");
        for (let i = 0; i < this.computedPager; i++) {
          this.pageNumbers.push(++curr_page);
        }
        this.hideLeftNav = true;
        this.hiderightNav = false;
        // console.log("show right");
      } else if (
        this.computedPager != this.totalPages &&
        curr_page > Math.ceil(this.computedPager / 2) &&
        this.totalPages - curr_page >= this.computedPager - 2
      ) {
        this.pageNumbers = [];
        // console.log(
        //   "center",
        //   curr_page,
        //   this.totalPages,
        //   this.computedPager,
        //   this.totalPages - curr_page,
        //   this.computedPager - 2,
        //   this.totalPages - curr_page > this.computedPager - 2
        // );
        if (this.computedPager <= this.totalPages) {
          this.hideLeftNav = false;
          this.hiderightNav = false;
          // console.log("cp,,,");
        }
        curr_page = curr_page - Math.ceil(this.computedPager / 2);
        for (let i = 0; i < this.computedPager; i++) {
          this.pageNumbers.push(++curr_page);
        }
        // console.log("both false");
      } else if (
        (this.computedPager != this.totalPages &&
          curr_page == this.totalPages) ||
        Math.abs(this.totalPages - curr_page) < this.computedPager - 2
      ) {
        this.pageNumbers = [];
        this.hiderightNav = true;
        this.hideLeftNav = false;

        // console.log("hide right");
        curr_page = this.totalPages - this.computedPager;
        for (let i = 0; i < this.computedPager - 1; i++) {
          this.pageNumbers.push(++curr_page);
        }
      } else {
        //  this.pageNumbers = [];
        // this.hiderightNav = true;
        // this.hideLeftNav = false;
        // console.log("general");
        // curr_page = this.totalPages - this.computedPager;
        // for (let i = 0; i < this.computedPager - 1; i++) {
        //   this.pageNumbers.push(++curr_page);
        // }
      }
    },
    updateRowsPerPage() {
      // if (this.currentPage >= this.totalPages) {
      //   // this.currentPage = 1
      //   this.customWatch(1);
      // } else {
      if (this.currentPage >= this.totalPages) {
        this.customWatch(1);
        this.currentPage = this.totalPages;
        this.$emit("updated:rows-per-page", this.rowsPerPageCount);
        return;
      }
      this.$emit("updated:rows-per-page", this.rowsPerPageCount);
      return this.customWatch(this.currentPage);
      // }
      // if (this.currentPage > this.totalPages) {
      //   // this.currentPage = this.totalPages
      // }
    },
    defaultPageNumbers(type) {
      if (type == "prev") {
        this.pageNumbers = [];
        let curr_page = 1;
        for (let i = 0; i < this.computedPager; i++) {
          this.pageNumbers.push(++curr_page);
        }
      }
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    previousPage() {
      this.currentPage > 1 ? this.currentPage-- : "";
    },
    nextPage() {
      this.currentPage < this.totalPages ? this.currentPage++ : "";
    },
  },
};
</script>
