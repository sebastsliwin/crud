import { BaseView } from '../../shared/models/base-view';

export interface User {
  id?: UserId;
  name: string;
  age: number;
  email: string;
}

export interface UserView extends BaseView {
  user: User;
}

export interface UsersView extends BaseView {
  users: User[];
}

export type UserId = number;

export const displayedColumns = ['name', 'age', 'email', 'action'];

export const users = [
  {
    id: 1,
    name: 'Jan Kowalski',
    age: 30,
    email: 'jan.kowalski@example.com',
  },
  {
    id: 2,
    name: 'Anna Nowak',
    age: 25,
    email: 'anna.nowak@example.com',
  },
  {
    id: 3,
    name: 'Bartosz Malinowski',
    age: 40,
    email: 'bartosz.malinowski@example.com',
  },
];
