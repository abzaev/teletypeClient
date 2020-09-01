import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages, sendMessage } from '../store/actions/messages';
import Message from '../components/Message';
import AddMessage from '../components/AddMessage';
import NavBar from '../components/NavBar';

export default props => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.messages.messages);

  useEffect(() => {
    dispatch(fetchMessages(props.index));
  }, [])

  if (!messages) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <NavBar title="Диалоги">
        <Button onPress={props.setMessagesWindow} title={'Назад'} />
      </NavBar>
      {
        messages.messages.map((item) => <Message owner={item.messageOwner} key={item.id} message={item.text} />)
      }
      
      <View style={styles.sendMessage}>
        <AddMessage onSubmit={(text) => dispatch(sendMessage(text))} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sendMessage: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    color: 'white',
    textAlign: 'center',
  }
});
