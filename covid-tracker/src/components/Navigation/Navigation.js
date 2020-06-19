import React from 'react'
import './Navigation.css'

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import WorldDataPage from '../Pages/WorldDataPage'
import IndiaDtaPage from '../Pages/IndiaDataPage'
import WHOGuidelenes from '../Pages/WHOGuidelinesPage'
import NoMatch from '../Pages/NoMatch'
function Navigation() {
    return (
      <div>
      <input type="checkbox" id="check"/>
      <label for="check">
        <i class="fa fa-bars" id="btn"></i>
        <i class="fa fa-times" id="cancel"></i>
      </label>
    <div class="sidebar">
      <header>Covid19 Tracker</header>
      <ul>
      <li><a href="/world"><i class="fa fa-globe"></i>WORLD</a></li>
      <li><a href="/india"><i class="fa fa-home"></i>INDIA</a></li>
      
      <li><a href="/guidelines"><i class="fa fa-info"></i>WHO</a></li>
      
  
      </ul>
    </div>
  <section>
  <Router>
      <Switch>
               
          <Route exact="true" path="/world" component={WorldDataPage} />
          <Route exact="true" path="/india" component={IndiaDtaPage} />
          <Route exact="true" path="/guidelines" component={WHOGuidelenes} />
          <Route   component={NoMatch} />
        
        </Switch>
      </Router>
  </section>


  </div>
    )
  }
export default Navigation  