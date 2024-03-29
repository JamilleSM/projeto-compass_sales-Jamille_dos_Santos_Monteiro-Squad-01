import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

interface Handle {
  children: ReactNode;
  onpress: () => void;
}

const ButtonLogin: React.FC<Handle> = ({onpress, children}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onpress} style={styles.button}>
        <Text style={styles.textButton}>{children}</Text>
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
  textButton: {
    color: '#FFF',
    height: 20,
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '600',
  },
  button: {
    width: 343,
    height: 48,
    backgroundColor: '#DB3022',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonLogin;
