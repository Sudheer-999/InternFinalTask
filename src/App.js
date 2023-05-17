import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Registration from './components/Registration'
import Home from './components/Home'

import Sidebar from './components/Sidebar'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Sidebar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Registration} />
    </Switch>
  </BrowserRouter>
)

export default App
