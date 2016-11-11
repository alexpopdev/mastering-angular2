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
     <p class="lead">This are the lifecycle events for a child component:</p>
        <p>{{childEvents}}</p>
        <button class="btn btn-default" type="button" (click)="onClick()">Send message</button>`
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked {
    childEvents: string[];
  @Output() onChildMessage = new EventEmitter < string > ();

  constructor() {
    this.childEvents = [];
  }

  ngOnInit(): void {
    this.childEvents.push(` [${new Date().toLocaleTimeString()}]-ngOnInit`);
  }

  ngOnChanges(): void {
    this.childEvents.push(` [${new Date().toLocaleTimeString()}]-ngOnChanges`);
  }

  ngDoCheck(): void {
    this.childEvents.push(` [${new Date().toLocaleTimeString()}]-ngDoCheck`);
  }

  ngAfterContentInit(): void {
    this.childEvents.push(` [${new Date().toLocaleTimeString()}]-ngAfterContentInit`);
  }

    ngAfterContentChecked(): void {
    this.childEvents.push(` [${new Date().toLocaleTimeString()}]-ngAfterContentChecked`);
  }
    ngAfterViewInit(): void {
      console.log(`child: [${new Date().toLocaleTimeString()}]-ngAfterViewInit`);
    //this.childEvents.push(` [${new Date().toLocaleTimeString()}]-ngAfterViewInit`);
  }
    ngAfterViewChecked(): void {
      console.log(`child: [${new Date().toLocaleTimeString()}]-ngAfterViewChecked`);
    //this.childEvents.push(` [${new Date().toLocaleTimeString()}]-ngAfterViewChecked`);
  }

  onClick() {
    this.onChildMessage.emit(`Hello from ChildComponent with at: ${new Date().toLocaleTimeString()}`);    
  }
}
