import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseEntry } from 'src/app/model/expense-entryInterface';
import { ExpenseEntryServiceService } from 'src/app/Services/expense-entry-service.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {

    expenseEntries: ExpenseEntry[] = [];
    expenseEntry$!: Observable<any>;
    selectedId!: number;

    FormEntry: ExpenseEntry = {
      id: 0,
      item: "",
      amount: 0,
      category: "",
      location: "",
      spendOn: new Date(),
      createdOn: new Date()
    }

    constructor(private restService: ExpenseEntryServiceService,
    private router: Router, private activatedroute: ActivatedRoute) { }


    ngOnInit(): void {
      this.expenseEntry$ = this.activatedroute.paramMap.pipe(
        switchMap(params => {
          this.selectedId = Number(params.get('id'));
          return this.restService.getExpenseEntry(this.selectedId);
        }));

      this.expenseEntry$.subscribe((data) => this.FormEntry = data);
      this.getpost(this.selectedId)
    }

    getpost(id: number) {
      this.restService.getExpenseEntry(id)
        .subscribe(data => this.FormEntry = data);
    }


    // where the onsubmit is log from formsComponent.Html to populate the table in view
    onSubmit() {
      this.restService.updateExpenseEntry(this.FormEntry.id, this.FormEntry)
        .subscribe(data => this.FormEntry = data);
      this.router.navigate(['/expenseEntry'])
    }

    
    // Method to delete the items from table by id
    deleteExpenseItem(id: number) {
      this.restService.deleteExpenseEntry(id)
        .subscribe(data => this.router.navigate(['/expenseEntry']))
    }
  

};



