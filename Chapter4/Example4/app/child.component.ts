import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  AppService
} from './app.service';

@Component({
  selector: 'div[my-child-comp]',
  template: `
        <p>{{myText}}</p>
        <button class="btn btn-default" type="button" (click)="onClick()">Send message</button>`
})
export class ChildComponent implements OnInit {
  @Input() index: number;
  myText: string;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.myText = this.appService.getComponentDescription(this.index);
  }

  onClick() {
    if (this.appService.getComponentMessages().length > 3) {
      this.appService.sendMessage(`There are too many messages ...`);
      return;
    }

    this.appService.sendMessage(`Hello from ChildComponent with index: ${this.index}`);
  }
}
