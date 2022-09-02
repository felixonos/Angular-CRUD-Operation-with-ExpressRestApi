import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../model/expense-entryInterface';
import { ExpenseEntryServiceService } from '../Services/expense-entry-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.scss']
})
export class ExpenseEntryComponent implements OnInit {

  title!: "Welcome";
  expenseEntries!: ExpenseEntry[];

  constructor(private restService: ExpenseEntryServiceService,private router: Router){} 
   

  ngOnInit():void{ this.getExpenseItems();}

  
  // Method to getItems on the table
  getExpenseItems() {
   this.restService.getExpenseEntries()
      .subscribe(data => this.expenseEntries = data);
  }

};





// showData($event: any) {
//   alert("button is clicked!");
//   if ($event) {
//     alert(JSON.stringify($event.target));
//     alert($event.target.value);
//   }





