import { createReducer, completeState, completeReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const stateDescription = {
  description: {
    booksList: []
  }
};

export const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS],
  override: {}
};

export default createReducer(
  Immutable(initialState),

  completeReducer(reducerDescription)
);
