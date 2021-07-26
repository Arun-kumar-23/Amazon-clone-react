import React,{useEffect} from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Payment from './Payment'
import Orders from './Orders'
import {loadStripe} from "@stripe/stripe-js"
import{Elements} from "@stripe/react-stripe-js"

const promise = loadStripe(
 "pk_test_51JH1ZfSD0gvhhDzXc4yG2A3d4Kdia5YUdPML8YdjpB0JATD9yBWCiNYt5hgO1J3S0kbQLtiHoEff2SlcXChFIXP700RzCoPxss"
)

function App() {
  const[{}, dispatch] = useStateValue()

  useEffect(()=>{

    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>>', authUser)

      if(authUser){
        
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else{

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
    })
  },[])

  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/orders">
      <Header />
         <Orders />
        </Route>
      <Route path="/login">
         <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
