import React from 'react';
import './css/styles.css';
import Navbar from './components/header';
import Items from './Screens/items';
import Cart from './Screens/cart';
import Item from './Screens/item';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
    <div className="container">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Items}/>
        <Route exact path="/item/:id" component={Item}/>
        <Route exact path="/cart" component={Cart}/>
      </Switch>
      </BrowserRouter>      
    </div>
    )
  }
}

export default App;