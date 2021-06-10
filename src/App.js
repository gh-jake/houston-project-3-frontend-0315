// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Contact from './containers/Contact'
import Contacts from './containers/Contacts'
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path = "/" component={Home}/>
          <Route exact path = "/contacts" component={Contacts}/>
          <Route path = "/contacts/:id" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
