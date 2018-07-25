import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CurrentinputsComponent } from './currentinputs/currentinputs.component';
import { CardComponent } from './card/card.component';

import { ItemService } from './services/item.service';
import { OddOneOutService } from './services/odd-one-out.service';
import { WikipediaService } from './services/wikipedia.service';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    CurrentinputsComponent,
    CardComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ItemService,
    WikipediaService,
    OddOneOutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
