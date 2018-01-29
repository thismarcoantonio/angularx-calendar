import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core'
import { SharedService } from '../services/shared.service'

@Directive({
  selector: '[calendarDrop]'
})
export class DropDirective {
  @Input('calendarDrop') dropEvent
  @Output() removeAfterDrop: EventEmitter<number> = new EventEmitter<number>()

  constructor(private el: ElementRef, private shared: SharedService) {}

  @HostListener('dragover', ['$event']) onDragOver(e) {
    e.preventDefault()
    this.el.nativeElement.style.background = '#e6faff'
  }

  @HostListener('dragleave', ['$event']) onDragLeave(e) {
    e.preventDefault()
    this.el.nativeElement.style.background = 'none'
  }

  @HostListener('drop', ['$event']) onDrop(e) {
    e.preventDefault()

    this.el.nativeElement.style.background = 'none'
    if (!this.dropEvent) { this.dropEvent = [] }

    if (this.dropEvent.includes(this.shared.event)) {
      alert('cant add same events')
      return
    } else {
      if (this.shared.fromWhere) {
        const index = this.shared.fromWhere.indexOf(this.shared.event)
        this.shared.fromWhere.splice(index, 1)
      } else {
        this.removeAfterDrop.emit(this.shared.event)
      }
    }

    this.dropEvent.unshift(this.shared.event)
  }
}
