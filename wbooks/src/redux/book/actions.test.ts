import { actionCreators, booksList } from '@redux/book/actions';
import { getBooks } from '@services/bookService';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockedStore = configureStore(middlewares);

it('should dispatch action', () => {
  const initialState = {};
  const store = mockedStore(initialState);

  store.dispatch(actionCreators.getBooks());

  const actions = store.getActions();
  const expectedAction = { type: '@@BOOK/GET_BOOKS', target: booksList, service: getBooks };
  expect(actions).toEqual([expectedAction]);
});
