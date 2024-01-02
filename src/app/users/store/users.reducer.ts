import { User } from '../models/users.model';
import { createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.actions';

export const usersFeatureKey = 'users';

export interface State {
  users: User[];
  user: User | null;
  loading: boolean;
  error: Error | null;
}

export const initialState: State = {
  users: [],
  user: null,
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(
    UsersActions.getUsers,
    (state): State => ({
      ...state,
      users: [],
      loading: true,
      error: null,
    })
  ),
  on(
    UsersActions.getUsersSuccess,
    (state, { users }): State => ({
      ...state,
      users,
      loading: false,
    })
  ),
  on(
    UsersActions.getUsersFailure,
    (state): State => ({
      ...state,
      users: [],
      loading: false,
      error: state.error,
    })
  ),

  on(
    UsersActions.getUser,
    (state): State => ({
      ...state,
      user: null,
      loading: true,
      error: null,
    })
  ),
  on(
    UsersActions.getUserSuccess,
    (state, { user }): State => ({
      ...state,
      user,
      loading: false,
    })
  ),
  on(
    UsersActions.getUserFailure,
    (state): State => ({
      ...state,
      user: null,
      loading: false,
      error: state.error,
    })
  ),

  on(
    UsersActions.createUser,
    UsersActions.updateUser,
    UsersActions.deleteUser,
    (state): State => ({
      ...state,
      loading: true,
      error: null,
    })
  ),

  on(
    UsersActions.createUserSuccess,
    (state): State => ({
      ...state,
      loading: false,
    })
  ),

  on(
    UsersActions.updateUserSuccess,
    (state): State => ({
      ...state,
      loading: false,
    })
  ),

  on(
    UsersActions.deleteUserSuccess,
    (state): State => ({
      ...state,
      loading: false,
    })
  ),

  on(
    UsersActions.createUserFailure,
    UsersActions.updateUserFailure,
    UsersActions.deleteUserFailure,
    (state): State => ({
      ...state,
      loading: false,
      error: state.error,
    })
  )
);
