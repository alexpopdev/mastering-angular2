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

  @Input() index: number; 
  myText: string;
  
  constructor(private appService: AppService){
    this.myText = appService.getComponentMessages()[this.index];
  }

  onClick(){
    if(this.appService.getComponentMessages().length > 3){
      this.appService.sendAppServiceMessage(`There are too many messages ...`);
      return;
    }
    
    this.appService.sendAppServiceMessage(`Hello from ChildComponent with index: ${this.index}`);
  }
}
