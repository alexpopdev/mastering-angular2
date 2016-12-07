import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'div.container.my-app',
    template: `
    <div class="container text-center">
      <div class="row"><div class="col-md-12">
          <div class="page-header"><h1>{{title}}</h1></div>
          <p class="lead">{{description}}</p>
      </div></div>
      <div class="row">
        <div class="col-md-6 well" my-child-comp index="0"></div>      
        <div class="col-md-6 well" my-child-comp index="1"></div>         
      </div>
      <div class="row"><div class="col-md-12"><div class="well well-sm">
            <p><strong>Last message received:</strong> {{lastMessageReceived}}</p>
            <p><strong>Messages from child components:</strong> {{appService.getComponentMessages()}}</p>
      </div></div></div>          
    </div>`
})
export class AppComponent implements OnInit { 
  title: string;
  description: string;
  lastMessageReceived: string;
  constructor(private appService: AppService){
    this.title = 'Mastering Angular 2 - Chapter 4, Example 4';
    this.description = 'This is an example of how to communicate and share data between components via services.';    
  } 

  ngOnInit(){
    this.appService.appServiceMessage$.subscribe((message:string) => {
      this.lastMessageReceived = message;
    });
  }
}
