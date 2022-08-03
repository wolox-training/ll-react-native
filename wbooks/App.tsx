import * as React from 'react';
import Config from 'react-native-config';

import App from './src/app';

const secretVariable = Config.API_URL;
const secretKey = Config.GOOGLE_MAPS_API_KEY;

export default function index() {
  return <App />;
}
