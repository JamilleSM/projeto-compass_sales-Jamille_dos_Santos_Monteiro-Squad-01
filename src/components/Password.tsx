import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';

interface Handle {
  children: ReactNode;
  onpress: () => void;
}

const Password: React.FC<Handle> = ({onpress, children}) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
        <Image source={require('../assets/vector.png')} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '600',
  },
  icon: {
    marginLeft: 8,
  },
});

export default Password;
