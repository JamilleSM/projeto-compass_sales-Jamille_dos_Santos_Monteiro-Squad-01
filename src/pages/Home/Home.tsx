import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AuthContext} from '../../context/Context';

function Home() {
  const [message, setMessage] = useState('');
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        'https://compasssales-95eda-default-rtdb.firebaseio.com/message/.json?auth=' +
          token,
      )
      .then(response => {
        setMessage(response.data);
      });
  }, [token]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem Vindo!!!</Text>
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});

export default Home;
