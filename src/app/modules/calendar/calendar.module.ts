import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CalendarComponent } from './calendar.component'
import { DragDirective } from './directives/drag.directive'
import { DropDirective } from './directives/drop.directive'

import { SharedService } from './services/shared.service'

@NgModule({
  imports: [CommonModule],
  exports: [CalendarComponent, DragDirective, DropDirective],
  providers: [SharedService],
  declarations: [CalendarComponent, DragDirective, DropDirective]
})
export class CalendarModule { }
