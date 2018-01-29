import { Directive, ElementRef, HostListener, Input } from '@angular/core'
import { SharedService } from '../services/shared.service'

@Directive({
  selector: '[calendarDrag]'
})
export class DragDirective {
  @Input('calendarDrag') eventItem
  @Input('fromWhere') fromWhere

  constructor(private el: ElementRef, private shared: SharedService) {
    el.nativeElement.draggable = true
  }

  @HostListener('dragstart', ['$event']) onDragStart(e) {
    this.shared.event = this.eventItem
    this.shared.fromWhere = this.fromWhere
  }
}
