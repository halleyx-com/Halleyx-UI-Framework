<template>
  <div class="ui-kit-layout">
    <div class="left-panel">
      <section class="title">
        <router-link to="/"
          ><img
            class="logo"
            src="./assets/img/Halleyx-Logo-Line-Lite.png"
            alt="Halleyx"
            srcset=""
        /></router-link>
        <!-- <i class="icon-full-rated-star"></i> -->
      </section>
      <section class="search-container-wrapper">
      <hlx-search  @searchkey="handleSearchData" :search_style="'style1'"/>
      <div class="search-result" ref="search-result-container">
      <p v-for="data in searchData" :key="data" @click="searchedRouting(data)">{{data.label}}</p>
      </div>
      </section>
      <section class="body">
      <hlx-tree-select :treeData="side_nav_data" :editable="false" :headSelect="false" :expanded="true" @currentValue="handleCurrentData" :background="false" />
      </section>
    </div>
    <div class="right-panel">
      <div class="header">
        <!-- <section class="icon-search-area">
    <span class="search-bar">
      <hlx-search @searchkey="search" />
    </span>
  </section> -->

      </div>
      <div class="component-body" id="comp-body">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import hlxSearch from './components/SearchComponent.vue'
import hlxTreeSelect from './components/TreeSelectComponent.vue'
import routes from '../routes'
export default {
  name: 'App',
  components: { hlxSearch, hlxTreeSelect },
  data () {
    return {
      search: '',
      side_nav_data: [],
      searchData: [],
      allData: [],
      lastdata:{}
    }
  },
  watch:{
    $route (to, from){
        // console.log(to,from);
        let a = to.name
        this.allData.forEach((e)=>{
        if(e.name === a)
        {
           e.active= true
        }
        else{
          e.active = false
        }
      })
    }
} ,
  mounted () {
    this.side_nav_data = routes.routes
    this.side_nav_data.filter(routeData => {
      this.allData = this.allData.concat(routeData.child)
      // routeData.
    })

     let a = sessionStorage.getItem('lastname')
    //  console.log(a);
     this.allData.forEach((e)=>{
        if(e.name === a)
        {
           e.active= true
        }
        else{
          e.active = false
        }
      })
  },
  methods: {
    handleCurrentData (data) {
           sessionStorage.setItem("lastname", data);

      this.$router.push({ name: data })
    },
    handleSearchData (search_by) {
      if (search_by != '') {
        search_by = search_by.toString().toLowerCase()
        this.$refs['search-result-container'].style.display = 'block'
        this.searchData = this.allData.filter(data => data.name.toLowerCase().includes(search_by) || data.label.toLowerCase().includes(search_by))
      } else {
        this.$refs['search-result-container'].style.display = 'none'
      }
    },
    searchedRouting (data) {
      // console.log(data.name);
      this.allData.forEach((e)=>{
        if(e.name === data.name)
        {
           e.active= true
        }
        else{
          e.active = false
        }
      })
      // console.log(this.allData);
      sessionStorage.setItem("lastname", data.name);
      // this.lastdata = data
      this.$router.push({ name: data.name })
      this.$refs['search-result-container'].style.display = 'none'
    }
  }
}
</script>

<!-- @import "./assets/icon-style.css"; -->
<style lang="scss">
@import "./assets/styles/index.scss";

body {
  margin: 0;
}
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #191a15;
}

// ::-webkit-scrollbar {
//   width: 4px;
//   height: 4px;
// }
// ::-webkit-scrollbar-track {
//   background-color: transparent;
//   border-radius: 20px;
// }
// ::-webkit-scrollbar-thumb {
//   background: $grey-dark;
//   border-radius: 10px;
// }
// ::-webkit-scrollbar-thumb:hover {
//   background: $grey-dark;
// }

/*.right-panel>.component-body:has(div.dashboard-right-container){
  height: 90vh;
  padding: 0 25px;
}
.right-panel>.header +.component-body:has(div.dashboard-right-container){
  background: red;
}*/
.component-description code{
    margin: 0;
    border-radius: 4px;
    padding: .15rem .5rem;
    font-size: 14px;
    color: black;
    line-height: 1.4;
    background-color: #f5f7fa;
}
.left-panel {
  position: fixed;
  width: 251px;
  height: 100vh;
  z-index: 11;
  background: #001723;
  border-right: 1px solid #f0eeec;
.search-container-wrapper{
      padding: 25px 19px;
      color: $primary-text-color;
      position: relative;
      .search-result{
              min-height: auto;
    right: 25px;
    width: 80%;
    z-index: 1;
    overflow: auto;
    height: auto;
    background: white;
    max-height: 235px;
    position: absolute;
    color: #191a15;
    padding: 10px 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    display: none;
    p{
      margin: 0;
      padding: 10px 20px;
      color: $font-color;
      font-weight: 500;
      font-size: 14px;
      &:hover{
        color: #191a15;
        font-weight: bold;
        cursor: pointer;
        user-select: none;
        background: #A8DEC9;
      }
    }
      }
}
  .title {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -20px -19px 42px -8px #000000;
    .logo {
      width: 150px;
      margin-top: 5px;
      margin-right: 5px;
    }
  }

  .body {
    height: 75%;
    overflow-y: hidden;
    //margin: 10px 5px 10px 20px;
    &:hover {
      overflow-y: auto;
      overflow-x: hidden;
    }
    .group {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      .side-heading {
        font-family: Quicksand;
        font-size: 16px;
        color: #f0eeec;
        margin-bottom: 10px;
      }

      .items {
        font-size: 14px;
        padding: 5px 0 5px 30px;
        margin: 0 5px;

        a {
          text-decoration: none;
          color: #d8d6d3;

          &:hover {
            color: $primary-color;
            border-radius: 2px;
          }

          &.router-link-exact-active {
            color: $primary-color-dark;
          }
        }
      }
    }
  }
}

.right-panel {
  position: absolute;
  width: 100%;
  height: 100vh;
  padding-left: 250px;
  overflow: hidden;
      background: linear-gradient(181deg, #f7f7f7, transparent);
  .header {
    height: 60px;
    display: flex;
    border-bottom: 1px solid $grey;
    padding: 10px 10px;
    align-items: center;
    .search-bar {
      width: 30%;
      margin-left: auto;
    }
  }

  .component-body {
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x:hidden;
    padding: 0 25px;
    height: 90vh;
    padding-bottom: 60px;
  }
}
.code_editor.hljs.read_only.atom_one_light{
  .header > .copy_code[data-v-76b5d460] {
    position: absolute;
    top: 49px;
    right: 12px;
}
}
.code_editor {
  width: 100% !important;
  // height: 600px !important;
  & .code_area {
    // height: 600px !important;
    overflow: auto !important;
  }
  & .header {
    padding: 20px 10px !important;
  }
}
.source .code_editor > .code_area {
  overflow: auto !important;
}
.el-table th.el-table__cell > .cell {
  color: #191a15;
}
.el-table td.el-table__cell div {
  color: #191a15;
}
</style>
