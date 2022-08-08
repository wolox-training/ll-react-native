import { BookProps } from './BookProps';
import { CommentProps } from './CommentProps';

export interface State {
  book: { booksList: BookProps[]; booksListLoading: boolean; booksListError: null | string };
  commentsBook: {
    commentsList: CommentProps[];
    commentsListLoading: boolean;
    commentsListError: null | string;
  };
}
