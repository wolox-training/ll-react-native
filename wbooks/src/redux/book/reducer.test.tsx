import book, { initialState } from '@redux/book/reducer';
import { actionCreators } from '@redux/book/actions';
import { getBooks } from '@services/bookService';

const action = actionCreators.getBooks();

describe('GET_BOOKS', () => {
  test('GET_BOOKS', () => {
    const getBooksAction = { type: '@@BOOK/GET_BOOKS', target: 'booksList', service: getBooks };
    expect(book(undefined, getBooksAction)).toEqual({
      ...initialState,
      booksListLoading: true
    });
  });
});
