import { Component, ViewChildren, OnInit, QueryList } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
    selector: 'div.container.my-app',
    template: `
    <div class="container text-center">
      <div class="row"><div class="col-md-12">
          <div class="page-header"><h1>{{title}}</h1></div>
          <p class="lead">{{description}}</p>          
      </div></div>
      <div class="row">
        <div class="col-md-6">
          <button class="btn btn-default" type="button" (click)="firstChildComponent.myText='First child component goes here.'">Set first child component text</button>
          <button class="btn btn-default" type="button" (click)="firstChildComponent.onChildMessage.subscribe(onFirstChildComponentMessageReceived)">Set first child component message output</button>
        </div>      
        <div class="col-md-6">
          <button class="btn btn-default" type="button" (click)="setSecondChildComponentProperties()">Set second child component properties</button>
        </div>         
      </div>      
      <div class="row">
        <div class="col-md-6 well well-sm" my-child-comp #firstChildComponent></div>      
        <div class="col-md-6 well well-sm" my-child-comp id="secondChildComponent"></div>         
      </div>
      <div class="row"><div class="col-md-12"><div class="well well-sm">         
            <p>Last message from child components: <strong>{{lastMessage}}</strong></p>
      </div></div></div>          
    </div>`
})
export class AppComponent { 
  title: string;
  description: string;
  lastMessage: string;

  @ViewChildren(ChildComponent) childComponents: QueryList<ChildComponent>;

  constructor(){
    this.title = 'Mastering Angular 2 - Chapter 4, Example 4';
    this.description = 'This is an example for how to reference existing components from a parent component.';
    this.lastMessage = 'Waiting for child messages ...';
  }

  onFirstChildComponentMessageReceived($event: string)
  {
    alert($event);
  }
  
  setSecondChildComponentProperties(){    
    this.childComponents.last.myText = "The second child component goes here.";
    this.childComponents.last.onChildMessage.subscribe( (message: string) => { 
      this.lastMessage = message + ' (the message will be reset in 2 seconds)';
      setTimeout( ()=>{ this.lastMessage = 'Waiting for child messages ...';}, 2000);
    });
  }
}
