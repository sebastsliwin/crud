import { Routes } from '@angular/router';
import { AppRoutePath } from './shared/model/app-route-path.model';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutePath.DASHBOARD,
  },
  {
    path: AppRoutePath.DASHBOARD,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: AppRoutePath.CRUD,
    loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule),
  },
];
