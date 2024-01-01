import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard.component';
import { AppChildrenRoutePath } from '../shared/model/app-route-path.model';

const routes: Routes = [
  {
    path: AppChildrenRoutePath.ROOT,
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
