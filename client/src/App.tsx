import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Toolbar } from 'primereact/toolbar';
import './App.module.scss';
import { Home } from '@pages/Home';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css'; //icons

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Toolbar start={'Центр технологий моделирования'} />
      <Switch>
        <Route path={'/'} exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
