import React, { useState } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import masterData from './catalog';
import Home from './Home';
import Category from './category';
import Header from './Header';
import history from './history';

function App() {
  const [branch, setBranch] = useState('');

  const selectBranch = (branch) => {
    setBranch(branch);
  }

  return (
    <>
      <Header selectedBranch={selectBranch} dropDownMenu={masterData.data.locations} />
      <Router history={history}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/category" component={() => <Category selectedBranch={branch} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
