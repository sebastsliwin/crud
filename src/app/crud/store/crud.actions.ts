import { createActionGroup, emptyProps } from '@ngrx/store';
import { errorProps } from '../../shared/model/error-props';

export const GET_LIST = 'Get list';
export const GET_LIST_SUCCESS = 'Get list success';
export const GET_LIST_FAILURE = 'Get list failure';

export const CREATE_ITEM = 'Create item';
export const CREATE_ITEM_SUCCESS = 'Create item success';
export const CREATE_ITEM_FAILURE = 'Create item failure';

export const UPDATE_ITEM = 'Update item';
export const UPDATE_ITEM_SUCCESS = 'Update item success';
export const UPDATE_ITEM_FAILURE = 'Update item failure';

export const DELETE_ITEM = 'Delete item';
export const DELETE_ITEM_SUCCESS = 'Delete item success';
export const DELETE_ITEM_FAILURE = 'Delete item failure';

export const CrudActions = createActionGroup({
  source: 'CRUD',
  events: {
    [GET_LIST]: emptyProps(),
    [GET_LIST_SUCCESS]: emptyProps(),
    [GET_LIST_FAILURE]: errorProps(),

    [CREATE_ITEM]: emptyProps(),
    [CREATE_ITEM_SUCCESS]: emptyProps(),
    [CREATE_ITEM_FAILURE]: errorProps(),

    [UPDATE_ITEM]: emptyProps(),
    [UPDATE_ITEM_SUCCESS]: emptyProps(),
    [UPDATE_ITEM_FAILURE]: errorProps(),

    [DELETE_ITEM]: emptyProps(),
    [DELETE_ITEM_SUCCESS]: emptyProps(),
    [DELETE_ITEM_FAILURE]: errorProps(),
  },
});
