import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ngx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  label = "January 2018"
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  cache = {}
  calendar = []
  events = [
    {
      "_id": "123",
      "nome": "luisa"
    },
    {
      "_id": "1234",
      "nome": "lucas"
    },
    {
      "_id": "12345",
      "nome": "Gilmar"
    }
  ]
  eventList = {
    "123": "Luisa",
    "1234": "Lucas",
    "12345": "Gilmar"
  }


  constructor() { }

  ngOnInit() {
    this.switchMonth(null, new Date().getMonth(), new Date().getFullYear())
  }

  switchMonth(next, month, year) {
    const curr = this.label.trim().split(" ")
    const tempYear = parseInt(curr[1], 10)
    let calendar

    if ((isNaN(month) || month === null || month === undefined)) {
      if (next) {
        if (curr[0] === "December") {
          month = 0
        } else {
          month = this.months.indexOf(curr[0]) + 1
        }
      } else {
        if (curr[0] === "January") {
          month = 11
        } else {
          month = this.months.indexOf(curr[0]) - 1
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
    let daysInMonths = [31, (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let calendar = []

    if (this.cache[year]) {
      if (this.cache[year][month]) {
        this.label = this.months[month] + " " + year
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
          calendar[i][j] = { events: [], day: ""}
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
        if (calendar[5][i] !== "") {
          calendar[4][i] = "<span>" + calendar[4][i] + "</span><span>" + calendar[5][i] + "</span>"
        }
      }
      calendar = calendar.slice(0, 5)
    }

    this.cache[year][month] = { calendar, label: this.months[month] + " " + year }

    this.label = this.months[month] + " " + year

    console.log(this.cache[year][month])

    return this.cache[year][month]

  }
}