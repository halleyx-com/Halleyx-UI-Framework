<template>
   <h1 class="component-heading">Dashboard</h1>
  <p class="component-description">
    A dashboard shows all of your info visually. Its main purpose is to give information at-a-glance, though it can be utilised in a variety of ways.</p>  <divider :position="'horizontal'" :space="'20px'" />
  <h2 class="component-side-heading">Basic usage</h2>
    <p class="component-description">Bind data for breadcrumb, header cards, profile menu, notifications, table and various charts to form the components of your dashboard.</p>
    <!-- <p @click="myfunc()" class="component-description-link">Open component in new tab</p> -->
  <div class="component-example">
    <div class="example-body">
  <hlx-dashboard-new :chartoptions1="this.chartoptions1" :chartoptions2="this.chartoptions2" :chartoptions3="this.chartoptions3" :chartoptions4="this.chartoptions4" :chartoptions5="this.chartoptions5" :traffic_data="this.traffic_data" :sales_by_country_table="this.sales_by_country_table" :breadcrumb_data="this.breadcrumb_data" :sales_map_data="this.sales_map_data" :header_card_data="this.header_card_data" :profile_menu_data="this.profile_menu_data" :notifications_data="this.notifications_data" :table_data="this.table_data"/>
    </div>
    <div class="example-footer">
      <span class="icon" id="basic-dashboard-icon" @click="showCode('basic-dashboard')"><i class="icon-code-regular"></i></span>
    </div>
  </div>

  <div class="source-code" id="basic-dashboard" style="display: none">
    <section class="example-source-wrapper">
      <div class="source">
        <CodeEditor
           :id="'editor'" :display_language="false"
          :value="dashboard_source"
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
      <tr v-for="(i, index) in this.table_dataa" :key="index" id="">
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
        <!-- <hlxTable :data="this.dashboardAttributes"
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
import hlxDashboardNew from '../components/DashboardComponentNew.vue'
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";

import divider from "../components/DividerComponent.vue";
import CodeEditor from "simple-code-editor";
export default {
    components:{hlxDashboardNew,
      hlxTableCell,
    hlxTableHead,
    hlxTable,
    CodeEditor,
    divider},
    mounted(){
        setTimeout(()=>{
            document.querySelector('.dashboard-header').style.display = 'none'
            // document.querySelector('.component-body').style.padding = '0 0 0 0'
            // document.querySelector('.component-body').style.height = 'auto'
        },100)
    },
    data(){
        return{
                      dashboard_source: `
<template>
  <hlx-dashboard-new :chartoptions1="this.chartoptions1" :chartoptions2="this.chartoptions2" :chartoptions3="this.chartoptions3" :chartoptions4="this.chartoptions4" :chartoptions5="this.chartoptions5" :traffic_data="this.traffic_data" :sales_by_country_table="this.sales_by_country_table" :breadcrumb_data="this.breadcrumb_data" :sales_map_data="this.sales_map_data" :header_card_data="this.header_card_data" :profile_menu_data="this.profile_menu_data" :notifications_data="this.notifications_data" :table_data="this.table_data"/>
</template>

<script>
export default{
    data(){
        return{
        chartoptions1: {
        series: [
          {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          },
        ],
        chart: {
          type: "bar",
          height: 300,
          width: "100%",
          toolbar: {
            show: false,
          },
        },
        colors: ["#265E4B", "#A8DEC9"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },

        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {
          title: {
            text: "",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
      chartoptions2: {
        series: [44, 25, 13],
        chart: {
          width: "100%",
          height: "60%",
          type: "donut",
          toolbar: {
            show: false,
          },
        },
        colors: ["#54bd95", "#A8DEC9", "#265E4B"],
        labels: ["Metric1", "Metric2", "Metric3"],
        dataLabels: {
          enabled: false,
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 20,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          position: "right",
          offsetY: 0,
          height: 230,
          show: false,
        },
        content: {
          title: "Total sales",
          total: "$85K",
        },
      },
      chartoptions3: {
        series: [44, 25, 13],
        chart: {
          width: "100%",
          height: "70%",
          type: "donut",
          toolbar: {
            show: false,
          },
        },
        colors: ["#54bd95", "#A8DEC9", "#265E4B"],
        labels: ["Metric1", "Metric2", "Metric3"],
        dataLabels: {
          enabled: false,
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 20,
              },
              legend: {
                show: true,
              },
            },
          },
        ],
        legend: {
          position: "right",
          offsetY: 20,
          offsetX: 100,
          height: 230,
          show: true,
        },
        content: {
          title: "Total sales",
          total: "$85K",
        },
      },
      sales_by_country_table: [
        {
          flag: "in",
          label: "India",
          percentage: "82%",
        },
        {
          flag: "us",
          label: "USA",
          percentage: "60%",
        },
      ],
      chartoptions4: {
        series: [
          {
            name: "Metric1",
            data: [44, 55, 41, 67, 22],
          },
          {
            name: "Metric2",
            data: [13, 23, 20, 8, 13],
          },
        ],
        chart: {
          type: "bar",
          height: "60%",
          width: "100%",
          stacked: true,
          stackType: "100%",
          toolbar: {
            show: false,
          },
        },
        colors: ["#265E4B", "#A8DEC9"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
        xaxis: {
          categories: ["Q1", "Q2", "Q3", "Q4", "Q5"],
        },
        fill: {
          opacity: 1,
        },
        legend: { show: false },
      },
      traffic_data: [
        {
          percentage: "70%",
          metric: "Social",
          count: "8,475",
        },
        {
          percentage: "60%",
          metric: "Direct",
          count: "7,989",
        },
        {
          percentage: "40%",
          metric: "Search",
          count: "6,359",
        },
      ],
      sales_map_data: [
        {
          percentage: "70%",
          metric: "United States",
          count: "$2.5K",
        },
        {
          percentage: "60%",
          metric: "Russia",
          count: "$4.5K",
        },
        {
          percentage: "80%",
          metric: "Australia",
          count: "$8.5K",
        },
      ],
      chartoptions5:{
          series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }],
          chart: {
          height: "70%",
          width: "100%",
          type: 'area',
                    toolbar: {
            show: false,
          },
        },
        colors:['#265E4B'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          show: false,
           borderColor: '#ffffff',
          type: 'datetime',
          categories: ["2018-09-16", "2018-09-17", "2018-09-18", "2018-09-19", "2018-09-20", "2018-09-21", "2018-09-22"]
        },
        yaxis: {
          borderColor: '#ffffff',
          show: false
        },
        // tooltip: {
        //   x: {
        //     format: 'dd/MM/yy HH:mm'
        //   },
        // },
        },
         breadcrumb_data: [{name:'Home',icon:'icon-home'},{name:'Category',icon:''},{name:'Sub category',icon:''},],
          header_card_data: [
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
          ],
          profile_menu_data:[
            {
              icon: 'icon-human',
              item: 'Profile'
            },
            {
              icon: 'icon-gear',
              item: 'Settings'
            },
            {
              icon: 'icon-cloud-download',
              item: 'Downloads'
            },
          ],
          notifications_data:[
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
          ],
    table_data:
      {
        columns:[
          {
            name:'id',
            width:'50',
            type:'integer',
            format:''
          },
          {
            name:'name',
            width:'150',
            type:'string',
            format:''
          },
          {
            name:'gender',
            width:'100',
            type:'string',
            format:''
          },
          {
            name:'picture',
            width:'180',
            type:'img',
            format:''
          },
          {
            name:'email',
            width:'200',
            type:'email',
            format:''
          },
          {
            name:'percentage',
            width:'150',
            type:'integer',
            format:'percentage'
          },
          {
            name:'balance',
            width:'150',
            type:'currency',
            format:'INR'
          },
          {
            name:'date',
            width:'150',
            type:'date',
            format:'Day, DD MMM YYYY HH:MM:SS'
          },
          // {
          //   name:'name',
          //   width:'150',
          //   type:'string',
          //   format:''
          // },
        ],
        table_data:[
          {
    "id":1,
    "balance": "345678",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 23,
    "name": "Bird Ramsey",
    "gender": "male",
    "company": "NIMON",
    "date": "2022-07-13",
    "email": "birdramsey@nimon.com"
  },
  {
    "id":2,
    "balance": "56784",

"percentage": "0.3","picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 31,
    "name": "Lillian Burgess",
    "gender": "female",
    "company": "LUXURIA",
    "date": "2022-07-13",
    "email": "lillianburgess@luxuria.com"
  },
  {
    "id":3,
    "balance": "20",
   
   "percentage": "0.3","picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 34,
    "name": "Kristie Cole",
    "gender": "female",
    "company": "QUADEEBO",
    "date": "2022-07-13",
    "email": "kristiecole@quadeebo.com"
  },
  {
    "id":4,
    "balance": "489345",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 30,
    "name": "Leonor Cross",
    "gender": "female",
    "company": "GRONK",
    "date": "2022-07-13",
    "email": "leonorcross@gronk.com"
  },
  {
    "id":5,
    "balance": "12345",

"percentage": "0.3","picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 28,
    "name": "Marsh Mccall",
    "gender": "male",
    "company": "ULTRIMAX",
    "date": "2022-07-13",
    "email": "marshmccall@ultrimax.com"
  },
  {
    "id":6,
    "balance": "355545",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 23,
    "name": "Bird Ramsey",
    "gender": "male",
    "company": "NIMON",
    "date": "2022-07-13",
    "email": "birdramsey@nimon.com"
  },
  {
    "id":7,
    "balance": "255549",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 31,
    "name": "Lillian Burgess",
    "gender": "female",
    "company": "LUXURIA",
    "date": "2022-07-13",
    "email": "lillianburgess@luxuria.com"
  },
  {
    "id":8,
    "balance": "255518",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 34,
    "name": "Kristie Cole",
    "gender": "female",
    "company": "QUADEEBO",
    "date": "2022-07-13",
    "email": "kristiecole@quadeebo.com"
  },
  {
    "id":9,
    "balance": "355532",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 30,
    "name": "Leonor Cross",
    "gender": "female",
    "company": "GRONK",
    "date": "2022-07-13",
    "email": "leonorcross@gronk.com"
  },
  {
    "id":10,
    "balance": "155547",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 28,
    "name": "Marsh Mccall",
    "gender": "male",
    "company": "ULTRIMAX",
    "date": "2022-07-13",
    "email": "marshmccall@ultrimax.com"
  }
        ]
      },
          }
        }
      }
      <\/script>`,
      chartoptions1: {
        series: [
          {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          },
        ],
        chart: {
          type: "bar",
          height: 300,
          width: "100%",
          toolbar: {
            show: false,
          },
        },
        colors: ["#265E4B", "#A8DEC9"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },

        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {
          title: {
            text: "",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
      chartoptions2: {
        series: [44, 25, 13],
        chart: {
          width: "100%",
          height: "60%",
          type: "donut",
          toolbar: {
            show: false,
          },
        },
        colors: ["#54bd95", "#A8DEC9", "#265E4B"],
        labels: ["Metric1", "Metric2", "Metric3"],
        dataLabels: {
          enabled: false,
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 20,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          position: "right",
          offsetY: 0,
          height: 230,
          show: false,
        },
        content: {
          title: "Total sales",
          total: "$85K",
        },
      },
      chartoptions3: {
        series: [44, 25, 13],
        chart: {
          width: "100%",
          height: "70%",
          type: "donut",
          toolbar: {
            show: false,
          },
        },
        colors: ["#54bd95", "#A8DEC9", "#265E4B"],
        labels: ["Metric1", "Metric2", "Metric3"],
        dataLabels: {
          enabled: false,
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 20,
              },
              legend: {
                show: true,
              },
            },
          },
        ],
        legend: {
          position: "right",
          offsetY: 20,
          offsetX: 100,
          height: 230,
          show: true,
        },
        content: {
          title: "Total sales",
          total: "$85K",
        },
      },
      sales_by_country_table: [
        {
          flag: "in",
          label: "India",
          percentage: "82%",
        },
        {
          flag: "us",
          label: "USA",
          percentage: "60%",
        },
      ],
      chartoptions4: {
        series: [
          {
            name: "Metric1",
            data: [44, 55, 41, 67, 22],
          },
          {
            name: "Metric2",
            data: [13, 23, 20, 8, 13],
          },
        ],
        chart: {
          type: "bar",
          height: "60%",
          width: "100%",
          stacked: true,
          stackType: "100%",
          toolbar: {
            show: false,
          },
        },
        colors: ["#265E4B", "#A8DEC9"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
        xaxis: {
          categories: ["Q1", "Q2", "Q3", "Q4", "Q5"],
        },
        fill: {
          opacity: 1,
        },
        legend: { show: false },
      },
      traffic_data: [
        {
          percentage: "70%",
          metric: "Social",
          count: "8,475",
        },
        {
          percentage: "60%",
          metric: "Direct",
          count: "7,989",
        },
        {
          percentage: "40%",
          metric: "Search",
          count: "6,359",
        },
      ],
      sales_map_data: [
        {
          percentage: "70%",
          metric: "United States",
          count: "$2.5K",
        },
        {
          percentage: "60%",
          metric: "Russia",
          count: "$4.5K",
        },
        {
          percentage: "80%",
          metric: "Australia",
          count: "$8.5K",
        },
      ],
      chartoptions5:{
          series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }],
          chart: {
          height: "70%",
          width: "100%",
          type: 'area',
                    toolbar: {
            show: false,
          },
        },
        colors:['#265E4B'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          show: false,
           borderColor: '#ffffff',
          type: 'datetime',
          categories: ["2018-09-16", "2018-09-17", "2018-09-18", "2018-09-19", "2018-09-20", "2018-09-21", "2018-09-22"]
        },
        yaxis: {
          borderColor: '#ffffff',
          show: false
        },
        // tooltip: {
        //   x: {
        //     format: 'dd/MM/yy HH:mm'
        //   },
        // },
        },
         breadcrumb_data: [{name:'Home',icon:'icon-home'},{name:'Category',icon:''},{name:'Sub category',icon:''},],
          header_card_data: [
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
          ],
          profile_menu_data:[
            {
              icon: 'icon-human',
              item: 'Profile'
            },
            {
              icon: 'icon-gear',
              item: 'Settings'
            },
            {
              icon: 'icon-cloud-download',
              item: 'Downloads'
            },
          ],
          notifications_data:[
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
          ],
    table_data:
      {
        attributes:[
          {
            prop:'id',
            label:'Id',
            width:'50',
            type:'integer',
            format:''
          },
          {
            prop:'name',
            label:'Name',
            width:'150',
            type:'string',
            format:''
          },
          {
            prop:'gender',
            label:'Gender',
            width:'100',
            type:'string',
            format:''
          },
          {
            prop:'picture',
            label:'Picture',
            width:'180',
            type:'image',
            format:''
          },
          {
            prop:'email',
            label:'Email',
            width:'200',
            type:'email',
            format:''
          },

          // {
          //   prop:'company',
          //   width:'120',
          //   type:'string',
          //   format:''
          // },
          {
            prop:'percentage',
            label:'Percentage',
            width:'150',
            type:'integer',
            format:'percentage'
          },
          {
            prop:'balance',
            label:'Balance',
            width:'150',
            type:'currency',
            format:'INR'
          },
          {
            prop:'date',
            label:'Date',
            width:'150',
            type:'date',
            format:'Day, DD MMM YYYY HH:MM:SS'
          },
          // {
          //   name:'name',
          //   width:'150',
          //   type:'string',
          //   format:''
          // },
        ],
        table_data:[
          {
    "id":1,
    "balance": "345678",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 23,
    "name": "Bird Ramsey",
    "gender": "male",
    "company": "NIMON",
    "date": "2022-07-13",
    "email": "birdramsey@nimon.com"
  },
  {
    "id":2,
    "balance": "56784",

"percentage": "0.3","picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 31,
    "name": "Lillian Burgess",
    "gender": "female",
    "company": "LUXURIA",
    "date": "2022-07-13",
    "email": "lillianburgess@luxuria.com"
  },
  {
    "id":3,
    "balance": "20",
   
   "percentage": "0.3","picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 34,
    "name": "Kristie Cole",
    "gender": "female",
    "company": "QUADEEBO",
    "date": "2022-07-13",
    "email": "kristiecole@quadeebo.com"
  },
  {
    "id":4,
    "balance": "489345",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 30,
    "name": "Leonor Cross",
    "gender": "female",
    "company": "GRONK",
    "date": "2022-07-13",
    "email": "leonorcross@gronk.com"
  },
  {
    "id":5,
    "balance": "12345",

"percentage": "0.3","picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 28,
    "name": "Marsh Mccall",
    "gender": "male",
    "company": "ULTRIMAX",
    "date": "2022-07-13",
    "email": "marshmccall@ultrimax.com"
  },
  {
    "id":6,
    "balance": "355545",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 23,
    "name": "Bird Ramsey",
    "gender": "male",
    "company": "NIMON",
    "date": "2022-07-13",
    "email": "birdramsey@nimon.com"
  },
  {
    "id":7,
    "balance": "255549",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 31,
    "name": "Lillian Burgess",
    "gender": "female",
    "company": "LUXURIA",
    "date": "2022-07-13",
    "email": "lillianburgess@luxuria.com"
  },
  {
    "id":8,
    "balance": "255518",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 34,
    "name": "Kristie Cole",
    "gender": "female",
    "company": "QUADEEBO",
    "date": "2022-07-13",
    "email": "kristiecole@quadeebo.com"
  },
  {
    "id":9,
    "balance": "355532",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 30,
    "name": "Leonor Cross",
    "gender": "female",
    "company": "GRONK",
    "date": "2022-07-13",
    "email": "leonorcross@gronk.com"
  },
  {
    "id":10,
    "balance": "155547",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 28,
    "name": "Marsh Mccall",
    "gender": "male",
    "company": "ULTRIMAX",
    "date": "2022-07-13",
    "email": "marshmccall@ultrimax.com"
  }
        ]
      },
      editor_theme: "light",
                  source:
      `
<template>
<hlx-dashboard-new :chartoptions1="this.chartoptions1" :chartoptions2="this.chartoptions2" :chartoptions3="this.chartoptions3" :chartoptions4="this.chartoptions4" :chartoptions5="this.chartoptions5" :traffic_data="this.traffic_data" :sales_by_country_table="this.sales_by_country_table" :breadcrumb_data="this.breadcrumb_data" :sales_map_data="this.sales_map_data" :header_card_data="this.header_card_data" :profile_menu_data="this.profile_menu_data" :notifications_data="this.notifications_data" :table_data="this.table_data"/>
</template>
<script>
import hlxDashboardNew from '../components/DashboardComponentNew.vue'
components: {hlxDashboardNew},
    data(){
        return{
            chartoptions1: {
        series: [
          {
            name: "Net Profit",
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
          },
          {
            name: "Revenue",
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
          },
        ],
        chart: {
          type: "bar",
          height: 300,
          width: "100%",
          toolbar: {
            show: false,
          },
        },
        colors: ["#265E4B", "#A8DEC9"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },

        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        yaxis: {
          title: {
            text: "",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
      chartoptions2: {
        series: [44, 25, 13],
        chart: {
          width: "100%",
          height: "60%",
          type: "donut",
          toolbar: {
            show: false,
          },
        },
        colors: ["#54bd95", "#A8DEC9", "#265E4B"],
        labels: ["Metric1", "Metric2", "Metric3"],
        dataLabels: {
          enabled: false,
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 20,
              },
              legend: {
                show: false,
              },
            },
          },
        ],
        legend: {
          position: "right",
          offsetY: 0,
          height: 230,
          show: false,
        },
        content: {
          title: "Total sales",
          total: "$85K",
        },
      },
      chartoptions3: {
        series: [44, 25, 13],
        chart: {
          width: "100%",
          height: "70%",
          type: "donut",
          toolbar: {
            show: false,
          },
        },
        colors: ["#54bd95", "#A8DEC9", "#265E4B"],
        labels: ["Metric1", "Metric2", "Metric3"],
        dataLabels: {
          enabled: false,
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 20,
              },
              legend: {
                show: true,
              },
            },
          },
        ],
        legend: {
          position: "right",
          offsetY: 20,
          offsetX: 100,
          height: 230,
          show: true,
        },
        content: {
          title: "Total sales",
          total: "$85K",
        },
      },
      sales_by_country_table: [
        {
          flag: "in",
          label: "India",
          percentage: "82%",
        },
        {
          flag: "us",
          label: "USA",
          percentage: "60%",
        },
      ],
      chartoptions4: {
        series: [
          {
            name: "Metric1",
            data: [44, 55, 41, 67, 22],
          },
          {
            name: "Metric2",
            data: [13, 23, 20, 8, 13],
          },
        ],
        chart: {
          type: "bar",
          height: "60%",
          width: "100%",
          stacked: true,
          stackType: "100%",
          toolbar: {
            show: false,
          },
        },
        colors: ["#265E4B", "#A8DEC9"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
        xaxis: {
          categories: ["Q1", "Q2", "Q3", "Q4", "Q5"],
        },
        fill: {
          opacity: 1,
        },
        legend: { show: false },
      },
      traffic_data: [
        {
          percentage: "70%",
          metric: "Social",
          count: "8,475",
        },
        {
          percentage: "60%",
          metric: "Direct",
          count: "7,989",
        },
        {
          percentage: "40%",
          metric: "Search",
          count: "6,359",
        },
      ],
      sales_map_data: [
        {
          percentage: "70%",
          metric: "United States",
          count: "$2.5K",
        },
        {
          percentage: "60%",
          metric: "Russia",
          count: "$4.5K",
        },
        {
          percentage: "80%",
          metric: "Australia",
          count: "$8.5K",
        },
      ],
      chartoptions5:{
          series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }],
          chart: {
          height: "70%",
          width: "100%",
          type: 'area',
                    toolbar: {
            show: false,
          },
        },
        colors:['#265E4B'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          show: false,
           borderColor: '#ffffff',
          type: 'datetime',
          categories: ["2018-09-16", "2018-09-17", "2018-09-18", "2018-09-19", "2018-09-20", "2018-09-21", "2018-09-22"]
        },
        yaxis: {
          borderColor: '#ffffff',
          show: false
        },
        },
         breadcrumb_data: [{name:'Home',icon:'icon-home'},{name:'Category',icon:''},{name:'Sub category',icon:''},],
          header_card_data: [
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
            {
              icon:'icon-lightbulb-regular',
              header:'4.6K',
              sub_header:'Total orders',
              percentage:'45.5%',
              arrow_icon:'icon-arrow-up-regular'
            },
          ],
          profile_menu_data:[
            {
              icon: 'icon-human',
              item: 'Profile'
            },
            {
              icon: 'icon-gear',
              item: 'Settings'
            },
            {
              icon: 'icon-cloud-download',
              item: 'Downloads'
            },
          ],
          notifications_data:[
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
            {
              icon:"icon-lightbulb-regular",
              title:"New orders",
              message:"You have received new orders",
              time:"2 mins ago",
            },
          ],
    table_data:
      {
        columns:[
          {
            name:'id',
            width:'50',
            type:'integer',
            format:''
          },
          {
            name:'name',
            width:'150',
            type:'string',
            format:''
          },
          {
            name:'gender',
            width:'100',
            type:'string',
            format:''
          },
          {
            name:'picture',
            width:'180',
            type:'img',
            format:''
          },
          {
            name:'email',
            width:'200',
            type:'email',
            format:''
          },
          {
            name:'percentage',
            width:'150',
            type:'integer',
            format:'percentage'
          },
          {
            name:'balance',
            width:'150',
            type:'currency',
            format:'INR'
          },
          {
            name:'date',
            width:'150',
            type:'date',
            format:'Day, DD MMM YYYY HH:MM:SS'
          },
        ],
        table_data:[
          {
    "id":1,
    "balance": "345678",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 23,
    "name": "Bird Ramsey",
    "gender": "male",
    "company": "NIMON",
    "date": "2022-07-13",
    "email": "birdramsey@nimon.com"
  },
  {
    "id":2,
    "balance": "56784",

"percentage": "0.3","picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 31,
    "name": "Lillian Burgess",
    "gender": "female",
    "company": "LUXURIA",
    "date": "2022-07-13",
    "email": "lillianburgess@luxuria.com"
  },
  {
    "id":3,
    "balance": "20",
   
   "percentage": "0.3","picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 34,
    "name": "Kristie Cole",
    "gender": "female",
    "company": "QUADEEBO",
    "date": "2022-07-13",
    "email": "kristiecole@quadeebo.com"
  },
  {
    "id":4,
    "balance": "489345",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 30,
    "name": "Leonor Cross",
    "gender": "female",
    "company": "GRONK",
    "date": "2022-07-13",
    "email": "leonorcross@gronk.com"
  },
  {
    "id":5,
    "balance": "12345",

"percentage": "0.3","picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 28,
    "name": "Marsh Mccall",
    "gender": "male",
    "company": "ULTRIMAX",
    "date": "2022-07-13",
    "email": "marshmccall@ultrimax.com"
  },
  {
    "id":6,
    "balance": "355545",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 23,
    "name": "Bird Ramsey",
    "gender": "male",
    "company": "NIMON",
    "date": "2022-07-13",
    "email": "birdramsey@nimon.com"
  },
  {
    "id":7,
    "balance": "255549",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 31,
    "name": "Lillian Burgess",
    "gender": "female",
    "company": "LUXURIA",
    "date": "2022-07-13",
    "email": "lillianburgess@luxuria.com"
  },
  {
    "id":8,
    "balance": "255518",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 34,
    "name": "Kristie Cole",
    "gender": "female",
    "company": "QUADEEBO",
    "date": "2022-07-13",
    "email": "kristiecole@quadeebo.com"
  },
  {
    "id":9,
    "balance": "355532",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 30,
    "name": "Leonor Cross",
    "gender": "female",
    "company": "GRONK",
    "date": "2022-07-13",
    "email": "leonorcross@gronk.com"
  },
  {
    "id":10,
    "balance": "155547",
    "percentage": "0.3",
    "picture": "https://sc04.alicdn.com/kf/HTB1jnJyRpzqK1RjSZFvq6AB7VXaW.jpg",
    "age": 28,
    "name": "Marsh Mccall",
    "gender": "male",
    "company": "ULTRIMAX",
    "date": "2022-07-13",
    "email": "marshmccall@ultrimax.com"
  }
        ]
      }
        }
    }

</\script>`,
        table_dataa:
        [
          {
        name:'breadcrumb_data',
        description:'Include your data for breadcrumb.',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory: true
      },
          {
        name:'sales_map_data',
        description:'Include your data for sales.',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory: true
      },
          {
        name:'header_card_data',
        description:'Include your data for header cards.',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory: true
      },
          {
        name:'profile_menu_data',
        description:'Include your data for profile menu.',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory: true
      },
          {
        name:'notifications_data',
        description:'Include your data for notifications.',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory: true
      },
          {
        name:'table_data',
        description:'Include your data for table.',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory: true
      },
          {
        name:'chartoptions1',
        description:'Include your data for chart.',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory: true
      },
          {
        name:'chartoptions2',
        description:'Include your data for chart.',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory: true
      },
          {
        name:'chartoptions3',
        description:'Include your data for chart.',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory: true
      },
          {
        name:'chartoptions4',
        description:'Include your data for chart.',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory: true
      },
          {
        name:'chartoptions4',
        description:'Include your data for chart.',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory: true
      },
          {
        name:'chartoptions5',
        description:'Include your data for chart.',
        type:'Array of objects',
        accepted_values:'[{}]',
        default:'-',
        mandatory: true
      },
],
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
        }
    },
    methods: {
      myfunc(){
      let routeData = this.$router.resolve({name: 'dashboardpageview'});
window.open(routeData.href, '_blank');
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

}
</script>

<style>

</style>