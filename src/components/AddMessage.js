import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Keyboard } from 'react-native';

export default props => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      props.onSubmit(value)
      setValue('')
      Keyboard.dismiss()
    }
  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Введите сообщение"
      />
      <Button onPress={pressHandler} title="Отправить" />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  }
})
