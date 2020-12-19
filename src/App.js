import React from 'react'
import Home from './components/Home/home'
import Result from './components/Result/Result'
import { BrowserRouter , Link, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/result" component={Result} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
