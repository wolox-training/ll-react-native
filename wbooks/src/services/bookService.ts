import { BOOKS_MOCK } from '@constants/mockBooks';

export const getBooks = () =>
  Promise.resolve({ ok: true, problem: null, originalError: null, data: BOOKS_MOCK }) as Promise<any>;
