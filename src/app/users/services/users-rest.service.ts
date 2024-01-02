import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { User, UserId } from '../models/users.model';
import {
  addUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from './users.utils';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersRestService {
  // delay for loading
  private readonly delayTime = 500;

  getUsers(): Observable<User[]> {
    return of(getUsers()).pipe(delay(500));
  }

  getUser(id: UserId, users: User[]): Observable<User> {
    const foundUser = getUserById(id, users);

    return of({}).pipe(
      map(() => {
        if (foundUser) {
          return foundUser;
        }

        throw new Error('Error');
      }),
      delay(this.delayTime)
    );
  }

  createUser(user: User, users: User[]): Observable<unknown> {
    return of({}).pipe(
      tap(() => addUser(user, users)),
      delay(this.delayTime)
    );
  }

  updateUser(user: User, users: User[]): Observable<unknown> {
    return of({}).pipe(
      tap(() => updateUser(user, users)),
      delay(this.delayTime)
    );
  }

  deleteUser(id: UserId, users: User[]): Observable<unknown> {
    return of({}).pipe(
      tap(() => deleteUser(id, users)),
      delay(this.delayTime)
    );
  }
}
