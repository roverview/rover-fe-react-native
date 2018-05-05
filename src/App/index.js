import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, NativeModules } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';

import { COLOR, ThemeProvider, Toolbar } from 'react-native-material-ui';

const uiTheme = {
  palette: {
      primaryColor: COLOR.black,
  },
  toolbar: {
      container: {
          height: 100,
      },
  },
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View>
          <Toolbar
            leftElement="menu"
          />

          {/* <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: '50%', height: 50, backgroundColor: '#000'}} />
            <View style={{width: '50%', height: 50, backgroundColor: '#000'}} />
          </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Image 
              style={{ height: 20 }} 
              source={require('../assets/mast-rover-head.jpg')} 
            />; */}

          {/* </View> */}
        </View>
      </ThemeProvider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
