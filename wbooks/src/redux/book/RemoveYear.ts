import { BOOKS_MOCK } from '@constants/mockBooks';

const initialState = {
  yearStatus: BOOKS_MOCK
};

interface Action {
  type: string;
  payload: any;
}

function RemoveYear(state = initialState, action: Action) {
  switch (action.type) {
    case 'REMOVE_YEAR':
      return {
        yearStatus: action.payload
      };
    default:
      return state;
  }
}

export default RemoveYear;
