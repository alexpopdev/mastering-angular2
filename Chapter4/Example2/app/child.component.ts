import { Component, Input } from '@angular/core';

@Component({
    selector: 'div[my-child-comp]',
    template: `<p>{{myText}}</p>`
})
export class ChildComponent { 
  @Input() myText: string;
  
  constructor(){
  }
}
