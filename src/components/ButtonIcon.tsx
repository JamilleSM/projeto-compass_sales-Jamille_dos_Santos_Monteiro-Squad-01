import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
import Imgoogle from '../img/google.png';

const ButtonIcon: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Or sign up with social account</Text>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.imgButton} source={Imgoogle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            style={styles.imgButton}
            source={require('../img/facebook.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 125,
  },
  containerButton: {
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    width: 92,
    height: 64,
    backgroundColor: '#FFF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  imgButton: {
    padding: 10,
    margin: 3,
    width: 24,
    height: 24,
    resizeMode: 'stretch',
  },
  text: {
    color: '#000',
    height: 20,
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: '600',
  },
});

export default ButtonIcon;
