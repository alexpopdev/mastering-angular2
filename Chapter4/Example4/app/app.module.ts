import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ChildComponent }  from './child.component';
import { AppService } from './app.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ChildComponent ],
  providers:    [ AppService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
