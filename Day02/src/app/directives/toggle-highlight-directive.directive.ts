import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleHighlightDirective]',
  standalone: true
})
export class ToggleHighlightDirectiveDirective {

  constructor(private el: ElementRef) { }
  @HostBinding("style.backgroundColor")
  color = "red";

  @HostListener("click")
  toggle() {
    this.el.nativeElement.style.backgroundColor = this.color;
    if (this.color == "red") this.color = "green";
    else this.color = "red";
  }
}
