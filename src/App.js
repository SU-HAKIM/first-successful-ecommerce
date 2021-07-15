import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Product from './pages/Product';
import Card from './pages/Card';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/card" component={Card} />
          <Route exact path="/product/:id" component={Product} />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}

export default App