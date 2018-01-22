import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEvent]'
})
export class EventDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('drag') onDrag() {
    
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
