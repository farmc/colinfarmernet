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
              <div className="relative min-h-screen App bg-gray-700">
                <Video />
              </div>
            </Route>
            <Route path="/software">
              <div className="relative min-h-screen App bg-gray-700">
                <Software />
              </div>
            </Route>
            <Route path="/about">
              <div className="relative min-h-screen App bg-gray-700">
                <About />
              </div>
            </Route>
          </Switch>
        
        

        <Footer />

        </div>

        

      </Router>
    </div>
  );
}

export default App;
