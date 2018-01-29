import { Component, OnInit, Input } from '@angular/core'
import { CalendarService } from './services/calendar.service'

@Component({
  selector: 'ngx-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [ CalendarService ]
})
export class CalendarComponent implements OnInit {
  @Input() removeAfterDrop: boolean
  @Input() eventList: object
  @Input() days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  @Input() months: string[]

  label: string
  calendar = []
  events = []

  constructor(private mainService: CalendarService) {}

  ngOnInit() {
    if (this.months && this.months.length >= 12) {
      this.mainService.months = this.months
    }

    this.mainService.switchMonth(null, new Date().getMonth(), new Date().getFullYear())
    this.label = this.mainService.label
    this.calendar = this.mainService.calendar

    Object.keys(this.eventList).map(event => this.events.push({
      id: parseInt(event, 10),
      name: this.eventList[event]
    }))
  }

  switchMonth(condition) {
    this.mainService.switchMonth(condition)
    this.calendar = this.mainService.calendar
    this.label = this.mainService.label
  }

  remove(fromWhere, event) {
    const index = fromWhere.indexOf(event)

    fromWhere.splice(index, 1)
  }

  removeAfterDropHandle(e) {
    if (this.removeAfterDrop) {
      const index = this.events.indexOf(this.events.filter(event => event.id === e)[0])
      this.events.splice(index, 1)
    }
  }
}
