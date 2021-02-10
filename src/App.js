import React from 'react'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import AddTask from './component/pages/AddTask'
import TaskList from './component/pages/TaskList'

export default function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={TaskList} />
          <Route exact path="/add" component={AddTask} />
      </Switch>
    </Router>
  )
}
