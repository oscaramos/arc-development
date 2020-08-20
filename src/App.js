import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>} />
          <Route path='/services' component={() => <div>Services</div>} />
          <Route path='/customsoftware' component={() => <div>Custom software</div>} />
          <Route path='/mobileapps' component={() => <div>Mobile apps</div>} />
          <Route path='/revolution' component={() => <div>Revolution</div>} />
          <Route path='/about' component={() => <div>About</div>} />
          <Route path='/contact' component={() => <div>Contact</div>} />
          <Route path='/estimate' component={() => <div>Estimate</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
