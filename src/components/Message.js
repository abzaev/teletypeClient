import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Message = props => {
  return (
    <View style={styles.container}>
      {
        props.owner
        ?
          <View style={styles.owner}>
            <View style={styles.messageOwner}>
              <Text style={styles.text}>{props.message}</Text>
            </View>
          </View>
        :
          <View style={styles.friend}>
            <View style={styles.messageFriend}>
              <Text style={styles.text}>{props.message}</Text>
            </View>
          </View>
      } 
    </View>
  );
}

const styles = StyleSheet.create({
  owner: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  friend: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  messageOwner: {
    backgroundColor: 'blue',
    padding: '10px',
    margin: '5px',
  },
  messageFriend: {
    backgroundColor: 'gray',
    padding: '10px',
    margin: '5px',
  },
  text: {
    color: 'white',
  }
});

export default Message;
