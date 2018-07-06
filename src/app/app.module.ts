import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CurrentinputsComponent } from './currentinputs/currentinputs.component';

import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    CurrentinputsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
