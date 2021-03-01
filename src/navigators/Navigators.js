import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../views/Home';
import SideDish from '../views/SideDish';
import Drinks from '../views/Drinks';
import Review from '../views/Review';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Main Dish'
      }
    },
    SideDish: {
      screen: SideDish,
      navigationOptions: {
        title: 'Side Dish'
      }
    },
    Drinks,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
    }),
    tabBarOptions: {
      activeTintColor: '#FD6A02',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 20,
        paddingBottom: 15,
      },
    },
  })

const StackNavigator = createStackNavigator(
  // RouteConfigs
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        headerShown: false, // this will hide the header
      },
    },
    SideDish: {
      screen: SideDish,
      navigationOptions: {
        headerShown: false,
      }
    },

    Drinks: {
      screen: Drinks,
      navigationOptions: {
        headerShown: false,
      }
    },
    Review: {
      screen: Review,
      navigationOptions: {
        headerShown: false,
      }
    },
  },
);


export default createAppContainer(StackNavigator);
