import { createTypes, completeTypes } from 'redux-recompose';
import { getBooks } from '@services/bookService';
import { BookProps } from '@interfaces/BookProps';

export const BOOKS_LIST = 'booksList';
export const BOOK_TO_ADD = 'bookToAdd';
export const actions = createTypes(
  completeTypes({
    primaryActions: ['GET_BOOKS', 'SET_BOOKS']
  }),
  '@@BOOK'
);

export const actionCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    target: BOOKS_LIST,
    service: getBooks
  }),
  setBooks: (newBooks: BookProps[]) => ({
    type: actions.SET_BOOKS,
    target: BOOKS_LIST,
    payload: newBooks
  })
};
