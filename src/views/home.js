import * as React from 'react';
import Expo from 'expo';
import { View, Text, Image } from 'react-native';

import NavBar from './navbar.js';

class Home extends React.Component {
  render() {
    return (
      <View>
        <NavBar />
          <Image
            style={{ flex: 1, width: undefined, height: undefined }}
            source={(require('../images/mast-rover-head.jpg'))}
            resizeMode={'contain'}
          />
      </View>
    );
  }
}

export default Home;