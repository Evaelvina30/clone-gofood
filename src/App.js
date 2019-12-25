import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counter from './component/counter';
import Home from './page/home';
import About from './page/about';
import CounterClass from './component/counter-class';
import Menu from './component/menu';
import DataDiri from './component/data-diri';
import Card from './component/card';
import ListMakanan from './page/list-makanan';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/counter" exact component={Counter} />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/counter-class" exact component={CounterClass} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/data-diri" exact component={DataDiri} />
        <Route path="/card" exact component={Card} />
        <Route path="/list-makanan" exact component={ListMakanan} />
      </Switch>
    </React.Fragment>
  );
}
export default App;
