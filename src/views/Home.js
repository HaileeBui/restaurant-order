import React from 'react';
import { StatusBar } from 'react-native';
import {Container, View} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';

import menu from '../../data.json';

import ListItem from '../components/ListItem';
import CustomHeader from '../components/CustomHeader';

const Home = (props) => {
  return (
    <Container>
      <CustomHeader navigation={props.navigation}/>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FD6A02" translucent = {true}/>
      <View>
        <FlatList
          data={menu.food}
          renderItem={({ item }) => <ListItem single={item} />}
          keyExtractor={item =>  menu.food.indexOf(item).toString()}
        />
      </View>
    </Container>
  )
}

export default Home;


