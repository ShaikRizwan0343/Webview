
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { RootNavigation } from './src/navigation/rootNavigation/RootNavigation';
import { Provider } from 'react-redux'
import { store } from './src/redux/store/Store';

const App = () => {
  return (
    <Provider store={store} children={undefined}>
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
    </Provider>
  )
}

export default App