import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'div[my-child-comp]',
    template: `
        <p>{{myText}}</p>
        <button class="btn btn-default" type="button" (click)="onClick()">Send message</button>`
})
export class ChildComponent { 
  private static instanceCount: number = 0;  

  instanceId: number;
  @Input() myText: string;
  @Output() onChildMessage = new EventEmitter<string>();
  
  constructor(private appService: AppService){
    ChildComponent.instanceCount += 1;
    this.instanceId = ChildComponent.instanceCount;
  }

  onClick(){
    if(this.appService.getComponentMessages().length > 3){
      this.onChildMessage.emit(`There are too many messages ...`);
      return;
    }
    
    this.onChildMessage.emit(`Hello from ChildComponent with instance id: ${this.instanceId}`);
  }
}
