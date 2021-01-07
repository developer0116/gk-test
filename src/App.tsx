import React from 'react'
import './App.less'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Home, Post } from 'pages'
interface IProps {
  history: any
}

function App({ history }: IProps) {
  return (
    <div className='App'>
      <ConnectedRouter history={history}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/r/popular' />
            </Route>
            <Route path='/r/:reddit' component={Home} exact />
            <Route
              path='/r/:reddit/comments/:id/:comment'
              component={Post}
              exact
            />
          </Switch>
        </Router>
      </ConnectedRouter>
    </div>
  )
}

export default App
