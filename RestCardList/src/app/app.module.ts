import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card/cardlist.component';
import { AppComponent }   from './app.component';
import {HttpModule} from "@angular/http";
@NgModule({
  imports:      [ BrowserModule ,  HttpModule],
  declarations: [ AppComponent , CardComponent, CardListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }