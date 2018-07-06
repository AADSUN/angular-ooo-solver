import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
