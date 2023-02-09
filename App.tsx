import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import MainRoutes from './app/routers/MainRoutes';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainRoutes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
