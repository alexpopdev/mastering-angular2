import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'div[my-child-comp]',
    template: `
        <p>{{myText}}</p>
        <button class="btn btn-default" type="button" (click)="onClick()">Send message</button>`
})
export class ChildComponent { 
  @Input() myText: string;
  @Output() onChildMessage = new EventEmitter<string>();
  
  instanceId: number;
  static instanceCount: number = 0;
  constructor(){
    ChildComponent.instanceCount += 1;
    this.instanceId = ChildComponent.instanceCount;
  }

  onClick(){
    this.onChildMessage.emit(`Hello from ChildComponent with instance id: ${this.instanceId}`);
  }
}
