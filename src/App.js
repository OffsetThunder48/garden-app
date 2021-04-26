import './App.css';
import { NavLink, Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home } from './homepage/home'
import { Login } from './login/login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Garden City</h1>
          <p className="lead">Welcome to the Garden City</p>
          </div>
      </div>
      <nav className="navbar-expand-md">
          <ul className="navbar-nav navbar nav-fill w-100">
            <NavLink className="style nav-item d-flex justify-content-center align-items-center" to="home">Home</NavLink>
            <NavLink className="style nav-item d-flex justify-content-center align-items-center" to="login">Login</NavLink>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
