import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './pages/home'

function App() {

  return (
        <Router>
          <div>
            <Route path='/' exact component={Home} />
          </div>
        </Router>
  )
}

export default App
