import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import DrinksSearch from './pages/DrinksSearch';
import Drink from './pages/Drink';
import SearchType from './pages/SearchType';

import GlobalStyles from './styles/global';

export default function Routes() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/drinks/:type/type/search" component={SearchType} />
        <Route path="/drinks/:drinkName/search" component={DrinksSearch} />
        <Route path="/drinks/:idDrink" component={Drink} />
      </Switch>
    </BrowserRouter>
  );
}
