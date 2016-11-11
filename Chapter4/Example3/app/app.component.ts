import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,  
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'div.container.my-app',
  template: `
    <div class="container text-center">
      <div class="row"><div class="col-md-12">
          <div class="page-header"><h1>{{title}}</h1></div>
          <p class="lead">These are the lifecycle events for the parent component:</p>
          <p>{{parentEvents}}</p>
      </div></div>
      <div class="row">
        <div class="col-md-12" my-child-comp (onChildMessage)="onChildMessageReceived($event)"></div>
      </div>
      <div class="row"><div class="col-md-12"><div class="well well-sm">         
            <p>Last message from child component: <strong>{{lastMessage}}</strong></p>
      </div></div></div>          
    </div>`
})
export class AppComponent implements OnInit {
  title: string;
  parentEvents: string[];
  secondComponentText: string;
  lastMessage: string;

  constructor() {
    this.title = 'Mastering Angular 2 - Chapter 4, Example 3';
    this.parentEvents = [];
  }

  ngOnInit(): void {
    this.parentEvents.push(` [${new Date().toLocaleTimeString()}]-ngOnInit`);
  }

    ngOnChanges(): void {
    this.parentEvents.push(` [${new Date().toLocaleTimeString()}]-ngOnChanges`);
  }

    ngDoCheck(): void {
    this.parentEvents.push(` [${new Date().toLocaleTimeString()}]-ngDoCheck`);
  }

    ngAfterContentInit(): void {
    this.parentEvents.push(` [${new Date().toLocaleTimeString()}]-ngAfterContentInit`);
  }

    ngAfterContentChecked(): void {
    this.parentEvents.push(` [${new Date().toLocaleTimeString()}]-ngAfterContentChecked`);
  }
    ngAfterViewInit(): void {
      console.log(`parent: [${new Date().toLocaleTimeString()}]-ngAfterViewInit`);
    //this.parentEvents.push(` [${new Date().toLocaleTimeString()}]-ngAfterViewInit`);
  }
    ngAfterViewChecked(): void {
      console.log(`parent: [${new Date().toLocaleTimeString()}]-ngAfterViewChecked`);
    //this.parentEvents.push(` [${new Date().toLocaleTimeString()}]-ngAfterViewChecked`);
  }

    onChildMessageReceived($event: string) {
    this.lastMessage = $event;
  }
}
