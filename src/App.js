import React from 'react';
import axios from 'axios';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
    //fetch('http://localhost:3000/db.json') //можно использовать как axios, так и стандарт
    // .then((resp) => resp.json())
    //.then((json) => {
    // setPizzas(json.pizzas);
    //});
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas} />}></Route>
        <Route exact path="/cart.html" component={Cart}></Route>
      </div>
    </div>
  );
}

export default App;
