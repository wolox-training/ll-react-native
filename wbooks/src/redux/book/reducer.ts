const initialState = {
  bookList: []
};

interface Action {
  type: string;
  payload: any;
}

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        bookList: action.payload
      };
    case 'ADD_BOOK':
      const newBookList = state.bookList;
      newBookList.push(action.payload);
      return {
        bookList: newBookList
      };
    default:
      return state;
  }
}

export default reducer;
