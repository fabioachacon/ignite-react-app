import React from 'react';
import  GlobalStyle from './components/GlobalStyles';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';

//Pages
import Home from './Pages/Home';

function App() {
 
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
