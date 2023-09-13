import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const ButtonLogin: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  button: {
    width: 343,
    height: 48,
    backgroundColor: '#DB3022',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#FFF',
    height: 20,
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '600',
  },
});

export default ButtonLogin;
