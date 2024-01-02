import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, usersFeatureKey } from './users.reducer';
import { UsersView, UserView } from '../models/users.model';

export const selectUsersFeature = createFeatureSelector<State>(usersFeatureKey);

export const selectUsers = createSelector(
  selectUsersFeature,
  ({ users }: State) => ({
    users,
  })
);

export const selectUsersView = createSelector(
  selectUsersFeature,
  ({ users, loading, error }: State) =>
    <UsersView>{
      users,
      loading,
      error,
    }
);

export const selectUserView = createSelector(
  selectUsersFeature,
  ({ user, loading, error }: State) =>
    <UserView>{
      user,
      loading,
      error,
    }
);
