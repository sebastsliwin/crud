import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppChildrenRoutePath } from '../shared/model/app-route-path.model';

const routes: Routes = [
  { path: AppChildrenRoutePath.ROOT },
  { path: AppChildrenRoutePath.CREATE },
  { path: AppChildrenRoutePath.UPDATE },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {
}
