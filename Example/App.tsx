import {NativeBaseProvider} from 'native-base';
import React from 'react';
import BasicExample from './BasicExample';

function App() {
  return (
    <NativeBaseProvider>
      <BasicExample />
    </NativeBaseProvider>
  );
}

export default App;
