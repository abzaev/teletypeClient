import {combineReducers} from 'redux'
import usersReducer from './users'
import messagesReducer from "./messages";

export default combineReducers({
  messages: messagesReducer,
  users: usersReducer,
})
