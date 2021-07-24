import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';


function App() {
  return (
    <div >
     <Router>
       <Switch>
         <Route path = "/home">
           <Home></Home>
         </Route>
         <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
