import { Component } from '@angular/core';
import { ChildComponent } from './child.component';
import { Model } from './model';
import { AppService } from './app.service';

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
      <div class="col-md-12" *ngIf="models.length == 0">
        <p>There are no models loaded ...</p>
      </div> 
      <div class="col-md-6" my-child-comp *ngFor="let model of models" 
            [myId]="model.id" [myText]="model.description" (onChildMessage)="onChildMessageReceived($event)">
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="well well-sm"><p>Last message from a child component: <strong>{{lastMessage}}</strong></p></div>
      </div>
    </div>`,
    providers: [ AppService]
})
export class AppComponent {
  title: string;
  description: string;
  models: Model[];
  lastMessage: string;

  constructor(appService: AppService) {
    this.title = 'Mastering Angular 2 - Chapter 5, Example 1';
    this.description = 'This is an example for parent and child components using directives.';
    this.models = appService.getModels();
  }

  onChildMessageReceived($event: string) {
    this.lastMessage = $event;
  }
}
