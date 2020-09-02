import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import NavBar from './NavBar';
import { Users } from './Users';

const ChatList = props => {

  return (
    <View>
      <NavBar title="Диалоги" />
      <View style={styles.container}>
        <FlatList
          data={props.users}
          renderItem={({item}) => (
              <Users
                setWindow={() => {
                  props.setIndex(Number(item.index))
                  props.setMessagesWindow()
                }}
                user={item} />
          )}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
});

export default ChatList;
