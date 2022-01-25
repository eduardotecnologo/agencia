import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

import './assets/css/base/base.css';
import Home from './pages/Home';
import About from './pages/About'; 
import Pagina404 from './pages/Page404';
import Cabecalho from './components/Cabecalho';
import Post from './pages/Post'
import Categoria from './pages/Categoria'

// Blog

function App() {
 
  return (
    <Router>
      <Cabecalho />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/sobre">
        <About />
      </Route>

      <Route path='/categoria/:id'>
          <Categoria />
        </Route>

      <Route path='/posts/:id'>
        <Post />
      </Route>

      <Route>
        <Pagina404 />
      </Route>

      </Switch>
    </Router>
  )
}

export default App