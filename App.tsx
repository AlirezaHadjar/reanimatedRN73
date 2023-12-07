import React from 'react';
import {useSharedValue} from 'react-native-reanimated';

const Context = React.createContext({});

const Provider = ({children}: {children: React.ReactNode}) => {
  const value = useSharedValue(1);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

const App: React.FC = ({}) => {
  return <Provider />;
};

export default App;
