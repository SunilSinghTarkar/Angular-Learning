import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appConditionalDisplayDirective]',
  standalone: true
})
export class ConditionalDisplayDirectiveDirective {

  isParagraphVisible:boolean=true;
  
  @Output() visibilityChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener("click")
  toggleVisibility(){
    console.log("appConditionalDisplayDirective",this.isParagraphVisible)
    this.isParagraphVisible=!this.isParagraphVisible;
    this.visibilityChange.emit(this.isParagraphVisible);
  }
}
