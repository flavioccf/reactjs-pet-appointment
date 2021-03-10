import React, { useEffect, useState } from 'react';

export const AppContext = React.createContext({
  test: false
});

function App() {
  return (
    <AppContext.Provider value={{test: true}}>
      <h1>Hello World</h1>
    </AppContext.Provider>
  );
}

export default App;
