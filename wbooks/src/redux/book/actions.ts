import { createTypes, completeTypes } from 'redux-recompose';
import { getBooks } from '@services/bookService';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['GET_BOOKS']
  }),
  '@@BOOK'
);

const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'booksList',
    service: getBooks
  })
};

export default actionCreators;
