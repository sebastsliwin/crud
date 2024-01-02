import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '../../models/users.model';
import { UsersFacade } from '../../store/users.facade';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCreateComponent {
  constructor(private usersFacade: UsersFacade) {}

  createUser(user: User): void {
    this.usersFacade.createUser(user);
  }
}
