import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './app.scss';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Work from './pages/Work';
// import Contact from "./pages/Contact";

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main className="App-main container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
            {/* <Route path="/contact">
              <Contact />
            </Route> */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
