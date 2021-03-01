import { Right, ListItem as BaseListItem, Left, Body, Text } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import { FoodContext } from '../context/FoodContext';

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
}


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
