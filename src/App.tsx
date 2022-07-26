import React, { useEffect } from 'react';
import './App.css';
import Header_2 from './components/header'
import Footer from './components/footer';
import Homepage from './pages/homepage';
import Marketplace from './pages/marketplace';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Policy from './components/policy'
import AuthFail from './pages/authfail'

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header_2/>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/info/policy">
          <Policy />
        </Route>
        <Route path="/marketplace">
          <Marketplace />
        </Route>
        <Route path="/fail">
          <AuthFail />
        </Route>
      </Switch>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
