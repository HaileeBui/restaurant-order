import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.button, ...props.style }}>
        <Text style={{ ...styles.buttonText, ...props.textStyle }}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FD6A02',
    borderRadius: 10,
    alignSelf: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 30,
    color: '#ffffff'
  }
});
