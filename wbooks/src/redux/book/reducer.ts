import { createReducer, completeState, completeReducer } from 'redux-recompose';

import { actions } from './actions';

const stateDescription = {
  description: {
    booksList: []
  }
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS]
};

export default createReducer(initialState, completeReducer(reducerDescription));
