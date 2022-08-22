import { createTypes, completeTypes } from 'redux-recompose';
import { addBook } from '@services/addBookService';

export const BOOK_TO_ADD = 'bookToAdd';
export const actions = createTypes(
  completeTypes({
    primaryActions: ['ADD_BOOKS']
  }),
  '@@ADD_BOOK'
);

export const actionCreators = {
  addBook: () => ({
    type: actions.ADD_BOOKS,
    target: BOOK_TO_ADD,
    service: addBook
  })
};
