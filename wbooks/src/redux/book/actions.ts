import { createTypes, completeTypes } from 'redux-recompose';
import { getBooks } from '@services/bookService';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['GET_BOOKS']
  }),
  '@@BOOK'
);

export const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: 'booksList',
    service: getBooks
  })
};
