import './App.css';

import Home from './components/Home'
import Nav from './components/Nav'
import Aulas from './components/Aulas'
import Sobre from './components/Sobre'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <Nav></Nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/aulas">
            <Aulas />
          </Route>

          <Route path="/sobre">
            <Sobre />
          </Route>

          <Route path="*">
            <div className="page">Essa rota não existe</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
