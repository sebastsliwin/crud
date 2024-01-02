import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { errorProps } from '../../shared/models/error-props';
import { User, UserId } from '../models/users.model';

export const GET_USERS = 'Get users';
export const GET_USERS_SUCCESS = 'Get users success';
export const GET_USERS_FAILURE = 'Get users failure';

export const GET_USER = 'Get user';
export const GET_USER_SUCCESS = 'Get user success';
export const GET_USER_FAILURE = 'Get user failure';

export const CREATE_USER = 'Create user';
export const CREATE_USER_SUCCESS = 'Create user success';
export const CREATE_USER_FAILURE = 'Create user failure';

export const UPDATE_USER = 'Update user';
export const UPDATE_USER_SUCCESS = 'Update user success';
export const UPDATE_USER_FAILURE = 'Update user failure';

export const DELETE_USER = 'Delete user';
export const DELETE_USER_SUCCESS = 'Delete user success';
export const DELETE_USER_FAILURE = 'Delete user failure';

export const UsersActions = createActionGroup({
  source: 'CRUD',
  events: {
    [GET_USERS]: emptyProps(),
    [GET_USERS_SUCCESS]: props<{ users: User[] }>(),
    [GET_USERS_FAILURE]: errorProps(),

    [GET_USER]: props<{ id: UserId }>(),
    [GET_USER_SUCCESS]: props<{ user: User }>(),
    [GET_USER_FAILURE]: errorProps(),

    [CREATE_USER]: props<{ payload: User }>(),
    [CREATE_USER_SUCCESS]: emptyProps(),
    [CREATE_USER_FAILURE]: errorProps(),

    [UPDATE_USER]: props<{ payload: User }>(),
    [UPDATE_USER_SUCCESS]: emptyProps(),
    [UPDATE_USER_FAILURE]: errorProps(),

    [DELETE_USER]: props<{ id: UserId }>(),
    [DELETE_USER_SUCCESS]: emptyProps(),
    [DELETE_USER_FAILURE]: errorProps(),
  },
});
