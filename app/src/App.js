import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AddEnquiry from './AddEnquiry'
import ListEnquiry from './ListEnquiry'

const App = () => (
  <Router>
    <div>
        <ul className="nav nav-tabs">
          <li><Link to="/">Make Enquiry</Link></li>
          <li><Link to="/list">List Enquiries</Link></li>
        </ul>

      <Route exact path="/" component={AddEnquiry}/>
      <Route path="/list" component={ListEnquiry}/>
    </div>
  </Router>
)

export default App

