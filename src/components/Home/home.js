import * as React from 'react';
import Expo from 'expo';
import { View, Text } from 'react-native';

import { Toolbar } from 'react-native-material-ui';

class Home extends React.Component {
  render() {
    return (
      <View>
        <Toolbar />
        <Text>Hello</Text>
      </View>
    );
  }
}

export default (Home);