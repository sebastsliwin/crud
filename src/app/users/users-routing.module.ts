import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppChildrenRoutePath } from '../shared/models/app-route-path.model';
import { UsersComponent } from './components/users/users.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';

const routes: Routes = [
  { path: AppChildrenRoutePath.ROOT, component: UsersComponent },
  { path: AppChildrenRoutePath.CREATE, component: UserCreateComponent },
  { path: AppChildrenRoutePath.UPDATE, component: UserUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
