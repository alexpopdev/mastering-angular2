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
          <h2>These are the lifecycle events for the parent component:</h2>
          <p class="lead">Parent component initial lifecycle events:</p>
          <p>{{initialParentEvents}}</p>
          <p class="lead">Parent component continuous lifecycle events:</p>
          <p>{{continuousParentEvents}}</p>
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
  initialParentEvents: string[];
  continuousParentEvents: string[];

  secondComponentText: string;
  lastMessage: string;

  private hasInitialLifecycleFinished: boolean = false;
  private ngAfterViewCheckedEventCount: number = 0;

  constructor() {
    this.title = 'Mastering Angular 2 - Chapter 4, Example 3';
    this.initialParentEvents = [];
    this.continuousParentEvents = [];
  }

  private logEvent(message: string) {
    if (!this.hasInitialLifecycleFinished) {
      this.initialParentEvents.push(message);
    } else {
      this.continuousParentEvents.push(message);
    }
  }

  ngOnInit(): void {
    this.logEvent(` [${new Date().toLocaleTimeString()}]-ngOnInit`);
  }

    ngOnChanges(): void {
    this.logEvent(` [${new Date().toLocaleTimeString()}]-ngOnChanges`);
  }

    ngDoCheck(): void {
    this.logEvent(` [${new Date().toLocaleTimeString()}]-ngDoCheck`);
  }

    ngAfterContentInit(): void {
    this.logEvent(` [${new Date().toLocaleTimeString()}]-ngAfterContentInit`);
  }

    ngAfterContentChecked(): void {
    this.logEvent(` [${new Date().toLocaleTimeString()}]-ngAfterContentChecked`);
  }
  ngAfterViewInit(): void {
    console.log(`parent: [${new Date().toLocaleTimeString()}]-ngAfterViewInit`);
    //this.parentEvents.push(` [${new Date().toLocaleTimeString()}]-ngAfterViewInit`);
  }
  ngAfterViewChecked(): void {
    this.ngAfterViewCheckedEventCount += 1;
    if (this.ngAfterViewCheckedEventCount === 2) {
      this.hasInitialLifecycleFinished = true;
    }
    
    console.log(`parent: [${new Date().toLocaleTimeString()}]-ngAfterViewChecked`);
  }

    onChildMessageReceived($event: string) {
    this.lastMessage = $event;
  }
}
