import { User, UserId, users } from '../models/users.model';

export const getUsers = (): User[] => {
  const localUsers = sessionStorage.getItem('localUsers');

  if (localUsers) {
    return JSON.parse(localUsers);
  }

  return users;
};

export const addUser = (user: User, users: User[]): void => {
  if (!user) {
    return;
  }

  const _users = [...users, { ...user, id: users.length }];
  sessionStorage.setItem('localUsers', JSON.stringify(_users));
};

export const updateUser = (user: User, users: User[]): void => {
  if (!user) {
    return;
  }

  const _users = [...users].map(el => (user.id === el.id ? user : el));
  sessionStorage.setItem('localUsers', JSON.stringify(_users));
};

export const deleteUser = (id: UserId, users: User[]): void => {
  if (id == null) {
    return;
  }

  const _users = [...users].filter(({ id: _id }) => id !== _id);
  sessionStorage.setItem('localUsers', JSON.stringify(_users));
};

export const getUserById = (id: UserId, users: User[]): User | null => {
  if (id == null) {
    return null;
  }

  return [...users].find(({ id: _id }) => id === _id) ?? null;
};
