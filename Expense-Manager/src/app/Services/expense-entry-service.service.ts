import { Injectable } from '@angular/core';
import { ExpenseEntry } from '../model/expense-entryInterface';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ExpenseEntryServiceService {


  private expenseRestUrl = 'http://localhost:8000/api/expense';
  private httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json'}) 
  };

  constructor(private httpclient: HttpClient) { }


  // Get all Details from API address
  getExpenseEntries(): Observable<ExpenseEntry[]> {
    return this.httpclient.get<ExpenseEntry[]>(this.expenseRestUrl,
      this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.httpErrorHandler)
      );
  };


  // Get details from the Api address by ID
  getExpenseEntry(id: number): Observable<ExpenseEntry> {
    return this.httpclient.get<ExpenseEntry>(this.expenseRestUrl + "/" +
      id, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.httpErrorHandler)
      );
  };


  // post or Add service
  addExpenseEntry(expenseEntries: ExpenseEntry): Observable<ExpenseEntry> {
    return this.httpclient.post<ExpenseEntry>(this.expenseRestUrl,
      expenseEntries, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.httpErrorHandler)
      );
  };


// update service
  updateExpenseEntry(id: number, expenseEntries:  ExpenseEntry): Observable <ExpenseEntry> {
    return this.httpclient.put<ExpenseEntry>(this.expenseRestUrl + "/" +
      id, expenseEntries, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.httpErrorHandler)
      );
  };


  //delete service
  deleteExpenseEntry(expenseEntry: ExpenseEntry | number):
  Observable<ExpenseEntry> {
  const id = typeof expenseEntry == 'number' ? expenseEntry : expenseEntry.id
  const url = `${this.expenseRestUrl}/${id}`;
  return this.httpclient.delete<ExpenseEntry>(url, this.httpOptions)
    .pipe(
      retry(3),
      catchError(this.httpErrorHandler)
    );
};




  private httpErrorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("A client side error occurs. The error message is " +
        error.message);
    } else {
      console.error(
        "An error happened in server. The HTTP status code is " +
        error.status + " and the error returned is " + error.message);
    }
    return throwError("Error occurred. Pleas try again");
  }




  headers?: HttpHeaders | { [header: string]: string | string[] };
  observe?: 'body' | 'events' | 'response';

  params?: HttpParams | { [param: string]: string | string[]};
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;

};


