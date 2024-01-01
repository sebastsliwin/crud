import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CrudActions } from './crud.actions';
import { CrudRestService } from '../services/crud-rest.service';
import { catchError, of, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CrudEffects {
  constructor(private store: Store, private actions: Actions, private crudRestService: CrudRestService) {
    console.log(CrudActions);
  }

  getList$ = createEffect(() => {
    return this.actions.pipe(
      ofType(CrudActions.getList, CrudActions.deleteItemSuccess),
      switchMap(() =>
        this.crudRestService.getList().pipe(
          map(res => CrudActions.getListSuccess()),
          catchError(() => of(CrudActions.getListFailure()))),
      ),
    );
  });
}
