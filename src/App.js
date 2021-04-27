import './App.css';
import { NavLink, Route, BrowserRouter, Switch } from 'react-router-dom';

import { Home } from './homepage/home'
import { Login } from './login/login'
import { Blog } from './blog/blog'
import { Services } from './services/services'
import { Footer } from './footer/footer'
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4">Garden City</h1>
        <p className="lead">Welcome to the Garden City</p>
      </div>
      <nav className="navbar-expand-md">
          <ul className="navbar-nav navbar nav-fill w-100">
            <NavLink className="style nav-item d-flex justify-content-center align-items-center" to="home">Home</NavLink>
            <NavLink className="style nav-item d-flex justify-content-center align-items-center" to="blog">Blog</NavLink>
            <NavLink className="style nav-item d-flex justify-content-center align-items-center" to="services">Services</NavLink>
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
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
