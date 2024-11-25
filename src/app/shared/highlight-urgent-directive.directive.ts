import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightUrgent]',
  standalone: true,
})
export class HighlightUrgentDirectiveDirective implements OnChanges {
  @Input('appHighlightUrgent') dueDate!: Date;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    const currentTime = new Date().getTime();
    const dueTime = new Date(this.dueDate).getTime();
    const timeDifference = dueTime - currentTime;

    // Apply styles if the task is due in the next 24 hours
    if (timeDifference > 0 && timeDifference <= 24 * 60 * 60 * 1000) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ffcccc');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border');
      this.renderer.removeStyle(this.el.nativeElement, 'background-color');
    }
  }
}
