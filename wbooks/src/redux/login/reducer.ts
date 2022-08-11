import { createReducer, completeState, completeReducer } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const stateDescription = {
  description: {
    loginData: []
  }
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {}
};

export default createReducer(
  Immutable(initialState),

  completeReducer(reducerDescription)
);
