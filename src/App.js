import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import Services from './components/Services'
import CustomSoftware from './components/CustomSoftware'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/services' component={Services} />
          <Route path='/customsoftware' component={CustomSoftware} />
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
