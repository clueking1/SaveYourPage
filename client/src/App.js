import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './pages/home'
import Collection from './pages/userPage'

function App() {

  return (
        <Router>
          <div className="allDiv">
            <Route path='/' exact component={Home} />
            <Route path='/collection' exact component={Collection} />
          </div>
        </Router>
  )
}

export default App
