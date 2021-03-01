import React from 'react'
import { StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Container, View } from 'native-base';

import menu from '../../data.json';

import CustomHeader from '../components/CustomHeader';
import ListItem from '../components/ListItem';

const Drinks = (props) => {
  return (
    <Container>
      <CustomHeader navigation={props.navigation}/>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FD6A02" translucent = {true}/>
      <View>
        <FlatList
          data={menu.drink}
          renderItem={({ item }) => <ListItem single={item} />}
          keyExtractor={item => menu.drink.indexOf(item).toString()}
        />
      </View>
    </Container>
  )
}

export default Drinks;

