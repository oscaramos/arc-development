import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './pages/Header'
import Footer from './pages/Footer'
import LandingPage from './pages/LandingPage'
import Services from './pages/Services'
import CustomSoftware from './pages/CustomSoftware'
import MobileApps from './pages/MobileApps'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/services' component={Services} />
          <Route path='/customsoftware' component={CustomSoftware} />
          <Route path='/mobileapps' component={MobileApps} />
          <Route path='/websites' component={() => <div>Websites</div>} />
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
