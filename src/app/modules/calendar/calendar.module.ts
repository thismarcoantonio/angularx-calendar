import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CalendarComponent } from './calendar.component';
import { EventDirective } from './directives/event.directive';

@NgModule({
  imports: [CommonModule],
  exports: [CalendarComponent, EventDirective],
  declarations: [CalendarComponent, EventDirective]
})
export class CalendarModule { }
