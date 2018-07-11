import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Form, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CurrentinputsComponent } from './currentinputs/currentinputs.component';

import { ItemService } from './services/item.service';
import { OddOneOutService } from './services/odd-one-out.service';
import { WikipediaService } from './services/wikipedia.service';

import { MoreInformationComponent } from './card/more-information/more-information.component';
import { MissingInputComponent } from './card/missing-input/missing-input.component';
import { AlternativeInputComponent } from './card/alternative-input/alternative-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    CurrentinputsComponent,
    MoreInformationComponent,
    MissingInputComponent,
    AlternativeInputComponent
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
