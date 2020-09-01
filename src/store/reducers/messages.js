const initialState = {
  messages: null,
};

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return {
        ...state, messages: action.payload
      };
    case 'SEND_MESSAGE':
      return {
        ...state, messages: action.payload
      }
    default:
      return state
  }
}
