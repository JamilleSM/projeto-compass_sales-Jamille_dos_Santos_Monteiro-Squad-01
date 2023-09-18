import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

interface Handle {
  children: ReactNode;
  onpress: () => void;
}

const Password: React.FC<Handle> = ({onpress, children}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onpress}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    height: 20,
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '600',
    marginTop: 16,
  },
});

export default Password;
