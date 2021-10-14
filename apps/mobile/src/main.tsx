import { AppRegistry } from 'react-native';
import App from './app/App';

// Not used in the app but used to build the pods
import analytics from '@react-native-firebase/analytics';
import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';
import dynamic from '@react-native-firebase/dynamic-links';
import messaging from '@react-native-firebase/messaging';
import perf from '@react-native-firebase/perf';
import remote from '@react-native-firebase/remote-config';
import Config from 'react-native-config';

AppRegistry.registerComponent('main', () => App);
