import React from 'react';
import StackNavigator from './src/navigators/Navigators';
import { FoodProvider } from './src/context/FoodContext';

const App = () => {
  return (
    <FoodProvider>
      <StackNavigator></StackNavigator>
    </FoodProvider>
  )
}

export default App;
