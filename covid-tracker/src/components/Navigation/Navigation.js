import React from 'react'
import './Navigation.css'

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import WorldDataPage from '../Pages/WorldDataPage'
import IndiaDtaPage from '../Pages/IndiaDataPage'
import WHOGuidelenes from '../Pages/WHOGuidelinesPage'
import NewsPage from '../Pages/NewsPage'
//import GlobeViewPage from '../Pages/GlobeViewPage'
import NoMatch from '../Pages/NoMatch'
import image from '../../assets/logo.png'
import NewsFetch from '../news';

function Navigation() {
    return (
      <div >
      <input type="checkbox" id="check"/>
      <label htmlFor="check" style={{display: 'flex',justifyContent: 'space-around', flexDirection: 'column'}}>
        <i className="fa fa-bars" id="btn"></i>
        <i className="fa fa-times" id="cancel"></i>
      </label>
    <div className="sidebar">
      <header><img
              src={image}
              alt="COVID-19"
              style={{ height: 30, width: 30, position: "relative" }}
            /> Covid-19 Tracker</header>
      <ul>
      <li><a href="/Covid-Tracker/"><i className="fa fa-home"></i>Home</a></li>
      <li><a href="/Covid-Tracker/india"><i className="fa fa-map-pin"></i>IndiaLive</a></li>
      {/* <li><a href="/globe"><i className="fa fa-globe"></i>GlobeView</a></li> */}
      <li><a href="/Covid-Tracker/guidelines"><i className="fa fa-info"></i> WHO</a></li>
      {/* <li><a href="/news"><i className="fa fa-newspaper-o"></i>News</a></li> */}
      <li><a href="/Covid-Tracker/news2"><i className="fa fa-newspaper-o"></i>News</a></li>
      
  
      </ul>
    </div>
  <section>
  <Router>
      <Switch>
               
          <Route exact="true" path="/Covid-Tracker/" component={WorldDataPage} />
          <Route exact="true" path="/Covid-Tracker/india" component={IndiaDtaPage} />
          {/* <Route exact="true" path="/globe" component={GlobeViewPage} /> */}
          <Route exact="true" path="/Covid-Tracker/guidelines" component={WHOGuidelenes} />
          <Route exact="true" path="/news" component={NewsPage} />
          <Route  path="/Covid-Tracker/news2" component={NewsFetch} />
          <Route   component={NoMatch} />
        
        </Switch>
      </Router>
  </section>


  </div>
    )
  }
export default Navigation  