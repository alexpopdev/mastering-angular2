import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  DoCheck
} from '@angular/core';

@Component({
  selector: 'div[my-child-comp]',
  template: `
     <p class="lead">This are the lifecycle events for a child component:</p>
        <p>{{childEvents}}</p>
        <button class="btn btn-default" type="button" (click)="onClick()">Send message</button>`
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  childEvents: string[];
  @Output() onChildMessage = new EventEmitter < string > ();

  constructor() {
    this.childEvents = [];
  }

  ngOnInit(): void {
    this.childEvents.push(`${new Date().toLocaleTimeString()} - ngOnInit;`);
  }

  ngOnChanges(): void {
    this.childEvents.push(`${new Date().toLocaleTimeString()} - ngOnChanges;`);
  }

  ngDoCheck(): void {
    this.childEvents.push(`${new Date().toLocaleTimeString()}-ngDoCheck`);
  }
    onClick() {
    this.onChildMessage.emit(`Hello from ChildComponent with at: ${new Date().toLocaleTimeString()}`);
  }
}
