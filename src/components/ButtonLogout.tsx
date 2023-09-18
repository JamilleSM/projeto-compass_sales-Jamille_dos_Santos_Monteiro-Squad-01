import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';

//Icon.loadFont();

interface Handle {
  onpress: () => void;
}

const ButtonLogout: React.FC<Handle> = ({onpress}) => {
  return (
    <Pressable style={styles.container} onPress={onpress}>
      <Image
        style={styles.imgButton}
        source={require('../assets/vector.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgButton: {
    padding: 10,
    margin: 3,
    width: 14,
    height: 6,
    resizeMode: 'stretch',
  },
});

export default ButtonLogout;
