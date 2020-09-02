import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
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
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <NavBar title="Диалоги">
          <Button onPress={props.setMessagesWindow} title={'Назад'} />
        </NavBar>
        <FlatList
          data={messages.messages}
          renderItem={({item}) => (
              <Message
                owner={item.messageOwner}
                key={item.id}
                message={item.text}
              />
          )}
          keyExtractor={item => item._id}
        />
      </View>
      <View style={styles.sendMessage}>
        <AddMessage onSubmit={(text) => dispatch(sendMessage(text))} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  content: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 'auto',
  },
  sendMessage: {
    backgroundColor: 'white',
    flexShrink: 0,
    flexBasis: 'auto',
  }
});
