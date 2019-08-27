import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Home } from './Home'
import { Rank } from './Rank';
import '../styles/index.less'
import { Music } from './Music';

export const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/rank' component={Rank} />
      <Route exact path='/music' component={Music} />
    </Router>
  )
}
