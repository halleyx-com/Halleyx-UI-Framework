<template>
  <div class="dataview-parent-container">
    <div class="header-panel">
      <div class="left">
        <div class="sort-container">
          <hlxselect :options="this.dropdown_data" @customChange="selectValue" :placeholder="'Sort by price'" ></hlxselect>
        </div>

      </div>
          <div class="search-containerr">
          <hlx-search @searchkey="search" :search_style="'style1'" />
        </div>
      <div class="right">
        <div class="list" @click="listview()">
          <i class="icon-menu-filled"></i>
        </div>
        <div class="grid" @click="gridview()">
          <i class="icon-grid-square-regular"></i>
        </div>
      </div>
    </div>
    <div class="body-panel" v-if="this.grid_view == true" :style="this.grid_view == true? 'grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr))':''">
      <!-- <div class="cards-container"> -->
        <!-- <div
          class="card-holder"
          v-for="(card, index) in this.tbodyRows"
          :key="index"
        > -->
          <card :seperator="false" :card_title="true" :card_footer="true" :width="300"  v-for="(card, index) in this.tbodyRows"
          :key="index">
            <template #card-title>
              <div class="card-header">
                <div class="group-tag">
                  <i class="icon-tag-regular"></i
                  ><span>{{ card.card_title }}</span>
                </div>
                <hlx-label class="primary sm" v-if="card.card_body.product_stock.toLowerCase() == 'instock'" style="font-weight:200">Instock</hlx-label>
                <hlx-label class="warning sm" v-if="card.card_body.product_stock.toLowerCase() == 'low stock'" style="font-weight:200">Low stock</hlx-label>
                <hlx-label class="error sm" v-if="card.card_body.product_stock.toLowerCase() == 'out of stock'" style="font-weight:200">Out of stock</hlx-label>
              </div>
            </template>
            <template #card-body>
              <div class="card-body">
                <img :src="card.card_body.product_img_url" />
                <div class="product-title">
                  {{ card.card_body.product_title }}
                </div>
                <div class="product-description">
                  {{ card.card_body.product_description }}
                </div>
                <hlx-rating :rating="card.card_body.product_rating"></hlx-rating>
              </div>
            </template>
            <template #card-footer>
              <div class="card-footerr">
                <div class="price"><sup>{{(new Intl.NumberFormat('en-US', { style: 'currency', currency: card.card_footer.currency }).format( card.card_footer.price.whole)).charAt(0)}}</sup>{{(new Intl.NumberFormat('en-US', { style: 'currency', currency: card.card_footer.currency }).format( card.card_footer.price.whole)).substring(1).slice(0,-3) }}<sup>.{{card.card_footer.price.fraction}}</sup></div>
                <!-- <div class="price"><sup>$</sup>{{card.card_footer.currency}}<sup>.00</sup></div> -->
                <button><i class="icon-shopping-cart-arrow-down-regular"></i></button>
              </div>
            </template>
          </card>
        <!-- </div> -->
      <!-- </div> -->
    </div>
    <div class="body-panel" v-if="this.list_view == true">
      <div class="list-container" v-for="(card, index) in this.tbodyRows"
          :key="index">
        <div class="left">
            <img :src="card.card_body.product_img_url" />
            <div class="details">
                <div class="product-titlee">
                  {{ card.card_body.product_title }}
                </div>
                <div class="product-descriptionn" style="margin-left: 0">
                  {{ card.card_body.product_description }}
                </div>
                <!-- <hlx-rating :rating="'half-rated'" style="margin-left: -5px"></hlx-rating> -->
                <div class="group-tag">
                  <i class="icon-tag-regular"></i
                  ><span>{{ card.card_title }}</span>
                </div>

            </div>
        </div>
        <div class="right">
            <div class="price"><sup>{{(new Intl.NumberFormat('en-US', { style: 'currency', currency: card.card_footer.currency }).format( card.card_footer.price.whole)).charAt(0)}}</sup>{{(new Intl.NumberFormat('en-US', { style: 'currency', currency: card.card_footer.currency }).format( card.card_footer.price.whole)).substring(1).slice(0,-3) }}<sup>.{{card.card_footer.price.fraction}}</sup></div>
            <!-- <button><i class="icon-save"></i><span class="btn-text">Add to cart</span></button> -->
            <hlx-button class="primary sm">Add to cart</hlx-button>
             <hlx-label class="primary sm" v-if="card.card_body.product_stock.toLowerCase() == 'instock'">Instock</hlx-label>
                <hlx-label class="warning sm" v-if="card.card_body.product_stock.toLowerCase() == 'low stock'">Low stock</hlx-label>
                <hlx-label class="error sm" v-if="card.card_body.product_stock.toLowerCase() == 'out of stock'">Out of stock</hlx-label>
        </div>
      </div>
    </div>
    <div class="body-panel" v-if="this.tbodyRows.length == 0"><div class="no-data">No data</div></div>
    <div class="footer-panel" v-if="this.tbodyRows.length != 0">
      <hlx-pagination
        :background="false"
        :total="this.total"
        :pager-count="2"
        :rows-per-page="this.rowPerPage"
        @current-page="currentPage"
        
      />
    </div>
  </div>
</template>

<script>
import card from "./CardsComponent.vue";
import hlxLabel from "./LabelComponent";
import hlxselect from "./SelectComponent.vue";
import hlxRating from "./RatingComponent.vue";
import hlxSearch from "./SearchComponent.vue";
import hlxPagination from "./PaginationComponent.vue";
import HlxButton from "./ButtonComponent.vue";


export default {
  name:'hlx-dataview',
  components: {
    card,
    hlxLabel,
    hlxselect,
    hlxRating,
    hlxSearch,
    hlxPagination,
    HlxButton
  },
  props:['card_data',],
  data() {
    return {
      current_page: 1,
      rowPerPage: 9,
      total: '',
      // card_data: [
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex boardd",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "low stock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "abc",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "60",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "63",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      //   {
      //     card_title: "Accessories",
      //     card_body: {
      //       product_img_url:
      //         "https://images.ctfassets.net/osq47g2esuw5/4NItQKQad7O2gRL21esLJ/af523f89def19b5592ff3a073055a233/Cisco_Webex_Board_Pro_-_Floor_Stand_-_angle_transparent.png?w=1440&h=810&q=50&fm=png",
      //       product_title: "Webex board",
      //       product_description: "Webex board",
      //       product_rating: "4.5",
      //       product_stock: "instock"
      //     },
      //     card_footer: {
      //       price: "65",
      //     },
      //   },
      // ],
      dropdown_data: [{name:"Low to high",checked:false}, {name:"High to low",checked:false}],
      list_view: false,
      grid_view: true,
      paginated_data: [],
      searchkey : '',
      searched_data:[]
    };
  },
  mounted() {
    this.gridview();
    this.tbodyRows;
  },
  computed: {
    tbodyRows() {
                var start = (this.current_page - 1) * this.rowPerPage;
      var end = start + this.rowPerPage;
        if(!this.searchkey){

      this.paginated_data = this.card_data.slice(start, end);
      this.total = this.card_data.length

      }else{

        if(this.searched_data.length>= start){

        // console.log("ss",start,end);
        this.paginated_data = this.searched_data.slice(start, end);
        }else{
          this.paginated_data = this.searched_data
        }
        this.total = this.searched_data.length
      }
      // console.log(this.searched_data,this.paginated_data,"here");
      return this.paginated_data;
    },
  },
  methods: {
    listview() {
      document.querySelector(".list").classList.add('primary-bg');
      document.querySelector(".grid").classList.remove('primary-bg');
      document.querySelectorAll(".rating-group").forEach((r)=>{
        r.style.marginLeft = '-5px'
      });
      document.querySelector(".icon-grid-square-regular").classList.add('white-bg');
      document.querySelector(".icon-menu-filled").classList.remove('white-bg');
      this.list_view = true;
      this.grid_view = false;
    },
    gridview() {
      document.querySelector(".grid").classList.add('primary-bg')
      document.querySelector(".list").classList.remove('primary-bg')
      document.querySelector(".icon-grid-square-regular").classList.remove('white-bg')
      document.querySelector(".icon-menu-filled").classList.add('white-bg')
      this.list_view = false;
      this.grid_view = true;
    },
    currentPage(val) {
      this.current_page = val;
      this.tbodyRows;
    },
    search(val){
        this.searchkey = val
        this.searched_data = this.card_data.filter(o => o.card_title.toLowerCase().includes(val) || o.card_body.product_title.toLowerCase().includes(val) ||
         o.card_body.product_description.toLowerCase().includes(val) || o.card_body.product_stock.toLowerCase().includes(val) || o.card_footer.price.whole.includes(val)
         );
        // this.card_data.filter(o=>console.log(o.card_footer.price))
        //  console.log(this.card_data);
         this.tbodyRows
    },
    selectValue(val){
      let chosen
      val.forEach((v)=>{
        if(v.checked == true){
          chosen = v.name
        }
      })
      if(chosen.toLowerCase() == 'low to high'){
        this.card_data = this.card_data.sort(function(a, b) {
    return parseFloat(a.card_footer.price.whole) - parseFloat(b.card_footer.price.whole)
});
      }else{
        this.card_data = this.card_data.sort(function(a, b) {
    return parseFloat(b.card_footer.price.whole) - parseFloat(a.card_footer.price.whole)
});


      }
      
    }
  },
};
</script>

