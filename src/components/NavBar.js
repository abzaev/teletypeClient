import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => {

  return (
    <View style={styles.navbar}>
      {props.children}
      <Text style={styles.text}>
        { props.title }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'column',
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#3949ab',
    paddingBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20
  },
})
