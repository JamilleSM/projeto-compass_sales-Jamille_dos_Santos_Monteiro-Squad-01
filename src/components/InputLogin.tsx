import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

function InputLogin() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="compass@compass.com"
          placeholderTextColor="#9B9B9B"
        />
      </View>

      <View style={styles.containerInput}>
        <Text style={styles.text}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9B9B9B"
          maxLength={4}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 62,
  },
  containerInput: {
    backgroundColor: '#FFF',
    marginBottom: 12,
  },
  input: {
    width: 343,
    height: 51,
    padding: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    color: '#000',
  },
  text: {
    color: '#9B9B9B',
    height: 19,
    fontSize: 11,
    fontFamily: 'Roboto',
    fontWeight: '400',
    left: 10,
    top: 6,
  },
});

export default InputLogin;
