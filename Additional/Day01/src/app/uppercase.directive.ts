import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
  standalone: true
})
export class UppercaseDirective {
   currentText :String;

  constructor(private el:ElementRef) {   
     this.currentText = el.nativeElement.textContent;
  }
  

  @HostListener("mouseenter")
  toUpperCase(){
    this.currentText=this.el.nativeElement.textContent;
    this.el.nativeElement.textContent=this.currentText.toUpperCase();
    console.log(this.currentText);
  }
 
  @HostListener("mouseleave")
  resetCase(){
    this.el.nativeElement.textContent=this.currentText;
  }

}
