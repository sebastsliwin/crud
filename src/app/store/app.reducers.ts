import {
  reducer as UsersReducer,
  State as UsersState,
  usersFeatureKey,
} from '../users/store/users.reducer';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

interface AppState {
  [usersFeatureKey]: UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
  [usersFeatureKey]: UsersReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
