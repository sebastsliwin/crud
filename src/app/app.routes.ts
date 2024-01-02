import { Routes } from '@angular/router';
import { AppRoutePath } from './shared/models/app-route-path.model';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutePath.DASHBOARD,
  },
  {
    path: AppRoutePath.DASHBOARD,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: AppRoutePath.USERS,
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },
];
