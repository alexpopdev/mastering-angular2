import { Component } from '@angular/core';

@Component({
  selector: 'div.container.text-center.my-app',
  template: `    
    <div class="row">
      <div class="col-md-12">
        <div class="page-header">
          <h1>{{title}}</h1></div>
          <p class="lead">{{description}}</p>
        </div>
      </div>
    <div class="row">
      <div class="col-md-12">
        <p>
          <label for="message-input">Customize message:</label>
          <input id="message-input" type="text" [(ngModel)]="message" myIsValidInput>
         </p>
         <p>
          <button [disabled]="!message" class="btn btn-default" type="button" (click)="onMessageSent(message)">Send message</button>
        </p>        
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="well well-sm"><p>Last message received: <strong>{{lastMessage}}</strong></p></div>
      </div>
    </div>`
})
export class AppComponent{
  title: string;
  description: string;
  message: string;
  lastMessage: string;

  constructor() {
    this.title = 'Mastering Angular 2 - Chapter 5, Example 2';
    this.description = 'This is an example for attribute directives.';
  }
    
  onMessageSent($event: string) {
    this.lastMessage = $event;
  }
}
