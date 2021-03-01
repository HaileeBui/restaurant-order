import React from 'react';
import { Right, ListItem as BaseListItem, Left, Text } from 'native-base';

import { StyleSheet } from 'react-native';
import { FoodContext } from '../context/FoodContext';

import CustomButton from '../components/CustomButton';

const ListItem = ({ single }) => {
  const {  addOrder } = React.useContext(FoodContext);

  const addFood = () => {
    addOrder({single});
  };
  return (
    <BaseListItem>
      <Left>
        <Text style={styles.text}>{single}</Text>
      </Left>
      <Right>
        <CustomButton onPress={addFood} title='+' />
      </Right>
    </BaseListItem>
  );
};


export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    borderColor: '#FD6A02',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 30,
  },
})
