import React from 'react';

import { Router } from '../components/router/Router';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Router} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
