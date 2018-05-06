import * as React from 'react';
import Expo from 'expo';
import { View, Text, Image } from 'react-native';

import { Header, Card } from 'react-native-elements';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Header 
          leftComponent={{ text: 'RoverView', color: '#fff' }}
          rightComponent={{ icon: 'menu', color: '#fff' }} />
        <Image
          source={(require('../images/mast-rover-head.jpg'))}
        />
      </View>
    );
  }
}

export default Home;