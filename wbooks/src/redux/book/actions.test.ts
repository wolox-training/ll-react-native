import { actionCreators } from '@redux/book/actions';
import { getBooks } from '@services/bookService';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockedStore = configureStore(middlewares);

it('should dispatch action', () => {
  // Initialize mockstore with empty state
  const initialState = {};
  const store = mockedStore(initialState);

  // Dispatch the action
  store.dispatch(actionCreators.getBooks());

  // Test if your store dispatched the expected actions
  const actions = store.getActions();
  const expectedAction = { type: '@@BOOK/GET_BOOKS', target: 'booksList', service: getBooks };
  expect(actions).toEqual([expectedAction]);
});
