import axios from 'axios';

export function fetchMessages(index) {
  return async dispatch => {
    try{
      const response = await axios.get(`http://localhost:5000/messages/${index}`, {
        headers:
          {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "*",
          }
      });
      dispatch(fetchMessagesAction(response.data))
    } catch (e) {
      console.log(e)
    }
  }
}

export function fetchMessagesAction(messages) {
  return {
    type: 'FETCH_MESSAGES',
    payload: messages
  }
}

export function sendMessage(text) {
  return (dispatch, getState) => {
    let messagesFromState = getState().messages.messages;
    console.log(messagesFromState)
    const newMessage = {
      id: messagesFromState.messages.length,
      text,
      messageOwner: true
    }
    messagesFromState = {
      ...messagesFromState, 
      messages: [...messagesFromState.messages, newMessage]
    };
    dispatch(sendMessageAction(messagesFromState))
  }
}

export function sendMessageAction(messages) {
  return {
    type: 'SEND_MESSAGE',
    payload: messages,
  }
}