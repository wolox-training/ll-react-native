import book, { initialState } from '@redux/book/reducer';
import { actionCreators } from '@redux/book/actions';
import { getBooks } from '@services/bookService';
import { BOOKS_MOCK } from '@constants/mockBooks';

const action = actionCreators.getBooks();

describe('GET_BOOKS', () => {
  test('GET_BOOKS', () => {
    const getBooksAction = { type: '@@BOOK/GET_BOOKS', target: 'booksList', service: getBooks };
    expect(book(undefined, getBooksAction)).toEqual({
      ...initialState,
      booksListLoading: true
    });
  });

  test('GET_BOOKS_SUCCESS', () => {
    const getBooksAction = {
      type: '@@BOOK/GET_BOOKS_SUCCESS',
      target: 'booksList',
      payload: BOOKS_MOCK
    };
    expect(book(undefined, getBooksAction)).toEqual({
      ...initialState,
      booksListLoading: false,
      booksList: BOOKS_MOCK
    });
  });
});
