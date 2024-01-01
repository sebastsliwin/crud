import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudRestService {

  getList() {
    return of([]);
  }

  createItem() {
    return of({});
  }

  updateItem() {
    return of({});
  }

  deleteItem() {
    return of({});
  }
}
