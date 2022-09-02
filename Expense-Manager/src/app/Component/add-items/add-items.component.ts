import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseEntry } from 'src/app/model/expense-entryInterface';
import { ExpenseEntryServiceService } from 'src/app/Services/expense-entry-service.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {


  FormInput: ExpenseEntry = {
    id: 0,
    item: "",
    amount: 0,
    category: "",
    location: "",
    spendOn: new Date(),
    createdOn: new Date()
  }

  constructor(private restService: ExpenseEntryServiceService, private router: Router) { }

  ngOnInit(): void {
    
  }

// Method to addItems on the table
  AddExpense(){
  this.restService.addExpenseEntry(this.FormInput)
  .subscribe(data => this.FormInput = data);
  this.router.navigate(['/expenseEntry'])
  };
}
