import { createReducer, completeState, completeReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const stateDescription = {
  description: {
    commentList: []
  }
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_COMMENTS],
  override: {}
};

export default createReducer(
  Immutable(initialState),

  completeReducer(reducerDescription)
);
