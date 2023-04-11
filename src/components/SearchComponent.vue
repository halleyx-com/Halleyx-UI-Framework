<template>
<!-- <div class="outer-container"> -->
  <div class="search-container">
    <!-- Style 1 -->
    <form class="search-1" v-if="this.search_style=='style1' || this.style1">
    <!-- <div class="search-1" > -->
      <input
        type="search"
        id="input-1"
        class="input-1"
        name="input-1"
        autocomplete="off"
        placeholder="Search"
        v-model="searchkey1"
        @input="debounceSearch"
        :aria-required="false"
      />
      <label class="icon-1" for="input-1" aria-label="search"><i class="icon-search-regular"></i></label>
    </form>
    <!-- </div> -->

    <!-- Style 2 -->
    <!-- <div class="search-2"> -->
    <form class="search-2" v-if="this.search_style=='style2'">
      <input
        type="search"
        id="input-2"
        autocomplete="off"
        placeholder="Search"
        v-model="searchkey1"
        @input="debounceSearch"
        :aria-required="false"
      />
      <label class="icon-2" for="input-2" aria-label="search"><i class="icon-search-regular"></i></label>
    </form>
    <!-- </div> -->


    <!-- Style 3 -->
    <!-- <div class="search-3" > -->
    <div class="search-3" v-if="this.search_style=='style3'">
      <input
        type="text"
        id="input-3"
        autocomplete="off"
        placeholder="Search"
        v-model="searchkey1"
        @input="debounceSearch"
      />
      <!-- <div class="mycircle"></div>
      <div class="icon-3"><i class="icon-search-regular"></i></div> -->
      <!-- <img src="../assets/img/search3.svg" alt=""> -->
      <img class="search-3img">
    </div>
    <!-- </div> -->
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name:'hlx-search',
  data() {
    return {
      searchkey1: "",
      debounce: null,
      style1: false
    };
  },
  mounted(){
    if(this.search_style == undefined){
      this.style1 = true
    }else{
      this.style1 = false
    }
  },
  props:['search_style'],
  methods: {
    debounceSearch() {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
          this.$emit("searchkey", this.searchkey1);
      }, 500);
    },
  },
};
</script>

