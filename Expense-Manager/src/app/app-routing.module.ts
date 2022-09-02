import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemsComponent } from './Component/add-items/add-items.component';
import { FormsComponent } from './Component/forms/forms.component';
import { ReactiveComponent } from './Component/reactive/reactive.component';
import { ViewComponent } from './Component/view/view.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';

const routes: Routes = [
{
  path: "Observables",
  component: ReactiveComponent
},
{
  path: "expenseEntry",
  component: ExpenseEntryComponent
},

{ path: "View/:id", 
  component: ViewComponent
},
{ path: "forms/:id", 
  component: FormsComponent
},
{ path: "addItems/:id", 
  component: AddItemsComponent
},

{ path: '', 
  redirectTo: 'expenseEntry', 
  pathMatch: 'full' 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
