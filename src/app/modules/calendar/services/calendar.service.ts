import { Injectable } from '@angular/core'

@Injectable()
export class CalendarService {
  label = 'January 2018'
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  calendar = []
  cache = {}

  curr = {
    month: this.months[new Date().getMonth()],
    year: new Date().getFullYear()
  }

  constructor() { }

  switchMonth(next, month = null, year = null) {
    const curr = this.curr
    const tempYear = curr.year

    if ((isNaN(month) || month === null || month === undefined)) {
      if (next) {
        if (curr.month === this.months[11]) {
          month = 0
        } else {
          month = this.months.indexOf(curr.month) + 1
        }
      } else {
        if (curr.month === this.months[0]) {
          month = 11
        } else {
          month = this.months.indexOf(curr.month) - 1
        }
      }
    }

    if ((isNaN(year) || year === null || year === undefined)) {
      if (next && month === 0) {
        year = tempYear + 1
      } else if (!next && month === 11) {
        year = tempYear - 1
      } else {
        year = tempYear
      }
    }

    this.calendar = this.createCal(year, month).calendar
  }

  createCal(year, month) {
    let day = 1
    let i
    let j
    let haveDays = true
    let startDay = new Date(year, month, day).getDay()
    let calendar = []
    const daysInMonths = [31, (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (this.cache[year]) {
      if (this.cache[year][month]) {
        this.label = this.months[month] + ' ' + year
        this.curr = {
          month: this.months[month],
          year
        }
        return this.cache[year][month]
      }
    } else {
      this.cache[year] = {}
    }

    i = 0
    while (haveDays) {
      calendar[i] = []
      for (j = 0; j < 7; j++) {
        if (i === 0) {
          if (j === startDay) {
            calendar[i][j] = { events: [], day: day++}
            startDay++
          }
        } else if (day <= daysInMonths[month]) {
          calendar[i][j] = { events: [], day: day++}
        } else {
          calendar[i][j] = { events: [], day: ''}
          haveDays = false
        }
        if (day > daysInMonths[month]) {
          haveDays = false
        }
      }
      i++
    }

    if (calendar[5]) {
      for (i = 0; i < calendar[5].length; i++) {
        if (calendar[5][i] !== '') {
          calendar[4][i].day = calendar[4][i].day + '' + calendar[5][i].day
        }
      }
      calendar = calendar.slice(0, 5)
    }

    this.cache[year][month] = { calendar, label: this.months[month] + ' ' + year }
    this.label = this.months[month] + ' ' + year

    this.curr = {
      month: this.months[month],
      year
    }

    return this.cache[year][month]
  }
}
