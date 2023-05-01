import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultHeight: number = 250;

  //======================================
  constructor(private el: ElementRef) {
    this.setHight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  private setHight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
