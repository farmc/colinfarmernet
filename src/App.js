import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer.js';
import Video from './components/Video.js';
import Home from './components/Home.js';
import Software from './components/Software.js';
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <div>
         

      <Router >
        <div className="relative min-h-screen App">
        <Header />  

        <Switch>
          <Route exact path = "/">
            <Home className="overflow-hidden" />
          </Route>
          <Route path="/video">
            <Video />
          </Route>
          <Route path="/software">
            <Software />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />

        </div>

        

      </Router>
    </div>
  );
}

export default App;
