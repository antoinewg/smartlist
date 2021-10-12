import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

const App = () => (
  <SafeAreaView>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text testID="heading">Welcome to SmartList!</Text>
    </ScrollView>
  </SafeAreaView>
);

export default App;
