import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './pages/Header'
import Footer from './pages/Footer'
import LandingPage from './pages/LandingPage'
import Services from './pages/Services'
import CustomSoftware from './pages/CustomSoftware'
import MobileApps from './pages/MobileApps'
import Websites from './pages/Websites'
import Revolution from './pages/Revolution'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

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
          <Route path='/websites' component={Websites} />
          <Route path='/revolution' component={Revolution} />
          <Route path='/about' component={AboutUs} />
          <Route path='/contact' component={Contact} />
          <Route path='/estimate' component={() => <div>Estimate</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
