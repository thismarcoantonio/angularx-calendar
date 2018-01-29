import { Directive, ElementRef, HostListener, Input } from '@angular/core'
import { SharedService } from '../services/shared.service'

@Directive({
  selector: '[calendarDrop]'
})
export class DropDirective {
  @Input('calendarDrop') dropEvent

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

    if (this.shared.fromWhere && !this.dropEvent.includes(this.shared.event)) {
      const index = this.shared.fromWhere.indexOf(this.shared.event)

      this.shared.fromWhere.splice(index, 1)
    }

    this.el.nativeElement.style.background = 'none'
    if (!this.dropEvent) { this.dropEvent = [] }

    if (this.dropEvent.includes(this.shared.event)) {
      alert('cant add same events')
      return
    }

    this.dropEvent.unshift(this.shared.event)
  }
}
