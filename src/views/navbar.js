import * as React from 'react';
import Expo from 'expo';
import { View, Text, Image } from 'react-native';

import { Header } from 'react-native-elements';

class NavBar extends React.Component {
  render() {
    return (
    <Header 
      leftComponent={{ text: 'RoverView', style: { color: '#fff' } }}
      rightComponent={{ icon: 'menu', color: '#fff' }} 
    />
    )
  }
}