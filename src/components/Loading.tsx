import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

interface LoadingProps {
  message: string;
}

const Loading: React.FC<LoadingProps> = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
    color: '#000',
  },
});

export default Loading;
