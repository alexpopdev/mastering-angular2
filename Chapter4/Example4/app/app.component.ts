import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'div.container.my-app',
    template: `
    <div class="container text-center">
      <div class="row"><div class="col-md-12">
          <div class="page-header"><h1>{{title}}</h1></div>
          <p class="lead">{{description}}</p>
      </div></div>
      <div class="row">
        <div class="col-md-6 well" my-child-comp [myText]="appService.getComponentDescription(0)" (onChildMessage)="appService.onComponentMessageReceived($event)"></div>      
        <div class="col-md-6 well" my-child-comp [myText]="appService.getComponentDescription(1)" (onChildMessage)="appService.onComponentMessageReceived($event)"></div>         
      </div>
      <div class="row"><div class="col-md-12"><div class="well well-sm">         
            <p>Messages from child components: <strong>{{appService.getComponentMessages()}}</strong></p>
      </div></div></div>          
    </div>`
})
export class AppComponent { 
  title: string;
  description: string;
  
  constructor(private appService: AppService){
    this.title = 'Mastering Angular 2 - Chapter 4, Example 4';
    this.description = 'This is an example of how to communicate and share data between components via services.';    
  } 
}
