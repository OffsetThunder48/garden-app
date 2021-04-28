import './App.css';
import React from 'react'
import { NavLink, Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home } from './homepage/home'
import { Login } from './login/login'
import Blog from './blog/blog'
import Services from './service/service'
import { Footer } from './footer/footer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div className="jumbotron jumbotron-fluid">
          <h3 className="display-4">Garden City</h3>
          <p className="lead">Welcome to the Garden City</p>
        </div>
        <nav className="navbar-expand-md">
            <ul className="navbar-nav navbar nav-fill w-100">
              <NavLink activeClassName="active" className="style nav-item d-flex justify-content-center align-items-center" to="home">Home</NavLink>
              <NavLink activeClassName="active" className="style nav-item d-flex justify-content-center align-items-center" to="blog">Blog</NavLink>
              <NavLink activeClassName="active" className="style nav-item d-flex justify-content-center align-items-center" to="services">Services</NavLink>
              <NavLink activeClassName="active" className="style nav-item d-flex justify-content-center align-items-center" to="login">Login</NavLink>
            </ul>
          </nav>
          <div className="container height d-flex align-items-center justify-content-center">
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
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/services">
                <Services />
              </Route>
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
