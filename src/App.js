import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import Card from './component/card';
import ListMakanan from './page/list-makanan';
import ListMakananFastFood from './page/list-makanan-fastfood';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/card" exact component={Card} />
        <Route path="/list-makanan" exact component={ListMakanan} />
        <Route
          path="/list-makanan-fastfood"
          exact
          component={ListMakananFastFood}
        />
      </Switch>
    </React.Fragment>
  );
}
export default App;
