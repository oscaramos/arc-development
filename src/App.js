import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <div style={{ height: "50em" }}>Home</div>} />
          <Route path='/services' component={() => <div>Services</div>} />
          <Route path='/customsoftware' component={() => <div>Custom software</div>} />
          <Route path='/mobileapps' component={() => <div>Mobile apps</div>} />
          <Route path='/revolution' component={() => <div>Revolution</div>} />
          <Route path='/about' component={() => <div>About</div>} />
          <Route path='/contact' component={() => <div>Contact</div>} />
          <Route path='/estimate' component={() => <div>Estimate</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
