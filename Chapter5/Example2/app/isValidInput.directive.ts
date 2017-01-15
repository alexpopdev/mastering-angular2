import {
  Directive,
  ElementRef,
  Input,
  HostListener

} from '@angular/core';

@Directive({
  selector: 'input[myIsValidInput]'
}) 
export class IsValidInputDirective{
  constructor(private el: ElementRef) {}

  @HostListener('input') onInput() {
    this.validateInput();
  }  
  
  private validateInput() {
    if (!this.el.nativeElement.value) {
      this.el.nativeElement.style.backgroundColor = 'red';
    } else {
      this.el.nativeElement.style.backgroundColor = 'white';
    }
  }
}
