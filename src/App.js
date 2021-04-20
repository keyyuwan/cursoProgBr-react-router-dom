import './App.css';

import Home from './components/Home'
import Nav from './components/Nav'
import Aulas from './components/Aulas'
import Sobre from './components/Sobre'
import Aula from './components/Aula'
import Assistir from './components/Assistir'

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

          <Route exact path="/aulas/:id">
            <Aula />
          </Route>

          <Route path="/aulas">
            <Aulas />
          </Route>

          <Route path="/sobre">
            <Sobre />
          </Route>

          <Route path="/assistir">
            <Assistir />
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
