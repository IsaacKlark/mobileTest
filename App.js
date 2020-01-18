import React from 'react';
import { Text, View, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Provider} from 'react-redux';
import store from './store/store';
import HomeScreen from './HomeScreen';
import PhotoScreen from './PhotoScreen';

HomeScreen.navigationOptions = {
  title: 'List of photos',
};

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Photo: PhotoScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {backgroundColor: 'lightgreen'}
  }
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={ store }>
      <AppContainer />
    </Provider>
  );
}

export default App;
