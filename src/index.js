import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './index.css';

import MainPage from './pages/main/index'
import FinishPage from './pages/finish/index'

export const AppContext = React.createContext({})


const App = () => {
  const [context, setContext] = React.useState({
    answers: {},
  })

  return (
    <AppContext.Provider
      value={{
        context,
        setContext
      }}
    >
      <Router>
        <div className="app">
          <Switch>
            <Route path="/finish">
              <FinishPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  )
}

ReactDOM.render((
  <App />
), document.getElementById("root"))






