import React from 'react';

import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/whatever">News Feed</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/whatever">
              <h1>Blog</h1>
              <Blog />
            </Route>
            <Route path="/about">
              <h1>About</h1>
              <About />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
