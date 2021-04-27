import './App.css';

import Home from './components/Home'
import Nav from './components/Nav'
import Aulas from './components/Aulas'
import Sobre from './components/Sobre'
import Aula from './components/Aula'
import Assistir from './components/Assistir'
import PrivateRoute from './components/PrivateRoute'
import Denied from './components/Denied'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import loginReducer from './reducers/loginReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(loginReducer)

function App() {
  return (
    <Provider store={store}>
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

            <PrivateRoute path="/aulas">
              <Aulas />
            </PrivateRoute>

            <Route path="/sobre">
              <Sobre />
            </Route>

            <Route path="/assistir">
              <Assistir />
            </Route>

            <Route path="/negado">
              <Denied />
            </Route>

            <Route path="*">
              <div className="page">Essa rota não existe</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
