<template>
  <div class="dashboard-right-container">
    <div class="dashboard-header">
      <div class="searchh">
        <hlx-search @searchkey="search" :search_style="'style1'" />
      </div>
      <div class="actions">
        <div><i class="icon-android-menu"></i></div>
        <div @click="notificationsFunc()"><i class="icon-bell"></i></div>
        <div @click="profileSettings()">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
          />
        </div>
      </div>
    </div>
    <div class="dashboard-body">
      <!-- <div class="dashboard-body-header-panel">
        <div class="dashboard-body-header">Dashboard</div>
        <div class="dashboard-body-breadcrumb">
          <bread-crumb
            :seperator="'/'"
            :crumbs="this.breadcrumb_data"
            @selected="selected"
          />
        </div>
      </div> -->
      <div class="small-cards-container">
        <!-- <div
          class="small-cards"
          v-for="(c, index) in this.header_card_data"
          :key="index"
          :style="[index+1<this.header_card_data.length ? {'margin-right':'20px'} :{'margin-right':'0px'}]"
        >
          <div class="icon-bg">
            <i :class="c.icon"></i>
          </div>
          <div class="card-header">{{ c.header }}</div>
          <div class="card-sub-header">{{ c.sub_header }}</div>
          <div class="card-percentage">
            <i :class="c.arrow_icon"></i>
            {{ c.percentage }}
          </div>
        </div> -->
        <card :seperator="false" :hover="true" v-for="(c, index) in this.header_card_data"
          :key="index" class="small-cards">
        <template #card-body >
          <div style="text-align:center;display:flex;flex-direction: column; align-items:center;">
          <div class="icon-bg">
            <i :class="c.icon"></i>
          </div>
          <div class="card-header">{{ c.header }}</div>
          <div class="card-sub-header">{{ c.sub_header }}</div>
          <div class="card-percentage">
            <i :class="c.arrow_icon"></i>
            {{ c.percentage }}
          </div>
        </div>
        </template>
      </card>
      </div>

      <div class="container-1">
        <div class="left-container-1">
          <!-- <card :seperator="false" :card_title="true" :hover="true" class="left-container-1">
        <template #card-title >
                  Statistics
        </template>
        <template #card-body >
          <VueApexCharts
            :type="this.chartoptions1.chart.type"
            :height="this.chartoptions1.chart.height"
            :width="this.chartoptions1.chart.width"
            :options="this.chartoptions1"
            :series="this.chartoptions1.series"
          ></VueApexCharts>
        </template>
      </card> -->

          <div class="card-title">Statistics</div>
          <VueApexCharts
            :type="this.chartoptions1.chart.type"
            :height="this.chartoptions1.chart.height"
            :width="this.chartoptions1.chart.width"
            :options="this.chartoptions1"
            :series="this.chartoptions1.series"
          ></VueApexCharts>
       </div>
        <div class="right-container-1">
          <div class="card-title">Top categories</div>
          <VueApexCharts
            style="margin-left: 15px"
            :type="this.chartoptions2.chart.type"
            :height="this.chartoptions2.chart.height"
            :width="this.chartoptions2.chart.width"
            :options="this.chartoptions2"
            :series="this.chartoptions2.series"
          ></VueApexCharts>
          <div
            class="right-container-1-content"
            v-for="(c, index) in this.chartoptions2.series"
            :key="index"
          >
            <div class="right-container-1-content-metric">
              {{ this.chartoptions2.labels[index] }}
            </div>
            <div
              class="right-container-1-content-count"
              :style="{ background: this.chartoptions2.colors[index] }"
            >
              {{ c }}
            </div>
          </div>
          <div class="chartoptions2-content">
            <div class="chartoptions2-content-total">
              {{ this.chartoptions2.content.total }}
            </div>
            <div class="chartoptions2-content-title">
              {{ this.chartoptions2.content.title }}
            </div>
          </div>
        </div>
      </div>
      <div class="container-2">
        <div class="left-container-2">
          <div class="card-title">Customers</div>
          <VueApexCharts
            style="margin-left: -70px"
            :type="this.chartoptions3.chart.type"
            :height="this.chartoptions3.chart.height"
            :width="this.chartoptions3.chart.width"
            :options="this.chartoptions3"
            :series="this.chartoptions3.series"
          ></VueApexCharts>
          <div class="chartoptions2-content">
            <div class="chartoptions2-content-total">
              {{ this.chartoptions2.content.total }}
            </div>
            <div class="chartoptions2-content-title">
              {{ this.chartoptions2.content.title }}
            </div>
          </div>
        </div>
        <div class="right-container-2">
          <div class="card-title1">Sales by Country</div>
          <table class="row-container">
            <tr v-for="(t, index) in this.sales_by_country_table" :key="index">
              <td class="flag"><CountryFlag :iso="t.flag" mode="rounded" /></td>
              <td class="label">{{ t.label }}</td>
              <td class="percentage">
                <div class="grey-container">
                  <div
                    class="inner-container"
                    :style="{ width: t.percentage }"
                  ></div>
                </div>
              </td>
              <td class="percent-num">{{ t.percentage }}</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="container-3">
        <div class="left-container-3">
          <div class="card-title1">Visitors</div>
          <VueApexCharts
            :type="this.chartoptions4.chart.type"
            :height="this.chartoptions4.chart.height"
            :width="this.chartoptions4.chart.width"
            :options="this.chartoptions4"
            :series="this.chartoptions4.series"
          ></VueApexCharts>
          <div class="bottom-container">
            <div class="left-bottom-container">
              <div class="title">8,545</div>
              <div class="sub-title">New visitors</div>
            </div>
            <div class="right-bottom-container">
              <div class="title">1,452</div>
              <div class="sub-title">Old visitors</div>
            </div>
          </div>
        </div>
        <div class="middle-container-3">
          <div class="card-title1">Traffic source</div>
          <div class="cardd">
            <div class="percent">
              <svg>
                <circle cx="105" cy="105" r="100"></circle>
                <circle
                  cx="105"
                  cy="105"
                  r="100"
                  style="--percent: 70"
                ></circle>
              </svg>
              <div class="number">
                <h4>Total traffic</h4>
                <h3>70<span>%</span></h3>
              </div>
            </div>
          </div>
          <div
            class="bottom-container"
            v-for="(t, index) in this.traffic_data"
            :key="index"
          >
            <div class="top">
              <div class="metric">{{ t.metric }}</div>
              <div class="count">{{ t.count }}</div>
            </div>
            <div class="bottom">
              <div class="grey-container">
                <div
                  class="inner-container"
                  :style="{ width: t.percentage }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-container-3">
          <div class="card-title1">Sales by Country</div>
          <div class="map">
            <div class="tool">
              <div @click="zoomIn"><i class="icon-search-plus-regular"></i></div>
              <div @click="zoomOut"><i class="icon-search-minus-regular"></i></div>
            </div>
            <div class="mapp">
              <canvas id="canvas"></canvas>
            </div>
          </div>
          <div
            class="bottom-container"
            v-for="(t, index) in this.sales_map_data"
            :key="index"
          >
            <div class="top">
              <div class="metric">{{ t.metric }}</div>
              <div class="count">{{ t.count }}</div>
            </div>
            <div class="bottom">
              <div class="grey-container">
                <div
                  class="inner-container"
                  :style="{ width: t.percentage }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-4">
        <div class="left-container-4">
          <div class="left-container-4-1">
            <div class="icon"><i class="icon-dollar2-bg"></i></div>
            <div class="count">$4,580</div>
            <div class="bottom-container">
              <div class="bottom">
                <div class="grey-container">
                  <div class="inner-container"></div>
                </div>
              </div>
              <div class="top">
                <div class="metric">Earned this month</div>
                <div class="countt">+2.4%</div>
              </div>
            </div>
          </div>
          <div class="left-container-4-2">
            <div class="icon"><i class="icon-dollar2-bg"></i></div>
            <div class="count">$4,580</div>
            <div class="bottom-container">
              <div class="bottom">
                <div class="grey-container">
                  <div class="inner-container"></div>
                </div>
              </div>
              <div class="top">
                <div class="metric">Earned this month</div>
                <div class="countt">+2.4%</div>
              </div>
            </div>
          </div>
        </div>
        <div class="middle-container-4">
          <div class="card-title">User activity</div>
          <VueApexCharts
            :type="this.chartoptions4.chart.type"
            height="80%"
            :width="this.chartoptions4.chart.width"
            :options="this.chartoptions4"
            :series="this.chartoptions4.series"
          ></VueApexCharts>
        </div>
        <div class="right-container-4">
          <div class="right-container-4-1">
            <div class="title">Total session</div>
            <div class="count">15,690<span class="sub-count">+36%</span></div>
            <VueApexCharts
              :type="this.chartoptions5.chart.type"
              :height="this.chartoptions5.chart.height"
              :width="this.chartoptions5.chart.width"
              :options="this.chartoptions5"
              :series="this.chartoptions5.series"
            ></VueApexCharts>
          </div>
          <div class="right-container-4-2">
            <div class="title">Page views</div>
            <div class="count">28,963<span class="sub-count">-4.5%</span></div>
            <VueApexCharts
              :type="this.chartoptions5.chart.type"
              :height="this.chartoptions5.chart.height"
              :width="this.chartoptions5.chart.width"
              :options="this.chartoptions5"
              :series="this.chartoptions5.series"
            ></VueApexCharts>
          </div>
        </div>
      </div>
      <div class="container-5">
        <div class="card-title1">Recent orders</div>
        <hlx-table-v2
    :border="['table', 'header', 'vertical', 'horizontal']"
    :boldHeaders="false"
    :rowHover="false"
    theme="grey"
    :stripedRows="false"
  >
    <template #thead>
      <hlx-table-head
        v-for="(i, index) in this.table_data.attributes"
        :key="index"
        >{{ i.label }}</hlx-table-head
      >
    </template>
    <template #tbody>
      <tr v-for="(i, index) in this.table_data.table_data" :key="index" id="">
        <hlx-table-cell
          v-for="(j, col_index) in this.table_data.attributes"
          :align="'left'"
          :key="col_index"
        >
          {{ i[j.prop] }}
        </hlx-table-cell>
      </tr>
    </template>
  </hlx-table-v2>
        <!-- <hlx-table-component :tableData="this.table_data.table_data" :theader="this.table_data.columns" :height="420" :editable="true" :rowPerPage="5" :selectable="true"/> -->
        <!-- <hlxTable :data="this.table_data.table_data"
    :border="true"
    theme="secondary"
    :rowHover="true"
    :ellipses="5"
    :pagination="true"
    :bold_header="true">
    <hlx-column :prop="'id'" :label="'ID'" :type="'string'" />
    <hlx-column :prop="'balance'" :label="'Balance'" :type="'integer'" />
    <hlx-column :prop="'percentage'" :label="'Percentage'" :type="'percentage'" />
    <hlx-column :prop="'picture'" :label="'Picture'" :type="'img'" />
    <hlx-column :prop="'age'" :label="'Age'" :type="'integer'" />
    <hlx-column :prop="'name'" :label="'Name'" :type="'string'" />
    <hlx-column :prop="'gender'" :label="'Gender'" :type="'string'" />
    <hlx-column :prop="'company'" :label="'Company'" :type="'string'" />
    <hlx-column :prop="'date'" :label="'Date'" :type="'date'" />
    <hlx-column :prop="'email'" :label="'Email'" :type="'string'" />
    </hlxTable> -->
      </div>
      <!-- <p v-for="(i,index) in Object.keys(this.table_data.table_data[0])" :key = "index">{{i}}</p> -->
      <footer>© 2022 Halleyx Inc. Copyright and rights reserved</footer>
      <div class="profile-options" v-if="this.profile_options == true" @click="this.profileSettings()">
        <div class="top">
          <div>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
            />
          </div>
          <div class="content">
            <div class="headerr">John Doe</div>
            <div class="sub-header">UI Developer</div>
          </div>
        </div>
        <div class="middle">
          <div
            class="content"
            v-for="(i, index) in this.profile_menu_data"
            :key="index"
          >
            <div class="icon"><i :class="i.icon"></i></div>
            <div class="item">{{ i.item }}</div>
          </div>
        </div>
        <div class="bottom">
          <div class="content">
            <div class="icon"><i class="icon-logout"></i></div>
            <div class="item">Logout</div>
          </div>
        </div>
      </div>
      <div class="notifications" v-if="this.notifications==true" @click="this.notificationsFunc()">
        <div class="top">Notifications</div>
        <div class="middle">
          <div class="contain" v-for="(t,index) in this.notifications_data" :key="index">
            <div class="icon">
              <i :class="t.icon"></i>
            </div>
            <div class="content">
              <div class="headerr">
                <div class="main">{{t.title}}</div>
                <div class="sub">{{t.time}}</div>
              </div>
              <div class="sub-header">{{t.message}}</div>
            </div>
          </div>
          <div class="contain">
            <div class="icon">
              <i class="icon-bulb"></i>
            </div>
            <div class="content">
              <div class="headerr">
                <div class="main">New orders</div>
                <div class="sub">2 mins ago</div>
              </div>
              <div class="sub-header">You have received new orders</div>
            </div>
          </div>
          <div class="contain">
            <div class="icon">
              <i class="icon-bulb"></i>
            </div>
            <div class="content">
              <div class="headerr">
                <div class="main">New orders</div>
                <div class="sub">2 mins ago</div>
              </div>
              <div class="sub-header">You have received new orders</div>
            </div>
          </div>
          <div class="contain">
            <div class="icon">
              <i class="icon-bulb"></i>
            </div>
            <div class="content">
              <div class="headerr">
                <div class="main">New orders</div>
                <div class="sub">2 mins ago</div>
              </div>
              <div class="sub-header">You have received new orders</div>
            </div>
          </div>
          <div class="contain">
            <div class="icon">
              <i class="icon-bulb"></i>
            </div>
            <div class="content">
              <div class="headerr">
                <div class="main">New orders</div>
                <div class="sub">2 mins ago</div>
              </div>
              <div class="sub-header">You have received new orders</div>
            </div>
          </div>
          <div class="contain">
            <div class="icon">
              <i class="icon-bulb"></i>
            </div>
            <div class="content">
              <div class="headerr">
                <div class="main">New orders</div>
                <div class="sub">2 mins ago</div>
              </div>
              <div class="sub-header">You have received new orders</div>
            </div>
          </div>
          <div class="contain">
            <div class="icon">
              <i class="icon-bulb"></i>
            </div>
            <div class="content">
              <div class="headerr">
                <div class="main">New orders</div>
                <div class="sub">2 mins ago</div>
              </div>
              <div class="sub-header">You have received new orders</div>
            </div>
          </div>
        </div>
        <div class="bottom">View all notifications</div>
      </div>
    </div>
  </div>
</template>

<script>
import hlxSearch from './SearchComponent.vue'
import Breadcrumb from './BreadcrumbComponent.vue'
import hlxTable from "../components/table/HlxTable.vue";
import hlxTableHead from "../components/table/HlxTableHead.vue";
import hlxTableCell from "../components/table/HlxTableCell.vue";
import VueApexCharts from 'vue3-apexcharts'
import CountryFlag from 'vue3-country-flag-icon'
import 'vue3-country-flag-icon/dist/CountryFlag.css'
import { Chart } from 'chart.js'
import card from './CardsComponent.vue'
import {
  ChoroplethController,
  GeoFeature,
  ColorScale,
  ProjectionScale

} from 'chartjs-chart-geo'
import * as ChartGeo from 'chartjs-chart-geo'

Chart.register(ChoroplethController, GeoFeature, ColorScale, ProjectionScale)
export default {
  name: 'hlx-dashboard-new',
  components: {
    VueApexCharts,
    CountryFlag,
    hlxSearch,
    Breadcrumb,
    card,
    hlxTableCell,
    hlxTableHead,
    hlxTable,
  },
  props: [
    'chartoptions1',
    'chartoptions2',
    'chartoptions3',
    'chartoptions4',
    'chartoptions5',
    'sales_by_country_table',
    'traffic_data',
    'breadcrumb_data',
    'sales_map_data',
    'header_card_data',
    'profile_menu_data',
    'notifications_data',
    'table_data'
  ],
  data () {
    return {
      scale: 1,
      zoomElement: '',
      zoomArea: document.querySelector('#canvas'),
      pointX: 0,
      pointY: 0,
      start: { x: 0, y: 0 },
      profile_options: false,
      notifications: false

    }
  },
  mounted () {
    setTimeout(() => {
      // console.log(Object.keys(this.table_data.table_data[0]));
      const a = document.querySelectorAll('.apexcharts-legend-text')
      const b = document.querySelectorAll('.apexcharts-legend-series')
      a.forEach((aa) => {
        aa.style.fontFamily = 'OpenSans'
        aa.style.fontSize = '14px'
      })
      b.forEach((aa) => {
        aa.style.marginTop = '20px'
      })
      const tag = document.querySelectorAll("[id^='SvgjsTspan']")

      tag.forEach((e) => {
        e.style.fontFamily = 'OpenSans'
      })
      fetch('https://unpkg.com/world-atlas/countries-50m.json')
        .then((r) => r.json())
        .then((data) => {
          const countries = ChartGeo.topojson.feature(
            data,
            data.objects.countries
          ).features
          // console.log(countries)

          new Chart(document.getElementById('canvas').getContext('2d'), {
            type: 'choropleth',
            data: {
              labels: countries.map((d) => d.properties.name),
              datasets: [
                {
                  label: 'Countries',
                  data: countries.map((d) => ({
                    feature: d,
                    value: Math.random()
                  }))
                }
              ]
            },
            options: {
              showOutline: false,
              showGraticule: false,
              plugins: {
                legend: {
                  display: false
                }
              },
              scales: {
                xy: {
                  projection: 'equalEarth'
                }
              }
            }
          })
        })
    }, 100)
  },
  methods: {
    search(){

    },
    setTransform () {
      this.zoomElement = document.querySelector('#canvas')
      // this.zoomElement.style.cursor = 'grabbing'
      // this.zoomElement.style.userSelect = 'none'
      this.zoomElement.style.transform =
        'translate(' +
        this.pointX +
        'px, ' +
        this.pointY +
        'px) scale(' +
        this.scale +
        ')'
    },
    zoomIn () {
      if (this.scale < 1.6) {
        this.scale += 0.2
        // this.zoomElement = document.querySelector('.mapp')
        // console.log('zoom in', this.zoomElement.style)
        // this.zoomElement.style.transform = 'translate(' + this.pointX + 'px ,' + this.pointY + 'px) scale(' + this.scale + ')'
        this.setTransform()
        // console.log('zoom in', this.scale)
      }
    },
    zoomOut () {
      if (this.scale > 1) {
        this.scale -= 0.1
        this.setTransform()
      }
    },
    profileSettings () {
      this.notifications = false
      if (this.profile_options == false) {
        this.profile_options = true
      } else if (this.profile_options == true) {
        this.profile_options = false
      }
    },
    notificationsFunc () {
      this.profile_options = false
      if (this.notifications == false) {
        this.notifications = true
      } else if (this.notifications == true) {
        this.notifications = false
      }
    }
  }
}
</script>
