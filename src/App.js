import React, { createContext, useState }  from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Book from './components/Book/Book';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import back from './images/b.jpg';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <p>Name: {loggedInUser.name}</p>
      <Router>
        <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/book/:vehicleType">
              <Book />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
            <NotFound></NotFound>
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
