import Nav from './Nav';
import About from './About';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbottom from './Navbottom';


function App() {
  return (
    <div >
    <Router>
    
      <Nav/><br/>
      
      <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
      </Switch><br/>
      <Navbottom/>
    </Router>    
    </div>
  );
}

export default App;
