import { Component, OnInit } from '@angular/core';

import { ExpenseEntryServiceService } from 'src/app/Services/expense-entry-service.service';
import { ExpenseEntry } from 'src/app/model/expense-entryInterface';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  title!: string;
 expenseEntry$!: Observable<ExpenseEntry>;
 expenseEntry: ExpenseEntry = {} as ExpenseEntry;
 selectedId!: number;


  constructor( private restService : ExpenseEntryServiceService, 
    private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.title = "Expense Entry";

        this.expenseEntry$ = this.route.paramMap.pipe(
        switchMap(params => {this.selectedId = Number(params.get('id'));
        return this.restService.getExpenseEntry(this.selectedId);
        }));
        this.expenseEntry$.subscribe( (data) => this.expenseEntry = data );
  }

  
  goToList() {
    this.router.navigate(['/expenses']);
    }
   
}
