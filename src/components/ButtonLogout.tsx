import React from 'react';
import {Image, Pressable, StyleSheet} from 'react-native';
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
    resizeMode: 'stretch',
  },
});

export default ButtonLogout;
