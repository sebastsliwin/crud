import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersActions } from './users.actions';
import { selectUsersView, selectUserView } from './users.selectors';
import { distinctUntilChanged, Observable } from 'rxjs';
import { User, UserId, UsersView, UserView } from '../models/users.model';
import { isEqual } from '../../shared/utils/isEqual';
import { Actions, ofType } from '@ngrx/effects';

@Injectable({
  providedIn: 'root',
})
export class UsersFacade {
  readonly usersView$: Observable<UsersView> = this.store
    .select(selectUsersView)
    .pipe(distinctUntilChanged(isEqual));

  readonly userView$: Observable<UserView> = this.store
    .select(selectUserView)
    .pipe(distinctUntilChanged(isEqual));

  readonly usersSuccess$ = this.actions.pipe(
    ofType(UsersActions.getUsersSuccess),
    distinctUntilChanged(isEqual)
  );

  constructor(
    private actions: Actions,
    private store: Store
  ) {}

  getUsers(): void {
    this.store.dispatch(UsersActions.getUsers());
  }

  getUser(id: UserId): void {
    this.store.dispatch(UsersActions.getUser({ id }));
  }

  createUser(payload: User): void {
    this.store.dispatch(UsersActions.createUser({ payload }));
  }

  updateUser(payload: User): void {
    this.store.dispatch(UsersActions.updateUser({ payload }));
  }

  deleteUser(id: UserId): void {
    this.store.dispatch(UsersActions.deleteUser({ id }));
  }
}
