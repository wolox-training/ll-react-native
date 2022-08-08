import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { fetchMiddleware } from 'redux-recompose';
import thunk from 'redux-thunk';

import Reactotron from '../../ReactotronConfig';

import book from './book/reducer';
import commentsBook from './commentsBooks/reducer';

const reducers = combineReducers({
  book,
  commentsBook
});

const middlewares = [applyMiddleware(thunk, fetchMiddleware)];
if (__DEV__) {
  if (process.env.JEST_WORKER_ID == undefined) {
    middlewares.push(Reactotron.createEnhancer());
  }
}
const store = createStore(reducers, compose(...middlewares));
export default store;
