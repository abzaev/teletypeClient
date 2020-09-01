import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Users = ({ user, setWindow }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => setWindow()}
      >
        <View style={styles.container}>
          <View style={styles.user}>
            <Text>{`${user.name.first} ${user.name.last}`}</Text>
          </View>
          <View style={styles.user}>
            <Text>{user.lastMessage.text}</Text>
          </View>
          <View style={styles.user}>
            <Text>{user.messenger}</Text>
          </View>
        </View>
        {/* <View style={styles.message}>
        
        </View>
        <View style={styles.messenger}>
          <Text>{user.messenger}</Text>
        </View> */}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
  user: {
    flexDirection: 'row',
  },
})
