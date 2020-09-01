import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import {connect} from "react-redux";
import { fetchUsers } from './store/actions/users';
import Messages from './containers/Messages';
import ChatList from './components/ChatList';

const App = props => {

  useEffect(() => {
    props.fetchUsers();
  }, [])

  const [messagesWindow, setMessagesWindow] = useState(false);
  const [index, setIndex] = useState();

  return (
    <View>
      {
        !messagesWindow && !index
        ?
          <ChatList
            users={props.users}
            setIndex={setIndex}
            setMessagesWindow={() => setMessagesWindow(true)}
          />
        :
          <Messages
            setMessagesWindow={() => {
              setMessagesWindow(false)
              setIndex(null)
            }}
            index={index}
          />
      }
      
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
