import React, {ReactNode} from 'react';
import {StyleSheet, Text, View, TextInput, TextInputProps} from 'react-native';

interface InputText {
  children: ReactNode;
  placeholder: string;
  keyboardType?: TextInputProps['keyboardType'];
  secure?: boolean;
  onUpdateValue: (text: string) => void;
  value?: string;
  isInvalid?: boolean;
}

const InputLogin: React.FC<InputText> = ({
  children,
  placeholder,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.containerInput, isInvalid && styles.inputInvalid]}>
        <Text style={[styles.textInput, isInvalid && styles.nameInvalid]}>
          {children}
        </Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#9B9B9B"
          secureTextEntry={secure}
          placeholder={placeholder}
          autoCapitalize="none"
          keyboardType={keyboardType}
          onChangeText={onUpdateValue}
          value={value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
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
  textInput: {
    color: '#9B9B9B',
    height: 19,
    fontSize: 11,
    fontFamily: 'Roboto',
    fontWeight: '400',
    left: 10,
    top: 6,
  },
  inputInvalid: {
    borderColor: '#DB3022',
    borderWidth: 1,
  },
  nameInvalid: {
    color: '#DB3022',
  },
});

export default InputLogin;
