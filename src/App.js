import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deal from './components/Deal/Deal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Checkout from './components/Checkout/Checkout';
import EditProduct from './components/EditProduct/EditProduct';
import AddProduct from './components/AddProduct/AddProduct';
import Footer from './components/Footer/Footer';

export const stickerContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <stickerContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="sticker">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>         
          <Route path="/login">
              <Login />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/manageProduct">
            <ManageProduct />
          </Route> 
          <Route path="/addProduct">
            <AddProduct />
          </Route>       
          <Route path="/editProduct">
            <EditProduct />
          </Route>       
          <Route path="/deal">
            <Deal />
          </Route>
        </Switch>
        <Footer></Footer>
    </Router>
    </div>
    </stickerContext.Provider>
  );
}

export default App;
