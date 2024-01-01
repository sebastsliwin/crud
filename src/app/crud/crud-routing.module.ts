import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppChildrenRoutePath } from '../shared/model/app-route-path.model';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  { path: AppChildrenRoutePath.ROOT, component: ListComponent },
  { path: AppChildrenRoutePath.CREATE, component: CreateComponent },
  { path: AppChildrenRoutePath.UPDATE, component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {
}
