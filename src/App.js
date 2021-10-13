import logo from './logo.svg';
import './App.css';
import Navbar1 from './components/Navbar1';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    
    <Router>
     <Navbar1/>
     <Switch>
       <Route path="/home" exact component={Home} > <Home></Home> </Route>
       <Route path="/contact" exact component={Contact}><Contact></Contact></Route>
  
        </Switch>
     </Router>
    
    </div>
  );
}

export default App;
