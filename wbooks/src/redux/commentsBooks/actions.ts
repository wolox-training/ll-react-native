import { createTypes, completeTypes } from 'redux-recompose';
import { getCommentsBook } from '@services/commentsBookService';

export const actions = createTypes(
  completeTypes({
    primaryActions: ['GET_COMMENTS']
  }),
  '@@COMMENTS'
);

export const actionCreators = {
  getCommentsBook: () => ({
    type: actions.GET_COMMENTS,
    target: 'commentsList',
    service: getCommentsBook
  })
};
