import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import Landingpage from '../pages/landingpage'
import Services from '../pages/services'
import Customsoftware from '../pages/customsoftware'
import Mobileapps from '../pages/mobileapps'
import Websites from '../pages/websites'
import Revolution from '../pages/revolution'
import About from '../pages/about'
import Contact from '../pages/contact'
import Estimate from '../pages/estimate'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Landingpage} />
          <Route path='/services' component={Services} />
          <Route path='/customsoftware' component={Customsoftware} />
          <Route path='/mobileapps' component={Mobileapps} />
          <Route path='/websites' component={Websites} />
          <Route path='/revolution' component={Revolution} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/estimate' component={Estimate} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
