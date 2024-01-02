import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppChildrenRoutePath } from '../../../shared/models/app-route-path.model';
import { UsersFacade } from '../../store/users.facade';
import { displayedColumns, UserId } from '../../models/users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  readonly view$ = this.usersFacade.usersView$;
  readonly path = AppChildrenRoutePath;
  readonly displayedColumns = displayedColumns;

  constructor(private usersFacade: UsersFacade) {}

  ngOnInit(): void {
    this.usersFacade.getUsers();
  }

  deleteUser(id: UserId): void {
    this.usersFacade.deleteUser(id);
  }
}
