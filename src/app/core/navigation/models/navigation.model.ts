import { AppRoutePath } from '../../../shared/model/app-route-path.model';

class NavigationItem {
  constructor(public path: AppRoutePath, public label: string) {
  }
}

export const NavigationItems = [
  new NavigationItem(AppRoutePath.DASHBOARD, 'Dashboard'),
  new NavigationItem(AppRoutePath.CRUD, 'Lista'),
];
