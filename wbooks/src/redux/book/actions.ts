import { BOOKS_MOCK } from '@constants/mockBooks';

function addBoks() {
  return { type: 'GET_BOOKS', payload: BOOKS_MOCK };
}

export default addBoks;
