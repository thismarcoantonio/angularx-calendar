import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[calendarDrag]'
})
export class DragDirective {
  @Input('calendarDrag') eventItem

  constructor(private el: ElementRef) {
    el.nativeElement.draggable = true
  }

  @HostListener('dragstart', ['$event']) onDragStart(e) {
    e.dataTransfer.setData('object', JSON.stringify(this.eventItem))
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }
}
