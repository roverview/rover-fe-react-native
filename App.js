import * as React from 'react';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

import Home from './src/components/Home/home.js';

// const SCREEN_WIDTH = Dimensions.get('window').width;

const uiTheme = {
  palette: {
      primaryColor: COLOR.green500,
      accentColor: COLOR.pink500,
  },
};

const MainRoot = StackNavigator(
  {
    Home: {
      screen: Home,
    },  
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
  }
);

export default class AppContainer extends React.Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <MainRoot />
      </ThemeProvider>
    );
  }
}

Expo.registerRootComponent(AppContainer);