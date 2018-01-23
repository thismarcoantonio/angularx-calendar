import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CalendarComponent } from './calendar.component'
import { DragDirective } from './directives/drag.directive'
import { DropDirective } from './directives/drop.directive'

@NgModule({
  imports: [CommonModule],
  exports: [CalendarComponent, DragDirective, DropDirective],
  declarations: [CalendarComponent, DragDirective, DropDirective]
})
export class CalendarModule { }
