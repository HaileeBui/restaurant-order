import React from 'react';
import { Header, Text, Body, Right, Button, Icon } from 'native-base';
import { StyleSheet } from 'react-native';


const CustomHeader = ({navigation}) => {
  return (
    <Header style={{ backgroundColor: '#FD6A02', marginTop: 25 }}>
      <Body>
        <Text style={styles.text}>Choose one or more</Text>
      </Body>
      <Right>
        <Button transparent onPress={() => navigation.push('Review')}
        ><Icon name='cart-outline' style={{ fontSize: 30 }} /></Button>
      </Right>
    </Header>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold'
  },
});
