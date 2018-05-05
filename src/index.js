import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import App from './App/index.js';

const Root = () => (
  <App />
);

export default Root;

AppRegistry.registerComponent('roverview', () => Root);