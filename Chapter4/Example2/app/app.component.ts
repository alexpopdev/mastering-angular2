import { Component } from '@angular/core';

@Component({
    selector: 'div.container.my-app',
    template: `
    <div class="container text-center">
      <div class="row"><div class="col-md-12">
          <div class="page-header"><h1>{{title}}</h1></div>
          <p class="lead">{{description}}</p>
      </div></div>
      <div class="row">
        <div class="col-md-6" my-child-comp myText="A child component goes here" (onChildMessage)="onChildMessageReceived($event)"></div>      
        <div class="col-md-6" my-child-comp [myText]="secondComponentText" (onChildMessage)="onChildMessageReceived($event)"></div>         
      </div>
      <div class="row"><div class="col-md-12"><div class="well well-sm">         
            <p>Last message from child components: <strong>{{lastMessage}}</strong></p>
      </div></div></div>          
    </div>`
})
export class AppComponent { 
  title: string;
  description: string;
  secondComponentText: string;
  lastMessage: string;
  constructor(){
    this.title = 'Mastering Angular 2 - Chapter 4, Example 2';
    this.description = 'This is an example for an Angular 2 root component with an element and class selector and a child component with an element attribute selector.';
    this.secondComponentText = 'Another child component goes here';
  }

  onChildMessageReceived($event: string)
  {
    this.lastMessage = $event;
  }
}
