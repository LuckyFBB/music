import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import {Home} from './Home'
import '../styles/index.less'

export const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
    </Router>
  )
}
