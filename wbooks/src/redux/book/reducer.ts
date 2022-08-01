const initialState = {
  bookList: []
};

interface Action {
  type: string;
  payload: any;
}

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_BOOKS':
      return {
        bookList: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
