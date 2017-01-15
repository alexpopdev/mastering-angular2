import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { IsValidInputDirective }  from './isValidInput.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, IsValidInputDirective ],  
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
