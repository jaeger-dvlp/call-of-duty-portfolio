/* eslint-disable no-unused-expressions */
import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loader from './Components/Loader'
import Homepage from './Pages/Homepage'
import Information from './Pages/Information'

function App() {
  return (
    <>
      <Router>
        <Loader />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/operator-information" component={Information} />
        </Switch>
      </Router>
    </>
  )
}

export default App
