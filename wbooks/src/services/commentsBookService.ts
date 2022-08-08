import { COMMENTS_MOCK } from '@constants/mockComments';

export const getCommentsBook = () =>
  Promise.resolve({ ok: true, problem: null, originalError: null, data: COMMENTS_MOCK }) as Promise<any>;
