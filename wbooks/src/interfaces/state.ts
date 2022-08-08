import { BookProps } from './BookProps';

export interface State {
  book: { booksList: BookProps[]; booksListLoading: boolean; booksListError: null | string };
}
