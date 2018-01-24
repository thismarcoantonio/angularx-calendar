import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
  selector: '[calendarDrop]'
})
export class DropDirective {
  @Input('calendarDrop') dropEvent

  constructor(private el: ElementRef) {}

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
    if(!this.dropEvent) { this.dropEvent = [] }
    
    const data = JSON.parse(e.dataTransfer.getData('object'))
    if(this.dropEvent.includes(data)) {
      alert('cant add same events')
      return
    }

    this.dropEvent.push(data)
  }
}