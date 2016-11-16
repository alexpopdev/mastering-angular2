import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'div[my-child-comp]',
  template: `
  <p class="lead">These are the lifecycle events for a child component:</p>
  <p class="lead">Child component initial lifecycle events:</p>
  <p>{{initialChildEvents}}</p>
  <p class="lead">Child component continuous lifecycle events:</p>
  <p>{{continuousChildEvents}}</p>
  <button class="btn btn-default" type="button" (click)="onClick()">Send message</button>`
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked {
  initialChildEvents: string[];
  continuousChildEvents: string[];
  @Output() onChildMessage = new EventEmitter < string > ();

  private hasInitialLifecycleFinished: boolean = false;
  private ngAfterViewCheckedEventCount: number = 0;

  constructor() {
    this.initialChildEvents = [];
    this.continuousChildEvents = [];
  }

  private logEvent(message: string) {
    if (!this.hasInitialLifecycleFinished) {
      this.initialChildEvents.push(message);
    } else {
      this.continuousChildEvents.push(message);
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
    console.log(`child: [${new Date().toLocaleTimeString()}]-ngAfterViewInit`);
    //this.childEvents.push(` [${new Date().toLocaleTimeString()}]-ngAfterViewInit`);
  }
  ngAfterViewChecked(): void {
    this.ngAfterViewCheckedEventCount += 1;
    if (this.ngAfterViewCheckedEventCount === 2) {
      this.hasInitialLifecycleFinished = true;
    }

    console.log(`child: [${new Date().toLocaleTimeString()}]-ngAfterViewChecked`);
  }

  onClick() {
    this.onChildMessage.emit(`Hello from ChildComponent at: ${new Date().toLocaleTimeString()}`);
  }
}
