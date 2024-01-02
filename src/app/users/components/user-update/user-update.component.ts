import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { UsersFacade } from '../../store/users.facade';
import { User } from '../../models/users.model';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserUpdateComponent implements OnInit, OnDestroy {
  readonly id = this.route.snapshot.paramMap.get('id');
  readonly userView$ = this.usersFacade.userView$;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private route: ActivatedRoute,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.usersFacade.getUsers();
    this._initUsersObs();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  updateUser(user: User): void {
    if (this.id) {
      user = { ...user, id: +this.id };
    }

    this.usersFacade.updateUser(user);
  }

  private _initUsersObs(): void {
    this.usersFacade.usersSuccess$
      .pipe(
        tap(() => this._getUser()),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  private _getUser(): void {
    if (this.id) {
      this.usersFacade.getUser(+this.id);
    }
  }
}
