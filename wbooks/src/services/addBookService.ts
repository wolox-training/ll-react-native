import { BOOKS_MOCK } from '@constants/mockBooks';

export const addBook = () =>
  Promise.resolve({
    ok: true,
    problem: null,
    originalError: null,
    data: BOOKS_MOCK.slice(7, 8)
  }) as Promise<any>;
