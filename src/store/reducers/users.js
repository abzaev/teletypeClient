const initialState = {
  users: null,
  // picture: 'http://placehold.it/128x128',
  // firstName: null,
  // lastName: null,
  // lastMessageDate: null,
  // messenger: null,
  // lastMessage: null,
};
  
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state, users: action.payload
      };
    default:
      return state
  }
}
