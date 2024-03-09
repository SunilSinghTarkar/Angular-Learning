import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el:ElementRef) { }
    
  @HostListener("mouseenter")
   changeBackgroundColor(){
    this.el.nativeElement.style.backgroundColor="yellow";
   }
  @HostListener("mouseleave")
   resetBackgroundColor(){
    this.el.nativeElement.style.backgroundColor="";
   }


}
