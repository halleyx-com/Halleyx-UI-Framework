<template>
<h1 class="component-heading">Custom calendar</h1>
  <p class="component-description">
    custom calendar based on our style guide
  </p>
  <div class="component-example">
    <div class="example-body">
        <Calendar
      @selectedDate="receivedDate"
      :disable_weekend="this.disable_weekend"
      v-click-away="openCalendar"
      :event="this.calendar_pos"
      :pre_value="this.value"
      :start_year="this.start_year"
      :end_year="this.end_year"
      :holiday_list="this.holiday_list"
    />
    </div>
    <div class="example-footer">
        <!-- Replace your id wherever required -->
      <span class="icon" id="<your unique id here>-icon" @click="showCode('<your unique id here>')"><i class="icon-code-regular"></i></span>
    </div>
  </div>
  <hlx-divider :position="'horizontal'" :space="'20px'" />
</template>

<script>
import Calendar from '../components/CalendarComponent.vue'
import HlxDivider from '../components/DividerComponent.vue'

export default {
  components: {
    Calendar,
    HlxDivider
  },
  methods: {
    log (val) {
      console.log('date', val)
    },
    receivedDate (val) {
      this.value = val
      this.show_calendar = false
      this.blurDate()
    },
    openCalendar ($event) {
      this.calendar_pos = $event
      this.show_calendar = !this.show_calendar
      if (this.show_calendar === true) {
        this.focusDate()
      } else {
        this.blurDate()
      }
    },
  }
}
</script>

<style>

</style>
