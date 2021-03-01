import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import {Container, View} from 'native-base';
import { StatusBar } from 'react-native';

import menu from '../../data.json';

import ListItem from '../components/ListItem';
import CustomHeader from '../components/CustomHeader';

const SideDish = (props) => {
  return (
    <Container>
      <CustomHeader navigation={props.navigation} />
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#FD6A02" translucent = {true}/>
      <View>
        <FlatList
          data={menu.sidedish}
          renderItem={({ item }) => <ListItem single={item} />}
          keyExtractor={item =>  menu.sidedish.indexOf(item).toString()}
        />
      </View>
    </Container>
  )
}

export default SideDish;

