import { TestBed } from '@angular/core/testing';

import { ExpenseEntryServiceService } from './expense-entry-service.service';

describe('ExpenseEntryServiceService', () => {
  let service: ExpenseEntryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseEntryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
