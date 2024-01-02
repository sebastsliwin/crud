import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { UsersActions } from './users.actions';
import { UsersRestService } from '../services/users-rest.service';
import { catchError, of, switchMap, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppRoutePath } from '../../shared/models/app-route-path.model';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { selectUsers } from './users.selectors';

@Injectable()
export class UsersEffects {
  constructor(
    private store: Store,
    private router: Router,
    private actions: Actions,
    private toastr: ToastrService,
    private usersRestService: UsersRestService
  ) {}

  getUsers$ = createEffect(() => {
    return this.actions.pipe(
      ofType(UsersActions.getUsers, UsersActions.deleteUserSuccess),
      switchMap(() =>
        this.usersRestService.getUsers().pipe(
          map(users => UsersActions.getUsersSuccess({ users })),
          catchError(error => of(UsersActions.getUsersFailure({ error })))
        )
      )
    );
  });

  getUser$ = createEffect(() => {
    return this.actions.pipe(
      ofType(UsersActions.getUser),
      concatLatestFrom(() => this.store.select(selectUsers)),
      switchMap(([{ id }, { users }]) =>
        this.usersRestService.getUser(id, users).pipe(
          map(user => UsersActions.getUserSuccess({ user })),
          catchError(error => of(UsersActions.getUserFailure({ error })))
        )
      )
    );
  });

  createUser$ = createEffect(() => {
    return this.actions.pipe(
      ofType(UsersActions.createUser),
      concatLatestFrom(() => this.store.select(selectUsers)),
      switchMap(([{ payload }, { users }]) =>
        this.usersRestService.createUser(payload, users).pipe(
          map(() => UsersActions.createUserSuccess()),
          catchError(error => of(UsersActions.createUserFailure({ error })))
        )
      )
    );
  });

  updateUser$ = createEffect(() => {
    return this.actions.pipe(
      ofType(UsersActions.updateUser),
      concatLatestFrom(() => this.store.select(selectUsers)),
      switchMap(([{ payload }, { users }]) =>
        this.usersRestService.updateUser(payload, users).pipe(
          map(() => UsersActions.updateUserSuccess()),
          catchError(error => of(UsersActions.updateUserFailure({ error })))
        )
      )
    );
  });

  deleteUser$ = createEffect(() => {
    return this.actions.pipe(
      ofType(UsersActions.deleteUser),
      concatLatestFrom(() => this.store.select(selectUsers)),
      switchMap(([{ id }, { users }]) =>
        this.usersRestService.deleteUser(id, users).pipe(
          map(() => UsersActions.deleteUserSuccess()),
          catchError(error => of(UsersActions.deleteUserFailure({ error })))
        )
      )
    );
  });

  updateListSuccess$ = createEffect(
    () => {
      return this.actions.pipe(
        ofType(
          UsersActions.createUserSuccess,
          UsersActions.updateUserSuccess,
          UsersActions.deleteUserSuccess
        ),
        tap(() => {
          this.toastr.success('Lista została pomyślnie zaktualizowana');
          this.router.navigate(['/', AppRoutePath.USERS]);
        })
      );
    },
    { dispatch: false }
  );

  updateListFailure$ = createEffect(
    () => {
      return this.actions.pipe(
        ofType(
          UsersActions.getUsersFailure,
          UsersActions.createUserFailure,
          UsersActions.updateUserFailure,
          UsersActions.deleteUserFailure
        ),
        tap(() => {
          this.toastr.error('Wystąpił błąd');
        })
      );
    },
    { dispatch: false }
  );

  getUserFailure$ = createEffect(
    () => {
      return this.actions.pipe(
        ofType(UsersActions.getUserFailure),
        tap(() => {
          this.toastr.error('Użytkownik nie został znaleziony');
          this.router.navigate(['/', AppRoutePath.USERS]);
        })
      );
    },
    { dispatch: false }
  );
}
