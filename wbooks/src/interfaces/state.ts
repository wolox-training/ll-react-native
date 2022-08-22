import { BookProps } from './BookProps';
import { CommentProps } from './CommentProps';
import { loginInfo } from './loginInfo';

export interface State {
  book: { booksList: BookProps[]; booksListLoading: boolean; booksListError: null | string };
  commentsBook: {
    commentsList: CommentProps[];
    commentsListLoading: boolean;
    commentsListError: null | string;
  };
  login: { loginData: loginInfo; loginDataLoading: boolean; loginDataError: null | string };
  addBook: { bookToAdd: BookProps[]; bookToAddLoading: boolean; bookToAddError: null | string };
}
