import React from 'react';
import {SafeAreaView} from 'react-native';
import Navigator from './navigation/Navigator';
import SocketProvider from './providers/socketProvider';

const App = () => {
  return (
    <SocketProvider>
      <SafeAreaView style={{flex: 1}}>
        <Navigator />
      </SafeAreaView>
    </SocketProvider>
  );
};

export default App;
