<template>
  <div class="light">
    <div class="calendar">
        <div class="calendar-header">
            <div class="year-picker">
                <span class="year-change" id="prev-year">
                    <p style="margin: 0px"><i class="icon-angle-left-regular"></i></p>
                </span>
                <span>
                <span class="month-picker" id="month-picker">February</span>
                <span id="year">2021</span>
                </span>
                <span class="year-change" id="next-year">
                    <p style="margin: 0px"><i class="icon-angle-right-regular"></i></p>
                </span>
            </div>
        </div>
        <div class="calendar-body">
            <div class="calendar-week-day">
                <div>SUN</div>
                <div>MON</div>
                <div>TUE</div>
                <div>WED</div>
                <div>THU</div>
                <div>FRI</div>
                <div>SAT</div>
            </div>
            <div class="calendar-days" @click="log"></div>
        </div>
        <!-- <div class="calendar-footer">

        </div> -->
        <div class="month-list"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hlx-calendar',
  props: {
    disable_weekend: {
      type: Boolean,
      default: false
    },
    event: {
      type: [Array, PointerEvent]
    },
    pre_value: {
      type: [Date, String],
      default: ''
    },
    start_year: {
      type: Number,
      default: 1950
    },
    end_year: {
      type: Number,
      default: 2050
    },
    holiday_list: {
      type: Array
    }
  },
  data () {
    return {
      selectedMonth: '',
      selectedYear: '',
      selectedDay: ''
    }
  },
  methods: {
    log ($event) {
      // console.log($event.target.innerHTML);
      if ($event.target.innerHTML !== '') {
        if ($event.target.innerHTML.length <= 2) {
          if ($event.target.innerHTML.length < 2) {
            this.selectedDay = 0 + $event.target.innerHTML
          } else {
            this.selectedDay = $event.target.innerHTML
          }
          //   this.selectedMonth += 1
          //   this.selectedMonth = String(this.selectedMonth)
          //   if (this.selectedMonth < 10) {
          //     this.selectedMonth = '0' + String(this.selectedMonth+1)
          //   }
          //   console.log(this.selectedMonth)
          this.selectedDate = this.selectedDay + '-' + ((this.selectedMonth + 1) < 10 ? ('0' + String(this.selectedMonth + 1)) : (this.selectedMonth + 1)) + '-' + this.selectedYear
          this.$emit('selectedDate', this.selectedDate)
        }
      }
    },
    isLeapYear (year) {
      return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
    },
    getFebDays (year) {
      return this.isLeapYear(year) ? 29 : 28
    },
    generateCalendar (month, year) {
      const calendar = document.querySelector('.calendar')

      const calendarDays = calendar.querySelector('.calendar-days')
      const calendarHeaderYear = calendar.querySelector('#year')

      const daysOfMonth = [31, this.getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

      calendarDays.innerHTML = ''

      let currDate = ''
      if (this.pre_value === '') {
        currDate = new Date()
      } else {
        const d = this.pre_value.split('-')
        currDate = new Date(d[2], d[1] - 1, d[0])
      }
      //   if (!month) month = currDate.getMonth()
      if (!year) year = currDate.getFullYear()
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const currMonth = `${monthNames[month]}`
      const monthPicker = calendar.querySelector('#month-picker')

      monthPicker.innerHTML = currMonth
      calendarHeaderYear.innerHTML = year

      // get first day of month

      const firstDay = new Date(year, month, 1)

      for (let i = 0; i <= daysOfMonth[month] + firstDay.getDay() - 1; i++) {
        const day = document.createElement('div')
        if (i >= firstDay.getDay()) {
          day.classList.add('calendar-day-hover')
          const dateClass = new Date(year, month, i)
          const x = i - firstDay.getDay() + 1 + '-' + String(Number(dateClass.getMonth()) + 1) + '-' + dateClass.getFullYear()
          day.classList.add(x)
          if (this.holiday_list.length > 0) {
            this.holiday_list.forEach((d) => {
              if (d === x) {
                day.classList.remove('calendar-day-hover')
                day.classList.add('disable-weekend')
              }
            })
          }
          day.innerHTML = i - firstDay.getDay() + 1
          day.innerHTML += ''
          if (i - firstDay.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
            day.classList.add('curr-date')
          }
        }
        calendarDays.appendChild(day)
      }
      if (this.disable_weekend === true) {
        const currMnthDays = document.querySelector('.calendar-days').children
        const weekEnds = [0, 6, 7, 13, 14, 20, 21, 27, 28, 34, 35]
        for (const day in weekEnds) {
          if (currMnthDays[weekEnds[day]] && currMnthDays[weekEnds[day]].innerHTML !== '') {
            // console.log(currMnthDays[weekEnds[day]])
            currMnthDays[weekEnds[day]].classList.remove('calendar-day-hover')
            currMnthDays[weekEnds[day]].classList.add('disable-weekend')
          }
        }
      }
    }
  },
  mounted () {
    // console.log(this.event.clientY)
    const calendar = document.querySelector('.calendar')
    const light = document.querySelector('.light')
    calendar.clientY = this.event.clientY
    light.right = this.event.clientX + 'px'
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const yearNames = []
    let startYear = this.start_year
    const endYear = this.end_year
    while (startYear <= endYear) {
      yearNames.push(startYear++)
    }
    const monthList = calendar.querySelector('.month-list')

    yearNames.forEach((e, index) => {
      const month = document.createElement('div')
      month.innerHTML = `<div data-month="${index}" id="year${index}">${e}</div>`
      const currDate = new Date()
      let y = currDate.getFullYear()
      y += 1
      if (e === y) {
        document.getElementById('year' + (index - 1)).classList.add('theme-background')
        document.getElementById('year' + (index - 1)).style.color = 'white'
      }
      month.querySelector('div').onclick = () => {
        monthList.classList.remove('show')
        currYear.value = e
        this.selectedMonth = currMonth.value
        this.selectedYear = currYear.value
        this.generateCalendar(currMonth.value, currYear.value)
      }
      monthList.appendChild(month)
    })

    // const monthPicker = calendar.querySelector('#month-picker')
    const yearPicker = calendar.querySelector('#year')

    yearPicker.onclick = () => {
      monthList.classList.add('show')
      localStorage.setItem('calendarScroll', 680)
      monthList.scrollTo(0, localStorage.getItem('calendarScroll'))
    }
    // monthPicker.onclick = () => {
    //   monthList.classList.add('show')
    // }
    let currDate = ''
    if (this.pre_value === '') {
      currDate = new Date()
    } else {
      const d = this.pre_value.split('-')
      currDate = new Date(d[2], d[1] - 1, d[0])
    }
    const currMonth = { value: currDate.getMonth() }
    const currYear = { value: currDate.getFullYear() }
    this.selectedMonth = currMonth.value
    this.selectedYear = currYear.value
    this.generateCalendar(currMonth.value, currYear.value)
    const calendarHeight = document.querySelector('.calendar')
    if (calendarHeight.offsetHeight === 340) {
      calendarHeight.style.marginTop = '-35px'
    } else {
      calendarHeight.style.marginTop = '0px'
    }
    document.querySelector('#prev-year').onclick = () => {
      if (monthNames[currMonth.value] === 'January') {
        currMonth.value = 11
        --currYear.value
      } else {
        --currMonth.value
      }
      this.selectedMonth = currMonth.value
      this.selectedYear = currYear.value
      this.generateCalendar(currMonth.value, currYear.value)
      const calendarHeight = document.querySelector('.calendar')
      if (calendarHeight.offsetHeight === 340) {
        calendarHeight.style.marginTop = '-35px'
      } else {
        calendarHeight.style.marginTop = '0'
      }
    }

    document.querySelector('#next-year').onclick = () => {
      const calendarHeight = document.querySelector('.calendar')
      if (monthNames[currMonth.value] === 'December') {
        currMonth.value = 0
        ++currYear.value
      } else {
        ++currMonth.value
      }
      this.selectedMonth = currMonth.value
      this.selectedYear = currYear.value
      this.generateCalendar(currMonth.value, currYear.value)
      if (calendarHeight.offsetHeight === 340) {
        calendarHeight.style.marginTop = '-35px'
      } else {
        calendarHeight.style.marginTop = '0'
      }
    }
  }
}
</script>

<style lang="scss">

</style>
