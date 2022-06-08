import React, {useEffect} from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider"

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run ince when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if(authUser){
        // The user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else{
        // The user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<div><Header /><Home /></div>}/>
          <Route exact path="/checkout" element={<div><Header /><Checkout /></div>}/>
          <Route exact path="/login" element={<Login />}/>
        </Routes>
      </div>
      </Router>
     
  );
}

export default App;
