import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ReactiveComponent } from './Component/reactive/reactive.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './Component/view/view.component';
import { FormsComponent } from './Component/forms/forms.component';
import { FormsModule } from '@angular/forms';
import { AddItemsComponent } from './Component/add-items/add-items.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    ReactiveComponent,
    ViewComponent,
    FormsComponent,
    AddItemsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
